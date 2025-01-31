<?php

namespace App\Http\Controllers;

use App\Http\Resources\PhoneCodeCollection;
use App\Models\PhoneCode;
use Illuminate\Http\Request;

class PhoneCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new PhoneCodeCollection(PhoneCode::all());
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
     * @param  \App\Models\PhoneCode  $phoneCode
     * @return \Illuminate\Http\Response
     */
    public function show(PhoneCode $phoneCode)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PhoneCode  $phoneCode
     * @return \Illuminate\Http\Response
     */
    public function edit(PhoneCode $phoneCode)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PhoneCode  $phoneCode
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PhoneCode $phoneCode)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PhoneCode  $phoneCode
     * @return \Illuminate\Http\Response
     */
    public function destroy(PhoneCode $phoneCode)
    {
        //
    }
}
