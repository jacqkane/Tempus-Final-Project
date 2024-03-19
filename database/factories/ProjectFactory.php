<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Generator as Faker;
use App\Models\Project;

$factory->define(Project::class, function (Faker $faker) {
    return [
        'project_number' => $faker->unique()->numerify('PRJ###'), // unique numeric project number
        'project_name' => $faker->sentence,
        'start_date' => $faker->dateTimeBetween('-1 year', 'now'),
        'end_date' => $faker->dateTimeBetween('now', '+1 year'),
    ];
});
