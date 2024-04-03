<script setup>
import Select from "./components/Select.vue";
import { onMounted } from "vue";
import items from "./assets/items.json";
import ItemCard from "./components/itemCard.vue";
ItemCard

onMounted(() => {
  console.log(items);
});
</script>

<template>
  <div class="wrapper">
    <h3>Главная/Системы хранения/Комплекты стеллажных систем</h3>
    <img src="@/img/cart.svg" alt="" srcset="">
    <h1>Комплекты стеллажных систем</h1>
    <div class="searchBox">
      <Select />
      <Select />
    </div>
    <div class="'ItemsBox'">
      <ItemCard
        v-for="item in items"
        :key="item.id"
        :name="item.name"
        :code="item.code"
        :price="item.price"
        :imageUrl="item.image.url"
        :material="item.material"
      >{{ item.name}}</ItemCard>
    </div>
   
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  margin: 0 auto;
}
</style>
