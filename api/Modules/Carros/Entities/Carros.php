<?php

namespace Modules\Carros\Entities;

use Illuminate\Database\Eloquent\Model;

class Carros extends Model
{
    protected $fillable = ['marca','modelo','ano'];
    public $timestamps = false;
}
