<template>
  <div>
<!--    <Preloader/>-->
    <Navbar/>
    <Sidebar/>


    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <router-view />
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
  </div>
</template>
<script>
import Preloader from "../partials/Preloader.vue";
import Navbar from "../partials/Navbar.vue";
import Sidebar from "../partials/Sidebar.vue";
import Footer from "../partials/Footer.vue";

export default {
  name: "Master",
  components: {Preloader, Navbar, Sidebar, Footer},
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
</style>
