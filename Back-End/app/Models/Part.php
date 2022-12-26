<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Part extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'part_number',
        'name',
        'price',
        'available'
    ];

    public function cars()
    {
        return $this->belongsToMany(Car::class)->using(CarPart::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}