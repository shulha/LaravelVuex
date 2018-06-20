<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\User\RegisterRequest;
use App\User;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $api_token = str_random(60);

        $user = new User();
        $user->surname = $request->input("surname");
        $user->name = $request->input("name");
        $user->middle_name = $request->input("middle_name");
        $user->email = $request->input("email");
        $user->password = bcrypt($request->input("password"));
        $user->api_token = $api_token;
        $user->save();

        return response()->json([
            $user,
        ], 200);
    }
}
