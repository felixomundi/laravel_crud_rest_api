<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useauthStore } from '../stores/auth';

const auth = useauthStore();
onMounted(async() => {  
  await auth.getUser();

});


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
      <div class="col-md-3 gap-4 prod mb-4">
        <div class="card p-2">
          <img src="../assets//images/backend-development.jpg" alt="">
          <h4><RouterLink to="#">Product Name</RouterLink></h4>
          <p>$20</p>
          <button> <img src="../assets/images/cart-icon.png" alt=""> </button>
        </div>        
      </div>
      <div class="col-md-3 gap-4 prod mb-4">
        <div class="card p-2">
          <img src="../assets/images/quality-assurance-and-testing.jpg" alt="">
          <h4><RouterLink to="#">Product Name</RouterLink></h4>
          <p>$20</p>
          <button> <img src="../assets/images/cart-icon.png" alt=""> </button>
        </div>        
      </div>
      <div class="col-md-3 gap-4 prod mb-4">
        <div class="card p-2">
          <img src="../assets//images/backend-development.jpg" alt="">
          <h4><RouterLink to="#">Product Name</RouterLink></h4>
          <p>$20</p>
          <button> <img src="../assets/images/cart-icon.png" alt=""> </button>
        </div>        
      </div>
      <div class="col-md-3 gap-4 prod mb-4">
        <div class="card p-2">
          <img src="../assets//images/backend-development.jpg" alt="">
          <h4><RouterLink to="#">Product Name</RouterLink></h4>
          <p>$20</p>
          <button> <img src="../assets/images/cart-icon.png" alt=""> </button>
        </div>        
      </div>
    </div>
  </div>
 </div>


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

</style>