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
    <AlertSuccess :form="form" />
    <AlertError :form="form" />

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Quick Example</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="createCategory">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      v-model="form.name"
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                    />
                    <HasError :form="form" field="name" />
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Form from "vform";
import {
  Button,
  HasError,
  AlertError,
  AlertSuccess,
} from "vform/src/components/bootstrap5";

export default {
  components: {
    Button,
    HasError,
    AlertError,
    AlertSuccess,
  },
  data: () => ({
    form: new Form({
      name: "",
    }),
  }),

  methods: {
    async createCategory() {
      const response = await this.form.post("/api/categories/");
      this.form.reset();
      // ...
    },
  },
};
</script>
<style>
.card-header {
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
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
