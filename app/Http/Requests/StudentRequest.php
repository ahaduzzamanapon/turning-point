<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'candidate_full_name' => 'required|string|max:255',
            'mobile_number' => 'required|string|max:20',
            'email' => 'required|string|email|max:255|unique:students,email,' . ($this->student->id ?? ''),
            'full_address' => 'required|string',
            'payment_method' => 'required|string|max:255',
            'sender_mobile_number' => 'required|string|max:20',
            'amount_sent' => 'required|numeric',
            'transaction_id' => 'required|string|max:255',
            'course_interested' => 'required|string|max:255',
            'facebook_profile_link' => 'nullable|url|max:255',
            'representative_name' => 'required|string|max:255',
        ];
    }
}