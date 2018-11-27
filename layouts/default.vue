<template>
  <el-container class="layout-default">
    <el-header>
      <Myheader/>
    </el-header>
    <el-main>
    </el-main>
    <el-footer>
      Footer
    </el-footer>
  </el-container>
</template>
<script>
import Myheader from "@/components/public/header/index.vue";
export default {
  components: {
    Myheader
  }
};
</script>


<style>
</style>
