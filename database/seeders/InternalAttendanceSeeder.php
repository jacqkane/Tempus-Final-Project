<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\InternalAttendance;

class InternalAttendanceSeeder extends Seeder
{
    public function run()
    {
        InternalAttendance::factory()->count(20)->create(); // Adjust count as needed
    }
}
