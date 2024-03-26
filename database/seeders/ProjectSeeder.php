<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    public function run()
    {
        $projects = [
            ['project_number' => 'WI7_K9M_5OI', 'project_name' => 'VoxVictoria', 'start_date' => '2024-01-01', 'end_date' => '2024-01-25'],
            ['project_number' => 'NLL_X55_08T', 'project_name' => 'Usque Ad Noctem', 'start_date' => '2024-01-05', 'end_date' => '2024-01-15'],
            ['project_number' => 'Q7B_24Z_29B', 'project_name' => 'Cafea Canem', 'start_date' => '2024-01-02', 'end_date' => '2024-01-28'],
            ['project_number' => '1DO_DZN_FCG', 'project_name' => 'Rosa Pistrina', 'start_date' => '2024-01-10', 'end_date' => '2024-01-31'],
            ['project_number' => 'UBD_ZBX_8C4', 'project_name' => 'Aqua Viridis', 'start_date' => '2024-02-01', 'end_date' => '2024-02-13'],
            ['project_number' => '1VJ_2FD_8ID', 'project_name' => 'VeniViniVici', 'start_date' => '2024-02-03', 'end_date' => '2024-02-26'],
            ['project_number' => 'J2Q_DL6_YHI', 'project_name' => 'Potentia Motus', 'start_date' => '2024-02-11', 'end_date' => '2024-03-22'],
            ['project_number' => '6FD_RU9_S6X', 'project_name' => 'Salve Libertatem', 'start_date' => '2024-03-03', 'end_date' => '2024-03-24'],
            ['project_number' => 'USC_WHI_93A', 'project_name' => 'Mundus Industria', 'start_date' => '2024-03-01', 'end_date' => '2024-03-18'],
            ['project_number' => '2VL_Z9B_LB3', 'project_name' => 'Ego Ideam', 'start_date' => '2024-03-07', 'end_date' => '2024-03-30'],

        ];

        foreach ($projects as $project) {
            DB::table('projects')->insert([
                'project_number' => $project['project_number'],
                'project_name' => $project['project_name'],
                'start_date' => $project['start_date'],
                'end_date' => $project['end_date'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
