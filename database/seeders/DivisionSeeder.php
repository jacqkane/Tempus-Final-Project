<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Division;

class DivisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $divisionNames = ['Sales', 'Marketing', 'Finance', 'Human Resources'];

        foreach ($divisionNames as $name) {
            Division::create(['division_name' => $name]);
        }
    }
}
