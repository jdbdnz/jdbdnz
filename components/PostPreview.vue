<template>
  <NuxtLink
    v-if="post"
    :to="post._path"
    class="py-6 sm:py-8 text-dark hover:text-blue focus:text-blue active:text-red"
  >
    <article>
      <header>
        <time
          v-if="publishDate"
          :datetime="publishDate"
          class="text-yellow text-sm"
        >
          {{ publishDateString }}
        </time>
        <h2 class="text-2xl mb-1">
          {{ post.title }}
        </h2>
      </header>
      <p class="my-2">
        {{ post.description }}
      </p>
    </article>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const publishDate = computed(() => props.post?.date && new Date(props.post?.date))
const publishDateString = computed(() => publishDate.value?.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }))
</script>
