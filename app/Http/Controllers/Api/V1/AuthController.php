<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\User\RegisterRequest;
use App\Http\Controllers\Controller;
use App\User;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $api_token = str_random(60);

        $user = new User();
        $user->fill($request->all());
        $user->api_token = $api_token;
        $user->save();

        return response()->json([
            "token" => $api_token,
        ], 200);
    }
}
