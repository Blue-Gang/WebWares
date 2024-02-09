<template>
    <div class="dashboard">
        <!-- SideBar -->
        <div class="menusidebar" v-show="showSide">
            <div class="sidebar">
                <p class="titre"> Admin DashBoard</p>
            </div>
            <div class="sidemenu">
                <div class="box">
                    <router-link to="/home" class="cat"  >
                        <img src="images/accueil.png" alt="">
                        <p>Accueil</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/AdminMsg" class="cat"  >
                        <img src="images/email.png" alt="">
                        <p>Messagerie</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/AdminProfile" class="cat"  >
                        <img src="images/resume.png" alt="">
                        <p>Tableau de bord</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/ParametreUser" class="cat"  >
                        <img src="images/utilisateurs.png" alt="">
                        <p>Utilisateurs</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/ParametreProduit" class="cat"  >
                        <img src="images/colis.png" alt="">
                        <p>Produits</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/ParametreCat" class="cat"  >
                        <img src="images/colis.png" alt="">
                        <p>Catégories</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/AdminCommande" class="cat"  >
                        <img src="images/commandes.png" alt="">
                        <p>Commandes</p>
                    </router-link>
                </div>

                <div class="box">
                    <router-link to="/AdminParametre" class="cat"  >
                        <img src="images/parametres.png" alt="">
                        <p>Paramètres</p>
                    </router-link>
                </div>

               
            </div>
        </div>

        <!-- Main -->
        <div class="header">

            <!-- Hambuger menu -->
            <div class="main">
                <div class="hamburger">
                    <div @click="toggleSideBar">
                        <img src="images/menu.png" alt="">
                    </div>
                </div>


                        <!-- User login -->
                <div @click="toggleDrop">
                    <div class="user">
                        <img src="images/user.png" alt="">
                        <div>
                        <div>Franck Fort</div>
                        <div class="">Admin</div>
                        </div>
                    </div>  
                </div>
                    <!-- Drop down -->

                <div v-show="showDropDown">
                    <div class="menuser">
                        <ul>
                            <a href="/UserPage"><li>Profil</li></a>
                            <a href="/adminprofile"><li>Dashboard</li></a>
                            <a href="/AdminParametre"><li>Paramètres</li></a>
                        </ul>
                        <form method="POST" action="#" role="none">
                            <button type="submit" >Déconnection</button>
                        </form>
                    </div>
                </div>
                
            </div>
                <div class="affichage">
                    <router-view></router-view>
                </div>
                    
        </div>
        
    </div>


        

</template>

<script>
    
export default {
    data () {
        return {
            showDropDown: false,
            showSide: true,
        }
    },
    methods: {
        toggleSideBar() {
            this.showSide = !this.showSide      },
        toggleDrop() {
            this.showDropDown = !this.showDropDown
        },
    }
}
</script>

<style>

*, ::before, ::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



.dashboard {
    margin-top: 150px;
    display: flex;
    width: 100%;
   height: 100%;
    color: white;
    font-size: 25px;
}
.menusidebar {
    height: 100vh;
     width: 300px;
    background-color: #5e3c1a;
}
.sidebar {
    width: 300px;
    height: 100px;
    font-weight: bolder;
    background-color: #472e16;
    display: flex;
    justify-content: center;
    align-items: center;

}
.sidemenu {
    display: flex;
    flex-direction: column;
}
.cat {
    display: block;
    position: relative;
    color: white; 
    text-decoration: none;
    cursor: pointer;
    margin-top: 5px; 
}
.box {
    margin-top: 30px;
}
.box:hover {
    background-color: #472e16;
}
.box img {
    float: left;
    margin-left: 50px;
}
.box p {
    float: left;
    margin-left: 20px;
}
.main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: auto;
    background-color: #5e3c1a;

}
.hamburger {
    display: flex;
    justify-content: center;
    margin-left: 20px; 
}
.hamburger img {
    width: 40px;
    height: 40px;
}
.header {
    height: 0vh;
     width: 1600px;
     background-color: #dec5b1;
}
.header .affichage {
    height: 70vh;
    width: 174vh;
    border: 2px solid #5e3c1a;
    margin-top: 10px;
    margin-left: 10px;
}
.header p {
    margin-top: 100px;
}
.user {
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    font-size: 20px;
    padding: 10px;
    margin-right: 40px;
}
.user img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
}
.menuser{
    background-color: #dec5b1;
    color: #5e3c1a;
    margin-right: 20px;
    margin-top: 300px;
}
.menuser li{
    list-style: none;
    cursor: pointer;
    padding: 10px 20px;
    margin-top: 10px;
}
.menuser li:hover {
    background-color: #472e16;
    color: #dec5b1;
}
.menuser a{
    text-decoration: none;
    color: white;
}
.menuser button{
    background-color: #b98d68;
    color: white;
    border: none;
    padding: 10px 10px;
    margin-top: 20px;
    font-weight: bold;
}
.menuser button:hover {
    background-color: #5e3c1a;
}

.affichage{
    background-color: yellow;
    overflow: scroll;
}


</style>
