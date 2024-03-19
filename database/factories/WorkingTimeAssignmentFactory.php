<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\WorkingTimeAssignment;


$factory->define(WorkingTimeAssignment::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween(1, 10), // Assuming you have 10 users
        'project_id' => $faker->numberBetween(1, 20), // Assuming you have 20 projects
        'cost_group_id' => $faker->numberBetween(1, 5), // Assuming you have 5 cost groups
        'working_time_assigned' => $faker->time(),
        'comment' => $faker->sentence,
        'date' => $faker->date(),
        'rfq_id' => $faker->word, // Assuming rfq_id is a string
        'approval_status_id' => $faker->numberBetween(1, 3), // Assuming you have 3 approval statuses
    ];
});
