<?php

use Illuminate\Support\Facades\Route;

Route::get("/", function () {
    return inertia("Web/Home/Index");
});
Route::inertia("/about", "Web/About/Index")->name("about");

Route::inertia("/catalogs", "Web/Catalog/Index/Index")->name("catalog.index");
Route::inertia("/catalogs/item-name", "Web/Catalog/Show/Show");

Route::inertia("/cart", "Web/Cart/Index")->name("cart.index");

// Auth

Route::inertia("/login/session/create", "Web/Auth/Login/Create")->name("auth.create");
Route::inertia("register/store", "Web/Auth/Register/Store")->name("auth.store");

// admin panel

Route::inertia("/admin", "Admin/Dashboard/Index")->name("dashboard.index");
Route::inertia("/admin/product", "Admin/Product/Index/Index")->name("product.index");
Route::inertia("/admin/order", "Admin/Order/Index/Index")->name("order.index");
Route::inertia("/admin/customer", "Admin/Customer/Index")->name("customer.index");