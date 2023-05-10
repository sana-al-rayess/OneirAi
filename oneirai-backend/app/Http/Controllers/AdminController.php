<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller
{
   
    public function getUsers()
    {
      $users = User::where('type', 'user')->get();

      return response()->json([
          'status' => 'success',
          'data' => $users,
      ]);
    }

    public function userCount()
{
    $count = User::where('type', 'user')->count();

    return response()->json(['count' => $count]);
}


    public function getLocationStats() {
        $dreams = DB::table('dreams')
          ->join('users', 'dreams.user_id', '=', 'users.id')
          ->select('category', 'users.location', DB::raw('count(*) as count'))
          ->groupBy('category', 'users.location')
          ->get();
      
        $locations = $dreams->groupBy('location');
      
        $stats = [];
      
        foreach ($locations as $location => $dreamsByLocation) {
          $stats[] = [
            'location' => $location,
            'dreams' => $dreamsByLocation->toArray(),
          ];
        }
      
        return response()->json(['stats' => $stats]);
      }

}
