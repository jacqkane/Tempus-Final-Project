<?php

namespace Database\Factories;

use App\Models\StampAction;
use Illuminate\Database\Eloquent\Factories\Factory;

class StampActionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'internal_attendance_id' => $this->faker->numberBetween(1, 15),
            'name' => $this->faker->randomElement(['clock-in', 'clock-out', 'break-start', 'break-stop']),
        ];
    }
}
