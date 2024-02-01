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
            <div class="connect">
              <router-link to="/Loginpage">Connection</router-link> 
              <router-link to="/register">Inscription </router-link>
            </div>
            <div class="Horsconnect">
              <select @change="navigate" class="dropdown" >
                <option>Menu</option>
                <option value="bag">Panier {{ 0 }}</option>
                <option value="vos achat"><router-link to="/achat">vos achats</router-link></option>
                <option value="@/view/AdminVue">Admin</option>
                <option value="logout">Déconnection</option>
              </select>
            </div>
      </div>
  </nav>
  <footer>
    <div class="foot">
      <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <div>             
              <img class="logo" href="www.twitter.com" src="@/assets/LogoWW.webp" alt="Logo Twiter" />            
              <p class="copyright" >Gang Blue © 2024</p>
            </div>           
            <div class="col">
                <ul class="list-inline">
                    <li class="list"><a href="#">Accueil</a></li>
                    <li class="list"><a href="#">A propos</a></li>
                    <li class="list"><a href="#">Contact</a></li>
                </ul>
            </div>                
            <div class="col">
                <ul>
                    <li class="list"><a href="#">Catégories</a></li>
                    <li class="list"><a href="#">Produits</a></li>
                    <li class="list"><a href="#">Marques</a></li>
                </ul>
            </div>                                 
            <div class="col">
                <ul class="list-inline">
                    <li class="list"><a href="#">Connexion</a></li>
                    <li class="list"><a href="#">S'inscrire</a></li>
                    <li class="list"><a href="#">Carrières</a></li>
                    
                </ul>
            </div> 
            <div class="col">
                <ul>
                    <li class="list"><a href="#">Conditions générales de ventes</a></li>
                    <li class="list"><a href="#">Conditions générales d'utilisations</a></li>
                    <li class="list"><a href="#">Politique de confidencialité</a></li>                   
                </ul>
            </div>
            <div class="col">
                <ul>
                    <p>Suivez nous</p>
                      <img class="footerImg" href="www.facebook.fr" src="@/assets/FB.svg" alt="Logo FaceBook"/>
                      <img class="footerImg" href="www.linkedin.fr" src="@/assets/LKD.svg" alt="Logo Linkedin" />
                      <img class="footerImg" href="www.twitter.com" src="@/assets/TWT.svg" alt="Logo Twiter" />
                </ul>
            </div>   
      </div>
  </footer>
  <router-view />
</template>

<script>
export default{ 

  menuDropdown:'Menu',
  lang: "fr",
  name: 'searchBar',

  data(){
      return{
      querry: "",
      lang: "fr",
      menuDropdown:'Menu',
    }
  },

  methods:{

    navigate(event){
      this.$router.push(event.target.value);
    },

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
  color: #2c3e50;
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
  margin-top:10px ;
  margin-left: 30px;
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
}

.principal a.router-link-exact-active {
  color: #08bf6d;
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
  margin-right: 50px ;
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
    font-size: 20px;
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

footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #cca88c ;
  color: white;
  padding: 10px;
  text-align: center;
  left: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
  padding-bottom: 20px;
}
  
.foot{
  margin-top: auto;
  gap: 50px;
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-left: -104px;
}


.list{
  display: flex;
  justify-content:center ;
  margin-bottom: 20px;
  flex-direction:column;
  margin: 0 10px;
  color: white;
  font-style: italic;
  padding: 2px;
}

a, p{
  font-weight: 450;
  color: #5E3C1A;
  text-decoration: none;
}



.copyright{
  color: #5E3C1A;
  font-style: italic;
  font-size: 15px;
}

.footerImg{
  width: 30px;
  height: 30px;
  margin: 0 10px;
}

.logo{
  width: 100px;
  height: 100px;
  margin: 0 10px;
}

.col{
  display: flex;
  align-items: center;
}

.dropdown{
  display: block;
  float: left;
  margin-right: 10px;
  margin-bottom: 30px ;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  background-color: #b98d68;
  border-radius: 5px;
  border: solid 2px white;
  outline: none;
  padding: 5px;
}

.dropdown a {
  font-size: 20px;
}

body{
  background-color: #2c3e50;
}

</style>
