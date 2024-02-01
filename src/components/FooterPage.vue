<template>
  <footer>
    <div class="foot">
      <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <div>             
              <img class="logo" href="www.twitter.com" src="@/assets/LogoWW.webp" alt="Logo Twiter" />            
              <p class="copyright" >Gang Blue © 2024</p>
            </div>           
            <div class="col">
                <ul class="list-inline">
                    <li class="list"><a class="footA" href="#">Accueil</a></li>
                    <li class="list"><a class="footA" href="#">A propos</a></li>
                    <li class="list"><a class="footA" href="#">Contact</a></li>
                </ul>
            </div>                
            <div class="col">
                <ul>
                    <li class="list"><a class="footA" href="#">Catégories</a></li>
                    <li class="list"><a class="footA" href="#">Produits</a></li>
                    <li class="list"><a class="footA" href="#">Marques</a></li>
                </ul>
            </div>                                 
            <div class="col">
                <ul class="list-inline">
                    <li class="list"><a class="footA" href="#">Connexion</a></li>
                    <li class="list"><a class="footA" href="#">S'inscrire</a></li>
                    <li class="list"><a class="footA" href="#">Carrières</a></li>
                    
                </ul>
            </div> 
            <div class="col">
                <ul>
                    <li class="list CGV "><a class="footA" href="#">Conditions générales de ventes</a></li>
                    <li class="list CGV1"><a class="footA" href="#">CGV</a></li>
                    <li class="list CGU"><a class="footA" href="#">Conditions générales d'utilisations</a></li>
                    <li class="list CGU1"><a class="footA" href="#">CGU</a></li>
                    <li class="list PDC"><a class="footA" href="#">Politique de confidencialité</a></li>                   
                    <li class="list PDC1"><a class="footA" href="#">PDC</a></li>                   
                </ul>
            </div>
            <div class="col">
                <ul>
                    <p class="Follow">Suivez nous</p>

                    <img class="logoR" href="www.facebook.fr" src="@/assets/FB.svg" alt="Logo FaceBook"/>                                      
                    <img class="logoR" href="www.linkedin.fr" src="@/assets/LKD.svg" alt="Logo Linkedin" />               
                    <img class="logoR" href="www.twitter.com" src="@/assets/TWT.svg" alt="Logo Twiter" /> 
                                
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

@media screen and (min-width: 430px) and (max-width: 820px){
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
  height: 110px;
  padding-bottom: 20px;
  
}}


@media screen and (max-width: 430px){
footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #cca88c ; 
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





</style>