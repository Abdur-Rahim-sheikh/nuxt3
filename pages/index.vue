<script setup>
    definePageMeta({
        middleware: 'auth',
    })
</script>

<template>
    <div class="main">
        <h1>Index Page</h1>
        <ContentDoc />
        <!-- <img src="/2.jpeg" alt="kindle book" /> -->
        <IconsBell />

    </div>
</template>