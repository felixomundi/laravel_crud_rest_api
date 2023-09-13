<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('product_categories')->delete();
        $data = [
            ['name' => 'Electronics', "status"=>0,  "slug"=>"electronics",'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
            ['name' => 'Women', "status"=>0,"slug"=>"women",'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
            ['name' => 'Men', "status"=>0,"slug"=>"men",'created_at' => Carbon::now()->format('Y-m-d H:i:s'),],
        ];
        DB::table('product_categories')->insert($data);
    }
}
