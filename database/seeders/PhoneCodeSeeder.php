<?php

namespace Database\Seeders;

use App\Models\PhoneCode;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PhoneCodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $timestamp = now();

        PhoneCode::insert([
            ['code' => 11, 'state' => 'São Paulo, SP'],
            ['code' => 16, 'state' => 'São Paulo, SP'],
            ['code' => 17, 'state' => 'São Paulo, SP'],
            ['code' => 18, 'state' => 'São Paulo, SP']
        ]);
    }
}
