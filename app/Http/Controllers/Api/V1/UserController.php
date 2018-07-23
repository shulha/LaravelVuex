<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Auth;

class UserController extends Controller
{
    public function getUserCurrent()
    {
        if (Auth::user()->email_verified) {
            $status = 200;
            $data = Auth::user();
        } else {
            $status = 403;
            $data = null;
        }

        return response()->json($data, $status);
    }
}
