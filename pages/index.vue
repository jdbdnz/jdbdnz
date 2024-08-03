<template>
  <p class="mb-2">
    <span class="text-2xl">Hi, I'm Dezzy, </span>a product engineer who loves turning ideas into reality through design
    and engineering.
  </p>
  <a
    href="/me"
    class="text-red hover:underline"
  >
    More about me...
  </a>

  <SquigglyRule class="my-8" />

  <section class="mt-5">
    <header>
      <h2 class="text-2xl ">
        Career
      </h2>
    </header>

    <BlogRoll category="Career" />
  </section>

  <SquigglyRule class="my-8" />

  <section class="mt-5">
    <header>
      <h2 class="text-2xl ">
        Web Notes
      </h2>
    </header>

    <BlogRoll category="Engineering" />
  </section>
</template>

<script setup lang="ts">
import SquigglyRule from "~/components/SquigglyRule.vue";
</script>
