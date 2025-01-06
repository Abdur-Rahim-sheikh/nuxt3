<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus qui aspernatur consectetur ut. Eum vero
      aut laudantium saepe doloribus?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus qui aspernatur consectetur ut. Eum vero
      aut laudantium saepe doloribus?</p>
    <p> From server api: {{ data }}</p>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/BDT');
</script>

<style>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>