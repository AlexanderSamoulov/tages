<template>
  <div class="selectBox">
    <label class="selectBox__label" :for="sortOption.name">{{ sortOption.name }}</label>
    <select
    class="selectBox__select"
      :id="sortOption.name"
      :value="modelValue"
      @change="emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="option in sortOption.options"
        :key="option.id"
        :value="option.id"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  sortOption: Object,
  modelValue: Number,
});
const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.selectBox {
  width: 288px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  .selectBox__label {
    margin-left: 16px;
    margin-bottom: 10px;
    color: rgba(79, 79, 79, 1);
    font-size: 12px;
  }
  .selectBox__select {
    position: relative;
    font-family: "SF UI Text", sans-serif;
    padding: 0 16px;
    height: 40px;
    background: url("@pub/img/arrow_select.svg") no-repeat 95%;
    background-color: rgba(242, 242, 242, 1);
    font-size: 14px;
    font-weight: 600;
    border: none;
    appearance: none;
    &:focus {
      border: none;
    }
  }
}
</style>
