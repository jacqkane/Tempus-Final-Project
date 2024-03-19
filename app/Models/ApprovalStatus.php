<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApprovalStatus extends Model
{
    use HasFactory;

    public function workingTimeAssignments()
    {
        return $this->hasMany(WorkingTimeAssignment::class);
    }
}
