<template>
  
  <div v-if="produitPanier.length" class="pagepanier">
    <div v-if="modal === false">
      <thead id="panier" v-for="(prod, index) in produitPanier" :key="index">
          <th class="cimg">
              <img  class="imgpanier" v-bind:src="prod.image">
          </th>
          <br>
          <th>
              <h2>{{ prod.titre }}</h2>
          </th>
          <th>
              <div class="compteur">
                  <button @click="decrementQuantite(prod)" v-bind:disabled="prod.quantites<=1" >-</button>
                  <h2>{{ prod.quantites }}</h2>
                  <button @click="incrementQuantite(prod)">+</button>
                  <Gbtn label="Supprimer" bg="red" @click="remove(prod)"/>
              </div>
          </th>
          <th>
              <h2>{{ prod.prix }} € HT </h2>
              <span>{{ sousTotal(prod)  }} TTC</span>
          </th>
      </thead>
            <div class="recap">
                <div>Total HT: {{ totalB() }} €</div>
                <div>Total TTC: {{ totalBag() }} €</div>
            </div>
            <Gbtn label="Confirmer la commande" bg="green" @click="openModal"/>
    </div>
  </div> 
          <div class="panierVide" v-else >Panier Vide</div>

     <!-- Modal de confirmation de commande -->

     
  <section class="modalEdit" v-if="modal ">
              <h1 class="resum">Résumé de votre commande</h1>
      <div class="panierModal" v-for="(prod, index) in produitPanier" :key="index">
          <div class="cimg">
              
          </div>
          <div>
              <h2>{{ prod.titre }}</h2>
          </div>
              <h2>{{ prod.quantites }}</h2>
          <div class="prixTtc">
              <h2 >{{ prod.prix }} € HT </h2>
              <span class="prixTtc2" >{{ sousTotal(prod) }} TTC</span>
            </div>       
          </div>
          <div class="recap2">
            
            <div class="recap">
            
                <h3 class="prixHt">Total HT: {{ totalB() }} €</h3>
                <span class="prixTtc" >Total TTC: {{ totalBag() }} €</span>
              </div>
          </div>
            <div class="adress">
              
              <div  class="adresslivr" >
                <div class="adrLiv" v-if="clients.length > 0">
                      <h2 class="adressFac">Adresse de facturation</h2>
                      <h2 class="nomPren" >{{ clients[0].nom }} {{ clients[0].prenom }}</h2>
                      <span>Adresse : {{ clients[0].adresse }}</span>
                      <span>{{ clients[0].codePostal }}  {{ clients[0].ville }}</span>
                      <span>Entreprise : {{ clients[0].raisonSociale }}</span>
                      <span>Email : {{ clients[0].email }}</span>
                      <span>Numero de commande : {{ numeroCommande }}</span>
                </div>
              </div>
      
          
          <div   class="adresslivr" >
                <div class="adrLiv" v-if="clients.length > 0" >
                    <h2  class="adressFac" >Adresse de livraison</h2>                
                    <h2 class="nomPren">{{ clients[0].nom }} {{ clients[0].prenom }}</h2>
                    <span>Adresse : {{ clients[0].adresse }}</span>
                    <span>{{ clients[0].codePostal }} {{ clients[0].ville }}</span>
                    <span>Entreprise : {{ clients[0].raisonSociale }}</span>
                    <span>Email : {{ clients[0].email }}</span>
                    <span>Téléphone : {{ clients[0].telephone }}</span>
              </div>
              
            </div> 
            
          </div>
          <div class="btnPrix">
          <Gbtn label="Confirmer votre commande"  @click="validerCom"/>
        </div>
         
    
          
     <!-- Modal de confirmation de commande -->
  </section>
       
    
    

</template>

<script>

import Gbtn from '@/components/ButtonGen.vue'


export default {

    data() {
        return {
            modal: false , 
           
        }
    },

    components: {
        Gbtn
    },


    methods : { 


        validerCom() {
            
          this.$store.commit('transfertCommande');
            this.saveCartToLocal();
            this.saveCommandeToLocal();            
            this.modal = false;
        
        },

        saveCommandeToLocal() {
        localStorage.setItem('commande', JSON.stringify(this.commande));
        },

        openModal(){
          this.modal = true;
        },
        
        addProduit(prod){
            this.$store.commit('addProduit', prod) 
            this.saveCartToLocal();          
        },
              
        remove(prod){
          this.$store.commit('removeProduit',prod)
          this.saveCartToLocal();
        },

        totalB(){
          return this.produitPanier.reduce((total, element) =>{
          return total + element.quantites * element.prix
          },0).toFixed(2)
        },
        
        totalBag(){
          const tva = 0.20; 
          const totalTTC = this.produitPanier.reduce((total, prod) => {
            const sousTotalHT = prod.prix * prod.quantites;  
            const sousTotalTTC = sousTotalHT * (1 + tva); 
            return total + sousTotalTTC;
            }, 0);
            return totalTTC.toFixed(2);
        },
           
        sousTotal(prod){
          const sousTotalHT = prod.prix * prod.quantites;
          const tva = 0.20; 
          const sousTotalTTC = sousTotalHT * (1 + tva);
          return sousTotalTTC.toFixed(2);
        },
    
        incrementQuantite(prod) {
          prod.quantites++;
          this.saveCartToLocal();
        },
        decrementQuantite(prod) {
          if (prod.quantites > 1) {
          prod.quantites--;
          }
          this.saveCartToLocal();
        },

        valider(){      
          this.$store.commit('transfertCommande');
          this.$store.commit('incrementCommande');
          this.saveCartToLocal();
         
          alert('Votre commande a été validée');
          
        },
        

        saveCartToLocal() {
        localStorage.setItem('panier', JSON.stringify(this.produitPanier));
        },


    },

    computed: {
            produitPanier() {
                return this.$store.getters.getproduitPanier;
            },
            produits() {
                    return this.$store.getters.getproduits;
            }, 
            commande() {
                return this.$store.getters.getcommande;
            },  
            clients() {
                return this.$store.getters.getclients;
            },
            numeroCommande() {
              return this.$store.state.numeroCommande;
            },
            
            
        },

        created() {
          const savedCart = localStorage.getItem('panier');
          if (savedCart) {
          this.$store.commit('setProduitPanier', JSON.parse(savedCart));
          this.$store.commit('setCommande', JSON.parse(savedCart));
          
          }
    },

}
</script>

<style scoped>

template{
    margin-bottom: 200px;
  
}





#panier{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-top: 5px;   
    flex: grid;
    grid-column:250px 250px 250px 250px ;
    background-color: #dec5b1;
    border-radius: 10px;
    
  }
  .panierVide{  
    margin-top: 200px ;
    text-align: center;
    
    font-size: 20px;
    display: flex;
    align-self: center;
    justify-content: center;
    color: #472e16;
  }


thead:hover{
    cursor: pointer;
    transform: scale(1.02);
    transition-duration: 0.5s;
  }

  .pagepanier{
    display: flex;
    justify-content: center;   
    margin-top: 200px;
    flex-direction: column;
    align-items: center;  
    border-radius: 10px;
    width: 100%;
    }

.panier{
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
    font-size: small;
    align-items: center;
    margin: 10px;
    width: 80%;
    height: 40%;
    margin-top: 5px;
    flex: grid;
    grid-column: 250px 250px 250px 250px ;
    color: #472e16;  
  }

  .compteur{ 
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0% auto;
    
  }

  

  .cimg{
    display: flex;
    justify-content: center;
    align-items: center;
  }

/* // Modal de confirmation de commande */

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
}

.resum{
    margin-bottom: 50px;
    color: #472e16;
}




thead{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-top: 5px;
    margin-top: 200px;
    flex: grid;
    grid-column:250px 250px 250px 250px ;
    background-color: #dec5b1;
    border-radius: 10px;
    
  }

thead:hover{
    cursor: pointer;
    transform: scale(1.1);
  }

  .pagepanier{
    display: flex;
    justify-content: center;
    margin-top: 200px;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    width: 100%;
    }

 

.prixTtc2{
    display: flex;
    align-self: center;
    margin-left:15px;
}


.prixTtc{
    display: flex;
    justify-content: center;
    align-self: center;

}

  .compteur{ 
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0% auto;
    
  }

  .imgpanier{
    width: 50px;
    height: 60px;
    margin-left: 15px;
    border-radius: 10px;
  }

  .prixhttc{
    display: block;
    text-align: center;
    justify-content: center;
    
  }

  .cimg{
    display: flex;
    justify-content: center;
    align-items: center;
  }


  
 


  


  /* // Modal de confirmation de commande */

  .panierModal{
    grid-row: 250px 250px 250px 250px;
    width: 60%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 5px;
    margin-top: 0px;
    flex: grid;
    grid-column: 250px 250px 250px 250px;
    background-color: #dec5b1;
    border-radius: 10px;
    gap: 24px;
    font-size: 13px;
    font-weight:300;
    
  }
.modalEdit {
    display: flex; 
    position: fixed;
    overflow: scroll;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background-color: #dec5b1b3; 
    z-index: 1; 
    justify-content: center;
    align-items: center;
}
.prixHt{
    display: flex;
    justify-content: center;
    align-self: center;
    margin-left: 15px;
    margin-top:5px;
}

  .adress{
    display: flex;
  }

  .adresslivr{
    margin-left: 15px;
    width: 450px;
    height: 250px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    margin-top: 25px; 
    background-color: #dec5b1;
    border-radius: 10px;
    font-size: 20px;
  }

  .adressFac{
    margin-top: -10px;
    margin-bottom: 51px;
    font-size: 25px;
    color: #472e16;
  }

.adrLiv{
    display: flex;
    flex-direction: column;
    margin-left:15px;
    margin-top: 15px;
  }
  .adress{
    display: flex;
  }

  .adresslivr{
    
    margin-left: 15px;
    width: 450px;
    height: 250px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    margin-top: 25px; 
    background-color: #dec5b1;
    border-radius: 10px;
    font-size: 20px;
  }

  .adressFac{
    margin-top: -10px;
    margin-bottom: 51px;
    font-size: 25px;
    color: #472e16;
  }

  .recap{
  width: 250px;
  height: 80px; 
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: center;
  background-color: #dec5b1fe;
  border-radius: 10px;
  text-align: center;
}
.recap2{
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  
}

.btnPrix{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
 
  
}
.nomPren {
    margin-top: -30px;
    padding: 9px;
    margin-bottom: 2px;
    font-size: 20px;
}

.modal-content {
    display: flex;
    flex-direction: column; 
    justify-content: center;
    background-color: #cca88cef;
    padding: 20px;
    padding-left: 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.734);
    max-width: 400px;
    width: 700px;
    position: relative;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 18px;
    color: #333;
    z-index: 2; 
    font-size: 30px;

}


  
</style>