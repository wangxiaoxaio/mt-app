<template>
  <el-row :gutter="15" class="m-header">
    <el-col :span="6">
      <Geo/>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple" />
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple" />
    </el-col>
  </el-row>
</template>

<script>
import Geo from "./geo.vue";
export default {
  components: {
    Geo
  }
};
</script>

<style  lang="scss">
// @import "@/assets/css/public/layout.css"
</style>
