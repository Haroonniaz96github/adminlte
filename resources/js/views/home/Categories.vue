<template>
  <div style="padding: 25px;">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="category in categories" :key="category.id">
          <CategoryCard :category="category" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CategoryCard from "../../components/categories/CategoryCard";
export default {
  computed: {
    ...mapGetters("category", ["categories"]),
  },
  components: { CategoryCard },
  methods: {
    ...mapActions("category", ["getCategories"]),
  },
  mounted() {
    this.getCategories();
  }
};
</script>

<style>
</style>