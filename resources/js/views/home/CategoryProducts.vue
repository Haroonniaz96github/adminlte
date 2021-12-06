<template>
  <div style="padding: 25px">
    <div class="container">
      <div class="row" v-if='products'>
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
      <div v-else>
        <p  class="text-center">No products available</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "../../components/products/ProductCard";
export default {
  computed: {
    ...mapGetters("product", ["products"]),
  },
  components: { ProductCard },
  methods: {
    ...mapActions("product", ["getProductsById", "addCart", "removeCart"]),
  },
  mounted() {
    this.getProductsById(this.$route.params.idCategory);
  },
};
</script>

<style>
</style>