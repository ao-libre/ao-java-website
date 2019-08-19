<template>
  <nav class="fixed top-0 w-full mt-8">
    <div class="container flex items-center justify-between">
      <img src="../assets/logo.png" alt="logo Finisterra" />
      <ul class="flex items-center">
        <li>
          <nuxt-link to="/">Inicio</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/noticias">Noticias</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/aolibre">AO Libre</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav a {
  @apply text-gray-500 uppercase tracking-wide mx-4;
}

nav .nuxt-link-exact-active {
  @apply text-white;
}
</style>