<?php

namespace App\Services;

class WorkingTimeCalculatorService
{
    public function calculateNetWorkingTime($dayAttendancies)
    {
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
        $unknownEntriesArray = $dayAttendanciesArray['0'];
        $clockInEntriesArray = $dayAttendanciesArray['1'];
        $clockOutEntriesArray = $dayAttendanciesArray['2'];
        $breakStartEntriesArray = $dayAttendanciesArray['3'];
        $breakStopEntriesArray = $dayAttendanciesArray['4'];

        //net working time without breaks
        $netTimeWithoutBreaksInMinutes = $clockOutEntriesArray - $clockInEntriesArray;

        //Breaks Sum calculation
        $sumBreakStartsInMinutes = array_sum($breakStartEntriesArray);
        $sumBreakStopsInMinutes = array_sum($breakStopEntriesArray);
        $netTimeBreaksInMinutes = $sumBreakStopsInMinutes - $sumBreakStartsInMinutes;

        //calculating net working time a day
        // $netWorkingTimeInMinutes = ($clockOutEntriesArray - $clockInEntriesArray) - ();






        return $dayAttendanciesArray;
    }
}



        // $data = $dayAttendanciesArray;

        // // Define the expected sequence of actions
        // $expected_start = "1";
        // $expected_end = "2";

        // // Validate the sequence
        // $start_found = false;
        // foreach ($data as $attendance) {
        //     $action = key($attendance);
        //     if ($action == $expected_start) {
        //         $start_found = true;
        //     } elseif ($action == $expected_end && !$start_found) {
        //         die("Error: Missing clock-in.\n");
        //     } elseif (
        //         $action == $expected_end && $start_found
        //     ) {
        //         break;
        //     }
        // }
        // if (!$start_found) {
        //     die("Error: Missing clock-out.\n");
        // }

        // $timestamps = [];
        // $current_break = [];

        // foreach ($data as $attendance) {
        //     $action = key($attendance);
        //     $timestamp = strtotime(current($attendance));

        //     if ($action == $expected_start) {
        //         $timestamps[$action] = $timestamp;
        //     } elseif (
        //         $action == $expected_end
        //     ) {
        //         $timestamps[$action] = $timestamp;
        //     } elseif (
        //         $action == "3"
        //     ) {
        //         $current_break = [$timestamp];
        //     } elseif ($action == "4" && !empty($current_break)) {
        //         $current_break[] = $timestamp;
        //         $timestamps[$action][] = $current_break;
        //         $current_break = [];
        //     }
        // }

        // // Calculate total break time
        // $total_break_time = 0;
        // foreach ($timestamps["3"] as $break) {
        //     foreach ($break as $index => $break_time) {
        //         $break_end = $timestamps["4"][$index];
        //         $total_break_time += ($break_end - $break_time);
        //     }
        // }

        // // Calculate working time
        // $clock_in = $timestamps["1"];
        // $clock_out = $timestamps["2"];
        // $working_time = ($clock_out - $clock_in - $total_break_time);

        // // Print the working time for the person
        // return "Working time: " . gmdate("H:i:s", $working_time) . "\n";