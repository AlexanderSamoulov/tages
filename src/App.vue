<script setup>
import Select from "@comp//Select.vue";
import { onMounted } from "vue";
import items from "./assets/items.json";
/* import materials from '@/assets/materials.json' */
import {sortByMaterial,sortByPrice} from '@/helpers/selectOptions'
import ItemCard from "@comp/itemCard.vue";



onMounted(() => {
  console.log(items);
});
</script>

<template>
  <main class="wrapper">
    <h3>Главная/Системы хранения/Комплекты стеллажных систем</h3>
    <h1>Комплекты стеллажных систем</h1>
    <div class="searchBox">
      <Select :all="sortByPrice"/>
      <Select :all="sortByMaterial"/>
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
   
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.wrapper {
  font-family: "SF UI Text", sans-serif;
  max-width: 1488px;
  height: 100%;
  margin: 0 auto;
  .searchBox{
    display: flex;
    align-items: left;
    margin-bottom: 41px;
    & *{
      margin-right: 24px;
    }
  }
  .ItemsBox{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: auto;
    gap: 40px;
  }
}
</style>
