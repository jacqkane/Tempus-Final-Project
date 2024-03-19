<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\StampAction;


$factory->define(StampAction::class, function (Faker $faker) {
    return [
        'stamp_action' => $faker->randomElement(['clock-in', 'clock-out', 'break-start', 'break-stop']),
    ];
});
