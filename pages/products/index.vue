<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'products',
});
// fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products", { key: "fake-products" })

useHead({
  title: 'Nuxt Ninja | Merch',
  meta: [
    { name: 'description', content: 'Nuxt Ninja Merchandise' },
  ]
})

</script>

<style></style>