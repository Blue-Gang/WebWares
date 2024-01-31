<template>
  <footer>
    <div class="foot">
      <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <div>             
              <img class="logo" href="www.twitter.com" src="@/assets/LogoWW.webp" alt="Logo Twiter" />            
              <p class="copyright" >Gang Blue © 2024</p>
            </div>           
            <div class="col1">
                <ul class="list-inline">
                    <li class="list"><a href="#">Accueil</a></li>
                    <li class="list"><a href="#">A propos</a></li>
                    <li class="list"><a href="#">Contact</a></li>
                </ul>
            </div>                
            <div class="col2">
                <ul>
                    <li class="list"><a href="#">Catégories</a></li>
                    <li class="list"><a href="#">Produits</a></li>
                    <li class="list"><a href="#">Marques</a></li>
                </ul>
            </div>                                 
            <div class="col3">
                <ul class="list-inline">
                    <li class="list"><a href="#">Connexion</a></li>
                    <li class="list"><a href="#">S'inscrire</a></li>
                    <li class="list"><a href="#">Carrières</a></li>
                    
                </ul>
            </div> 
            <div class="col4">
                <ul>
                    <li class="list"><a href="#">Conditions générales de ventes</a></li>
                    <li class="list"><a href="#">Conditions générales d'utilisations</a></li>
                    <li class="list"><a href="#">Politique de confidencialité</a></li>                   
                </ul>
            </div>
            <div class="col4">
                <ul>
                    <p>Suivez nous</p>
                    <img href="www.facebook.fr" src="@/assets/FB.svg" alt="Logo FaceBook"/>                                      
                    <img href="www.linkedin.fr" src="@/assets/LKD.svg" alt="Logo Linkedin" />               
                    <img href="www.twitter.com" src="@/assets/TWT.svg" alt="Logo Twiter" /> 
                                
                </ul>
            </div>   
                    
      </div>
          
  </footer>
</template>

<script>
export default {
    name: 'FooterPage',
}
</script>

<style scoped>

footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #cca88c ;
  color: white;
  padding: 10px;
  text-align: center;
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

img{
  width: 30px;
  height: 30px;
  margin: 0 10px;
}

.logo{
  width: 100px;
  height: 100px;
  margin: 0 10px;
}


</style>