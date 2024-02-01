<template>
    <div class="container">
      <form class="formulaire">
  
          <h2 class="title">Ravis de vous revoir !</h2>
          <p>Identifiez-vous pour profiter de tous nos produits.</p>
  
      <input type="email" placeholder="Email*">
      <input type="password" placeholder="Mot de passe*">
      <input type="password" placeholder="Confirmer le mot de passe*">
  
      <button>Me connecter</button>
      </form>
    </div>
</template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  
  .container{
    /* background-color: red; */
    width: 400px;
    height: 400px;
    margin: 0 auto;
    margin-top : 200px; 
  }
  
  .formulaire{
    background-color: #f1f1f1;
    width: 100%;
    height: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    color: #5e3c1a;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
                0 10px 10px rgba(0, 0, 0, 0.2);  
  }
  
  .formulaire input{
    margin: 15px;
    width: 250px;
    height: 20px;
  }
  
  
  </style>