<template>
    <div>
        <section class="add-more">
            <p>Ajouter un produit</p>
            <form >

                <label for="name">Nom produit:</label><br>
                <input v-model ="newValue.name" type="text" id="name" name="name"><br>

                <label for="price">Prix produit:</label><br>
                <input v-model ="newValue.price" type="number" id="price" name="price"><br>

                <label for="quantity">Quantité produit:</label><br>
                <input v-model ="newValue.quantity" type="number" id="quantity" name="quantity"><br>

                <label for="category">Catégorie produit:</label><br>
                <select v-model ="newValue.category" id="category" name="category" >
                    <option value="category1">Catégorie 1</option>
                    <option value="category2">Catégorie 2</option>
                    <option value="category3">Catégorie 3</option>
                </select><br>

                <br><br>
                <input type="button" value="Ajouter" class="btn btn-success" v-on:click="caisse">
            </form>
        </section>

    </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>