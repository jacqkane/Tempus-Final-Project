<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
// use Illuminate\Database\Seeder;
use App\Models\CalculatedAttendance;


// class CalculatedAttendanceSeeder extends Seeder
// {
//     public function run()
//     {
//         CalculatedAttendance::factory()->count(20)->create(); // Adjust count as needed
//     }
// }

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class CalculatedAttendanceSeeder extends Seeder
{
    public function run()
    {

        $netWorkingTimes = [];
        for ($i = 0; $i < 100; $i++) {
            $netWorkingTimes[] = rand(4 * 60 * 60, 12 * 60 * 60);
        }


        for ($i = 0; $i < 100; $i++) {
            $date = Carbon::createFromDate(2024, rand(1, 3), rand(1, 31));
            foreach ($netWorkingTimes as $netWorkingTime) {
                DB::table('calculated_attendances')->insert([
                    'user_id' => rand(16, 24),
                    'date' => $date->toDateString(),
                    'net_working_time' => gmdate('H:i:s', $netWorkingTime),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
