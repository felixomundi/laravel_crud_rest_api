<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useauthStore } from '../stores/auth';
import { useProductsStore } from '../stores/products';
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
          <img :src="getImage() +product.image" alt="">
          <h4><RouterLink to="#">{{product.name}}</RouterLink></h4>
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
<div class="subscribe">
  <div class="container py-4">
    <div class="row justify-content-center align-items-center">
      <div class="col-12">     
      <form>
          <div class="row">
            <h4>Subscribe To Newsletter</h4>   
            <p>New Subscibe to our newsletter</p>
            <div class="col-md-4 mb-3">
              <input type="text" placeholder="Your Name" class="form-control">
            </div>
            <div class="col-md-4 mb-3">
              <input type="email" placeholder="Your Email" class="form-control">
            </div>
            <div class="col-md-4 ">
              <button type="button"  class="form-control">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  <!-- subscribe -->
<!-- footer -->
<div class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-3 mb-3">
        <h4>Nyagaka Ecommerce</h4>
      </div>
      <div class="col-md-3 mb-3">
        <h4>Pages</h4>
        <p><a href="#">Cart</a></p>
        <p><a href="#">Wishlist</a></p>        
      </div>
      <div class="col-md-3 mb-3">
        <h4>Quick Links</h4>
        <p><a href="#">Contact Us</a></p>
        <p><a href="#">About Us</a></p>        
      </div>
      <div class="col-md-3 mb-3">
        <h4>Social Links</h4>
        <a href="#" ><i class="fab fa-facebook pr-2"></i></a>
        <a href="#"> <i class="fab fa-youtube px-3"></i>  </a>    
        <a href="#"> <i class="fab fa-twitter"></i></a>   
      </div>
      <div class="text-lg-center text-start">Copyright &copy 2023 </div>
    </div>
  </div>
</div>
<!--footer-->

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
margin-bottom: 30px;
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
.subscribe{
  background-color: #D3D3D3;
  margin-top: 0;
  width: 100%;
}

/* t r b l */
.subscribe form{
  padding:  25px 0 30px 0;
}

@media only screen and (max-width: 590px ) {
  .subscribe form{
   margin-bottom: 30px;
  }
  
}
.subscribe button{
  cursor: pointer;
  background-color: #088178;
  outline: none;
  color: aliceblue;
  padding: 7px;
  box-shadow: none;
}
.subscribe input:focus{
border: 2px solid red;
outline: none;
padding: none;
box-shadow: none;
}
.footer{
  width: 100%;
  padding: 30px;
  background-color: black;
  color: #fff;
}
</style>