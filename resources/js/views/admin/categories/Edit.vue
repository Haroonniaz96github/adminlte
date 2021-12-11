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
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input
                                            v-model="form.name"
                                            type="text"
                                            class="form-control form-control-sm"
                                            id="exampleInputEmail1"
                                            placeholder="Enter email"
                                        />
                                        <HasError :form="form" field="name"/>
                                    </div>
                                    <div class="form-group">
                                        <label>Select Countries</label>
                                        <MultiSelect
                                            class="form-control form-control-sm"
                                            v-model="form.selected"
                                            :multiple="true"
                                            :options="options"
                                            selected
                                        >
                                        </MultiSelect>
                                        <HasError :form="form" field="name"/>
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
import {mapGetters} from "vuex";
import Form from "vform";
import MultiSelect from "vue-multiselect";

import {AlertError, AlertSuccess, Button, HasError,} from "vform/src/components/bootstrap5";

export default {
    computed: {
        ...mapGetters("category", ["category"]),
    },
    components: {
        Button,
        HasError,
        AlertError,
        AlertSuccess,
        MultiSelect,
    },

    data() {
        return {
            form: new Form({
                name: "",
                id: "",
                selected: null,
            }),
            options: ["Laravel", "Laravel 8", "Vue JS", "codeplaners.com"],
        };
    },

    // data: () => ({
    //   form: new Form({
    //     name: "",
    //     id: "",
    //   })
    // }),

    methods: {
        async update() {
            this.form
                .put("/api/categories/" + this.$route.params.idCategory)
                .then((response) => {
                    console.log(response);
                })
                .catch(() => {
                    console.log("error");
                });
        },
    },

    async mounted() {
        const {data} = await axios.get(
            "/api/categories/" + this.$route.params.idCategory + "/edit"
        );
        this.form.keys().forEach((key) => {
            this.form[key] = data[key];
        });

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
