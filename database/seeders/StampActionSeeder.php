<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\StampAction;

class StampActionSeeder extends Seeder
{
    public function run()
    {
        StampAction::create(['name' => 'clock-in']);
        StampAction::create(['name' => 'clock-out']);
        StampAction::create(['name' => 'break-start']);
        StampAction::create(['name' => 'break-stop']);
    }
}
