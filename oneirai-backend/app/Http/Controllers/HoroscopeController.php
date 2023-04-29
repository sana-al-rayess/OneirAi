<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
                'prompt' => 'Get the current day and predict the Daily Horoscope for ' . $request->input('sign'),
                'max_tokens' => 256,
                'temperature' => 0.7,
            ],
        ]);

        $horoscope = json_decode($response->getBody(), true)['choices'][0]['text'];
        return response()->json(['horoscope' => $horoscope]);
    }


    public function getCompatibility(Request $request)
    {

        $userBirthday = $request->input('userBirthday');
        $partnerBirthday = $request->input('partnerBirthday');


        $client = new Client(['base_uri' => 'https://api.openai.com/v1/']);
        $response = $client->request('POST', 'engines/text-davinci-002/completions', [
            'headers' => [
                'Authorization' => 'Bearer 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',
                'Content-Type' => 'application/json',
            ],
            'json' => [
                'prompt' => "What is the compatibility of two people born on $userBirthday and $partnerBirthday? do this in 5 lines ",
                'max_tokens' => 500,
                'temperature' => 0.5,
                // 'stop' => ['\n'],
            ],
        ]);

        $data = json_decode($response->getBody(), true);
        $compatibilityScore = $data['choices'][0]['text'];

        return response()->json(['compatibility' => $compatibilityScore]);
    }



}