<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\Dream;

class DreamController extends Controller
{
    public function addDream(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'date' => 'required'
        ]);
    
        $dream = Dream::create([
            'user_id' => Auth::id(),
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'date' => $request->input('date'),
        ]);
    
        return response()->json([
            'status' => 'success',
            'message' => 'Dream saved successfully',
            'dream' => $dream,
        ]);
    }
    
}