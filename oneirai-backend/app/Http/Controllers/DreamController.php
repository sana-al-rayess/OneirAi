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

    public function deleteDream(Request $request, $id)
    {
        $dream = Dream::find($id);

        if (!$dream) {
            return response()->json([
                'status' => 'error',
                'message' => 'Dream not found',
            ], 404);
        }

        if ($dream->user_id != Auth::id()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $dream->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Dream deleted successfully',
        ]);
    }

    public function getDreams()
    {
        $dreams = Dream::where('user_id', Auth::id())->get();

        foreach ($dreams as $dream) {
            $dream->date = date('d-m-Y', strtotime($dream->date));
        }

        return response()->json([
            'status' => 'success',
            'data' => $dreams,
        ]);
    }

    public function searchByTitle(Request $request)
    {
        $query = $request->input('q');
        $user_id = $request->user()->id;

        $dreams = Dream::where('user_id', $user_id)
            ->where('title', 'like', "%$query%")
            ->orderBy('date', 'desc')
            ->get();

        return response()->json(['dreams' => $dreams]);
    }

    public function sortByDate(Request $request, $sort)
    {
        $user_id = $request->user()->id;

        $sortOrder = ($sort == 'recent') ? 'desc' : 'asc';
        $dreams = Dream::where('user_id', $user_id)
            ->orderBy('date', $sortOrder)
            ->get();

        return response()->json(['dreams' => $dreams]);
    }
}