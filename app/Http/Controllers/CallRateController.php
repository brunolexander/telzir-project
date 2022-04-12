<?php

namespace App\Http\Controllers;

use App\Http\Resources\CallRate as ResourcesCallRate;
use App\Models\CallRate;
use Illuminate\Http\Request;

class CallRateController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $sourcePhoneCodeId
     * @param  int  $destinationPhoneId
     * @return \Illuminate\Http\Response
     */
    public function show(int $sourcePhoneCodeId, int $destinationPhoneId)
    {
        return new ResourcesCallRate(CallRate::where('source_id', $sourcePhoneCodeId)
            ->where('destination_id', $destinationPhoneId)->firstOrFail());
    }
}
