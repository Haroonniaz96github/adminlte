<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customer_order_id')->nullable();
            $table->string('question1')->nullable();
            $table->string('question2')->nullable();
            $table->string('name');
            $table->string('email');
            $table->longText('message');
            $table->tinyInteger('status')->default('0');
            $table->foreign('customer_order_id')->references('id')->on('customer_orders')->onDelete('cascade');
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
        Schema::dropIfExists('reviews');
    }
}
