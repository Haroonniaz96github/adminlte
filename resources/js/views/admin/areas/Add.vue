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
        <AlertSuccess :form="form"/>
        <AlertError :form="form"/>

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
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="area_name">Area Name</label>
                                                <input
                                                    @keyup="slug"
                                                    v-model="form.area_name"
                                                    type="text"
                                                    class="form-control form-control-sm"
                                                    id="area_name"
                                                    placeholder="Enter Name"
                                                />
                                                <HasError :form="form" field="name"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="area_name">Area Slug</label>
                                                <input
                                                    v-model="form.area_slug"
                                                    type="text"
                                                    class="form-control form-control-sm"
                                                    id="area_slug"
                                                    placeholder="Enter Area Slug"
                                                />
                                                <HasError :form="form" field="area_slug"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="title">Title</label>
                                                <input
                                                    v-model="form.title"
                                                    type="text"
                                                    class="form-control form-control-sm"
                                                    id="title"
                                                    placeholder="Enter Title"
                                                />
                                                <HasError :form="form" field="title"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="title">Meta Title</label>
                                                <input
                                                    v-model="form.meta_title"
                                                    type="text"
                                                    class="form-control form-control-sm"
                                                    id="meta_title"
                                                    placeholder="Enter Meta Title"
                                                />
                                                <HasError :form="form" field="meta_title"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Select Countries</label>
                                                <MultiSelect
                                                    class="form-control form-control-sm"
                                                    v-model="selected"
                                                    :multiple="true"
                                                    :options="options"
                                                    selected
                                                >
                                                </MultiSelect>
                                                <HasError :form="form" field="name"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                        </div>
                                    </div>
                                </div>
                                <!-- /.card-body -->
                            <div class="card-footer">
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
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
import MultiSelect from "vue-multiselect";
import {AlertError, AlertSuccess, Button, HasError,} from "vform/src/components/bootstrap5";

export default {
    name: "Add",
    components: {
        Button,
        HasError,
        AlertError,
        AlertSuccess,
        MultiSelect
    },
    data: () => ({
        form: new Form({
            id: "",
            area_name: "",
            area_slug: "",
            title: "",
        }),
        selected: null,
        options: ["Laravel", "Laravel 8", "Vue JS", "codeplaners.com"],
    }),

    methods: {
        async createCategory() {
            const response = await this.form.post("/api/categories/");
            this.form.reset();
            // ...
        },
        slug: function (events) {
            var area = event.target.value;
            var slug = area.toLowerCase();
            var newslug = slug.replace(/\ /g, '-');
            this.form.area_slug = newslug;
            this.form.title = "Auto Fuel Doctor in " + slug;
        },
    },
};
</script>
<style>
.card * {
     max-height: 100%;
}
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
