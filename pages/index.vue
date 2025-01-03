<script setup>
    const {$sayHello} = useNuxtApp()
    $sayHello("abir plugins");
</script>

<template>
    <div class="main">
        <h1>Index Page</h1>
        <!-- <img src="/2.jpeg" alt="kindle book" /> -->
        <IconsBell />

    </div>
</template>