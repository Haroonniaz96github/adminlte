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
                            <form @submit.prevent="update">
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
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary btn-primary-sm">Update</button>
                                    </div>
                                </div>
                                <!-- /.card-body -->
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
    name: "Edit",
    components: {
        Button,
        HasError,
        AlertError,
        AlertSuccess,
        MultiSelect,
    },

    computed:{

    },

    data() {
        return {
            form: new Form({
                id: "",
                area_name: "",
                area_slug: "",
            }),
            selected: null,
            options: ["Laravel", "Laravel 8", "Vue JS", "codeplaners.com"],
        };
    },

    methods: {
        async edit() {
            const {data} = await axios.get(
                "/api/areas/" + this.$route.params.id + "/edit"
            );
            this.form.keys().forEach((key) => {
                this.form[key] = data.area[key];
            });
        },
        async update() {
            this.form
                .put("/api/areas/" + this.$route.params.idCategory)
                .then((response) => {
                    console.log(response);
                })
                .catch(() => {
                    console.log("error");
                });
        },
        slug: function(events) {
            var slug = event.target.value.toLowerCase();
            var newslug = slug.replace(/\ /g, '-');
            this.form.area_slug=newslug;
        },
    },

    async mounted() {
       this.edit();
        this.form.selected = ["Hello", "Hello 2"];
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
