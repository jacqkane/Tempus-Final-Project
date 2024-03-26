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
        // $unknownEntriesArray = $dayAttendanciesArray['0'] ?? 0;
        $clockInEntriesArray = $dayAttendanciesArray['1'] ?? 0;
        $clockOutEntriesArray = $dayAttendanciesArray['2'] ?? 0;
        $breakStartEntriesArray = $dayAttendanciesArray['3'] ?? 0;
        $breakStopEntriesArray = $dayAttendanciesArray['4'] ?? 0;

        //basic check
        $CountClockIns = count($dayAttendanciesArray['1'] ?? []);
        $CountClockOuts = count($dayAttendanciesArray['2'] ?? []);
        $CountBreakStarts = count($dayAttendanciesArray['3'] ?? []);
        $CountBreakStops = count($dayAttendanciesArray['4'] ?? []);

        $netSumBreaksInMinutes = 0;
        $netWorkingTimeInMinutes = 0;
        $netWorkingTimeforDB = '';

        //get current time and convert it to minutes

        //string to minutes conversion
        date_default_timezone_set('Europe/Prague');
        list($hours1, $minutes1, $seconds1) = explode(":", date("H:i:s"));
        $currentTimeMinutes = (int)(($hours1 * 60) + $minutes1);


        // check 1: only Clock-in/Clock-out and no breaks
        if (($CountBreakStarts == 0 && $CountBreakStops == 0) && ($CountClockIns == 1 && $CountClockOuts == 1)) {
            $netWorkingTimeInMinutes = round(array_sum($clockOutEntriesArray) - array_sum($clockInEntriesArray));
            $message_success = 'Check 1';
        }
        // check 2: only Clock-in and no breaks ... clock-out consideret as current time
        elseif (($CountBreakStarts == 0 && $CountBreakStops == 0) && ($CountClockIns == 1 && $CountClockOuts == 0)) {
            $netWorkingTimeInMinutes = round($currentTimeMinutes - array_sum($clockInEntriesArray));
            $message_success = 'Check 2';
            //Check 3: breaks available and Clock-in/Clock-out available
        } elseif (($CountBreakStarts != 0 && $CountBreakStops !== 0) && ($CountBreakStarts == $CountBreakStops) && ($CountClockIns == 1 && $CountClockOuts == 1)) {
            $netSumBreaksInMinutes = round(array_sum($breakStopEntriesArray) - array_sum($breakStartEntriesArray));
            $netWorkingTimeInMinutes = round((array_sum($clockOutEntriesArray) - array_sum($clockInEntriesArray)) - (array_sum($breakStopEntriesArray) - array_sum($breakStartEntriesArray)));
            $message_success = 'Check 3';
            // Check 4: breaks available and only Clock-in available
        } elseif (($CountBreakStarts != 0 && $CountBreakStops !== 0) && ($CountBreakStarts == $CountBreakStops) && ($CountClockIns == 1 && $CountClockOuts == 0)) {
            $netSumBreaksInMinutes = round(array_sum($breakStopEntriesArray) - array_sum($breakStartEntriesArray));
            $netWorkingTimeInMinutes = round((($currentTimeMinutes - array_sum($clockInEntriesArray)) - (array_sum($breakStopEntriesArray) - array_sum($breakStartEntriesArray))));
            $message_success = 'Check 4';

            // check for double entry clock-in and clock-out
        } elseif (($CountClockIns > 1 || $CountClockOuts > 1)) {
            $message_success = 'Check 5';
            $message_error = 'Double value Check-In or Check-Out';
            //check fot breaks no equal values
        } elseif (($CountBreakStarts != 0 && $CountBreakStops !== 0) && ($CountBreakStarts == $CountBreakStops)) {
            $message_success = 'Check 6';
            $message_error = 'Break-Starts_Stops not equal';

            //if more things are wrong
        } else {
            $message_success = 'Check 7';
            $message_error = 'More entry values needed';
        }

        //net working time conversion for DB
        $hours = ($netWorkingTimeInMinutes / 60);
        $minutes = $netWorkingTimeInMinutes % 60;
        $seconds = 0;
        $netWorkingTimeforDB = sprintf('%02d:%02d:%02d', $hours, $minutes, $seconds);



        //getting current status ... to finish

        $maxValue = null;
        $maxKey = null;

        foreach ($dayAttendanciesArray as $key => $value) {
            $currentValue = reset($value); // Extracting the numeric value from the array
            if ($maxValue === null || $currentValue > $maxValue) {
                $maxValue = $currentValue;
                $maxKey = $key;
            }
        }
        $statusMessage = 'No Entries';
        switch ($maxKey) {
            case '1':
                $statusMessage = 'Work Started';
                break;
            case '2':
                $statusMessage = 'Work Stopped';
                break;
            case '3':
                $statusMessage = 'Break Started';
                break;
            case '4':
                $statusMessage = 'Break Stopped';
                break;
        }



        return [
            'netSumBreaksInMinutes' => $netSumBreaksInMinutes,
            'netWorkingTimeInMinutes' => $netWorkingTimeInMinutes,
            'netWorkingTimeforDB' => $netWorkingTimeforDB,
            'message_success' => $message_success,
            'message_error' => $message_error,
            '$dayAttendanciesArray' => $dayAttendanciesArray,
            'latest_action' => $maxKey,
            'statusMessage' => $statusMessage,
        ];
    }
}
