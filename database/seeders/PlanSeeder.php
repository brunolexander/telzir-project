<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Plan;
use Faker\Generator as Faker;

class PlanSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		$timestamp = now();

	  	Plan::insert([

			['time' => 30, 'price' => 9.99, 'created_at' => $timestamp, 'key_features' => '[
					"Lorem ipsum dolor sit amet",
					"Lorem ipsum dolor sit amet",
					"Lorem ipsum dolor sit amet",
					"Lorem ipsum dolor sit amet",
					"Lorem ipsum dolor sit amet"
				]'
			],

			['time' => 60, 'price' => 19.99, 'created_at' => $timestamp, 'key_features' => '[
					"Lorem ipsum dolor sit amet",
					"Lorem ipsum dolor sit amet",
					"Lorem ipsum dolor sit amet",
					"Lorem ipsum dolor sit amet",
					"Lorem ipsum dolor sit amet"
				]'
			],

			['time' => 120, 'price' => 29.99, 'created_at' => $timestamp, 'key_features' => '[
					"Lorem ipsum dolor sit amet",
					"Lorem ipsum dolor sit amet",
					"Lorem ipsum dolor sit amet",
					"Lorem ipsum dolor sit amet",
					"Lorem ipsum dolor sit amet"
				]'
			]
		]);
	}
}
