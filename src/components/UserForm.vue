<template>
  <div class="container">
    <form v-on:submit.prevent class="formulaire">

    <h2 class="title">{{ title }}</h2>
    <p>{{ paragraphe }}</p>



    <div v-if="formInscription" class="company">
        <br>
        <label v-if="formInscription" class="label">Informations de l'entreprise :</label>
        <br>
      <input type="text" placeholder="Raison sociale (nom de l'entreprise)*">
      <input v-model="siret" type="text" placeholder="Numéro de SIRET (14 chiffres)*">
    
        <div class="adress">
            <input type="text" placeholder="Adresse complète de l'entreprise*" class="inputadress">
            <div class="cp">
            <input v-model="cp" type="text" placeholder="Code Postal">
            <input type="text" placeholder="Ville" class="city">
            </div>
        </div>
    </div>

<br>
    <label v-if="formInscription" class="label">Vos informations personnelles :</label>
      <br>

        <input type="email" placeholder="Email*">
        <input type="password" placeholder="Mot de passe*">
        <input type="password" placeholder="Confirmer le mot de passe*">

    <button @click="validate()" type="submit">Me connecter</button>

    </form>
  </div>
</template>

<script>
export default {

  data() {
    return {
      siret: "",
      cp: "",
    };
  },
  methods: {
    validate() {
      if(this.siret.length !== 14 && isNaN(this.siret)) {
        alert('Le numéro de SIRET doit contenir 14 chiffres.');
        return;
      }

      if(this.cp.length !== 5 && isNaN(this.cp)) {
        alert('Le code postal doit comporter 5 chiffres.');
        return;
      }

    },
  },

    props: {
        title: {
            type: String,
            default: 'Ravis de vous revoir !'
        },
        paragraphe: {
            type: String,
            default: 'Identifiez-vous pour profiter de tous nos produits.'
        },
        formInscription: Object,
    },
}
</script>

<style scoped>
.container{
  /* background-color: red; */
  width: 400px;
  height: 800px;
  margin: 170px auto;
}

.formulaire{
  /* position: relative; */
  background-color: #dec5b1;
  /* width: 600px; */
  height: auto;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  color: #5e3c1a;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2),
              0 10px 10px rgba(0, 0, 0, 0.2);

}

.formulaire input{
  margin: 5px;
  width: 250px;
  height: 20px;
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

label{
  float: left;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px;
}
.cp input{
  width: 90px;
}

 
  
  </style>
