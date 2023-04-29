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
                'prompt' => "act like you are an astrologist, you predict compatibility between couples according to birthdates: What is the compatibility of two people born on $userBirthday and $partnerBirthday? do this in 5 lines ",
                'max_tokens' => 500,
                'temperature' => 0.5,
                // 'stop' => ['\n'],
            ],
        ]);

        $data = json_decode($response->getBody(), true);
        $compatibilityScore = $data['choices'][0]['text'];

        return response()->json(['compatibility' => $compatibilityScore]);
    }


    public function getPersonality(Request $request)
    {
        $userBirthday = $request->input('userBirthday');

        $client = new Client(['base_uri' => 'https://api.openai.com/v1/']);
        $response = $client->request('POST', 'engines/text-davinci-002/completions', [
            'headers' => [
                'Authorization' => 'Bearer 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',
                'Content-Type' => 'application/json',
            ],
            'json' => [
                'prompt' => "act like you are an astrologist,you analyse personality 
            according to birthdates: I was born on $userBirthday  analyse zodiac sign, lucky number, color, birth stone in a table",
                'max_tokens' => 500,
                'temperature' => 0.5,
            ],
        ]);

        $data = json_decode($response->getBody(), true);
        $personalityData = $data['choices'][0]['text'];

        // Split the response by newlines to separate the different pieces of data
        $rows = explode("\n", $personalityData);

        // Build an HTML table to display the data
        $tableHtml = '<table>';
        foreach ($rows as $row) {
            $tableHtml .= '<tr>';
            // Split each row of data by the pipe character
            $rowData = explode('|', $row);
            foreach ($rowData as $cell) {
                $tableHtml .= '<td>' . trim($cell) . '</td>';
            }
            $tableHtml .= '</tr>';
        }
        $tableHtml .= '</table>';

        return response()->json(['table' => $tableHtml]);
    }




}