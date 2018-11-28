<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenu/>
      </el-col>
      <el-col :span="19"><Life/></el-col>
    </el-row>
    <el-row :span="24">
      <List/>
    </el-row>
  </div>
</template>

<script>
import Emenu from '@/components/index/menu.vue'
import Life from '@/components/index/life.vue'
import List from '@/components/index/list.vue'

export default {
  components: {
    Emenu,
    Life,
    List,
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/index/index.scss";
</style>


