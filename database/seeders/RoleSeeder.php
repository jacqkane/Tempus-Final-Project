<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    public function run()
    {
        Role::create(['role' => 'Employee']);
        Role::create(['role' => 'Company Admin']);
        Role::create(['role' => 'Project Leader']);
    }
}
