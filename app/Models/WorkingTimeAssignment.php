<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkingTimeAssignment extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function costGroup()
    {
        return $this->belongsTo(CostGroup::class);
    }

    public function rfq()
    {
        return $this->belongsTo(CostGroup::class);
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function approvalStatus()
    {
        return $this->belongsTo(ApprovalStatus::class);
    }
}
