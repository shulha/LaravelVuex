<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        "surname",
        "name",
        "middle_name",
        "email",
        "password",
        "api_token",
    ];

    protected $hidden = [
        "password",
        "remember_token",
        "api_token",
    ];
}
