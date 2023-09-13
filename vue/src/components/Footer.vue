<template>
    <!-- footer -->
<div class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-3 mb-3 text-start">
        <h4><RouterLink to="/">Nyagaka Ecommerce</RouterLink></h4>
      </div>
      <div class="col-md-3 mb-3 text-start">
        <h4>Pages</h4>
        <p><a href="#">Cart</a></p>
        <p><a href="#">Wishlist</a></p>        
      </div>
      <div class="col-md-3 mb-3 text-start">
        <h4>Quick Links</h4>
        <p><a href="#">Contact Us</a></p>
        <p><a href="#">About Us</a></p>        
      </div>
      <div class="col-md-3 mb-3 text-start social">
        <h4>Social Links</h4>
        <a href="#" ><i class="fab fa-facebook px-2"></i></a>
        <a href="#"> <i class="fab fa-youtube px-2"></i>  </a>    
        <a href="#"> <i class="fab fa-twitter px-2"></i></a>   
      </div>
      <div class="text-lg-center text-start">Copyright &copy 2023 </div>
    </div>
  </div>
</div>
<!--footer-->
</template>
<script>
import { RouterLink } from 'vue-router';
</script>