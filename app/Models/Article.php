<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\CanGetTableNameStatically;

class Article extends Model
{
    use HasFactory, CanGetTableNameStatically;
}
