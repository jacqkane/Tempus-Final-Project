<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\Company;

$factory->define(Company::class, function (Faker $faker) {
    return [
        'company_name' => $faker->company,
    ];
});
