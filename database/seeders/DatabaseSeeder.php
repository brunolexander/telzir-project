<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Question;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            PlanSeeder::class,
            PhoneCodeSeeder::class,
            CallRateSeeder::class
        ]);

        Question::factory()->count(7)->create();
        Article::factory()->count(10)->create();
    }
}
