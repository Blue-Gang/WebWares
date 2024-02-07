<template>
  <div>
    <h2> Gestion des categories</h2>
    <button type="button">Ajouter</button>
    <div>
      <h3> Liste des categories</h3>
      <div v-for="(categories, index) in categories" :key="categories.id">
        <p>{{ categories.name }}</p>
        <button type="button"  @click="deleteCategorie(index)">Supprimer</button>
        <button type="button"  @click="openModal(index)">Modifier</button>
      </div>
      <!-- Modal -->
    <div>
      <div>
        <div class="modalCategory" v-for="(modalGory,index) in modalGory" :key="index">
          <h3>Modifier la categorie</h3>
          <input type="text" v-model="modalGory.name">
          <button type="button" @click="modifCategorie(index)">Ajouter</button>
        </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data(){
    return{
      
    }
  },
  components: {
  },
  methods: {
    addCategorie(){
      
    },

    deleteCategorie(index){
      this.$store.commit('deleteCategorie', index);
    },
    openModal(index){
      this.$store.commit('openModal', index);
    },
    modifCategorie(index){
      this.$store.commit('ModifCate', index);
    }
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
</style>