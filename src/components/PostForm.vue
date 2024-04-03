<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <input
          v-bind:value="title"
          @input="inputTitle"
          class="input"
          type="text"
          placeholder="Название"
        />
        <input
          v-bind:value="body"
          @input="body=$event.target.value"
          class="input"
          type="text"
          placeholder="Описание"
        />
        <button class="btn" @click="createPost">Создать</button>
      </form>
</template>

<script>
export default {

}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid teal;
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
}
.btn {
  align-self: flex-end;
  margin-top: 20px;
  padding: 10px 15px;
  border: 1px solid teal;
  background: none;
  border-radius: 5px;
  color: teal;
  font-weight: 700;
}
.btn:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>