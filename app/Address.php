<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $table = 'mac_address';
    protected $primaryKey = 'address';
    public $incrementing = false;
    protected $keyType = 'string';
    public $timestamps = false;
}