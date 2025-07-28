<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Course;
use App\Models\Representative;
use App\Models\Batch;
use App\Models\PaymentMethod;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/courses', function () {
    return Course::all();
});

Route::get('/representatives', function () {
    return Representative::all();
});

Route::get('/batches', function () {
    return Batch::all();
});

Route::get('/payment-methods', function () {
    return PaymentMethod::all();
});
