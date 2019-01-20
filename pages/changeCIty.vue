<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24"><iSelect/></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><Hot/></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><category/></el-col>
    </el-row>
  </div>
</template>
<script>
import iSelect from "@/components/changeCity/iselect.vue";
import Hot from "@/components/changeCity/hot.vue";
import category from "@/components/changeCity/category.vue";
export default {
  components: {
    iSelect,
    Hot,
    category
  }
};
</script>
