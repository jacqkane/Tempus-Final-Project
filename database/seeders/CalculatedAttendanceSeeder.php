<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CalculatedAttendance;


class CalculatedAttendanceSeeder extends Seeder
{
    public function run()
    {
        CalculatedAttendance::factory()->count(20)->create(); // Adjust count as needed
    }
}
