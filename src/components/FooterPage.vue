<template>
  <footer>
    <div class="foot">
      <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <div class="col1">
                <ul class="list-inline">
                    <li class="list"><a href="#">Accueil</a></li>
                    <li class="list"><a href="#">Services</a></li>
                    <li class="list"><a href="#">About</a></li>
                </ul>
            </div>                
            <div class="col2">
                <ul>
                    <li class="list"><a href="#">Terms</a></li>
                    <li class="list"><a href="#">Privacy Policy</a></li>
                    <li class="list"><a href="#">A propos</a></li>
                </ul>
            </div>                                 
            <div class="col3">
                <ul class="list-inline">
                    <li class="list"><a href="#">Connexion</a></li>
                    <li class="list"><a href="#">S'inscrire</a></li>
                    <li class="list"><a href="#"></a></li>
                </ul>
            </div> 
            <div class="col4">
                <ul>
                    <li class="list"><a href="#">Terms</a></li>
                    <li class="list"><a href="#">Privacy Policy</a></li>
                    <li class="list"><a href="#">Contact</a></li>                   
                </ul>
            </div>
            <div class="col4">
                <ul>
                    
                    <img href="www.facebook.fr" src="@/assets/FB.svg" alt="Logo FaceBook"/>                                      
                    <img href="www.linkedin.fr" src="@/assets/LKD.svg" alt="Logo Linkedin" />               
                    <img href="www.twitter.com" src="@/assets/TWT.svg" alt="Logo Twiter" /> 
                                
                </ul>
            </div>
      </div>
      
          <p class="copyright">Gang Blue © 2024</p>
  </footer>
</template>

<script>
export default {
    name: 'FooterPage',
}
</script>

<style>

footer {
  background-color: #cca88c ;
  color: white;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 170px;
  
  
}

.list{
  display: grid;
  flex-direction:column;
  margin: 0 10px;
  color: white;
  font-style: italic;
  padding: 2px;
   
}
a{
  color: #5E3C1A;
  text-decoration: none;
}

.foot{
  display: flex;
  justify-content:center ;
  margin-bottom: 20px;

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


</style>