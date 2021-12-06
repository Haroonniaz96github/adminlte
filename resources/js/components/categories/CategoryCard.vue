<template>
  <div class="card mb-4 shadow-sm">
    <img :src="category.imageUrl" class="card-img-top product-image" />
    <div class="card-body">
      <h5 class="card-title text-left">{{ category.name }}</h5>
      <div class="row">
        <router-link
          type="button"
          class="btn btn-primary btn-lg"
          :to="'/products/' + category.id"
        >Products</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "CategoryCard",
    props: ["category"]
};
</script>

<style>
.card .product-image {
  height: 300px;
}
</style>