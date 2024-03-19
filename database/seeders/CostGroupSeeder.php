<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\CostGroup;

class CostGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (['Development', 'Marketing', 'Operations', 'Finance'] as $name) {
            CostGroup::create([
                'cost_group_code' => Str::random(5),
                'cost_group_name' => $name,
            ]);
        }
    }
}
