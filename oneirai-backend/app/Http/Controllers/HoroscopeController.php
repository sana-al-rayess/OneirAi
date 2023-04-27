<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;

class HoroscopeController extends Controller
{
    public function getHoroscope(Request $request)
    {
        $client = new Client(['base_uri' => 'https://api.openai.com']);
        $response = $client->request('POST', '/v1/engines/text-davinci-002/completions', [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => 'Bearer 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',
            ],
            'json' => [
                'prompt' => 'Daily Horoscope for ' . $request->input('sign'),
                'max_tokens' => 256,
                'temperature' => 0.7,
            ],
        ]);

        $horoscope = json_decode($response->getBody(), true)['choices'][0]['text'];
        return response()->json(['horoscope' => $horoscope]);
    }
}