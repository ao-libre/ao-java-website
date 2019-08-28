<template>
  <nav class="fixed top-0 w-full bg-secondary py-3">
    <div class="separador absolute bottom-0"></div>
    <div class="container flex items-center justify-between">
      <nuxt-link to="/">
        <img src="../assets/logo.png" alt="logo Finisterra" />
      </nuxt-link>
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
nav li a {
  @apply text-gray-500 uppercase tracking-wide p-4;
}

nav li a:hover {
  @apply text-white;
}

nav .nuxt-link-exact-active {
  @apply text-white;
}
</style>