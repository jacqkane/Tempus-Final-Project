<?php

namespace Database\Factories;

use App\Models\CostGroup;
use Illuminate\Database\Eloquent\Factories\Factory;

class CostGroupFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'cost_group_code' => $this->faker->unique()->numerify('CG###'),
            'cost_group_name' => $this->faker->word,
        ];
    }
}
