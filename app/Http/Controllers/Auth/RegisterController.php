<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /* Where to redirect users after registration. */
    protected $redirectTo = RouteServiceProvider::HOME;

    /* Create a new controller instance. */
    public function __construct()
    {
        /* after login auth user redirect page */
        if (Auth::check() && Auth::user()->role->id == 1) {
            $this->redirectTo = route('admin.dashboard');
        } else {
            $this->redirectTo = route('user.dashboard');
        }
        $this->middleware('guest');
    }

    /* Get a validator for an incoming registration request. */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /* Create a new user instance after a valid registration. */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'role_id' => $data['role_id'],
            'password' => Hash::make($data['password']),
        ]);
    }
}
