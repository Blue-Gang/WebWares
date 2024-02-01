<template>
    <div>
      <div class="bcg">
      <h1>Nous contacter</h1>
      <div class="txtform">
        
          <div class="box1">
              <h2>Devenir partenaire</h2>
              <h3>WebWares: votre partenaire de confiance pour la réalisation de vos projets</h3>
              <p>WebWares croit au pouvoir du design pour transformer les espaces et les expériences des personnes. Nous sommes passionnés par l'aide de nos partenaires et de nos clients à donner vie à leurs visions, en leur offrant un large choix de produits et services de qualité.</p>
              <br>
              <p>Nous nous engageons à fournir un service personnalisé et à répondre à vos besoins spécifiques. Contactez-nous dès aujourd'hui pour discuter de vos projets et découvrir comment nous pouvons vous aider à les réaliser.</p>
              
              <button>En Savoir plus</button>
          </div>
          <img id="img1" class="box2" src="@/assets/imgcontact.jpg" alt="">
      </div>
    </div>

      <div class="formulairecontact">
        <div>
          <img id="img2" src="@/assets/imgcontact2.jpg" alt="">
        </div>

        <div id="formulaire">
          <FormulaireContact/>
        </div>

          
      </div>
    </div>
  </template>
  
  <script>
  import FormulaireContact from '@/components/FormulaireContact.vue'
  export default {
    components:{
      FormulaireContact,
  }
  }
  </script>
  
  <style scoped>
  h1{
    color: #472e16;
  }

  #img1 {
    width: 250px;
    height: 420px;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
              0 10px 10px rgba(0, 0, 0, 0.2);
  }

  #img2 {
    width: 250px;
    height: 450px;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
              0 10px 10px rgba(0, 0, 0, 0.2);
  }
  
  .txtform {
    background-color: #dec5b1;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    
  }
  .box1 {
    background-color: rgba(255, 255, 255, 0.331);
    margin-left: 100px;
    margin-right: 100px;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 10px;
    color: #472e16;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
              0 10px 10px rgba(0, 0, 0, 0.2);
  }
  .box2{
    margin-right: 100px;
  }
  #formulaire{
    background-color: #dec5b1;
    padding-left: 100px;
    padding-right: 100px;
    margin-left: 30px;
    border-radius: 10px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
              0 10px 10px rgba(0, 0, 0, 0.2);
  }

  .formulairecontact{
    display: flex;
    margin-top: 80px;
    margin-bottom: 80px;
    margin-left: -50px;
    padding-left: 80px;
    padding-right: 80px;
  }

  .formulairecontact img{
    margin-left: 50px;
    margin-right: 50px;

  }

  button {
        background-color: #b98d68;
        color: #5e3c1a;
        border: none;
        border-radius: 5px;
        margin-top: 20px;
        margin-bottom: 15px;
        padding: 5px;
        margin-top: 30px;
        width: 150px;
        height: 40px;
        border-radius: 20px;
        border: 1px solid #5e3c1a;
        cursor: pointer;
        font-weight: bold;
    }

    button:hover {
        background-color: #5e3c1a;
        color: #cca88c;
    }
  
  </style>