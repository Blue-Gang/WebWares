import { createStore } from 'vuex'

export default createStore({
  state: {
    //création d'un tableau de categorie produit
    categories: [
      { categories: 1, name: 'Canapé' },
      { categories: 2, name: 'Vase' },
      { categories: 3, name: 'Tapis' },
      { categories: 4, name: 'Console murale' },
      { categories: 5, name: 'Lampe' },
      { categories: 6, name: 'Applique murale' },
      { categories: 7, name: 'Lustre' },
      { categories: 8, name: 'Table' },
      { categories: 9, name: 'Table de chevet' },
      { categories: 10, name:'Chaises' },      
    ],

    //création d'un tableau de produits

   produits : [

      {
        id: 1,
        image: 'images/mobilier-5.jpg',
        titre: 'Table à manger en bois',
        description: 'Table à manger en bois massif avec finition élégante.',
        prix: 299.99,
        moq: 5,
        stock: 10,
        categorieId: 5,
      },
  
      {
        id: 2,
        image: 'images/luminaire-1.jpg',
        titre: 'Lampe moderne',
        description: 'Lampe avec un design moderne et éclairage ajustable.',
        prix: 129.99,
        moq: 10,
        stock: 100,
        categorieId: 2
      },
  
      {
        id: 3,

        image: 'images/tapis-2.jpg',
        titre: 'Tapis en laine',
        description: 'Tapis doux en laine avec motif géométrique.',
        prix: 89.99,
        moq: 20,
        stock: 50,
        categorieId: 3
      },
  
      {
        id: 4,
        image: 'images/deco-3.jpg',
        titre: 'Vase éthnique en argile',
        description: 'Vase éthnique en argile avec motifs gravés à la main.',
        prix: 49.99,
        moq: 20,
        categorieId: 4
      },
              
        {
          id: 5,
          image: 'images/mobilier-1.jpg',
          titre: 'Chaise en bois',
          description: 'Chaise en bois massif avec finition élégante.',
          prix: 99.99,
          moq: 5,
          stock: 30,         
          categorieId: 1
      },

        {
          id: 6,
          image: 'images/luminaire-2.jpg',
          titre: 'Lampe de table',
          description: 'Lampe de table avec un design moderne et éclairage ajustable.',
          prix: 79.99,
          moq: 10,
          categorieId: 2
        },
     
        {
          id: 7,
          image: 'images/tapis-3.jpg',
          titre: 'Tapis en laine',
          description: 'Tapis doux en laine avec motif géométrique.',
          prix: 89.99,
          moq: 20,
          stock: 50,
          categorieId: 3
        },
    
        {
          id: 8,
          image: 'img/deco-1.jpg',
          titre: 'Vase éthnique en argile',
          description: 'Vase éthnique en argile avec motifs gravés à la main.',
          prix: 49.99,
          moq: 20,
          stock: 30,
          categorieId: 4
        },
    
        {
          id: 9,
          image: 'images/mobilier-2.jpg',
          titre: 'Table à manger en bois',
          description: 'Table à manger en bois massif avec finition élégante.',
          prix: 299.99,
          moq: 5,
          stock: 10,
          categorieId: 1
        },
    
        {
          id: 10,
          image: 'images/luminaire-3.jpg',
          titre: 'Lampe moderne',
          description: 'Lampe avec un design moderne et éclairage ajustable.',
          prix: 129.99,
          moq: 10,
          stock: 100,
          categorieId: 2
        },
    
        {
          id: 11,
          image: 'images/tapis-1.jpg',
          titre: 'Tapis en laine',
          description: 'Tapis doux en laine avec motif géométrique.',
          prix: 89.99,
          moq: 20,
          stock: 50,
          categorieId: 3
          
        }, 
        {
          id: 12,
          image: 'images/deco-2.jpg',
          titre: 'Vase éthnique en argile',
          description: 'Vase éthnique en argile avec motifs gravés à la main.',
          prix: 49.99,
          moq: 20,
          stock: 30,
          categorieId: 4
        },
      
        {
          id: 13,

          image: 'images/mobilier-3.jpg',
          titre: 'Canapé en cuir',
          description: 'Chaise en bois massif avec finition élégante.',
          prix: 99.99,
          moq: 5,
          stock: 30,
          categorieId: 1
        },
      
        {
          id: 14,
          image: 'images/luminaire-4.jpg',
          titre: 'Lampe de table',
          description: 'Lampe de table avec un design moderne et éclairage ajustable.',
          prix: 79.99,
          moq: 10,
          stock: 100,
          categorieId: 2
        },
      
        {
          id: 15,
          image: 'images/tapis-4.jpg',
          titre: 'Tapis en laine',
          description: 'Tapis doux en laine avec motif géométrique.',
          prix: 89.99,
          moq: 20,
          stock: 50,
          categorieId: 3
        },
      
        {
          id: 16,
          image: 'images/deco-4.jpg',
          titre: 'Vase éthnique en argile',
          description: 'Vase éthnique en argile avec motifs gravés à la main.',
          prix: 49.99,
          moq: 20,
          stock: 30,
          categorieId: 4
        },
      
        {
          id: 17,

          image: 'images/mobilier-4.jpg',
          titre: 'Canapé tissus',
          description: 'Table à manger en bois massif avec finition élégante.',
          prix: 299.99,
          moq: 5,
          stock: 10,
          categorieId: 5
        },
      
        {
          id: 18,

          image: 'images/luminaire-5.jpg',
          titre: 'Lampe moderne',
          description: 'Lampe avec un design moderne et éclairage ajustable.',
          prix: 129,
          moq: 5,
          stock: 10,
          categorieId: 2
        },
        
          {
            id: 19,
            image: 'images/tapis-5.jpg',
            titre: 'Tapis en laine',
            description: 'Tapis doux en laine avec motif géométrique.',
            prix: 89.99,
            moq: 20,
            categorieId: 3,
            stock: 50,
            
          },
        
          {
            id: 20,
            image: 'images/deco-5.jpg',
            titre: 'Vase éthnique en argile',
            description: 'Vase éthnique en argile avec motifs gravés à la main.',
            prix: 49.99,
            moq: 20,
            categorieId: 4,
            stock: 30,
          }
      
          
    ],
    //créé un tableau de panier

    produitPanier: [],

    //créé un tableau de commandes
    commande: [],


    //créé un tableau de clients de 10 clients
    clients: [
      {
        id: 1,
        user: 2,
        nom: 'Dupont',
        prenom: 'Jean',       
        adresse: '1 rue de la Paix',
        codePostal: '75001',
        ville: 'Paris',
        email: 'user@webwares.com',
        raisonSociale: 'Web Wares',
        siret: '15854569585852',     
        role: 'user',        
      },  
      {
        id: 2,
        user: 1,
        nom: 'Martin',
        prenom: 'Paul',       
        adresse: '2 rue de la Paix',
        codePostal: '75001',
        ville: 'Paris',
        email: 'user@webwares.com',
        raisonSociale: 'Web Wares',
        siret: '15854569585852',     
        role: 'user',        
      },
      {
        id: 3,
        user: 1,
        nom: 'Marte',
        prenom: 'Jean',       
        adresse: '2 rue du Github',
        codePostal: '75000',
        ville: 'La Merte',
        email: 'user@webwares.com',
        raisonSociale: 'Web Wares',
        siret: '15858569585852',     
        role: 'user',        
      },
      {
        id: 4,
        user: 1,
        nom: 'Chouffe',
        prenom: 'Franck',       
        adresse: '1664 rue de la Biére',
        codePostal: '75001',
        ville: 'Paris',
        email: 'user@webwares.com',
        raisonSociale: 'Web Wares',
        siret: '15558584135852',     
        role: 'user',        
      },
      {
        id: 5,
        user: 1,
        nom: 'Morel',
        prenom: 'Jason',       
        adresse: '15 rue Warthunder',
        codePostal: '56895',
        ville: 'NoMANSLands',
        email: 'chars@decombat.com',
        raisonSociale: 'Amiral',
        siret: '585959565658585',     
        role: 'user',        
      },

    ],

    online: false,

    //creer une nouvelle catégorie
    newValue: {},
    newValueCategory: {},
    newCategoryName : '',


  },
  getters: {
    userCo: state => state.online,
  },
  mutations: {

    mettreEnLigne(state, enLigne) {
      state.online = enLigne;
    },


    // ajouter un produit au pannier
    addProduit(state, prod) {
    state.produitPanier.push(prod); 
  },


   removeProduit(state,produit){
      state.produitPanier = state.produitPanier.filter(prod=>
        produit.id !== prod.id
        )
    },

    setProduitPanier(state, panier) {
      state.produitPanier = panier;
    }, 

    clearProduitPanier(state) {
      state.produitPanier = [];
    },

    transfertCommande(state) {
      state.commande = [...state.produitPanier];
      state.produitPanier = [];  
    },

    // ajouter une catégorie

    addCategorie(state) {
      if(state.newCategoryName.trim() !== '') {
        state.categories.push({name: state.newCategoryName.trim()});
        state.newCategoryName = '';
        state.closeModalAddCategorie();
      }
      else {
        alert('veuillez remplir tous les champs');
      }

    },

    openModalAddCategorie(state, categorie) {
      state.modalAddCategorie = true;
      state.editIndex = categorie;
      state.newValueCategory = { ...state.categories[categorie] };
    },

    closeModalAddCategorie(state) {
      state.modalAddCategorie = false;
      state.editIndex = 0;
      state.newValueCategory = {};
    },

    // supprimer Catégorie

    deleteCategorie(states, categories) {
      if(confirm('Voulez-vous supprimer cette catégorie ?')){
        states.categories.splice(categories, 1);
      }

    },

    // modification Catégorie

    modifCategorie(state) {
      if(this.newValueCategory.name) {
        state.categories.push(this.newValueCategory);
        this.newValueCategory = {};
        this.CloseModalCategory();
      }
      else {
        alert('veuillez remplir tous les champs');
      }
    }, 

    openModalCategory(state, categorie) {
      state.modal = true;
      state.editIndex = categorie;
      state.newValue = { ...state.categories[categorie] };
      
    },
    closeModalCategory(state) {
      state.modal = false;
      state.editIndex = 0;
      state.newValue = {};
    },
  },



  actions: {

    clientEnLigne(context, enLigne) {
      context.commit('mettreEnLigne', enLigne);
    }


  },
  modules: {
  }
})
