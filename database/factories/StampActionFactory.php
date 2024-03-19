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
            'stamp_action' => $this->faker->randomElement(['clock-in', 'clock-out', 'break-start', 'break-stop']),
        ];
    }
}
