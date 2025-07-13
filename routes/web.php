<?php

use Illuminate\Support\Facades\Route;

Route::get("/", function () {
    return inertia("Web/Home/Index");
})->name("home");
Route::inertia("/about", "Web/About/Index")->name("about");

Route::inertia("/catalogs", "Web/Catalog/Index/Index")->name("catalog.index");
Route::inertia("/catalogs/item-name", "Web/Catalog/Show/Show")->name("catalog.show");

Route::inertia("/cart", "Web/Cart/Index")->name("cart.index");

// Auth

Route::inertia("/login", "Web/Auth/Login/Create")->name("login");
Route::inertia("/register", "Web/Auth/Register/Store")->name("register");

// admin panel

Route::inertia("/admin", "Admin/Dashboard/Index")->name("dashboard.index");
Route::inertia("/admin/product", "Admin/Product/Index/Index")->name("product.index");
Route::inertia("/admin/order", "Admin/Order/Index/Index")->name("order.index");
Route::inertia("/admin/customer", "Admin/Customer/Index")->name("customer.index");