<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\WorkingTimeAssignment;


class WorkingTimeAssignmentSeeder extends Seeder
{
    public function run()
    {
        WorkingTimeAssignment::factory()->count(20)->create(); // Adjust count as needed
    }
}
