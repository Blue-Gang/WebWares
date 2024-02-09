<template>
  <div class="container">
    <h1>Liste des utilisateurs</h1>




    <!-- tableau des utilisateurs -->
    <div>
      <table class="table">

        <thead>
          <tr class="infos">
            <th>Raison Sociale (entreprise)</th>
            <th>Nom*</th>
            <th>Prénom*</th>
            <th>SIRET</th>
            <th>Adresse</th>
            <th>Code Postal</th>
            <th>Ville</th>
            <th>Email</th>
            <th>Mot de passe</th>
            <th>Rôle</th>
          </tr>
        </thead>

        <tbody class="listeUtilisateurs">

          <tr v-for="(user, index) in usersData" :key="index" class="infosUsers">
            <td>{{ user.raisonSociale }}</td>
            <td>{{ user.nom }}</td>
            <td>{{ user.prenom }}</td>
            <td>{{ user.siret }}</td>
            <td>{{ user.adresse }}</td>
            <td>{{ user.codePostal }}</td>
            <td>{{ user.ville }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.password.password }}</td>
            <td>{{ user.role }}</td>

            <div><ButtonUser :label="'Modifier'" id="btnModifier"/></div>
            

          </tr>

        </tbody>

      </table>
    </div>
    
    <!-- <p v-else>Aucune donnée utilisateur trouvée dans le localStorage.</p> -->
  </div>

    <p>* Nom et prénom à configurer sur l'espace profil utilisateur par lui même</p>
</template>

<script>
import ButtonUser from '@/components/ButtonGen.vue';

export default {

  components:{
    ButtonUser,
  },


    data() {
        return {
            usersData: [],
        };
    },

    mounted() {
      this.loadUsersData();
    },

    methods: {
      loadUsersData() {
        // récupération des données de l'utilisateur depuis le localStorage
        let infosUserData = localStorage.getItem('usersData');

        // condition ternaire pour vérifier si les données existent dans le localStorage
        // si existent, parse les données en tant que objet JSON, sinon initialise à un tableau vide
        let usersData = infosUserData ? JSON.parse(infosUserData) : [];

        // vérifie si le tableau d'utilisateurs a des éléments
        if(usersData.length > 0 ){
          // SI oui, met à jour l'état usersData avec les données
          this.usersData = usersData;
        } else {
          // si est vide, affiche alors une alerte pour dire que utilisateur non trouvé
          alert('Aucun utilisateur trouvé.')
        }

        if(infosUserData) {
          this.usersData = JSON.parse(infosUserData);
        } else {
          alert('Utilisateur introuvable.')
        }
      }

    },

};
</script>

<style scoped>

h1{
  margin: 40px;
  color: white;
}

.container{
  margin-top: 20px;
  font-size: 14px;
  background-color: #dec5b1;
  color: #472e16;
  height: auto;
}

table{
  margin: 20px auto;
  background-color:#5e3c1a;
  
}

.infos th {
  padding: 20px;
  background-color:#b98d68;
  color: #5e3c1a;
  text-align: center;
}

td {
  padding: 20px;
  background-color: #dec5b1;
}

p {
  text-align: left;
  margin: 20px;
  padding-left: 150px;
  color: #472e16;
  font-size: 15px;
  font-weight: bold;
}

#btnModifier{
  width: 20px;
}

</style>

