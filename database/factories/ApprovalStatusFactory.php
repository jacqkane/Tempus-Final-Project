<?php

namespace Database\Factories;

use App\Models\ApprovalStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

class ApprovalStatusFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'status_name' => $this->faker->word,
        ];
    }
}
