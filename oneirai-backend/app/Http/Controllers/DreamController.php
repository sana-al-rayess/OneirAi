<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Models\Dream;
use Illuminate\Support\Facades\Http;


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

    public function getResponse(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $message = $data['message'];

        $url = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

        $headers = array(
            'Content-Type: application/json',
            'Authorization: Bearer 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',
        );

        $data = array(
            'prompt' => $message . ' interpret this dream in maximum 3 lines, extract the elements in this dream, tell the meaning of each element',
            'temperature' => 0.4,
            'max_tokens' => 1000,
            'n' => 1,
            // 'stop' => ["\n",],
        );

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        $response = curl_exec($ch);

        curl_close($ch);

        return $response;
    }


    public function generateImage(Request $request)
    {
        $apiKey = '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';
        $apiUrl = 'https://api.openai.com/v1/images/generations';
    
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $apiKey,
        ])->post($apiUrl, [
            'model' => 'image-alpha-001',
            'prompt' => $request->input('prompt'),
            'num_images' => 2,
            'size' => '256x256',
          
        ]);
    
        return response($response->body(), $response->status());
    }
}