<template>
  <nav class="secondary">
    <div class="secondaryTopPage">
      <div class="lang">

          <select class="langChoice" v-model="lang" >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="de">GER</option>
            <option value="ru">RU</option>
          </select>

      </div>
      <div class="buttonContact">  
        <router-link to="/pagecontact" class="textContact">Contact</router-link>
      </div>
    </div>
  </nav >

  <nav class="principal">
    <img class="logoWW" src="@/assets/5.png" alt="logo" width="200" height="100">
    <div class="BarNav">
      <div class="navLink">
        <router-link to="/">Acceuil</router-link> 
        <router-link to="/about">Catégories</router-link> 
        <router-link to="/products">Produits</router-link>
      </div>
      <!-- barre de recherche -->
      <section>
        <span class="barSearch">
          <div>
            <input type="text" v-model="querry" @input="listFilter" placeholder="Rechercher un produit">
          </div>
          <div class="listBarSearch">
            <ul>
                <li v-for="(produits, i) in filteredProducts" :key="i">{{ produits.titre }}</li>
            </ul>
          </div>
        </span>
      </section>
    </div>
      <div class="none">
            <div class="horsConnect">
              <router-link to="/Loginpage">Connection</router-link> 
              <router-link to="/SignUp">Inscription </router-link>
            </div>
            <div class="connect">
              <router-link to="/admin">Admin</router-link> 
              <router-link to="/logout">Déconnection</router-link>
            </div>
        
      </div>
  </nav>
  <router-view />
</template>

<script>

const produits = [
    
    {
      id: 1,
      image: 'mobilier-5.jpg',
      titre: 'Table à manger en bois',
      description: 'Table à manger en bois massif avec finition élégante.',
      prix: 299.99,
      moq: 5,
      categorieId: 1
    },

    {
      id: 2,
      image: 'luminaire-1.jpg',
      titre: 'Lampe moderne',
      description: 'Lampe avec un design moderne et éclairage ajustable.',
      prix: 129.99,
      moq: 10,
      categorieId: 2
    },

    {
      id: 3,
      image: 'tapis-2.jpg',
      titre: 'Tapis en laine',
      description: 'Tapis doux en laine avec motif géométrique.',
      prix: 89.99,
      moq: 20,
      categorieId: 3
    },

    {
      id: 4,
      image: 'deco-3.jpg',
      titre: 'Vase éthnique en argile',
      description: 'Vase éthnique en argile avec motifs gravés à la main.',
      prix: 49.99,
      moq: 20,
      categorieId: 4
    },

  ];

export default{ 

  lang: "fr",
  name: 'searchBar',
  data(){
    

    return{
      querry: "",
      filteredProducts: produits ,
      lang: "fr"
    }
    
  },

  methods:{
    listFilter(){
      for(let i = 0; i < this.filteredProducts.length; i++){
        if(this.filteredProducts[i].titre.toLowerCase().includes(this.querry.toLowerCase())){
          this.filteredProducts[i].style.display = "block";
        }else{
          this.filteredProducts[i].style.display = "none";
        }
      }
    }
  }
}

</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  /* color: #2c3e50; */
}

.principal { 
  position: fixed;
  margin-top: 50px ; 
  top: 0;
  left: 0; 
  z-index: 1;
  background-color: #b98d68 ;
  height: 100px;
  width: 100vw;
}

.principal a {
  display: inline-block;
  margin-top: 10px ;
  margin-left: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}

.principal a.router-link-exact-active {
  color: #5e3c1a;
}

.secondary{
  display: inline-block;
  position: fixed;
  z-index: 1;
  max-height: 50px;
  width: 100vw;
  top : 0;
  left : 0 ; 
  background-color: white;
  color: black;
  
}

.secondaryTopPage{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
}

.BarNav{
 display: flex;
  justify-content: center;
  margin-right: 120px ;
  margin-top: 30px ;
}

.logoWW {
  float: left;
  }

.navLink {
  float: right;
  margin-right: 250px;
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
  
  
}

.barSearch input{
    display: block;
    width: 300px;
    height: 30px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 5px;
    font-size: 15px;
}

.listBarSearch{
    display: none;
    position: absolute;
    background-color: #b98d68;
    z-index: 1;
}

.none{
  display: block;
  float: right;
  margin-right: 40px;
  margin-top: -40px;
}

.langChoice{ 
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 30px ;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  background-color: #b98d68;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px;

} 

.textContact{
  text-decoration: none;
  color: #ffffff;
  font-size: 15px;
  text-align: center;
}

.buttonContact{ 
  display: block;
  float: left;
  width: 150px;
  margin-right: 10px;
  margin-bottom: 30px ;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  background-color: #b98d68;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px;
}

.horsConnect{
  display: block;
  margin: auto;
}

.connect{
  display: none;
}

.lang{
  display: block;
  float: left; 
  top: 0 ; 
  margin-left: 30px;

}

</style>
