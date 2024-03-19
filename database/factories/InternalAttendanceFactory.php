<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\InternalAttendance;


$factory->define(InternalAttendance::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween(1, 15), // 15 users
        'stamp_action_id' => $faker->numberBetween(1, 4), // 4 stamp actions
        'timestamp' => $faker->dateTimeBetween('-1 year', 'now'),
    ];
});
