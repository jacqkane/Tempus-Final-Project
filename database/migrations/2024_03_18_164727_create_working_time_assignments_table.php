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
        Schema::create('working_time_assignments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('project_number');
            $table->string('project_name');
            $table->string('project_code');
            $table->foreignId('cost_group_id');
            $table->string('cost_group_code');
            $table->string('cost_group_name');
            $table->string('cost_group_concat');
            $table->time('working_time_assigned');
            $table->string('comment')->nullable();
            $table->date('date');
            $table->string('rfq_id')->nullable();
            $table->string('rfq_number')->nullable();
            $table->string('rfq_name')->nullable();
            $table->string('rfq_concat')->nullable();
            $table->string('approval_status_id');
            $table->string('approval_status_name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('working_time_assignments');
    }
};
