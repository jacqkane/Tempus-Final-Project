<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('internal_attendances', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('stamp_action_id');
            $table->timestamp('timestamp_test');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('internal_attendances');
    }
};
