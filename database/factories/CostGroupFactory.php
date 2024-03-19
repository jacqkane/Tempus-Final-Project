<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\CostGroup;


$factory->define(CostGroup::class, function (Faker $faker) {
    return [
        'cost_group_code' => $faker->unique()->numerify('CG###'),
        'cost_group_name' => $faker->word,
    ];
});
