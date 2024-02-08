<template>
      <div>
        <section class="gestCategory">
          <h2> Gestion des categories</h2>
          <button type="button" @click="openModalAddCategorie">Ajouter</button>

          <section>
            <div id="addModalCategory" class="modalAddCategory" v-if="modalAddCategory" v-cloak>
              <div class="Addmodal-contentCategory">
                <span class="closeCategory" v-on::click="closeModalAddCategorie">&times;</span>
                <h2>Ajouter une categorie</h2>
                <form @submit.prevent="addCategorie">
                  <div>
                    <label for="name">Nom de la categorie</label>
                    <input type="text" id="name" v-model="categories.name">
                  </div>
                  <button type="submit" class="btnModalModifCategory" @click="addCategorie">Ajouter</button>
                </form>
              </div>
            </div>
          </section>
          <div>

            <h3> Liste des categories</h3>
            <div class="cardModifcategory">
              <div v-for="(categories, index) in categories" :key="categories.id">
                <p>{{ categories.name }}</p>
                <button class="removeCategory" type="button"  @click="deleteCategorie(index)">Supprimer</button>
                <button class="modifCategory" type="button"  @click="openModalCategory(index)">Modifier</button>
              </div>
            </div>
          </div> 
        </section>
        <!-- Modal modification -->
        <section>
          <div id="editModalCategory" class="modalCategory" v-if="modal" v-cloak>
            <div class="modal-contentCategory">
              <span class="closeCategory" v-on::click="closeModalCategory">&times;</span>
              <h2>Modifier la categorie</h2>
              <form @submit.prevent="modifCategorie">
                <div>
                  <label for="name">Nom de la categorie</label>
                  <input type="text" id="name" v-model="categories[index].name">
                </div>
                <button type="submit" class="btnModalModifCategory" @click="modifCategorie">Modifier</button>

              </form>
            </div>

          </div>

        </section>
      </div>
  
</template>

<script>
import { mapState } from 'vuex';
export default {
  data(){
    return{
      modalAddCategory: false,
      modal: false,
      index: 1,
      editCategory: -1
      
    }
  },
  components: {
  },
  methods: {
    addCategorie(){
      this.$store.commit('addCategorie');
      
      
    },

    openModalAddCategorie(){
      this.$store.commit('openModalAddCategorie');
      this.modalAddCategory = true;
    },

    closeModalAddCategorie(){
      this.$store.commit('closeModalAddCategorie');
      this.modalAddCategory = false;
    },

    deleteCategorie(index){
      this.$store.commit('deleteCategorie', index);
    },
    openModal(index){
      this.$store.commit('openModalCategory', index) ;
    },
    modifCategorie(index){
      this.$store.commit('ModifCate', index);
      this.modal = false;
    },
    closeModalCategory(){
      this.$store.commit('closeModalCategory');
      this.modal = false;
    },
    openModalCategory(index){
      this.modal = true;
      this.index = index;
    },



  },
  computed: {
    ...mapState(['categories']),

  },
  created() {
  }

}
</script>

<style scoped>
h2 {
  margin-top: 50px;
}

.modalAddCategory {
  display: flex; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
  padding-top: 60px;
}

.Addmodal-contentCategory {
  background-color: #5e3c1a;
  margin: 5% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
  color: white;
  border-radius: 10px;
}

.modalCategory {
  display: flex; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
  padding-top: 60px;
}

.modal-contentCategory {
  background-color: #5e3c1a;
  margin: 5% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
  color: white;
  border-radius: 10px;
}

.closeCategory {
    cursor: pointer;
}

.cardModifcategory{
  display: flex;
  padding: 20px;
  border: solid 1px white;
  border-radius: 10px;
  background-color: #5e3c1a;
  color: white;
  justify-content: space-between;
  align-items: center;
  max-width: 100% ;
  grid-column: 15px 15px ;
 
}

.closeCategory {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.gestCategory {
  margin-top: 20px;

}

.gestCategory button {
  flex-direction: row;
  border: solid 1px white ;
  border-radius: 10px;
  font-size: 18px;
  padding: 10px;
  margin-left: 20px;
  color: white;
}

.modifCategory{
  background-color: blue;
}

.removeCategory{
  background-color: red;
} 

.btnModalModifCategory{
  cursor: pointer;
  background-color: #5e3c1a;
  color: white;
  border: solid 1px white;
  border-radius: 10px;
  font-size: 18px;
  padding: 10px;
  margin-left: 20px;
  margin-top: 20px;
}


</style>