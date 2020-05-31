<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>
<script>
import PostList from '@/components/posts/PostList';
export default {
  asyncData(context,callback){
    setTimeout(()=>{
      callback(null,{
        loadedPosts : [
          {
            id : "1",
            title : "this is the title", 
            previewText : "the content is bla bla bla", 
            thumbnail : "https://www.vapulus.com/en/wp-content/uploads/2019/01/tech.jpg"
          },
          {
            id : "2",
            title : "this is the second title", 
            previewText : "the content is bla bla bla", 
            thumbnail : "https://www.vapulus.com/en/wp-content/uploads/2019/01/tech.jpg"
          },
          {
            id : "3",
            title : "this is the third title", 
            previewText : "the content is bla bla bla", 
            thumbnail : "https://www.vapulus.com/en/wp-content/uploads/2019/01/tech.jpg"
          }
        ]
      });
    },1500);
  },
  components : {
    PostList
  }
}
</script>

<style scoped>
  .posts-page{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
</style>