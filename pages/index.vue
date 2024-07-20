<template>
  <Biography />

  <SquigglyRule class="mt-16 sm:mt-24" />

  <section class="mt-5">
    <header>
      <h2 class="text-2xl font-light">
        Eng Notes
      </h2>
      <p>Problems and solutions I'd like to remember</p>
    </header>

    <BlogRoll folder="tech" />
  </section>
</template>
<script setup lang="ts">
import Biography from "~/components/CollapsibleBiography.vue";
import SquigglyRule from "~/components/SquigglyRule.vue";
</script>
