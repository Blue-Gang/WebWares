<template>
  <div>
    <UserForm title="Débutez votre shopping !"
    paragraphe="Nos produits, vos envies."
    :formInscription="true" @submit.prevent="enregistrerUtilisateur"/>
  </div>

</template>

<script>
import UserForm from '@/components/UserForm.vue';

export default {
  components: {
    UserForm,
  },

  methods: {
    enregistrerUtilisateur() {
      console.log('Utilisateur enregistré !')
      return {
        online: true,
      }
    }
  }

}
</script>

<style scoped>

</style>