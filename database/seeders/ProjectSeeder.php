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
            ['project_number' => '024_D01_001', 'project_name' => 'VoxVictoria', 'start_date' => '2024-01-01', 'end_date' => '2024-01-25'],
            ['project_number' => '024_D01_002', 'project_name' => 'Usque Ad Noctem', 'start_date' => '2024-01-05', 'end_date' => '2024-01-15'],
            ['project_number' => '024_D02_003', 'project_name' => 'Cafea Canem', 'start_date' => '2024-01-02', 'end_date' => '2024-01-28'],
            ['project_number' => '024_D02_004', 'project_name' => 'Rosa Pistrina', 'start_date' => '2024-01-10', 'end_date' => '2024-01-31'],
            ['project_number' => '024_D03_005', 'project_name' => 'Aqua Viridis', 'start_date' => '2024-02-01', 'end_date' => '2024-02-13'],
            ['project_number' => '024_D03_006', 'project_name' => 'VeniViniVici', 'start_date' => '2024-02-03', 'end_date' => '2024-02-26'],
            ['project_number' => '024_D01_007', 'project_name' => 'Potentia Motus', 'start_date' => '2024-02-11', 'end_date' => '2024-03-22'],
            ['project_number' => '024_D02_008', 'project_name' => 'Salve Libertatem', 'start_date' => '2024-03-03', 'end_date' => '2024-03-24'],
            ['project_number' => '024_D02_009', 'project_name' => 'Mundus Industria', 'start_date' => '2024-03-01', 'end_date' => '2024-03-18'],
            ['project_number' => '024_D03_010', 'project_name' => 'Ego Ideam', 'start_date' => '2024-03-07', 'end_date' => '2024-03-30'],

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
