<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use App\Models\User;


$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => bcrypt('password'), // Hashed password 'password'
        'remember_token' => Str::random(10),
        'company_id' => $faker->numberBetween(1, 5), // 5 companies
        'role_id' => $faker->numberBetween(1, 4), // 4 roles
        'division_id' => $faker->numberBetween(1, 5), // 5 divisions
    ];
});
