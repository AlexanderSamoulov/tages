<template>
  <div class="selectBox">
    <label for="">{{ all.name }}</label>
    <select name="" id="">
      <option v-for="option in all.options" :key="option.id" value="">{{ option.name }}</option>
    </select>
  </div>
</template>

<script setup>
defineProps({
    all:Object,
  id: Number,
  label: String,
  name: String,
  options: Array,
});
</script>

<style lang="scss" scoped>
.selectBox {
  width: 288px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  label {
    margin-left: 16px;
    margin-bottom: 10px;
    color: rgba(79, 79, 79, 1);
    font-size: 12px;
  }
  select {
    position: relative;
    font-family: "SF UI Text", sans-serif;
    padding: 0 16px;
    height: 40px;
    background: url("@/assets/img/arrow_select.svg") no-repeat 95%;
    background-color: rgba(242, 242, 242, 1);
    font-size: 14px;
    font-weight: 600;
    border: none;
    appearance: none;
    &:focus {
      border: none;
    }

    /*  & *{
        font-size: 14px;
        font-weight: 100;
    } */
  }
}
select:after {
  content: "1111";
  /* display: block; */
  /* background-image: url('@pub/img/arrow_select.svg'); */
  /* 	position: absolute; */
  /* right: 5px;
	top: 5px; */
}
</style>
