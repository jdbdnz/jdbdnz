<template>
  <div class="container">
    <header class="space-y-6 sm:space-y-10">
      <NavLinks />
      <h1>
        <NuxtLink
          to="/"
          class="w-128 max-w-full mx-auto block"
        >
          <Logo class="w-full" />
        </NuxtLink>
      </h1>
    </header>
    <main class="max-w-prose">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
  import Logo from '~/components/SiteLogo.vue'
  import NavLinks from "~/components/NavLinks.vue";

  useHead({
    link: [
      // Icons
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#eed3c0' },

      // Fonts
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Baumans&display=swap' }
    ],
    meta: [
      // Icons
      { name: 'msapplication-TileColor', content: '#eed3c0' },
      { name: 'theme-color', content: '#EED3C0' }
    ]
  })
</script>

<style>
  body {
    @apply text-dark bg-beige overflow-x-hidden;
  }
  .container {
    @apply min-w-96 w-full mx-auto;
  }
  .container > * {
    @apply m-6;
  }
  @screen sm {
    .container > * {
      @apply mx-auto my-10
    }
  }
</style>
