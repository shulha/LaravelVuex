<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Auth;

class UserController extends Controller
{
    public function getUserCurrent()
    {
        return response()->json(Auth::user(), 200);
    }
}
