<script setup>
import Select from "@comp//Select.vue";
import { onMounted } from "vue";
import items from "./assets/items.json";
/* import materials from '@/assets/materials.json' */
import ItemCard from "@comp/itemCard.vue";



onMounted(() => {
  console.log(items);
});
</script>

<template>
  <div class="wrapper">
    <h3>Главная/Системы хранения/Комплекты стеллажных систем</h3>
    <h1>Комплекты стеллажных систем</h1>
    <div class="searchBox">
      <Select />
      <Select />
    </div>
    <div class="ItemsBox">
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
@import "@/assets/variables.scss";
.wrapper {
  height: 100%;
  margin: 0 auto;
  .ItemsBox{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: auto;
    gap: 40px;
  }
}
</style>
