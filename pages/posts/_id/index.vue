<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{loadedPost.title}}</h1>
            <div class="post-details">
                <div class="post-detail">Last updated on :{{loadedPost.updatedDate}}</div>
                <div class="post-detail">Written by : {{loadedPost.author}}</div>
            </div>
            <p>{{loadedPost.content}}</p>
        </section>
        <section class="post-feedback">
            <p>happy to get your feedback at <a href="mailto:ahmed0grwan@gmail.com">ahmed0grwan@gmail.com</a></p>
        </section>
    </div>
</template>
<script>
export default {
  asyncData(context,callback){
    setTimeout(()=>{
      callback(null,{
        loadedPost : {
            id : "2",
            title : `this is the second title : ${context.params.id}`, 
            previewText : "the content is bla bla bla", 
            thumbnail : "https://www.vapulus.com/en/wp-content/uploads/2019/01/tech.jpg",
            author : 'ahmed',
            updatedDate : new Date(),
            content : 'this is the content you should\'ve expected'
          }
      })
    },1000);
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>