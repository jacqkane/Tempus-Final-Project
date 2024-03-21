<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\WorkingTimeAssignment;
use Illuminate\Support\Facades\DB;


class WorkingTimeAssignmentSeeder extends Seeder
{
    public function run()
    {
        $workingTimeAssignments = [
            ['user_id' => '16', 'project_id' => '21', 'project_number' => 'WI7_K9M_5OI', 'project_name' => 'VoxVictoria', 'cost_group_id' => '2', 'cost_group_code' => 'ENG-DES', 'cost_group_name' => 'Mechanical 3D/2D Design', 'working_time_assigned' => '08:05:57', 'comment' => 'Non itaque facere molestiae quae sint qui in.', 'date' => '2024-01-01', 'rfq_id' => '1', 'rfq_number' => 'RFQ-2024-001', 'rfq_name' => 'Ut molestiae autem soluta et', 'approval_status_id' => '1', 'approval_status_name' => 'Pending'],


            ['user_id' => '16', 'project_id' => '21', 'project_number' => 'WI7_K9M_5OI', 'project_name' => 'VoxVictoria', 'cost_group_id' => '1', 'cost_group_code' => 'PM', 'cost_group_name' => 'Management and Coordination', 'working_time_assigned' => '03:20:03', 'comment' => 'Non itaque facere molestiae quae sint qui in.', 'date' => '2024-01-10', 'rfq_id' => '2', 'rfq_number' => 'RFQ-2024-002', 'rfq_name' => 'Libero sit sunt facere laborum non odit', 'approval_status_id' => '2', 'approval_status_name' => 'Approved'],


            ['user_id' => '19', 'project_id' => '21', 'project_number' => 'WI7_K9M_5OI', 'project_name' => 'VoxVictoria', 'cost_group_id' => '3', 'cost_group_code' => 'ENG-ELE', 'cost_group_name' => 'Electrical Design', 'working_time_assigned' => '06:30:07', 'comment' => 'Blanditiis optio nisi suscipit perferendis.', 'date' => '2024-01-15', 'rfq_id' => '3', 'rfq_number' => 'RFQ-2024-003', 'rfq_name' => 'Ipsam non earum veniam perspiciatis', 'approval_status_id' => '2', 'approval_status_name' => 'Approved'],


            ['user_id' => '22', 'project_id' => '21', 'project_number' => 'WI7_K9M_5OI', 'project_name' => 'VoxVictoria', 'cost_group_id' => '4', 'cost_group_code' => 'ENG-DOCU', 'cost_group_name' => 'Technical Documentation', 'working_time_assigned' => '08:50:17', 'comment' => 'Nam nobis voluptatem est fugit voluptatum quaerat.', 'date' => '2024-01-18', 'rfq_id' => '4', 'rfq_number' => 'RFQ-2024-004', 'rfq_name' => 'Omnis eum repudiandae quaerat provident tenetur', 'approval_status_id' => '3', 'approval_status_name' => 'Rejected'],


            ['user_id' => '17', 'project_number' => 'NLL_X55_08T', 'project_name' => 'Usque Ad Noctem', 'cost_group_id' => '5', 'cost_group_code' => 'PURCH', 'cost_group_name' => 'Purchase of Subcomponents', 'working_time_assigned' => '02:51:57', 'comment' => 'Asperiores et repellat enim praesentium.', 'date' => '2024-01-21', 'rfq_id' => '1', 'rfq_number' => 'RFQ-2024-001', 'rfq_name' => 'Ut molestiae autem soluta et', 'approval_status_id' => '2', 'approval_status_name' => 'Approved'],


            ['user_id' => '17', 'project_number' => 'NLL_X55_08T', 'project_name' => 'Usque Ad Noctem', 'cost_group_id' => '6', 'cost_group_code' => 'MECH-ASSY', 'cost_group_name' => 'Mechanical Assembly', 'working_time_assigned' => '12:41:27', 'comment' => 'Enim cupiditate ex repudiandae quia.', 'date' => '2024-01-22', 'rfq_id' => '2', 'rfq_number' => 'RFQ-2024-002', 'rfq_name' => 'Libero sit sunt facere laborum non odit', 'approval_status_id' => '1', 'approval_status_name' => 'Pending'],


            ['user_id' => '17', 'project_number' => 'NLL_X55_08T', 'project_name' => 'Usque Ad Noctem', 'cost_group_id' => '7', 'cost_group_code' => 'ELE-ASSY', 'cost_group_name' => 'Electrical Assembly', 'working_time_assigned' => '10:15:29', 'comment' => 'Odit exercitationem laboriosam esse ea.', 'date' => '2024-01-26', 'rfq_id' => '3', 'rfq_number' => 'RFQ-2024-003', 'rfq_name' => 'Ipsam non earum veniam perspiciatis', 'approval_status_id' => '1', 'approval_status_name' => 'Pending'],


            ['user_id' => '20', 'project_number' => 'Q7B_24Z_29B', 'project_name' => 'Cafea Canem', 'cost_group_id' => '8', 'cost_group_code' => 'INSTALL', 'cost_group_name' => 'Installation and Commissioning', 'working_time_assigned' => '11:11:19', 'comment' => 'Voluptatem ex cumque voluptas vel animi quo.', 'date' => '2024-01-31', 'rfq_id' => '4', 'rfq_number' => 'RFQ-2024-004', 'rfq_name' => 'Omnis eum repudiandae quaerat provident tenetur', 'approval_status_id' => '3', 'approval_status_name' => 'Rejected'],


            ['user_id' => '20', 'project_number' => 'Q7B_24Z_29B', 'project_name' => 'Cafea Canem', 'cost_group_id' => '9', 'cost_group_code' => 'X', 'cost_group_name' => 'Not Specified', 'working_time_assigned' => '07:01:45', 'comment' => 'Quam molestias quibusdam autem animi rerum eos por...', 'date' => '2024-02-02', 'rfq_id' => '4', 'rfq_number' => 'RFQ-2024-004', 'rfq_name' => 'Omnis eum repudiandae quaerat provident tenetur', 'approval_status_id' => '1', 'approval_status_name' => 'Pending'],


            ['user_id' => '16', 'project_number' => '1DO_DZN_FCG', 'project_name' => 'Rosa Pistrina', 'cost_group_id' => '1', 'cost_group_code' => 'PM', 'cost_group_name' => 'Management and Coordination', 'working_time_assigned' => '03:31:35', 'comment' => 'Soluta ducimus voluptate quia ut.', 'date' => '2024-02-07', 'rfq_id' => '4', 'rfq_number' => 'RFQ-2024-004', 'rfq_name' => 'Omnis eum repudiandae quaerat provident tenetur', 'approval_status_id' => '2', 'approval_status_name' => 'Approved'],


            ['user_id' => '20', 'project_number' => '1DO_DZN_FCG', 'project_name' => 'Rosa Pistrina', 'cost_group_id' => '1', 'cost_group_code' => 'PM', 'cost_group_name' => 'Management and Coordination', 'working_time_assigned' => '13:35:25', 'comment' => 'Rem ipsa voluptatem dolorem ut quia illum qui.', 'date' => '2024-02-10', 'rfq_id' => '1', 'rfq_number' => 'RFQ-2024-001', 'rfq_name' => 'Ut molestiae autem soluta et', 'approval_status_id' => '2', 'approval_status_name' => 'Approved'],


            ['user_id' => '23', 'project_number' => '1DO_DZN_FCG', 'project_name' => 'Rosa Pistrina', 'cost_group_id' => '1', 'cost_group_code' => 'PM', 'cost_group_name' => 'Management and Coordination', 'working_time_assigned' => '03:31:35', 'comment' => 'Soluta ducimus voluptate quia ut.', 'date' => '2024-02-14', 'rfq_id' => '2', 'rfq_number' => 'RFQ-2024-002', 'rfq_name' => 'Libero sit sunt facere laborum non odit', 'approval_status_id' => '2', 'approval_status_name' => 'Approved'],


            ['user_id' => '19', 'project_number' => 'UBD_ZBX_8C4', 'project_name' => 'Aqua Viridis', 'cost_group_id' => '2', 'cost_group_code' => 'ENG-DES', 'cost_group_name' => 'Mechanical 3D/2D Design', 'working_time_assigned' => '07:31:46', 'comment' => 'Ipsam tempore sed qui quam rerum necessitatibus au...', 'date' => '2024-02-17', 'rfq_id' => '3', 'rfq_number' => 'RFQ-2024-003', 'rfq_name' => 'Ipsam non earum veniam perspiciatis', 'approval_status_id' => '2', 'approval_status_name' => 'Approved'],


            ['user_id' => '19', 'project_number' => 'UBD_ZBX_8C4', 'project_name' => 'Aqua Viridis', 'cost_group_id' => '7', 'cost_group_code' => 'ELE-ASSY', 'cost_group_name' => 'Electrical Assembly', 'working_time_assigned' => '05:42:49', 'comment' => 'Aliquid suscipit aut quos et.', 'date' => '2024-02-17', 'rfq_id' => '3', 'rfq_number' => 'RFQ-2024-003', 'rfq_name' => 'Ipsam non earum veniam perspiciatis', 'approval_status_id' => '1', 'approval_status_name' => 'Pending'],


            ['user_id' => '18', 'project_number' => '1VJ_2FD_8ID', 'project_name' => 'VeniViniVici', 'cost_group_id' => '7', 'cost_group_code' => 'ELE-ASSY', 'cost_group_name' => 'Electrical Assembly', 'working_time_assigned' => '05:42:49', 'comment' => 'Aliquid suscipit aut quos et.', 'date' => '2024-02-17', 'rfq_id' => '3', 'rfq_number' => 'RFQ-2024-003', 'rfq_name' => 'Ipsam non earum veniam perspiciatis', 'approval_status_id' => '1', 'approval_status_name' => 'Pending'],


            ['user_id' => '23', 'project_number' => 'J2Q_DL6_YHI', 'project_name' => 'Potentia Motus', 'cost_group_id' => '8', 'cost_group_code' => 'INSTALL', 'cost_group_name' => 'Installation and Commissioning', 'working_time_assigned' => '09:22:17', 'comment' => 'Sunt rerum culpa eos laudantium repellat dicta qui...', 'date' => '2024-02-23', 'rfq_id' => '4', 'rfq_number' => 'RFQ-2024-004', 'rfq_name' => 'Omnis eum repudiandae quaerat provident tenetur', 'approval_status_id' => '3', 'approval_status_name' => 'Rejected'],


            ['user_id' => '17', 'project_number' => 'J2Q_DL6_YHI', 'project_name' => 'Potentia Motus', 'cost_group_id' => '4', 'cost_group_code' => 'ENG-DOCU', 'cost_group_name' => 'Technical Documentation', 'working_time_assigned' => '12:52:37', 'comment' => 'Nam nobis voluptatem est fugit voluptatum quaerat.', 'date' => '2024-02-28', 'rfq_id' => '4', 'rfq_number' => 'RFQ-2024-004', 'rfq_name' => 'Omnis eum repudiandae quaerat provident tenetur', 'approval_status_id' => '1', 'approval_status_name' => 'Pending'],


            ['user_id' => '23', 'project_number' => '6FD_RU9_S6X', 'project_name' => 'Salve Libertatem', 'cost_group_id' => '6', 'cost_group_code' => 'MECH-ASSY', 'cost_group_name' => 'Mechanical Assembly', 'working_time_assigned' => '11:22:17', 'comment' => 'Non itaque facere molestiae quae sint qui in.', 'date' => '2024-02-29', 'rfq_id' => '4', 'rfq_number' => 'RFQ-2024-004', 'rfq_name' => 'Omnis eum repudiandae quaerat provident tenetur', 'approval_status_id' => '2', 'approval_status_name' => 'Approved'],

            ['user_id' => '23', 'project_number' => '6FD_RU9_S6X', 'project_name' => 'Salve Libertatem', 'cost_group_id' => '3', 'cost_group_code' => 'ENG-ELE', 'cost_group_name' => 'Electrical Design', 'working_time_assigned' => '05:12:47', 'comment' => 'Non itaque facere molestiae quae sint qui in.', 'date' => '2024-03-01', 'rfq_id' => '2', 'rfq_number' => 'RFQ-2024-002', 'rfq_name' => 'Libero sit sunt facere laborum non odit', 'approval_status_id' => '2', 'approval_status_name' => 'Approved'],


            ['user_id' => '24', 'project_number' => 'USC_WHI_93A', 'project_name' => 'Mundus Industria', 'cost_group_id' => '7', 'cost_group_code' => 'ELE-ASSY', 'cost_group_name' => 'Electrical Assembly', 'working_time_assigned' => '08:51:29', 'comment' => 'Qui dignissimos laborum impedit et consequatur.', 'date' => '2024-03-05', 'rfq_id' => '2', 'rfq_number' => 'RFQ-2024-002', 'rfq_name' => 'Libero sit sunt facere laborum non odit', 'approval_status_id' => '2', 'approval_status_name' => 'Approved'],

            ['user_id' => '24', 'project_number' => 'USC_WHI_93A', 'project_name' => 'Mundus Industria', 'cost_group_id' => '7', 'cost_group_code' => 'ELE-ASSY', 'cost_group_name' => 'Electrical Assembly', 'working_time_assigned' => '07:55:19', 'comment' => 'Qui dignissimos laborum impedit et consequatur.', 'date' => '2024-03-15', 'rfq_id' => '2', 'rfq_number' => 'RFQ-2024-002', 'rfq_name' => 'Libero sit sunt facere laborum non odit', 'approval_status_id' => '2', 'approval_status_name' => 'Approved'],


            ['user_id' => '21', 'project_number' => '2VL_Z9B_LB3', 'project_name' => 'Ego Ideam', 'cost_group_id' => '5', 'cost_group_code' => 'PURCH', 'cost_group_name' => 'Purchase of Subcomponents', 'working_time_assigned' => '02:31:12', 'comment' => 'Aliquid suscipit aut quos et.', 'date' => '2024-03-18', 'rfq_id' => '1', 'rfq_number' => 'RFQ-2024-001', 'rfq_name' => 'Ut molestiae autem soluta et', 'approval_status_id' => '1', 'approval_status_name' => 'Pending'],

            ['user_id' => '21', 'project_number' => '2VL_Z9B_LB3', 'project_name' => 'Ego Ideam', 'cost_group_id' => '5', 'cost_group_code' => 'PURCH', 'cost_group_name' => 'Purchase of Subcomponents', 'working_time_assigned' => '06:21:53', 'comment' => 'Aliquid suscipit aut quos et.', 'date' => '2024-03-18', 'rfq_id' => '1', 'rfq_number' => 'RFQ-2024-001', 'rfq_name' => 'Ut molestiae autem soluta et', 'approval_status_id' => '1', 'approval_status_name' => 'Pending'],
        ];

        foreach ($workingTimeAssignments as $workingTimeAssignment) {
            $workingTimeAssignment['project_code'] = $workingTimeAssignment['project_number'] . '_' . $workingTimeAssignment['project_name'];
            $workingTimeAssignment['cost_group_concat'] = $workingTimeAssignment['cost_group_code'] . '_' . $workingTimeAssignment['cost_group_name'];
            $workingTimeAssignment['rfq_concat'] = $workingTimeAssignment['rfq_number'] . '_' . $workingTimeAssignment['rfq_name'];

            DB::table('working_time_assignments')->insert([
                'user_id' => $workingTimeAssignment['user_id'],
                'project_number' => $workingTimeAssignment['project_number'],
                'project_name' => $workingTimeAssignment['project_name'],
                'project_code' => $workingTimeAssignment['project_code'],
                'cost_group_id' => $workingTimeAssignment['cost_group_id'],
                'cost_group_code' => $workingTimeAssignment['cost_group_code'],
                'cost_group_name' => $workingTimeAssignment['cost_group_name'],
                'cost_group_concat' => $workingTimeAssignment['cost_group_concat'],
                'working_time_assigned' => $workingTimeAssignment['working_time_assigned'],
                'comment' => $workingTimeAssignment['comment'],
                'date' => $workingTimeAssignment['date'],
                'rfq_id' => $workingTimeAssignment['rfq_id'],
                'rfq_number' => $workingTimeAssignment['rfq_number'],
                'rfq_name' => $workingTimeAssignment['rfq_name'],
                'rfq_concat' => $workingTimeAssignment['rfq_concat'],
                'approval_status_id' => $workingTimeAssignment['approval_status_id'],
                'approval_status_name' => $workingTimeAssignment['approval_status_name'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
