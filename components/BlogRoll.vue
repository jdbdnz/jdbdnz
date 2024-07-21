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

onMounted(async () => {
  posts.value = await queryContent().sort({ date: -1 }).find()
})
</script>
