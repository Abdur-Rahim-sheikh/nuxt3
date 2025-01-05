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
if (!product.value) {
  // fatal true ensures that it catches server side errors too
  throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true });
}
definePageMeta({
  layout: 'products',
});
</script>

<style></style>