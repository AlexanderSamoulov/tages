<script setup>
import Select from "@comp//Select.vue";
import { computed, onMounted, reactive, watch } from "vue";
import items from "./assets/items.json";
/* import materials from '@/assets/materials.json' */
import { sortByMaterial, sortByPrice } from "@/helpers/selectOptions";
import ItemCard from "@comp/itemCard.vue";
import { setLocalStorage, getLocalStorage } from "@/helpers/localStorage";
import { ref, provide } from "vue";

const Storage = ref(getLocalStorage(["cart", "favorite"]));

const selectState = reactive({
  ByMaterialId: 0,
  ByPriceId: 0,
});

const ItemsForList = computed(() => {
  let list = items;
  switch (selectState.ByMaterialId) {
    case 1:
      list = list.filter((i) => i.material === 1);
      break;
    case 2:
      list = list.filter((i) => i.material === 2);
      break;
    default:
      break;
  }
  switch (selectState.ByPriceId) {
    case 1:
      list = list.sort((a, b) => a.price.current_price - b.price.current_price);
      break;
    case 2:
      list = list.sort((a, b) => b.price.current_price - a.price.current_price);
      break;
    default:
      break;
  }
  return list;
});


const changeLocalStorage = (option) => {
  if (Storage.value[option.key].includes(option.id)) {
    Storage.value[option.key] = Storage.value[
      option.key
    ].filter((el) => el !== option.id);
  } else {
    Storage.value[option.key].push(option.id);
  }
  setLocalStorage({
      key: option.key,
      value: Storage.value[option.key],
    });
};
</script>

<template>
  <main class="wrapper">
    <a href=""></a>
    <h3 class="linkString"><a href="#">Главная</a>/<a href="#">Системы хранения</a>/<a href="#" class="linkString-active">Комплекты стеллажных систем</a></h3>
    <h1>Комплекты стеллажных систем</h1>
    <div class="searchBox">
      <Select
        v-model.number="selectState.ByPriceId"
        :sortOption="sortByPrice"
      />
      <Select
        v-model.number="selectState.ByMaterialId"
        :sortOption="sortByMaterial"
      />
    </div>
    <div class="ItemsBox">
      <ItemCard
        v-for="item in ItemsForList"
        :key="item.id"
        :item="item"
        :isFavorited="!!Storage.favorite.includes(item.id)" 
      :addedToCart="!!Storage.cart.includes(item.id)"
        :changeLocalStorage="changeLocalStorage"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>

.wrapper {
  font-family: "SF UI Text", sans-serif;
  max-width: 1488px;
  height: 100%;
  margin: 0 auto;
  .linkString,
  .linkString *{
    font-size: 16px;
    font-weight: 500;
  text-decoration: none;
  color: #666;
  .linkString-active{
    color: black;
  }
}
  .searchBox {
    display: flex;
    align-items: left;
    margin-bottom: 41px;
    & * {
      margin-right: 24px;
    }
  }
  .ItemsBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: auto;
    gap: 40px;
  }
}
</style>
