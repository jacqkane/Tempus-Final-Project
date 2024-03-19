<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StampAction extends Model
{
    use HasFactory;

    public function internalAttendances()
    {
        return $this->hasMany(InternalAttendance::class);
    }

}
