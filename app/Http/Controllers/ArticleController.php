<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Resources\ArticleCollection;
use Illuminate\Support\Facades\Schema;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpFoundation\Response;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * Available query parameters:
     * integer limit    Limit the amount of results, return all elements if not specified.
     * string sort      A column of the model to sort by
     * string order     Sorting order, can be either asc or desc
     * 
     * In case of invalid parameter value, a 404 response is returned along with
     * a json body containing the error description.
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $table = Article::tableName();
        $columns = Schema::getColumnListing($table);

        $query = $request->query();

        $validator = validator($query, [
            'limit' => 'int|min:0',
            'order' => 'in:asc,desc',
            'sort' => Rule::in($columns)
        ]);

        if ($validator->fails())
        {
            return response()->json([
                'errors' => $validator->errors()
            ], Response::HTTP_BAD_REQUEST);
        }
       
        $validated = $validator->validated();

        $order = $validated['order'] ?? 'asc';
        $column = $validated['sort'] ?? 'id';
        $limit = $validated['limit'] ?? null;

        $articles =  Article::orderBy($column, $order);

        if ($limit)
        {
           return new ArticleCollection($articles->paginate($limit));
        }
        
        return new ArticleCollection($articles->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        //
    }
}
