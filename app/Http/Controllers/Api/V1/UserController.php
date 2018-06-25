<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getUserCurrent()
    {
        dd(Auth::id());
        dd(Auth::user());
        return response()->json([
            "data" => Auth::user(),
        ]);
    }
}
