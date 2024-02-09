<template>

  <div>
    <UserForm />
  </div>
  
  
  </template>
  
  <script>
  import UserForm from '@/components/UserForm.vue';
  
  export default {

    created() {
      console.log('loginpage ok')
    },


    components: {
      UserForm,
    },

    methods: {
    



    }
  
  }
  </script>
  
  <style scoped>
  .formulaire{
    width: 600px;

  }
  
  
  </style>