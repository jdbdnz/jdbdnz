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
const props = defineProps({
  folder: {
    type: String,
    required: true
  }
})

const posts = await queryContent(props.folder).sort({ date: -1 }).find()
</script>
