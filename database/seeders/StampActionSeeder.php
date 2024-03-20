<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\StampAction;
use App\Models\InternalAttendance;

class StampActionSeeder extends Seeder
{
    public function run()
    {

        $internalAttendances = InternalAttendance::all();


        foreach ($internalAttendances as $attendance) {
            StampAction::factory()->create(['internal_attendance_id' => $attendance->id, 'name' => 'clock-in']);
            StampAction::factory()->create(['internal_attendance_id' => $attendance->id, 'name' => 'clock-out']);
            StampAction::factory()->create(['internal_attendance_id' => $attendance->id, 'name' => 'break-start']);
            StampAction::factory()->create(['internal_attendance_id' => $attendance->id, 'name' => 'break-stop']);
        }
    }
}
