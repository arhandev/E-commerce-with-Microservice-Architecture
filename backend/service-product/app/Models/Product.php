<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table='products';

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:m:s',
        'updated_at' => 'datetime:Y-m-d H:m:s'
    ];

    protected $fillable=[
        'name', 'description', 'thumbnail', 
        'category', 'price', 'owner_id',
        'stock'
    ];

    public function owner(){
        return $this->belongsTo('App\Models\Owner')->orderBy('id', 'ASC');
    }

    public function images(){
        return $this->hasMany('App\Models\ImageProduct')->orderBy('id', 'DESC');
    }

    public function reviews(){
        return $this->hasMany('App\Models\Review')->orderBy('id', 'DESC');
    }
}
