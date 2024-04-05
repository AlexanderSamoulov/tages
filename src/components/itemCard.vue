<template>
  <div class="card">
    <div v-if="price.old_price " class="card__discount">Скидка</div>
    <img class="card__img" :src="`./../../${imageUrl}`" alt="" />
    <div class="card__info">
      <div class="card__code">{{ code }}</div>
      <div class="card__name">{{ name }}</div>
      <div class="card__footer">
        <div class="card__price">
          <span v-if="price.old_price " class="card__price_old">{{ price.old_price }}₽</span>
          <span class="card__price_current">{{ price.current_price }}₽</span>
        </div>
        <div class="card__buttons-block">
          <img src="@/assets/img/cart.svg" class="card__add-to-cart" />
          <img
            src="@/assets/img/heart-checked.svg"
            class="card__add-to-favourites"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  name: String,
  code: String,
  price: Object,
  imageUrl: String,
  material: Number,
  isFavorite: Boolean,
  addedToCart: Boolean,
});
</script>

<style lang="scss" scoped>
.card {
    position: relative;
  width: 336px;
  height: 352px;
  border: 1px solid rgba(238, 238, 238, 1);
  font-family: "SF UI Text", sans-serif;
  font-size: 16px;
  &__img {
    display: block;
    width: 238px;
    margin: 9px auto;
  }
  &__discount {
    position: absolute;
    top: 8px;
    height: 24px;
    width: 81px;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    color: rgb(255, 255, 255);
   
    background-color: rgba(235, 87, 87, 1);
  }
  &__info {
    margin: 22px 12px;
    .card__code {
      min-height: 12px;
      font-size: 10px;
      color: rgba(136, 136, 136, 1);
      font-family: "SF UI Text", sans-serif;
      margin-bottom: 5px;
    }
    .card__name {
      
      font-weight: bold;
      margin-bottom: 10px;
    }
    .card__footer {
      display: flex;
      justify-content: space-between;
      .card__price{
&_old{
    color:rgba(136, 136, 136, 1);
    text-decoration: line-through;
    margin-right: 10px;
}
&_current{
   
}

      }
.card__buttons-block *{
margin-left: 20px;
}
      .card__add-to-favourites {
      }
    }
  }
}
</style>
