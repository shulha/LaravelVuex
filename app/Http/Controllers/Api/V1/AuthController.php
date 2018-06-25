<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Controllers\Controller;
use App\Mail\ConfirmationEmail;
use App\User;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Auth;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $api_token = str_random(60);

        $user = new User();
        $user->fill($request->except("password"));
        $user->password = bcrypt($request->input("password"));
        $user->api_token = $api_token;
        $user->save();

        Mail::to($user)->send(new ConfirmationEmail($api_token));

        return response()->json([
            "token" => $api_token,
        ], 200);
    }

    public function emailConfirmation(Request $request)
    {
        $status = 200;
        $user = User::where("api_token", $request->input("token"))->first();

        if (!is_null($user)) {
            if ($user->email_verified === 0) {
                $user->email_verified = 1;
                $user->save();
            } else {
                $status = 208;
            }
        } else {
            $status = 404;
        }
        return response()->json([], $status);
    }

    public function login(LoginRequest $request)
    {
        /*
         * Auth::once method to log a user into the application for a single request.
         * No sessions or cookies will be utilized.
         */
        if (Auth::once(["email" => $request->input("email"), "password" => $request->input("password")])) {
            return response()->json([
                "token" => Auth::user()->api_token,
            ]);
        } else {
            throw new AuthenticationException;
        }
    }
}
