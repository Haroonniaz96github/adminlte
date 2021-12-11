<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Simple Tables</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Simple Tables</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Responsive Hover Table</h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px">
                    <input
                      type="text"
                      name="table_search"
                      class="form-control float-right"
                      placeholder="Search"
                    />

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
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
                                  :to="{ name: 'category.edit', params: { idCategory: category.id }}"
                              >
                                  EDIT
                              </router-link>
                          </td>
                      </tr>
                      </tbody>
                  </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- /.row -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Table from "../../../components/admin/categories/Table.vue";

export default {
  computed: {
    ...mapGetters("category", ["categories"]),
  },
  components: { Table },
  methods: {
    ...mapActions("category", ["getAdminCategories"]),
  },
  mounted() {
    var response = this.getAdminCategories();
  },
};
</script>

<style>
.card-header {
    background-color: transparent;
    border-bottom: 1px solid rgba(0,0,0,.125);
    padding: 0.75rem 1.25rem;
    position: relative;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
}
.card-title {
    float: left;
    font-size: 1.1rem;
    font-weight: 400;
    margin: 0;
}
</style>

