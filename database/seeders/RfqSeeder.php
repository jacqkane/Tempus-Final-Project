<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Rfq;


class RfqSeeder extends Seeder
{
    public function run()
    {
        Rfq::factory()->count(10)->create();
    }
}
