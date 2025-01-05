<template>
  <div>
    <header>
        <nav>
            <NuxtLink to="/">Nuxt Ninja</NuxtLink>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </nav>
        Normal link to <a href="/about">About</a>
    </header>
    <h2>Home</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus qui aspernatur consectetur ut. Eum vero aut laudantium saepe doloribus?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit possimus qui aspernatur consectetur ut. Eum vero aut laudantium saepe doloribus?</p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
h2{
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}
</style>