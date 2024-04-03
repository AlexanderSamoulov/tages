<template>
    <div class="card">
<img :src="`./../assets${ imageUrl }`" alt="">


    </div>
</template>

<script setup>
 
defineProps({
    id: Number,
    name: String,
    code:String,
  price: Object,
  imageUrl: String,
  material: Number,
  isFavorite:Boolean,
  addedToCart:Boolean, 
});
</script>

<style lang="scss" scoped>
.card{
    width: 352px;
    height: 336px;
}
</style>