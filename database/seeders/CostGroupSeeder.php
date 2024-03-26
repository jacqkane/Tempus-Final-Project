<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\CostGroup;
use Illuminate\Support\Facades\DB;


class CostGroupSeeder extends Seeder
{
    public function run()
    {
        $costGroups = [
            ['code' => 'PM', 'name' => 'Management and Coordination'],
            ['code' => 'ENG-DES', 'name' => 'Mechanical 3D/2D Design'],
            ['code' => 'ENG-ELE', 'name' => 'Electrical Design'],
            ['code' => 'ENG-DOCU', 'name' => 'Technical Documentation'],
            ['code' => 'PURCH', 'name' => 'Purchase of Subcomponents'],
            ['code' => 'MECH-ASSY', 'name' => 'Mechanical Assembly'],
            ['code' => 'ELE-ASSY', 'name' => 'Electrical Assembly'],
            ['code' => 'INSTALL', 'name' => 'Installation and Commissioning'],
            ['code' => 'X', 'name' => 'Not Specified'],
        ];

        foreach ($costGroups as $costGroup) {
            DB::table('cost_groups')->insert([
                'cost_group_code' => $costGroup['code'],
                'cost_group_name' => $costGroup['name'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
