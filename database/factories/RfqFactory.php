<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\Rfq;

$factory->define(Rfq::class, function (Faker $faker) {
    return [
        'rfq_number' => $faker->unique()->numerify('RFQ###'),
        'rfq_name' => $faker->sentence,
        'user_id' => \App\Models\User::factory(),
        'start_date' => $faker->date(),
        'end_date' => $faker->date(),
    ];
});
