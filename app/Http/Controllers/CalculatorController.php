<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use App\Models\CallRate;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CalculatorController extends Controller
{
    /**
     * Calculate the cost of a call.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param int $plan         Plan id
     * @param int $source       Source PhoneCode id
     * @param int $destination  Destionation PhoneCode id
     * @param int $duration     Call duration
     * 
     * @return \Illuminate\Http\Response
     */
    public function calculateCallCost(Request $request, int $plan, int $source, int $destination, int $duration)
    {
        $errors = [];

        $plan = Plan::find($plan);

        if (!$plan)
        {
            $errors['plan'] = 'The provided plan id is invalid.';
        }

        $sourcePhoneExists = CallRate::where('source_id', $source)->exists();

        if (!$sourcePhoneExists)
        {
            $errors['source'] = 'The provided source id is invalid.';
        }

        $callRate = CallRate::where('source_id', $source)
            ->where('destination_id', $destination)
            ->first();

        if (!$callRate)
        {
            $errors['destination'] = 'The provided destination id is invalid.';
        }

        if (!empty($errors))
        {
            return response()->json([
                'errors' => $errors
            ], Response::HTTP_NOT_FOUND);
        }

        $duration = max(0, $duration);

        // Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto

        $durationWithoutPlan = max(0, $duration - $plan->time);
        $costWithPlan = ($durationWithoutPlan * $callRate->cost_per_minute) * 1.1;
        $costWithoutPlan = $duration * $callRate->cost_per_minute;

        return response()->json([
            'costWithPlan' => $costWithPlan,
            'costWithoutPlan' => $costWithoutPlan
        ]);
    }
}
