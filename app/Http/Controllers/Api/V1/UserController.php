<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\User\RegisterRequest;
use App\User;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = new User();
        $user->fill($request->all());
        $user->api_token = str_random(60);
        $user->save();

        return response()->json($user, 200);
    }
}
