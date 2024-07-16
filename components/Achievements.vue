<template>
    <div class="achievements">
      <h2>Osiągnięcia</h2>
      <div class="achievement-list">
        <div class="achievement">
          <img src="/assets/images/achievements/achievement1.jpg" alt="Osiągnięcie 1">
          <p>Mistrz Polski w Trójboju Siłowym 2024</p>
        </div>
        <div class="achievement">
          <img src="/assets/images/achievements/achievement2.jpg" alt="Osiągnięcie 2">
          <p>Certyfikat Trenera Personalnego</p>
        </div>
        <!-- Dodaj więcej osiągnięć -->
      </div>
    </div>
  </template>
  
  <style scoped>
  .achievements {
    padding: 20px;
    background-color: #1a1a1a;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .achievement-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
  }
  
  .achievement {
    flex: 1 1 calc(33% - 20px);
    background-color: #000;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s;
  }
  
  .achievement:hover {
    transform: translateY(-10px);
  }
  
  .achievement img {
    max-width: 100%;
    border-radius: 5px;
  }
  
  .achievement p {
    margin-top: 15px;
    color: #D4AF37;
  }
  </style>
  