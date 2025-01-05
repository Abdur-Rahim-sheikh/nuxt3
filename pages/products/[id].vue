<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script lang="ts" setup>
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;
// fetch product details
const { data: product } = await useFetch(uri);
definePageMeta({
  layout: 'products',
});
</script>

<style></style>