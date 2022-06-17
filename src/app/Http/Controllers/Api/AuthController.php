<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\User;
use Illuminate\support\Facades\Auth;
use Illuminate\support\Facades\Hash;
use Carbon\Carbon;
use App\Http\Controllers\Controller;
 use Illuminate\Support\Str;
//  use Validator;

class AuthController extends Controller
{

    public function signup(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:5'
        ]);


        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'api_token' => Str::random(80)

        ]);
        $token = Str::random(80);

        $user->forceFill([
            'api_token' => hash('sha256', $token),
        ])->save();

        $user->save();

        $credentials = request(['email', 'password']);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid email or password'
            ], 401);
        }

        return response()->json([
            'user' => Auth::user(),
            'access_token' => $user->api_token,
            'message' => 'success'
        ], 200);
    }


    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required', 
            'password' => 'required|string'
        ]);

        $credentials = request(['email', 'password']);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid email or password'
            ], 401);
        }

        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');

        return response()->json([
            'user' => Auth::user(),
            'access_token' => $tokenResult->plainTextToken,
            'token_type' => 'Bearer',
            'message' => 'success'

        ]);
    }

}
