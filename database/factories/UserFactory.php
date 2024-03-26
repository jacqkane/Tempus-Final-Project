<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'password' => bcrypt('password'), // Hashed password 'password'
            'remember_token' => Str::random(10),
            'company_id' => $this->faker->numberBetween(1, 5), // 5 companies
            'division_id' => $this->faker->numberBetween(1, 5), // 5 divisions
        ];
    }
}
