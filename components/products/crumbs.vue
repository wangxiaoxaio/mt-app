<template>
  <div class="m-crumbs">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{path:'/'}">{{ $store.state.geo.position.city.replace('市','') }}美团</el-breadcrumb-item>
      <el-breadcurmb-item><a href="/">{{ $store.state.geo.position.city.replace('市','') }}{{ decodeURIComponent(keyword) }}</a></el-breadcurmb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      default: ""
    }
  }
};
</script>
