<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ApprovalStatus;


class ApprovalStatusSeeder extends Seeder
{
    public function run()
    {
        ApprovalStatus::factory()->count(3)->create(); // Assuming 3 approval statuses
    }
}
