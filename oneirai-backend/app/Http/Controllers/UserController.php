<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }


    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
            'status' => 'success',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);

    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'age' => 'nullable|integer',
            'profile_picture' => 'nullable|string',

        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'age' => $request->age,
            'profile_picture' => $request->profile_picture,
            'type' => 'user'
        ]);

        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ], 200);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }

  

    public function updateUser(Request $request)
    {

        $user_id = Auth::id();
        $user_updated = User::find($user_id);
        $user_updated->name = $request->name;
        $user_updated->email = $request->email;
        $user_updated->Age = $request->Age;
        $user_updated->profile_picture = $request->profile_picture;
        $user_updated->location = $request->location;
        $user_updated->save();
        return response()->json([
            "status" => "success",
            "updated_user" => $user_updated
        ], 200);
    }

        public function updatePassword(Request $request)
    {
        $user_id = Auth::id();
        $password_updated = User::find($user_id);

        $validator = Validator::make($request->all(), [
            'current_password' => 'required',
            'password' => 'required|min:8|confirmed',
            'password_confirmation' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validator->errors()
            ], 422);
        }

        $current_password = $request->input('current_password');

        if (!Hash::check($current_password, $password_updated->password)) {
            return response()->json(['error' => 'The current password is incorrect.'], 422);
        }

        $password_updated->password = Hash::make($request->input('password'));
        $password_updated->save();

        return response()->json([
            "status" => "success",
            "updated_user" => $password_updated
        ], 200);
    }



   



    
}