<?php

namespace Database\Factories;

use App\Models\CalculatedAttendance;
use Illuminate\Database\Eloquent\Factories\Factory;

class CalculatedAttendanceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(1, 15), // Assuming 15 users
            'date' => $this->faker->date(),
            'net_working_time' => $this->faker->time(),
        ];
    }
}
