<?php

namespace App\Models;

use App\Models\ProductCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Product extends Model
{
    use HasFactory;
    protected $table = "products";
    protected $fillable = [
        "name",
        "description",
        "price",
        "slug",
        "meta_title",
        "meta_keyword",
        "meta_description",
        "status",
        "older_price",
        "quantity",
        "features",
        "faq",
        "trending",
        "tax_amount",
        "product_category_id",
    ];
    public function category(){
        return $this->belongsTo(ProductCategory::class, "product_category_id", "id");
    }
   
}
