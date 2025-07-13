<?php

use Illuminate\Support\Facades\Route;

Route::get("/", function () {
    return inertia("User/Home/Index");
})->name("home");
Route::inertia("/about", "User/About/Index")->name("about");

Route::inertia("/catalogs", "User/Catalog/Index/Index")->name("catalog.index");
Route::inertia("/catalogs/item-name", "User/Catalog/Show/Show")->name("catalog.show");

Route::inertia("/cart", "User/Cart/Index")->name("cart.index");

// Auth

Route::inertia("/login", "User/Auth/Login/Create")->name("login");
Route::inertia("/register", "User/Auth/Register/Store")->name("register");

// admin panel

Route::inertia("/admin", "Admin/Dashboard/Index")->name("dashboard.index");
Route::inertia("/admin/product", "Admin/Product/Index/Index")->name("product.index");
Route::inertia("/admin/order", "Admin/Order/Index/Index")->name("order.index");
Route::inertia("/admin/customer", "Admin/Customer/Index")->name("customer.index");