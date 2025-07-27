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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('candidate_full_name');
            $table->string('mobile_number');
            $table->string('email')->unique();
            $table->text('full_address');
            $table->string('payment_method');
            $table->string('sender_mobile_number');
            $table->decimal('amount_sent', 10, 2);
            $table->string('transaction_id');
            $table->string('course_interested');
            $table->string('bach_interested');
            $table->string('facebook_profile_link')->nullable();
            $table->string('representative_name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};