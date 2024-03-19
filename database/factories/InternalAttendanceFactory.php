<?php

namespace Database\Factories;

use App\Models\InternalAttendance;
use Illuminate\Database\Eloquent\Factories\Factory;

class InternalAttendanceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(1, 15), // 15 users
            'stamp_action_id' => $this->faker->numberBetween(1, 4), // 4 stamp actions
            'timestamp' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
