<template>
  <table class="table table-hover text-nowrap">
    <thead>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="category in categories" :key="category.id">
        <td>{{ category.id }}</td>
        <td>{{ category.name }}</td>
        <td>
          <router-link
            class="btn btn-primary my-2 my-sm-0"
            :to="'/admin/category/' + category.id"
          >
            EDIT
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: ["categories"],
};
</script>

<style>
.card .product-image {
  height: 300px;
}
</style>
