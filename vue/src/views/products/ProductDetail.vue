<script setup>
import Footer from "./../../components/Footer.vue"
import Subscribe from "./../../components/Subscribe.vue";
import { useProductsStore } from "../../stores/products";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useauthStore } from "../../stores/auth";
import { useCartStore } from "../../stores/cart";
const route = useRoute();
const slug = route.params.slug; 
const productStore = useProductsStore();
const auth = useauthStore();
const cartStore = useCartStore();

onMounted(async () => {    
    await auth.getUser();
    await productStore.fetchProduct(slug);
    await cartStore.fetchCartItems(); 
    await cartStore.cartTotal();   
});

let data = {
    "slug": slug,
    "quantity":1,
}

const addToCart = async () => {
    await cartStore.addToCart(data);
    await cartStore.fetchCartItems();    
};

</script>
<template>
 <div v-if="auth.loading || productStore.productsLoading || cartStore.cartLoading">
<div>Loading ...</div>
 </div>
 

 <div v-else>
       
<!-- product detail-->
 <div class="product-detail">
    <div class="container py-5">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-md-5">
                        <!--carousel-->
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="../../assets/images/backend-development.jpg" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                <img src="../../assets/images/backend-development.jpg" class="d-block w-100" alt="...">
                                </div>
                                <div class="carousel-item">
                                <img src="../../assets/images/backend-development.jpg" class="d-block w-100" alt="...">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                         <!--carousel-->
                    </div>
                    <div class="col-md-7 product">
                        <h2>{{productStore.product?.name}}</h2>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <div class="prod-desc">
                        <p>{{productStore.product?.description}}</p>
                        </div>
                        <h2>Ksh. {{productStore.product?.price}}</h2>
                        <div class="quantity">
                            <button class="decrease"><i class="fa fa-minus" ></i></button>
                           <input type="number" min="1" v-model="data.quantity" readonly>
                            <button class="increase"><i class="fa fa-plus"></i></button>
                        </div>
                        <div class="buttons">
                            <button @click.prevent="addToCart()"  class="button-1"><i class="fa fa-shopping-bag"></i></button>
                            <button><i class="fa fa-heart"></i></button>
                            <button><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    </div>
 </div>   
 <div class="prod-tabs">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="nav nav-pills mb-3 nav-justified" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Description</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Features</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Reviews</button>
                </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="row">
                        <h4>Product Description</h4>
                        <p>{{ productStore.product?.description }}</p>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div class="row">
                        <h4>Product Features</h4>
                        <p>{{ productStore.product?.features }}</p>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="row">
                        <h4>Felix Omundi - <span>01-14-2023</span> </h4>
                        <p> <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i></p>
                        <p class="rev-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae pariatur illo odio perferendis maxime temporibus repellat veritatis fuga accusamus! Voluptatem?</p>        
                        <form action="">
                            <p>Give Your Review</p>
                            <div class="rating mb-3">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                           <div class="row">
                            <div class="col-md-6 mb-3">
                                <input type="text" placeholder="Name" class="form-control">
                            </div>
                            <div class="col-md-6 mb-3">
                                <input type="email" placeholder="Email" class="form-control">
                            </div>
                            <div class="col-md-12 mb-3">
                                <textarea name="review" id="" cols="5" rows="5" placeholder="Review" class="form-control"></textarea>
                            </div>
                            <div>
                                <button class="submit">Submit</button>
                            </div>
                           </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>

 </div>
 <!-- product detail -->
 
 
  <!-- subscribe -->
  <Subscribe></Subscribe>
  <!-- subscribe -->

<!-- footer -->
<Footer></Footer>
<!-- footer-->


</div>

</template>
<style scoped>
.product-detail{
    width: 100%;
    background-color: #fff;
}
.prod-desc p{
    display: block;
}
.product-detail .product h2{
    font-size: 30px;
    color: #088178;
}
.product-detail .product .rating i{
    font-size: 20px;
    color: #088178;
}
.product-detail .product .quantity{
   display: flex;
   width: 100px;
   margin-bottom: 20px;
}
.product-detail .product .quantity input{
      width: 50px;
      border: 2px solid #088178;
      box-shadow: none;
}

.product-detail .product .quantity input:focus{
    box-shadow: none;
    outline: none;
}

.product-detail .product .quantity button{
    background-color: #088178;
    color: #fff;
    box-shadow: none;
    border: none;
}

.product-detail .product .quantity .decrease{
margin-right: 3px;
}
.product-detail .product .quantity .increase {
margin-left: 3px;
}
.product-detail .product .buttons{
    display: flex;
    align-items: flex-start;
}
.product-detail .product .buttons button{
   height: 50px;
   width: 50px;
   color: #fff;
   cursor: pointer;
   margin-right: 10x;
   margin-left: 10px;
   background-color: #088178;
   border: none;
}
.product-detail .product .buttons button.button-1{
margin-left: 0;
}
.product-detail .product .buttons button:hover{
    background-color: #fff;
    color: #088178;
    border: 2px solid #088178;
}
.prod-tabs{
    width: 100%;
}
.prod-tabs ul.nav{
    background-color: #909090;
    color: #fff;
}
.prod-tabs ul.nav li.nav-item .nav-link{
color: #fff;
}

.prod-tabs ul.nav li.nav-item .nav-link.active{
color: #fff;
background-color: #088178;
}
.prod-tabs .col-12{
    background-color: #ffff;    
    padding-bottom: 10px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.prod-tabs .tab-content{
    padding: 20px;
}
.prod-tabs .tab-content h4{
 font-size: 20px;
 color: #088178;
}
.prod-tabs .tab-content h4>span{
    font-size: 15px;
    color: grey;
}
.prod-tabs .tab-content .row form input,.prod-tabs .tab-content .row form textarea{
box-shadow: none;
background-color: #ffff;
color: black;
}

.prod-tabs .tab-content .row form input:focus,
.prod-tabs .tab-content .row form textarea:focus{
border: 2px solid #088178;
}

.prod-tabs .tab-content .row form button.submit{
    cursor: pointer;
    color: #fff;
    background-color: #088178;
    border: none;
    border-radius: 3px;
    font-size: 20px;

}
</style>

