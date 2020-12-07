<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlansSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("plans")->insert([
            [
                "name"              => "Free",
                "monthlypayment"    => "0"
            ],
            [
                "name"              => "Basic",
                "monthlypayment"    => "100.00"
            ],
            [
                "name"              => "Plus",
                "monthlypayment"    => "187.00"
            ]
        ]);
    }
}
