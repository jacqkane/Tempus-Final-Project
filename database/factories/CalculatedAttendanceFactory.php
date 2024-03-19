<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\CalculatedAttendance;


$factory->define(CalculatedAttendance::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween(1, 15), // 15 users
        'date' => $faker->date(),
        'net_working_time' => $faker->time(),
    ];
});
