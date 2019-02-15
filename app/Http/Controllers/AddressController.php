<?php

namespace App\Http\Controllers;
use App\Address as Address;

class AddressController extends Controller
{
    public function list()
    {
        return Address::all();
    }
}
