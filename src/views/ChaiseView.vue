<template>
    <div class="produitview">
     <h1>Produits</h1>
     <div class="tableproduits" >
         
            <div class="cardproduit" v-for="(prod, index) in produitsFiltres" :key="index">
                 <tr class="cardinte">
                     <h2 class="titleprod">{{ prod.titre }}</h2>
                     <td class="imgproduit">{{ prod.image }}</td>
             
                     <td class="description">{{ prod.description }}</td>
                     <td class="prix">Prix: {{ prod.prix }} € HT</td>
                     <td class="stock">Stock: {{ prod.stock }}</td>
                     <td>MOQ: {{ prod.moq }}</td>

                     <Gbtn  @click="add(prod)" label="Ajouter au panier"/>
                 </tr>
            </div>
        </div>
    </div>   


</template>

<script>

 import { mapState } from 'vuex'
    import Gbtn from '@/components/ButtonGen.vue'
export default {

 data(){
     return{
         categorieId:1,
     }
 },

 components: {
     Gbtn
 },


 methods: {
           
            

           add(prod) {
               const produitExistant = this.produitPanier.find(item => item.id === prod.id);
               if (produitExistant) {  
               this.$store.commit('incrementQuantite', produitExistant.quantites ++);
               
               } else {
       
               prod.quantites = prod.moq;
                   this.$store.commit('addProduit', prod);
               }
               this.saveCartToLocal();               
           },

            saveCartToLocal() {
                localStorage.setItem('panier', JSON.stringify(this.produitPanier));
            }, 
            saveCommandeToLocal() {
                localStorage.setItem('commande', JSON.stringify(this.commande));
           },

       },
 computed: {
            ...mapState(['produits', 'produitPanier']),
            produitsFiltres(){
            return this.produits.filter(prod => prod.categorieId === this.categorieId);
            }
        },

 created() {
            const savedCart = localStorage.getItem('panier');
            if (savedCart) {
            this.$store.commit('setProduitPanier', JSON.parse(savedCart));
            }

        },

 }


</script>

<style scoped>
body{
 background-color: aqua;
}

template {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #472e16;
    transition-duration: 0.5s;
}

.tableproduits {
    display: flex; 
    display: grid;
    grid-template-columns: 400px 400px 400px 400px; 
    margin-bottom: 200px;
    margin-top:50px;
    justify-content: center;
    margin-right: 8%;
    
}

/* media queries */
@media (max-width: 768px) {
    .tableproduits {
        grid-template-columns: 300px 300px;
        justify-content: center;
        margin-left: 5px;
        padding: 25px;
    }
}

@media (max-width: 480px) {
    .tableproduits {
        grid-template-columns: 250px;
        justify-content: center;
        
    }
}


.cardinte{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cardproduit {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 40px;
    padding: 10px;  
    background-color: #cca88c81 ;
    opacity: 0.9;
    z-index: 0;
    border-radius: 10px;
    box-shadow: 0 8px 16px 0 rgba(11, 11, 11, 0.625);
    transition: 0.3s;
    margin-left: 25%;  
    width: 330px;
    height: 500px;
    overflow: hidden;

}

.cardproduit:hover {
    box-shadow: 0 12px 24px 0 rgba(11, 11, 11, 0.625);
    opacity: 1;
    z-index: 0;
    transform: scale(1.1);
}

.imgproduit {
    width: 250px;
    height: 200px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 8px 16px 0 rgba(11, 11, 11, 0.625);
}


.titleprod {
    font-size: 20px;
    margin-bottom: 10px;
    color: #472e16c6;
}

.titreproduit{
    
    margin-top: 20px;
    margin-bottom: 50px;
    font-size: 40px;
    color: #472e16;
}



</style>