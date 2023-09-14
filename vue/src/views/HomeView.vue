<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useauthStore } from '../stores/auth';
import { useProductsStore } from '../stores/products';
import Footer from "./../components/Footer.vue"
import Subscribe from "./../components/Subscribe.vue";

const auth = useauthStore();
const productStore = useProductsStore();
onMounted(async() => {  
  await auth.getUser();
  await productStore.homeProducts();

});

function getImage() {  
  return "http://localhost:8000/products/";
}

</script>

<template>   
 <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/images/web-design-and-development.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets//images/technical-consulting.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets//images/database-design-and-management.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
 </div>
 <div class="products">
  <div class="container-fluid">
    <div class="row">
      <div class="text-center">
       <h1> All Products</h1>
      </div>

      <div v-if="productStore.productsLoading" class="row">
        <div>
          Loading ...
        </div>
      </div>
      <div v-else-if="productStore.productErrors" class="row">
      
        <div class="text-center text-danger">
          {{ productStore.productErrors }}
        </div>
        
      </div>

      <div v-else-if="!productStore.productsLoading && productStore.products.length <0" class="row">
        <div>
          <p class="text-danger">
            No products found
          </p>
        </div>
      </div>
   <div v-else class="row">
    <div class="col-md-3 gap-4 prod mb-4" v-for="(product, index) in productStore.products" :key="index">
        <div class="card p-2">
          <img :src="getImage() + product.image" alt="">
          <h4><RouterLink :to="{path: '/product/'+product.slug }">{{product.name}}</RouterLink></h4>
          <p>${{ product.price }}</p>
          <button> <img src="../assets/images/cart-icon.png" alt=""> </button>
        </div>        
      </div>
   </div>

    </div>
  </div>
 </div>
 <!-- banner -->
 <div class="banner">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-start text-lg-center">
           <div>
            <h2>Lorem ipsum dolor sit amet.</h2>       
            <p> Upto  <span>20% off</span> on all T-shirts and Accessories </p>
            <button>Explore More</button>
           </div>
        </div>
      </div>
    </div>
  </div>
 </div>
 <!-- banner -->

 <!-- subscribe -->
 <Subscribe></Subscribe>
  <!-- subscribe -->

<!-- footer -->
<Footer></Footer>
<!-- footer-->

</template>

<style scoped>
a{
  cursor: pointer;
  text-decoration: none;
  font: 20px;
  color: red;

}
.products{
  margin-top: 20px;
}
.products .prod .card:hover{
  border: 1px solid #088178;
}

.products h1{
font-size:30px;
font-weight: 800;
color: #088178;
margin-top: 20px;
margin-bottom: 20px;
}

.col-md-3.gap-4.prod{
transition: 0.3s ease;
}

.products .col-md-3.gap-4.prod h4{
cursor: pointer;
}
.col-md-3 h4{
margin-bottom: 15px;
}
.col-md-3.prod p{
  margin-top: -10px;
  font-size: 30px;
  font-weight: 700;
}

.col-md-3.prod button{
  background: transparent;
  border: none;
  height: 40px;
  width: 40px;
  cursor: pointer;
  border-radius: 10px;
}

.col-md-3.prod button:hover{
  border: 1px solid #088178;
}

.col-md-3.prod button>img{
width: 30px;
height: 30px;
}
.banner{
  width: 100%;
  background-color: black;
  margin-top: 20px;
  height: 250px;
  transition: 0.3s ease;

}
.banner h2{
  color: beige;
  margin-top: 30px;
  margin-bottom: 10px;
}
.banner p{
  color: beige;
  font-size: 20px;
  line-height: 1.5;
}
.banner span{
  color: red;
  font-weight: 400;
}
.banner button{
  cursor: pointer;
  border: none;
  border-radius: 3px;
  outline: none;
  padding: 5px;
  font-size: 20px;
  margin-top: 0;
}
.banner button:hover{
  background-color: #088178;
  color: #ffff;

}

</style>