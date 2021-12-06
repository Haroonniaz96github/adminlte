<template>
    <div style="padding: 25px;">
        <div class="container">
            <div class="row">
                <Table :categories="categories"/>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Table from "../../../components/admin/categories/Table.vue";

export default {
    computed: {
        ...mapGetters("category", ["categories"]),
    },
    components: {Table},
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
