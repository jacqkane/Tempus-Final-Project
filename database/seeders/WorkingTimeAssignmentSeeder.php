<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\WorkingTimeAssignment;
use App\Models\User;
use App\Models\Project;
use App\Models\CostGroup;
use App\Models\Rfq;
use App\Models\ApprovalStatus;
use Illuminate\Support\Facades\DB;


class WorkingTimeAssignmentSeeder extends Seeder
{
    public function run()
    {
        $workingTimeAssignments = [
            ['user_id' => 16, 'project_id' => 7, 'cost_group_id' => 2, 'working_time_assigned' => '08:05:57', 'comment' => 'Non itaque facere molestiae quae sint qui in.', 'date' => '2024-01-01', 'rfq_id' => 1, 'approval_status_id' => 1],


            ['user_id' => 16, 'project_id' => 6, 'cost_group_id' => 1, 'working_time_assigned' => '03:20:03', 'comment' => 'Non itaque facere molestiae quae sint qui in.', 'date' => '2024-01-10', 'rfq_id' => 2, 'approval_status_id' => 2],


            ['user_id' => 19, 'project_id' => 6, 'cost_group_id' => 3, 'working_time_assigned' => '06:30:07', 'comment' => 'Blanditiis optio nisi suscipit perferendis.', 'date' => '2024-01-15', 'rfq_id' => 3, 'approval_status_id' => 2],


            ['user_id' => 22, 'project_id' => 6, 'cost_group_id' => 4, 'working_time_assigned' => '08:50:17', 'comment' => 'Nam nobis voluptatem est fugit voluptatum quaerat.', 'date' => '2024-01-18', 'rfq_id' => 4, 'approval_status_id' => 3],


            ['user_id' => 17, 'project_id' => 6, 'cost_group_id' => 5, 'working_time_assigned' => '02:51:57', 'comment' => 'Asperiores et repellat enim praesentium.', 'date' => '2024-01-21', 'rfq_id' => 1, 'approval_status_id' => 2],


            ['user_id' => 17, 'project_id' => 5, 'cost_group_id' => 6, 'working_time_assigned' => '12:41:27', 'comment' => 'Enim cupiditate ex repudiandae quia.', 'date' => '2024-01-22', 'rfq_id' => 2, 'approval_status_id' => 1],


            ['user_id' => 17, 'project_id' => 5, 'cost_group_id' => 7, 'working_time_assigned' => '10:15:29', 'comment' => 'Odit exercitationem laboriosam esse ea.', 'date' => '2024-01-26', 'rfq_id' => 3, 'approval_status_id' => 1],


            ['user_id' => 20, 'project_id' => 5, 'cost_group_id' => 8, 'working_time_assigned' => '11:11:19', 'comment' => 'Voluptatem ex cumque voluptas vel animi quo.', 'date' => '2024-01-31', 'rfq_id' => 4, 'approval_status_id' => 3],


            ['user_id' => 20, 'project_id' => 5, 'cost_group_id' => 9, 'working_time_assigned' => '07:01:45', 'comment' => 'Quam molestias quibusdam autem animi rerum eos por...', 'date' => '2024-02-02', 'rfq_id' => 4, 'approval_status_id' => 1],


            ['user_id' => 16, 'project_id' => 5, 'cost_group_id' => 1, 'working_time_assigned' => '03:31:35', 'comment' => 'Soluta ducimus voluptate quia ut.', 'date' => '2024-02-07', 'rfq_id' => 4, 'approval_status_id' => 2],


            ['user_id' => 20, 'project_id' => 1, 'cost_group_id' => 1, 'working_time_assigned' => '13:35:25', 'comment' => 'Rem ipsa voluptatem dolorem ut quia illum qui.', 'date' => '2024-02-10', 'rfq_id' => 1, 'approval_status_id' => 2],


            ['user_id' => 23, 'project_id' => 1, 'cost_group_id' => 1, 'working_time_assigned' => '03:31:35', 'comment' => 'Soluta ducimus voluptate quia ut.', 'date' => '2024-02-14', 'rfq_id' => 2, 'approval_status_id' => 2],


            ['user_id' => 19, 'project_id' => 1, 'cost_group_id' => 2, 'working_time_assigned' => '07:31:46', 'comment' => 'Ipsam tempore sed qui quam rerum necessitatibus au...', 'date' => '2024-02-17', 'rfq_id' => 3, 'approval_status_id' => 2],


            ['user_id' => 19, 'project_id' => 1, 'cost_group_id' => 7, 'working_time_assigned' => '05:42:49', 'comment' => 'Aliquid suscipit aut quos et.', 'date' => '2024-02-17', 'rfq_id' => 3, 'approval_status_id' => 1],


            ['user_id' => 18, 'project_id' => 1, 'cost_group_id' => 7, 'working_time_assigned' => '05:42:49', 'comment' => 'Aliquid suscipit aut quos et.', 'date' => '2024-02-17', 'rfq_id' => 3, 'approval_status_id' => 1],


            ['user_id' => 23, 'project_id' => 4, 'cost_group_id' => 8, 'working_time_assigned' => '09:22:17', 'comment' => 'Sunt rerum culpa eos laudantium repellat dicta qui...', 'date' => '2024-02-23', 'rfq_id' => 4, 'approval_status_id' => 3],


            ['user_id' => 17, 'project_id' => 4, 'cost_group_id' => 4, 'working_time_assigned' => '12:52:37', 'comment' => 'Nam nobis voluptatem est fugit voluptatum quaerat.', 'date' => '2024-02-28', 'rfq_id' => 4, 'approval_status_id' => 1],


            ['user_id' => 23, 'project_id' => 4, 'cost_group_id' => 6, 'working_time_assigned' => '11:22:17', 'comment' => 'Non itaque facere molestiae quae sint qui in.', 'date' => '2024-02-29', 'rfq_id' => 4, 'approval_status_id' => 2],

            ['user_id' => 23, 'project_id' => 3, 'cost_group_id' => 3, 'working_time_assigned' => '05:12:47', 'comment' => 'Non itaque facere molestiae quae sint qui in.', 'date' => '2024-03-01', 'rfq_id' => 2, 'approval_status_id' => 2],


            ['user_id' => 24, 'project_id' => 3, 'cost_group_id' => 7, 'working_time_assigned' => '08:51:29', 'comment' => 'Qui dignissimos laborum impedit et consequatur.', 'date' => '2024-03-05', 'rfq_id' => 2, 'approval_status_id' => 2],

            ['user_id' => 24, 'project_id' => 3, 'cost_group_id' => 7, 'working_time_assigned' => '07:55:19', 'comment' => 'Qui dignissimos laborum impedit et consequatur.', 'date' => '2024-03-15', 'rfq_id' => 2, 'approval_status_id' => 2],


            ['user_id' => 21, 'project_id' => 2, 'cost_group_id' => 5, 'working_time_assigned' => '02:31:12', 'comment' => 'Aliquid suscipit aut quos et.', 'date' => '2024-03-18', 'rfq_id' => 1, 'approval_status_id' => 1],

            ['user_id' => 21, 'project_id' => 2, 'cost_group_id' => 5, 'working_time_assigned' => '06:21:53', 'comment' => 'Aliquid suscipit aut quos et.', 'date' => '2024-03-18', 'rfq_id' => 1, 'approval_status_id' => 1],
        ];

        foreach ($workingTimeAssignments as $data) {
            // Find the related models using their IDs
            $user = User::find($data['user_id']);
            $project = Project::find($data['project_id']);
            $costGroup = CostGroup::find($data['cost_group_id']);
            $rfq = Rfq::find($data['rfq_id']);
            $approvalStatus = ApprovalStatus::find($data['approval_status_id']);

            // If all related models exist, create the working time assignment
            if ($user && $project && $costGroup && $rfq && $approvalStatus) {
                // Create the working time assignment using the relationships
                WorkingTimeAssignment::create([
                    'user_id' => $user->id,
                    'project_id' => $project->id,
                    'cost_group_id' => $costGroup->id,
                    'working_time_assigned' => $data['working_time_assigned'],
                    'comment' => $data['comment'],
                    'date' => $data['date'],
                    'rfq_id' => $rfq->id,
                    'approval_status_id' => $approvalStatus->id,
                ]);
            }
        }
    }
}
