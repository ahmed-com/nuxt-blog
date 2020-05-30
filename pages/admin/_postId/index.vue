<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>
<script>
import AdminPostForm from '@/components/admin/AdminPostForm';

export default {
    layout : 'admin',
    components : {
        AdminPostForm
    },
    data(){
        return {
            loadedPost : {
                author : 'ahmed',
                title : 'this will be a title in the end',
                content : 'this will be also some content',
                thumbnailLink : 'https://www.vapulus.com/en/wp-content/uploads/2019/01/tech.jpg'
            }
        }
    }
}
</script>
<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>