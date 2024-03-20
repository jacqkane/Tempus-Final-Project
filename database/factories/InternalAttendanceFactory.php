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
            'user_id' => \App\Models\User::factory()->create()->id,
            'stamp_action_id' => \App\Models\StampAction::factory()->create()->id,
            'timestamp' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
