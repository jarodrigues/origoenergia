<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = date("Y-m-d H:i:s");
        DB::table("Clients")->insert([
            [
                "name"          => "Claudianus Boast",
                "email"         => "cboast0@fastcompany.com",
                "phonenumber"      => "(19) 957645371",
                "state_id"        => "35",
                "city_id"        => "3503208",
                "dt_birth" => "07/06/1993",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Loni Jennions",
                "email"         => "ljennions1@va.gov ",
                "phonenumber"      => "(19) 905613161",
                "state_id"        => "35",
                "city_id"        => "3526902",
                "dt_birth" => "09/05/1985",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Margi Gilhouley",
                "email"         => "mgilhouley2@telegraph.co.uk",
                "phonenumber"      => "(19) 966290104",
                "state_id"        => "35",
                "city_id"        => "3503208",
                "dt_birth" => "13/09/1984",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Lexy Sprulls",
                "email"         => "lsprulls3@moonfruit.com",
                "phonenumber"      => "(19) 976121601",
                "state_id"        => "35",
                "city_id"        => "3543907",
                "dt_birth" => "19/10/1999",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Marie Shatliff",
                "email"         => "mshatliff4@cbslocal.com",
                "phonenumber"      => "(19) 991376354",
                "state_id"        => "35",
                "city_id"        => "3543907",
                "dt_birth" => "20/07/1990",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Graig Mouncey",
                "email"         => "gmouncey5@so-net.ne.jp",
                "phonenumber"      => "(19) 941806149",
                "state_id"        => "35",
                "city_id"        => "3503208",
                "dt_birth" => "27/03/1990",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Laurice Liger",
                "email"         => "r lliger0@php.net",
                "phonenumber"      => "(35) 971740954",
                "state_id"        => "31",
                "city_id"        => "3104304",
                "dt_birth" => "25/10/1992",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Kendrick Sooper",
                "email"         => "ksooper1@slate.com",
                "phonenumber"      => "(31) 944324086",
                "state_id"        => "31",
                "city_id"        => "3106200",
                "dt_birth" => "02/06/1981",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Gordon Levington",
                "email"         => "glevington2@hpost.com ",
                "phonenumber"      => "(31) 922405868",
                "state_id"        => "31",
                "city_id"        => "3106200",
                "dt_birth" => "25/11/1993",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Noam Scolland",
                "email"         => "nscolland3@mozilla.org",
                "phonenumber"      => "(35) 996817669",
                "state_id"        => "31",
                "city_id"        => "3104304",
                "dt_birth" => "31/12/1999",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Lindon Skehens",
                "email"         => "lskehens4@npr.org",
                "phonenumber"      => "(35) 967671104",
                "state_id"        => "31",
                "city_id"        => "3104304",
                "dt_birth" => "10/01/1985",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Kimbra Rase",
                "email"         => "krase5@topsy.com",
                "phonenumber"      => "(35) 999428030",
                "state_id"        => "31",
                "city_id"        => "3104304",
                "dt_birth" => "05/05/1999",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Lorenzo Fisk",
                "email"         => "lfisk6@businessweek.com",
                "phonenumber"      => "(31) 912695467",
                "state_id"        => "31",
                "city_id"        => "3106200",
                "dt_birth" => "22/12/1985",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Bourke Flavelle",
                "email"         => "bflavelle7@fc2.com",
                "phonenumber"      => "(35) 959386145",
                "state_id"        => "31",
                "city_id"        => "3133600",
                "dt_birth" => "10/04/1984",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Curran McSharry",
                "email"         => "cmcsharry8@webeden.co.uk",
                "phonenumber"      => "(35) 902916131",
                "state_id"        => "31",
                "city_id"        => "3133600",
                "dt_birth" => "15/01/1983",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Aveline Dowtry",
                "email"         => "adowtry9@miibeian.gov.cn",
                "phonenumber"      => "(31) 945227500",
                "state_id"        => "31",
                "city_id"        => "3106200",
                "dt_birth" => "23/12/1994",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "John Sebastian",
                "email"         => "jsebastiana@cbslocal.com",
                "phonenumber"      => "(31) 907366740",
                "state_id"        => "31",
                "city_id"        => "3106200",
                "dt_birth" => "06/04/1998",
                "created_at" => $now,
                "updated_at" => $now
            ],
            [
                "name"          => "Reynolds Greenan",
                "email"         => "rgreenanb@bloomberg.com",
                "phonenumber"      => "(35) 923551410",
                "state_id"        => "31",
                "city_id"        => "3133600",
                "dt_birth" => "19/07/1985",
                "created_at" => $now,
                "updated_at" => $now
            ]           
        ]);
    }
}
