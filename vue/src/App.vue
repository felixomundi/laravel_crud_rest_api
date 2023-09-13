<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useauthStore } from './stores/auth';
const auth = useauthStore();
const logout = auth.logout;
</script>


<template>
  <nav class="navbar navbar-expand-lg bg-light navbar-light sticky-top">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">Ecommerce</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/students">Students</RouterLink>
        </li>
            
        <template v-if="auth.user">
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ auth.user?.name  }}
          </a>
          <ul class="dropdown-menu">
            <li><RouterLink class="dropdown-item" to="/profile">Profile</RouterLink></li>
            <li><RouterLink class="dropdown-item" to="#">
              <button class="btn btn-warning" @click="logout">Logout</button>

            </RouterLink></li>
          </ul>
        </li>
        </template> 
        <template v-else="!auth.user">
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Account
          </a>
          <ul class="dropdown-menu">
            <li><RouterLink class="dropdown-item" to="/register">Register</RouterLink></li>
            <li><RouterLink class="dropdown-item" to="/login">Login</RouterLink></li>
          </ul>
        </li>
        </template> 
     
      </ul>
    </div>
  </div>
</nav>

  <RouterView />
</template>

