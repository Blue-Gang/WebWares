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
   produits :[
    
      {
        id: 1,
        image: 'mobilier-5.jpg',
        titre: 'Table à manger en bois',
        description: 'Table à manger en bois massif avec finition élégante.',
        prix: 299.99,
        moq: 5,
        categorieId: 1
      },
  
      {
        id: 2,
        image: 'luminaire-1.jpg',
        titre: 'Lampe moderne',
        description: 'Lampe avec un design moderne et éclairage ajustable.',
        prix: 129.99,
        moq: 10,
        categorieId: 2
      },
  
      {
        id: 3,
        image: 'tapis-2.jpg',
        titre: 'Tapis en laine',
        description: 'Tapis doux en laine avec motif géométrique.',
        prix: 89.99,
        moq: 20,
        categorieId: 3
      },
  
      {
        id: 4,
        image: 'deco-3.jpg',
        titre: 'Vase éthnique en argile',
        description: 'Vase éthnique en argile avec motifs gravés à la main.',
        prix: 49.99,
        moq: 20,
        categorieId: 4
      },
        
        {
          id: 5,
          image: 'mobilier-1.jpg',
          titre: 'Chaise en bois',
          description: 'Chaise en bois massif avec finition élégante.',
          prix: 99.99,
          moq: 5,
          categorieId: 1
        },
    
        {
          id: 6,
          image: 'luminaire-2.jpg',
          titre: 'Lampe de table',
          description: 'Lampe de table avec un design moderne et éclairage ajustable.',
          prix: 79.99,
          moq: 10,
          categorieId: 2
        },
    
        {
          id: 7,
          image: 'tapis-3.jpg',
          titre: 'Tapis en laine',
          description: 'Tapis doux en laine avec motif géométrique.',
          prix: 89.99,
          moq: 20,
          categorieId: 3
        },
    
        {
          id: 8,
          image: 'deco-1.jpg',
          titre: 'Vase éthnique en argile',
          description: 'Vase éthnique en argile avec motifs gravés à la main.',
          prix: 49.99,
          moq: 20,
          categorieId: 4
        },
    
        {
          id: 9,
          image: 'mobilier-2.jpg',
          titre: 'Table à manger en bois',
          description: 'Table à manger en bois massif avec finition élégante.',
          prix: 299.99,
          moq: 5,
          categorieId: 1
        },
    
        {
          id: 10,
          image: 'luminaire-3.jpg',
          titre: 'Lampe moderne',
          description: 'Lampe avec un design moderne et éclairage ajustable.',
          prix: 129.99,
          moq: 10,
          categorieId: 2
        },
    
        {
          id: 11,
          image: 'tapis-1.jpg',
          titre: 'Tapis en laine',
          description: 'Tapis doux en laine avec motif géométrique.',
          prix: 89.99,
          moq: 20,
          categorieId: 3
      }
  
    ]


  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
