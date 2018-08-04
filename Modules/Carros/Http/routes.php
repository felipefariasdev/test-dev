<?php

Route::group(['middleware' => 'api', 'prefix' => 'api', 'namespace' => 'Modules\Carros\Http\Controllers'], function()
{
    Route::resource('carros', 'CarrosController');
});
