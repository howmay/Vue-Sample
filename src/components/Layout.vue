<template>
  <el-container>
    <el-header>
      <NavBar />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>


<script>
import NavBar from "@/components/global/NavBar";
// import SideBar from "@/components/global/SideBar";

export default {
  components: { NavBar }
};
</script>