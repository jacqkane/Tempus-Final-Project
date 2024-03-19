<?php

namespace Database\Factories;

use App\Models\WorkingTimeAssignment;
use Illuminate\Database\Eloquent\Factories\Factory;

class WorkingTimeAssignmentFactory extends Factory
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
            'project_id' => $this->faker->numberBetween(1, 10), // 10 projects
            'cost_group_id' => $this->faker->numberBetween(1, 3), // 3 cost groups
            'working_time_assigned' => $this->faker->time(),
            'comment' => $this->faker->sentence,
            'date' => $this->faker->date(),
            'rfq_id' => $this->faker->word, // rfq_id is a string
            'approval_status_id' => $this->faker->numberBetween(1, 3), // Assuming 3 approval statuses
        ];
    }
}
