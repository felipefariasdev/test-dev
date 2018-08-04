<?php

Route::group(['middleware' => 'web', 'prefix' => 'carros', 'namespace' => 'Modules\Carros\Http\Controllers'], function()
{
    Route::get('/', 'CarrosController@index');
});
