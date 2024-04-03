<script setup>
import Select from "./components/Select.vue";
import { onMounted } from "vue";
import items from "./assets/items.json";

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
    <div class="'ItemsBox'">
      <div
        v-for="item in items"
        :key="item.id"
        :name="item.name"
        :price="item.price"
      >{{ item.name}}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  margin: 0 auto;
}
</style>
