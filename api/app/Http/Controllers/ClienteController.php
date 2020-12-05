<?php

namespace App\Http\Controllers;

use App\ErrorsApi\ErrorsApi;
use App\Functions\Functions;
use App\Models\City;
use App\Models\Cliente;
use App\Models\Plano;
use App\Models\State;
use Illuminate\Http\Request; 

class ClienteController extends Controller
{

    public function __construct(Cliente $cliente) 
    {
        $this->cliente = $cliente;
    }

    public function index()
    {
        $data = $this->cliente->dataCliente();
        
        foreach ($data as $key => $value) {
            $data[$key]['plano'] = $data->plano = Functions::replaceData($data[$key]['plano']);
            $np = [];
            // pega os planos
            foreach($data[$key]['plano'] as $j){
                $np[]= Plano::where('id', $j)->select('id','nome')->get();
            }
            $data[$key]['plano']  =  $np;
        }

        return  response()->json($data);
    }

    public function show($id)
    {
        $data = $this->cliente->find($id);
        $data->plano = Functions::replaceData($data->plano);

        if(!$data)
            return response()->json(ErrorsApi::msgError('Registro não encontrado', 4040), 404);
        return response()->json(['data' => $data]);
    }


    public function store(Request $request)
    {
        try {
            
            $data = $request->all();

            // valida se o email ja foi cadastrado
            if($this->cliente->validaEmail($data['email'])){
                return response()->json(['msg' => 'E-mail já cadastrado. Insira um novo e-mail'], 201);
            }

          
            // cria novo registro
            $data['plano'] = implode(",", $data['plano']);
            $idx = $this->cliente->create($data);
            
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
            
            $data = $request->all();

            $dataCliente = $this->cliente->find($id);
            
            // valida se o email ja foi cadastrado
            if($this->cliente->validaEmail($data['email'], $id)){
                return response()->json(['msg' => 'E-mail já cadastrado. Insira um novo e-mail'], 200);
            }

            // atualiza registro
            $idx = $dataCliente->update($data);
        
            return response()->json(['msg' => 'Registro atualizado', 'data' => $idx], 200);

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
            
            // verifica se o registro existe
            $data = $this->cliente->find($id);
            if(!$data)
                return response()->json(['data' => ['msg' => 'Registro não encontrado']], 404);
                // se existir deleta
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
