<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function division()
    {
        return $this->belongsTo(Division::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function internalAttendances()
    {
        return $this->hasMany(InternalAttendance::class);
    }

    public function giritonAttendances()
    {
        return $this->hasMany(GiritonAttendance::class);
    }

    public function calculatedAttendances()
    {
        return $this->hasMany(CalculatedAttendance::class);
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }

    public function workingTimeAssignments()
    {
        return $this->hasMany(WorkingTimeAssignment::class);
    }
}
