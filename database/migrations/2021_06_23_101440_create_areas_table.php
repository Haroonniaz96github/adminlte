<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAreasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('areas', function (Blueprint $table) {
            $table->id();
            $table->string('area_name');
            $table->string('area_slug');
            $table->string('title');
            $table->string('meta_title')->nullable();
            $table->string('banner_title');
            $table->longText('meta_description')->nullable();
            $table->string('background_image');
            $table->longText('petrol_in_diesel');
            $table->longText('diesel_in_petrol');
            $table->longText('adblue_in_flue_tank');
            $table->longText('fuel_removal')->nullable();
            $table->longText('re_fueling')->nullable();
            $table->longText('fuel_disposal')->nullable();
            $table->string('phone_number');
            $table->string('email');
            $table->string('map');
            $table->tinyInteger('reviews')->default('1');
            $table->tinyInteger('fuels')->default('1');
            $table->tinyInteger('validity')->default('1');
            $table->tinyInteger('breakdown')->default('1');
            $table->integer('sort')->default('1');
            $table->tinyInteger('status')->default('1');
            $table->tinyInteger('other_areas')->default('covered');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('areas');
    }
}
