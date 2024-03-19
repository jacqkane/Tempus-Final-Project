<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ApprovalStatus;

class ApprovalStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $approvalStatuses = ['Pending', 'Approved', 'Rejected']; // Specific approval statuses

        foreach ($approvalStatuses as $status) {
            ApprovalStatus::create(['status_name' => $status]);
        }
    }
}
