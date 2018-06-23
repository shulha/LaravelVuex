<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
         return [
            "surname" => "required|max:255",
            "name" => "required|max:255",
            "middle_name" => "required|max:255",
            "email" => "required|email|max:255|unique:users",
            "password" => "required|confirmed",
        ];
    }
}
