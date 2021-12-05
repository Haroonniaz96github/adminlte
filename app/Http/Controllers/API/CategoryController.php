<?php
namespace App\Http\Controllers\API;

use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

public function index()
{
$categories = Category::latest()->get();

return response()->json([
"categories" => $categories
],200);
}

}
