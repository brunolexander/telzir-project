<?php

namespace Database\Seeders;

use App\Models\CallRate;
use App\Models\PhoneCode;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CallRateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $phoneCodes = PhoneCode::pluck('id', 'code');
        $timestamp = now();

        CallRate::insert([
            [
                'source_id' => $phoneCodes[11],
                'destination_id' => $phoneCodes[16],
                'cost_per_minute' => 1.90,
                'created_at' => $timestamp
            ],
            [
                'source_id' => $phoneCodes[16],
                'destination_id' => $phoneCodes[11],
                'cost_per_minute' => 2.90,
                'created_at' => $timestamp
            ],
            [
                'source_id' => $phoneCodes[11],
                'destination_id' => $phoneCodes[17],
                'cost_per_minute' => 1.70,
                'created_at' => $timestamp
            ],
            [
                'source_id' => $phoneCodes[17],
                'destination_id' => $phoneCodes[11],
                'cost_per_minute' => 2.70,
                'created_at' => $timestamp
            ],
            [
                'source_id' => $phoneCodes[11],
                'destination_id' => $phoneCodes[18],
                'cost_per_minute' => 0.90,
                'created_at' => $timestamp
            ],
            [
                'source_id' => $phoneCodes[18],
                'destination_id' => $phoneCodes[11],
                'cost_per_minute' => 1.9,
                'created_at' => $timestamp
            ]
        ]);
    }
}
