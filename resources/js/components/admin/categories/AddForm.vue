<template>
  <form v-on:submit.prevent="createCategory">
    <div class="form-group">
      <label for="name">Enter Name</label>
      <input
        type="text"
        v-model="categoryData.name"
        class="form-control"
        id="name"
        placeholder="Enter category name"
      />
    </div>
    <hr />
    <div class="text-right">
      <button type="submit" class="btn btn-primary">
        <span class="fa fa-check"></span> Save
      </button>
    </div>
  </form>
</template>
<script>
export default {
  name: "category",
  data() {
    return {
      categoryData: {
        name: "",
      },
    };
  },
  methods: {
    createCategory: async function () {
      let formData = new FormData();
      formData.append("name", this.categoryData.name);
      formData.append("image", this.categoryData.image);

      try {
        const response = await categoryService.createCategory(formData);
      } catch (error) {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
          default:
            alert("some error occurred");
            break;
        }
      }
    },
  },
};
</script>
