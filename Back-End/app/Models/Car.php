<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Car extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'make',
        'model',
        'year',
        'engine_size'
    ];

    public function parts()
    {
        return $this->belongsToMany(Part::class)->using(CarPart::class);
    }

    public function scopeFilter($query, $filters)
    {
        if ($make = $filters['make']) {
            $query->where('make', $make);
        }

        if ($model = $filters['model']) {
            $query->where('model', $model);
        }

        if ($year = $filters['year']) {
            $query->where('year', $year);
        }

        if ($engine_size = $filters['engine_size']) {
            $query->where('engine_size', $engine_size);
        }

        return $query;
    }
}