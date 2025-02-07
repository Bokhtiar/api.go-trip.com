<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ConfirmsPasswords;


class ConfirmPasswordController extends Controller
{
    /*Confirm Password Controller
    |--------------------------------------------------------------------------
    | This controller is responsible for handling password confirmations and
    | uses a simple trait to include the behavior. You're free to explore
    | this trait and override any functions that require customization.
    |
    */

    use ConfirmsPasswords;

    /* Where to redirect users when the intended url fails. */
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

        $this->middleware('auth');
    }
}
