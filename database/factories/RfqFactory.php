<?php

namespace Database\Factories;

use App\Models\Rfq;
use Illuminate\Database\Eloquent\Factories\Factory;

class RfqFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'rfq_number' => $this->faker->unique()->numerify('RFQ###'),
            'rfq_name' => $this->faker->sentence,
            'user_id' => \App\Models\User::factory(),
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->date(),
        ];
    }
}
