<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\GiritonAttendance;


class GiritonAttendanceSeeder extends Seeder
{
    public function run()
    {
        GiritonAttendance::factory()->count(20)->create(); // Adjust count as needed
    }
}
