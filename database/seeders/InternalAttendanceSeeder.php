<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\InternalAttendance;
use App\Models\StampAction;
use Carbon\Carbon;

class InternalAttendanceSeeder extends Seeder
{
    /**
     * Run the seeder.
     *
     * @return void
     */
    public function run()
    {
        // Get all stamp actions
        $stampActions = StampAction::all();

        // Generate random dates
        $startDate = Carbon::create(2024, 1, 1);
        $endDate = Carbon::create(2024, 3, 31);

        // Seed internal attendances with random dates and stamp actions
        for ($i = 0; $i < 100; $i++) {
            $date = Carbon::createFromDate(2024, rand(1, 3), rand(1, 31));
            $time = gmdate('H:i:s', rand(4 * 60 * 60, 12 * 60 * 60));
            $stampAction = $stampActions->random();

            InternalAttendance::create([
                'user_id' => rand(16, 24),
                'stamp_action_id' => $stampAction->id,
                'date' => $date,
                'time' => $time,
            ]);
        }
    }
}
