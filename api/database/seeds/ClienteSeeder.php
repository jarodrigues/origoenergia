<?php

use Illuminate\Database\Seeder;

class ClienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = date("Y-m-d H:i:s");
        DB::table("clientes")->insert([
            [
                "nome"          => "Claudianus Boast",
                "email"         => "cboast0@fastcompany.com",
                "telefone"      => "(19) 957645371",
                "estado"        => "35",
                "cidade"        => "3503208",
                "dt_nascimento" => "07/06/1993",
                "plano"         => "2,1",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Loni Jennions",
                "email"         => "ljennions1@va.gov ",
                "telefone"      => "(19) 905613161",
                "estado"        => "35",
                "cidade"        => "3526902",
                "dt_nascimento" => "09/05/1985",
                "plano"         => "2,1",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Margi Gilhouley",
                "email"         => "mgilhouley2@telegraph.co.uk",
                "telefone"      => "(19) 966290104",
                "estado"        => "35",
                "cidade"        => "3503208",
                "dt_nascimento" => "13/09/1984",
                "plano"         => "2,1",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Lexy Sprulls",
                "email"         => "lsprulls3@moonfruit.com",
                "telefone"      => "(19) 976121601",
                "estado"        => "35",
                "cidade"        => "3543907",
                "dt_nascimento" => "19/10/1999",
                "plano"         => "2,1",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Marie Shatliff",
                "email"         => "mshatliff4@cbslocal.com",
                "telefone"      => "(19) 991376354",
                "estado"        => "35",
                "cidade"        => "3543907",
                "dt_nascimento" => "20/07/1990",
                "plano"         => "2",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Graig Mouncey",
                "email"         => "gmouncey5@so-net.ne.jp",
                "telefone"      => "(19) 941806149",
                "estado"        => "35",
                "cidade"        => "3503208",
                "dt_nascimento" => "27/03/1990",
                "plano"         => "2,1,3",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Laurice Liger",
                "email"         => "r lliger0@php.net",
                "telefone"      => "(35) 971740954",
                "estado"        => "31",
                "cidade"        => "3104304",
                "dt_nascimento" => "25/10/1992",
                "plano"         => "1",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Kendrick Sooper",
                "email"         => "ksooper1@slate.com",
                "telefone"      => "(31) 944324086",
                "estado"        => "31",
                "cidade"        => "3106200",
                "dt_nascimento" => "02/06/1981",
                "plano"         => "3",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Gordon Levington",
                "email"         => "glevington2@hpost.com ",
                "telefone"      => "(31) 922405868",
                "estado"        => "31",
                "cidade"        => "3106200",
                "dt_nascimento" => "25/11/1993",
                "plano"         => "2,1,3",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Noam Scolland",
                "email"         => "nscolland3@mozilla.org",
                "telefone"      => "(35) 996817669",
                "estado"        => "31",
                "cidade"        => "3104304",
                "dt_nascimento" => "31/12/1999",
                "plano"         => "2,1",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Lindon Skehens",
                "email"         => "lskehens4@npr.org",
                "telefone"      => "(35) 967671104",
                "estado"        => "31",
                "cidade"        => "3104304",
                "dt_nascimento" => "10/01/1985",
                "plano"         => "2",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Kimbra Rase",
                "email"         => "krase5@topsy.com",
                "telefone"      => "(35) 999428030",
                "estado"        => "31",
                "cidade"        => "3104304",
                "dt_nascimento" => "05/05/1999",
                "plano"         => "2,1",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Lorenzo Fisk",
                "email"         => "lfisk6@businessweek.com",
                "telefone"      => "(31) 912695467",
                "estado"        => "31",
                "cidade"        => "3106200",
                "dt_nascimento" => "22/12/1985",
                "plano"         => "2,1",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Bourke Flavelle",
                "email"         => "bflavelle7@fc2.com",
                "telefone"      => "(35) 959386145",
                "estado"        => "31",
                "cidade"        => "3133600",
                "dt_nascimento" => "10/04/1984",
                "plano"         => "2,1",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Curran McSharry",
                "email"         => "cmcsharry8@webeden.co.uk",
                "telefone"      => "(35) 902916131",
                "estado"        => "31",
                "cidade"        => "3133600",
                "dt_nascimento" => "15/01/1983",
                "plano"         => "2,1",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Aveline Dowtry",
                "email"         => "adowtry9@miibeian.gov.cn",
                "telefone"      => "(31) 945227500",
                "estado"        => "31",
                "cidade"        => "3106200",
                "dt_nascimento" => "23/12/1994",
                "plano"         => "2,1",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "John Sebastian",
                "email"         => "jsebastiana@cbslocal.com",
                "telefone"      => "(31) 907366740",
                "estado"        => "31",
                "cidade"        => "3106200",
                "dt_nascimento" => "06/04/1998",
                "plano"         => "2,1",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "nome"          => "Reynolds Greenan",
                "email"         => "rgreenanb@bloomberg.com",
                "telefone"      => "(35) 923551410",
                "estado"        => "31",
                "cidade"        => "3133600",
                "dt_nascimento" => "19/07/1985",
                "plano"         => "2,1",
                "created_at" => $now,
                "updated_at" => $now
            ]           
        ]);
    }
}
