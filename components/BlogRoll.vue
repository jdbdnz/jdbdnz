<template>
  <div class="flex flex-col divide-y divide-gold divide-dotted">
    <PostPreview
      v-for="post in posts"
      :key="post.slug"
      :post="post"
    />
  </div>
</template>

<script setup>
const posts = ref([])

const props = defineProps({
  category: {
    type: [String, Array],
    default: null,
  }
})

onMounted(async () => {
  const scope = props.category ? { category: { $contains: props.category } } : {}

  posts.value = await queryContent()
      .sort({ date: -1 })
      .where(scope)
      .find()
})
</script>
