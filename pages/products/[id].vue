<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rem eligendi odit.</p>
  </div>
</template>

<script lang="ts" setup>
    const { id } = useRoute().params;
</script>

<style>

</style>