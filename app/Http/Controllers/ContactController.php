<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;

class ContactController extends Controller
{
    public function sendEmail(Request $request ) 
    {
        $validateData = $request->validate([
            'company' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        Mail::to('yourcompany@yourcompany.com')->send(new ContactFormMail($request->all()));

        return response()->json(['message' => 'Form was send successfully sent.'], 200);
    }
}
