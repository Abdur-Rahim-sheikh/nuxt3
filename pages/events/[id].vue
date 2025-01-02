<!-- <script setup>
    const route = useNuxtApp();
</script>
<template>
    <div>event id: {{ id }}</div>
</template> -->

<!-- to access the [id] variable as in file name we can use useRoute() -->
<script setup>
    const route = useRoute();
    const id = ref(route.params.id);
    console.log("id value", id.value);
</script>
<template>
    <div>event id: {{ id }}</div>
</template>

<!-- Or we can directly catch value using $ sign -->
<!-- <template>
    <div>event id: {{ $route.params.id }}</div>
</template> -->