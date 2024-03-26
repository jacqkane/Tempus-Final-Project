<?php

namespace App\Services;

class WorkingTimeCalculatorService
{
    public function calculateNetWorkingTime($dayAttendancies)
    {
        $message_success = '';
        $message_error = '';
        // $data = json_decode($dayAttendancies, true);
        $dayAttendanciesArray = [];
        foreach ($dayAttendancies as $entry) {

            //string to minutes conversion
            list($hours, $minutes, $seconds) = explode(":", $entry->time);
            $totalMinutes = ($hours * 60) + $minutes + ($seconds / 60);

            //array creation
            // $dayAttendanciesArray[$entry->stamp_action_id][] = $entry->time;
            // $dayAttendanciesArray[] = [$entry->stamp_action_id => $entry->time];
            $dayAttendanciesArray[$entry->stamp_action_id][] =  $totalMinutes;
        }

        //split into actions 
        // $unknownEntriesArray = $dayAttendanciesArray['0'];
        $clockInEntriesArray = $dayAttendanciesArray['1'];
        $clockOutEntriesArray = $dayAttendanciesArray['2'];
        $breakStartEntriesArray = $dayAttendanciesArray['3'];
        $breakStopEntriesArray = $dayAttendanciesArray['4'];

        //basic check
        $CountClockIns = count($dayAttendanciesArray['1']);
        $CountClockOuts = count($dayAttendanciesArray['2']);
        $CountBreakStarts = count($dayAttendanciesArray['3']);
        $CountBreakStops = count($dayAttendanciesArray['4']);

        $netSumBreaksInMinutes = 0;
        $netWorkingTimeInMinutes = 0;
        $netWorkingTimeforDB = '';


        // basic check
        if (($CountClockIns == 1 && $CountClockOuts == 1) && ($CountBreakStarts == $CountBreakStops)) {
            $netSumBreaksInMinutes = array_sum($breakStopEntriesArray) - array_sum($breakStartEntriesArray);
            $netWorkingTimeInMinutes = ((array_sum($clockOutEntriesArray) - array_sum($clockInEntriesArray)) - (array_sum($breakStopEntriesArray) - array_sum($breakStartEntriesArray)));
            $message_success = 'yes';
        } elseif (($CountBreakStarts == $CountBreakStops) && ($CountClockIns > 1 || $CountClockOuts > 1)) {
            $message_success = 'no';
            $message_error = 'Double value Check-In or Check-Out';
        } elseif (($CountClockIns == 1 && $CountClockOuts == 1) && ($CountBreakStarts !== $CountBreakStops)) {
            $message_success = 'no';
            $message_error = 'Break-Starts_Stops not equal';
        } elseif (($CountClockIns > 1 || $CountClockOuts > 1) && ($CountBreakStarts !== $CountBreakStops)) {
            $message_success = 'no';
            $message_error = 'Correct the mess';
        }

        //net working time conversion for DB
        $hours = ($netWorkingTimeInMinutes / 60);
        $minutes = $netWorkingTimeInMinutes % 60;
        $seconds = 0;
        $netWorkingTimeforDB = sprintf('%02d:%02d:%02d', $hours, $minutes, $seconds);

        //getting current status ... to finish

        return [
            'netSumBreaksInMinutes' => $netSumBreaksInMinutes,
            'netWorkingTimeInMinutes' => $netWorkingTimeInMinutes,
            'netWorkingTimeforDB' => $netWorkingTimeforDB,
            'message_success' => $message_success,
            'message_error' => $message_error,
        ];
    }
}
