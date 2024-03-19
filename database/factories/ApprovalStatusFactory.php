<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\ApprovalStatus;


$factory->define(ApprovalStatus::class, function (Faker $faker) {
    return [
        'status_name' => $faker->word,
    ];
});
