<template>
    <div>
      <UserForm title="Débutez votre shopping !"
      paragraphe="Nos produits, vos envies."
      :formInscription="{}"/>
    </div>
  
  </template>
  
  <script>
  import UserForm from '@/components/UserForm.vue';
  
  export default {
    components: {
      UserForm,
    }
  
  }
  </script>
  
  <style scoped>
  
  </style>