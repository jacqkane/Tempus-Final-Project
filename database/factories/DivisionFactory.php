<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\Division;


$factory->define(Division::class, function (Faker $faker) {
    return [
        'division_name' => $faker->word,
    ];
});
