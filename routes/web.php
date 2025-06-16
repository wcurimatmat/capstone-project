<?php

use Illuminate\Support\Facades\Route;

Route::get("/", function () {
    return inertia("Web/Home/Index");
});

Route::inertia("/shop", "Web/Shop/Index/Index");
Route::inertia("/about", "Web/About/Index");

Route::inertia("/shop/item-name", "Web/Shop/Show/Show");

// Auth

Route::inertia("/login/session/create", "Web/Auth/Login/Create");
Route::inertia("register/store", "Web/Auth/Register/Store");