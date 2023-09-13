<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("name")->unique();
            $table->string("slug")->unique();
            $table->foreignId("product_category_id")->constrained()->onDelete("cascade");
            $table->float("price")->default("0");
            $table->string("quantity")->default("0");
            $table->float("older_price")->nullable();
            $table->float("tax_amount")->nullable();
            $table->longText("features")->nullable();
            $table->longText("faq")->nullable();
            $table->longText("description");
            $table->tinyInteger("trending")->default("0");
            $table->tinyInteger("popular")->default("0");
            $table->string("meta_title")->nullable();
            $table->string("meta_keyword")->nullable();
            $table->mediumText("meta_description")->nullable();
            $table->tinyInteger("status")->default("0")->comment("0=visible, 1=hidden");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
