<?php

use Illuminate\Database\Seeder;

class PlanoSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("planos")->insert([
            [
                "nome"       => "Free",
                "mensalidade"       => "0"
            ],
            [
                "nome"       => "Basic",
                "mensalidade"       => "100.00"
            ],
            [
                "nome"       => "Plus",
                "mensalidade"       => "187.00"
            ]
        ]);
    }
}
