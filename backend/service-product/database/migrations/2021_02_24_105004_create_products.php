<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProducts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table-> string('name');
            $table-> longText('description')->nullable();
            $table-> string('review');
            $table-> string('thumbnail')->nullable();
            $table-> enum('category', ['house', 'technology', 'food and drink', 'random stuff', 'others']);
            $table-> integer('price')->default(0)->nullable();
            $table-> foreignId('owner_id')->constrained('owners')->onDelete('cascade');
            $table-> integer('stock');
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
        Schema::dropIfExists('products');
    }
}
