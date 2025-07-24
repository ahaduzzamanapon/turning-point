<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        'candidate_full_name',
        'mobile_number',
        'email',
        'full_address',
        'payment_method',
        'sender_mobile_number',
        'amount_sent',
        'transaction_id',
        'course_interested',
        'facebook_profile_link',
        'representative_name',
    ];
}