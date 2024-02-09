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

        <router-link to="/">
          <select @change="navigate" class="dropCategorie">
              <option>Catégories</option>
              <option value="/vasevue">Vase</option>
              <option value="/tapisview">Tapis</option>
              <option value="/lampeview">Luminaire</option>
              <option value="/tableview">Table</option>
              <option value="/chaiseview">Chaise</option>
          </select>
        </router-link> 
        <router-link to="/aboutview">A Propos</router-link>
        <router-link to="/produitsview">Produits</router-link>
        <router-link to="/panierview">Panier ({{ produitPanier.length }})</router-link>
        <router-link to="/commresume">Commande </router-link>
        


        
        
      </div>

      <!-- barre de recherche -->
      <!-- <section>
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
      </section> -->
    </div>
      <div class="none">
            <div class="connect">
              <router-link to="/Loginpage">Connection</router-link> 
              <router-link to="/SignUp">Inscription </router-link>
            </div>
            <div class="Horsconnect">
              <select @change="navigate" class="dropdown" >
                <option value="/HomeView">Menu</option>
                <option value="/panierview"> Panier ({{ produitPanier.length }})</option>
                <option value="vos achat">vos achat</option>
                <option value="/AdminPage">Admin</option>
                <option value="logout">Déconnection</option>
              </select>
            </div>
      </div>
  </nav>
  <footer>
    <div class="foot">
      <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>

            <div>
              <a href="/"><img class="logo" src="@/assets/LogoWW.webp" alt="Logo Twiter" /></a>             

              <p class="copyright" >Gang Blue © 2024</p>
            </div>           
            <div class="col">
                <ul class="list-inline">


                    <li class="list"><a class="footA" href="/">Accueil</a></li>
                    <li class="list"><a class="footA" href="/aboutview">A propos</a></li>
                    <li class="list"><a class="footA" href="/pagecontact">Contact</a></li>


                </ul>
            </div>                
            <div class="col">
                <ul>
                    <li class="list"><a class="footA" href="#">Catégories</a></li>

                    <li class="list"><a class="footA" href="/produitsview">Produits</a></li>

                    <li class="list"><a class="footA" href="#">Marques</a></li>
                </ul>
            </div>                                 
            <div class="col">
                <ul class="list-inline">
                    <li class="list"><a class="footA" href="#">Connexion</a></li>


                    
                    <li class="list"><a class="footA" href="/PageCarriere">Carrières</a></li>


                    <li class="list"><a class="footA" href="/signup">S'inscrire</a></li>

                   
                    <li class="list"><a class="footA" href="#">Carrières</a></li>


                    
                </ul>
            </div> 
            <div class="col">
                <ul>


                    <li class="list CGV "><a class="footA" href="/PageCgv">Conditions générales de ventes</a></li>
                    <li class="list CGV1"><a class="footA" href="/PageCgv">CGV</a></li>
                    <li class="list CGU"><a class="footA" href="/PageCgu">Conditions générales d'utilisations</a></li>
                    <li class="list CGU1"><a class="footA" href="/PageCgu">CGU</a></li>
                    <li class="list PDC"><a class="footA" href="/PolitiqueConf">Politique de confidencialité</a></li>                   
                    <li class="list PDC1"><a class="footA" href="/PolitiqueConf">PDC</a></li>                   


                </ul>
            </div>
            <div class="col">
                <ul>
                    <p class="Follow">Suivez nous</p>





                    <a href="https://www.facebook.com/"><img class="logoR" src="@/assets/FB.svg" alt="Logo FaceBook"/></a>                                      
                    <a href="https://www.linkedin.com/"><img class="logoR" src="@/assets/LKD.svg" alt="Logo Linkedin" /></a>               
                    <a href="https://twitter.com/"><img class="logoR" src="@/assets/TWT.svg" alt="Logo Twiter" /></a> 
                                
                </ul>

            </div>   
                    
      </div>
          
  </footer>
    
  <router-view />
</template>

<script>


import { mapState } from 'vuex';

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
  },

  computed: {
    filteredProducts(){
      return this.$store.state.products    
    },
    ...mapState(['produitPanier'], ['produits']),
  },
}

</script>

<style scoped>



*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  /* color: #2c3e50; */
}

/* Header Jason */

.principal { 
  position: absolute;
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
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
}

.principal a.router-link-exact-active {
  color: #5e3c1a;
}

.secondary{
  display: inline-block;
  position: absolute;
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
display:none;
  
}

.lang{
  display: block;
  float: left; 
  top: 0 ; 
  margin-left: 30px;

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

.dropCategorie{
  display: block;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  background-color: #b98d68;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px;
}

/* Header Jason */


/* Footer David */

footer {
  z-index: 1;
  display: flex;
  justify-content: center;
  background-color: #b98c68dc ;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
  padding-bottom: 20px;
  margin-top: 50px;

  
}

@media screen and (min-width: 430px) and (max-width: 820px){
footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #b98d68 ;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 110px;
  padding-bottom: 20px;

  
}}


@media screen and (max-width: 430px){
footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #b98d68 ; 
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 100px;
  padding-bottom: 20px;
  
}}
  

.col{
  display: flex;
  align-items: center;
}


.foot{
  margin-top: auto;
  gap: 50px;
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-left: -104px;

}

@media screen and (max-width: 430px){
.foot{
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-left: 0px;
}
}

@media screen and (min-width: 431px) and (max-width: 820px){
.foot{
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 45px;
  margin-left: -25px;
}
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


@media screen and (max-width: 430px ){
.list{
  font-size: 9px;
  display: flex;
  justify-content:center ;
  margin-bottom: 5px; 
  margin: 0 10px;
  font-style: italic;
  padding: 2px;
   
}

}

@media screen and (min-width: 431px) and (max-width: 820px){
.list{
  font-size: 10px;
  display: flex;
  justify-content:center ;
  margin-bottom: 5px;
  margin: 0 5px;
  font-style: italic;
  padding: 2px;
   
}
}


.footA, .copyright{
  font-weight: 450;
  color: #5E3C1A;
  text-decoration: none;
}

@media screen and (max-width: 430px){

  .footA, .copyright{
  font-weight: 300;
  color: #5E3C1A;
  text-decoration: none;
}
}
@media screen and (min-width: 431px) and (max-width: 820px){

  .footA, .copyright{
  font-weight: 450;
  color: #5E3C1A;
  text-decoration: none;
}
}

.copyright{
  color: #5E3C1A;
  font-style: italic;
  font-size: 15px;
  

}




@media screen and (max-width: 430px){
.copyright{
  color: #5E3C1A;
  font-style: italic;
  font-size: 8px;
  
}
}
@media screen and (min-width: 431px) and (max-width: 820px){
.copyright{
  color: #5E3C1A;
  font-style: italic;
  font-size: 8px;
  
}
}

.logoR{
  width: 30px;
  height: 30px;
  margin: 0 10px;
}

@media screen and (max-width: 430px){
.logoR{
  width: 15px;
  height: 15px;
  margin: 0 4px;
}
}

@media screen and (min-width: 431px) and (max-width: 820px){
.logoR{
  width: 25px;
  height: 25px;
  margin: 0 5px;
}
}

.logo{
  width: 100px;
  height: 100px;
  margin: 0 10px;
}


@media screen and (max-width: 430px){
.logo{
  width: 40px;
  height: 40px;
  margin: 0 10px;
}

}


@media screen and (min-width: 430px) and (max-width: 820px){
.logo{
  width: 60px;
  height: 60px;
  margin: 0 10px;
}
}


.Follow{
  color: #5E3C1A;
  padding-bottom: 5px;
}

@media screen and (min-width: 430px) and (max-width: 820px){
.Follow{
  color: #5E3C1A;
  font-size: 10px;
}
}

@media screen and (max-width: 430px){
.Follow{
  display: none;
}
}

@media screen and (max-width: 430px){
.CGV{
  display:none;
}}
@media screen and (min-width: 430px){
.CGV1{
  display:none;
}}


@media screen and (max-width: 430px){
.CGU{
  display:none;
}}
@media screen and (min-width: 430px){
.CGU1{
  display:none;
}}


@media screen and (max-width: 430px){
.PDC{
  display:none;
}}
@media screen and (min-width: 430px){
.PDC1{
  display:none;
}}


/* Footer David */


footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #b98d68 ;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
  padding-bottom: 20px;
  
}

@media screen and (min-width: 430px) and (max-width: 820px){
footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #b98d68 ;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 110px;
  padding-bottom: 20px;
  
}}


@media screen and (max-width: 430px){
footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #b98d68 ; 
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 100px;
  padding-bottom: 20px;
  
}}
  
.col{
  display: flex;
  align-items: center;
}


.foot{
  margin-top: auto;
  gap: 50px;
  display: flex;
  justify-content: center;
  gap: 70px;
  margin-left: -104px;
}

@media screen and (max-width: 430px){
.foot{
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-left: 0px;
}
}
@media screen and (min-width: 431px) and (max-width: 820px){
.foot{
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 45px;
  margin-left: -25px;
}
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


@media screen and (max-width: 430px ){
.list{
  font-size: 9px;
  display: flex;
  justify-content:center ;
  margin-bottom: 5px; 
  margin: 0 10px;
  font-style: italic;
  padding: 2px;
   
}
}
@media screen and (min-width: 431px) and (max-width: 820px){
.list{
  font-size: 10px;
  display: flex;
  justify-content:center ;
  margin-bottom: 5px;
  margin: 0 5px;
  font-style: italic;
  padding: 2px;
   
}
}


.footA, .copyright{
  font-weight: 450;
  color: #5E3C1A;
  text-decoration: none;
}

@media screen and (max-width: 430px){

  .footA, .copyright{
  font-weight: 300;
  color: #5E3C1A;
  text-decoration: none;
}
}
@media screen and (min-width: 431px) and (max-width: 820px){

  .footA, .copyright{
  font-weight: 450;
  color: #5E3C1A;
  text-decoration: none;
}
}

.copyright{
  color: #5E3C1A;
  font-style: italic;
  font-size: 15px;
  
}

@media screen and (max-width: 430px){
.copyright{
  color: #5E3C1A;
  font-style: italic;
  font-size: 8px;
  
}
}
@media screen and (min-width: 431px) and (max-width: 820px){
.copyright{
  color: #5E3C1A;
  font-style: italic;
  font-size: 8px;
  
}
}


.logoR{
  width: 30px;
  height: 30px;
  margin: 0 10px;
  cursor: pointer;
}

@media screen and (max-width: 430px){
.logoR{
  width: 15px;
  height: 15px;
  margin: 0 4px;
}
}

@media screen and (min-width: 431px) and (max-width: 820px){
.logoR{
  width: 25px;
  height: 25px;
  margin: 0 5px;
}
}

.logo{
  width: 100px;
  height: 100px;
  margin: 0 10px;
}


@media screen and (max-width: 430px){
.logo{
  width: 40px;
  height: 40px;
  margin: 0 10px;
}
}

@media screen and (min-width: 430px) and (max-width: 820px){
.logo{
  width: 60px;
  height: 60px;
  margin: 0 10px;
}
}


.Follow{
  color: #5E3C1A;
  padding-bottom: 5px;
}

@media screen and (min-width: 430px) and (max-width: 820px){
.Follow{
  color: #5E3C1A;
  font-size: 10px;
}
}

@media screen and (max-width: 430px){
.Follow{
  display: none;
}
}

@media screen and (max-width: 430px){
.CGV{
  display:none;
}}
@media screen and (min-width: 430px){
.CGV1{
  display:none;
}}


@media screen and (max-width: 430px){
.CGU{
  display:none;
}}
@media screen and (min-width: 430px){
.CGU1{
  display:none;
}}

@media screen and (max-width: 430px){
.PDC{
  display:none;
}}
@media screen and (min-width: 430px){
.PDC1{
  display:none;
}}


/* Footer David */


body{

    background-color: white;

}


</style>
