<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\StampAction;


class StampActionSeeder extends Seeder
{
    public function run()
    {
        StampAction::factory()->count(4)->create(); // 4 stamp actions
    }
}
