<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\ApprovalStatus;
use App\Models\CalculatedAttendance;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ApprovalStatusSeeder::class,
            // CalculatedAttendanceSeeder::class,
            CompanySeeder::class,
            CostGroupSeeder::class,
            DivisionSeeder::class,
            GiritonAttendanceSeeder::class,
            StampActionSeeder::class,
            InternalAttendanceSeeder::class,
            ProjectSeeder::class,
            RfqSeeder::class,
            UserSeeder::class,
            PermissionsSeeder::class,
            WorkingTimeAssignmentSeeder::class,
        ]);
    }
}
