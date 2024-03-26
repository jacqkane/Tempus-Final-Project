<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rfq extends Model
{
    use HasFactory;

    protected $fillable = [
        'rfq_number',
        'rfq_name',
    ];

    public function workingTimeAssignments()
    {
        return $this->hasMany(WorkingTimeAssignment::class);
    }
}
