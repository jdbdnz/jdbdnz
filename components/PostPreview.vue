<template>
  <NuxtLink
    v-if="post"
    :to="post._path"
    class="py-4 text-dark hover:text-blue focus:text-blue active:text-red"
  >
    <article>
      <header>
        <h3 class="text-xl mb-1">
          {{ post.title }}
        </h3>
        <time
          v-if="publishDate"
          :datetime="publishDate"
          class="text-sm"
        >
          {{ publishDateString }}
        </time>
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
