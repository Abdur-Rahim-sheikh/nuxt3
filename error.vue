<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">
            {{ error.statusCode }}
        </p>
        <p class="mt-7 text-6xl">Oooops.</p>
        <p class="mt-7 text-2xl">{{ error.message }}</p>
        <button class="btn my-7" @click="handleClearError">Go Home...</button>
        <!-- this might cause issue -->
        <NuxtLink to="/" class="btn my-7">Go Home...without clearing error</NuxtLink>
    </div>
</template>

<script setup>
defineProps(['error'])
const handleClearError = () => clearError({ redirect: '/' })
</script>

<style></style>