<template>
    <header class="header">
      <div class="logo">
        <img src="/assets/images/logo/logo.png" alt="Duda Athletics">
      </div>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">O mnie</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/calculator">Kalkulator PPM i CPM</NuxtLink></li>
          <li><NuxtLink to="/pricing">Cennik</NuxtLink></li>
          <li><NuxtLink to="/transformations">Metamorfozy</NuxtLink></li>
          <li><NuxtLink to="/contact">Kontakt</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #000;
    color: #D4AF37;
  }
  
  .logo img {
    height: 50px;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  nav li {
    margin: 0 15px;
  }
  
  nav a {
    color: #D4AF37;
    text-decoration: none;
    font-weight: bold;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  </style>
  