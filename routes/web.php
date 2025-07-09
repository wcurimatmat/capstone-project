<?php

use Illuminate\Support\Facades\Route;

Route::get("/", function () {
    return inertia("Web/Home/Index");
});

Route::inertia("/shop", "Web/Shop/Index/Index")->name("shop.index");
Route::inertia("/about", "Web/About/Index");

Route::inertia("/shop/item-name", "Web/Shop/Show/Show");
Route::inertia("/items", "Web/Cart/Index")->name("cart.index");

// Auth

Route::inertia("/login/session/create", "Web/Auth/Login/Create")->name("auth.create");
Route::inertia("register/store", "Web/Auth/Register/Store")->name("auth.store");