<template>
    <section class="post-list">
      <PostPreview :isAdmin="isAdmin" id="1" title="Here will go the title" previewText="Here will go the preview text" thumbnail="https://www.vapulus.com/en/wp-content/uploads/2019/01/tech.jpg"/>
    </section>
</template>
<script>
import PostPreview from '@/components/posts/PostPreview'

export default {
  props : {
    isAdmin : {
      type : Boolean,
      default : false
    }
  },
  components : {
    PostPreview
  }
}
</script>

<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>