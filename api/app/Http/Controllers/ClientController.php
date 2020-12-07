<?php

namespace App\Http\Controllers;

use App\ErrorsApi\ErrorsApi;
use App\Models\City;
use App\Models\Client;
use App\Models\ClientPlan;
use App\Models\State;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientController extends Controller
{

    public function __construct(Client $client) 
    {
        $this->client = $client;
    }

    public function index()
    {
        
        $client = $this->client->with(['plans','city:name,id','state'])->get();
       
        foreach ($client as $key => $value) {
            $client[$key]['free'] = 0;
            foreach($client[$key]['plans'] as $plan){
                // cria indice indicando clientes com o plano free
                if($plan->name == 'Free') 
                    $client[$key]['free'] = 1; 
            }
            
        }
        return $client;
    }

    public function show($id)
    { 
        $client = $this->client->with('plans')->get()->find($id); 

        if(!$client)
            return response()->json(ErrorsApi::msgError('Registro não encontrado', 4040), 404);
        return response()->json(['data' => $client]);
    }


    public function store(Request $request)
    {
        try {
            
            $data = $request->all();
            
            // valida se o email ja foi cadastrado
            if($this->client->validaEmail($data['email'])){
                return response()->json(['msg' => 'E-mail já cadastrado. Insira um novo e-mail', 'code' => 201], 201);
            }

          
            // cria novo registro
            
            $idx = $this->client->create($data);
            if ($idx) 
            {    
                foreach($data['plan'] as $p) 
                {
                    $join = new ClientPlan();
                    $join->client_id   = $idx->id;
                    $join->plan_id     = $p;
                    $join->save(); 
                }
            }

            return response()->json(['msg' => 'Registro inserido', 'data' => $idx], 200);

        } catch (\Exception $e) {
            
            if(config('app.debug')){
                return response()->json(ErrorsApi::msgError($e->getMessage(), 5050), 500);
            }
            return response()->json(ErrorsApi::msgError('Houve um erro a operação. Tente mais tarde.', 5050), 500);

        }
    }


    public function update(Request $request, $id)
    {
        try {
            //DB::enableQueryLog();
            $data = $request->all();

            $dataClient = $this->client->find($id);
            if(!$dataClient){
                return response()->json(['msg' => 'Registron não encontrado','code' => 404], 404);
            }
            // valida se o email ja foi cadastrado
            if($this->client->validaEmail($data['email'], $id)){
                return response()->json(['msg' => 'E-mail já cadastrado. Insira um novo e-mail','code' => 201], 200);
            }
             
            // atualiza registro
            $resp = $dataClient->update($data);
            
            if ($resp) 
            {   //insere os planos
                
                $d = new ClientPlan();
                $d->where('client_id', $id)->delete();
                foreach($data['plan'] as $p)
                {
                    $join = new ClientPlan();
                    $join->client_id   = $id;
                    $join->plan_id     = $p;
                    $join->save(); 
                }
            }
            return response()->json(['msg' => 'Registro atualizado', 'data' => $resp,'code' => 200], 200);

        } catch (\Exception $e) {
            
            if(config('app.debug')){
                return response()->json(ErrorsApi::msgError($e->getMessage(), 5050), 500);
            }
            return response()->json(ErrorsApi::msgError('Houve um erro a operação. Tente mais tarde.', 5050), 500);

        }
    }


    public function delete($id)
    {
        try {
           DB::enableQueryLog();
            // verifica se o registro existe
            $data = $this->client->with('state')->find($id);
    
            if(!$data)
                return response()->json(['data' => ['msg' => 'Registro não encontrado']], 404);
            
            $planexist = ClientPlan::where('client_id', $id)->where('plan_id', 1)->get()->count();
            
            // varifica se o registro tem
            if($planexist && $data->state->abbr == 'SP')
                return response()->json(['msg' => 'Cliente que possui o plano Free não pode ser excluido', 'code' => 403], 403);
                // se existir deleta
            echo 'quis excluir';
            die;
            $d = new ClientPlan();
            $d->where('client_id', $id)->delete();
            $data->delete();
            
            return response()->json(['data' => ['msg' => 'Registro excluido']], 200);

        } catch (\Exception $e) {
            
            if(config('app.debug')){
                return response()->json(ErrorsApi::msgError($e->getMessage(), 5050));
            }
            return response()->json(ErrorsApi::msgError('Houve um erro a operação. Tente mais tarde.', 5050), 500);

        }
    }

    public function states()
    {
        $data = State::select('id','name', 'abbr')->get();;
        return  response()->json($data);
    }

    public function cities($id)
    {
        $data = City::where('state_id', $id)->select('id','name')->get();
        return  response()->json($data);
    }

}
