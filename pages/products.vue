<template>
  <el-row class="page-product">
    <el-col :span="19">
      <crumbs :keyword="keyword"/>
      <categroy :types="types" :areas="areas"/>
    <list :list="list" @change-point="chPoint"/></el-col>
    <el-col :span="5" style="position:fixed,top:0">
      <amap v-if="point.length" :width="230" :height="290" :point="point"/>
    </el-col>
  </el-row>
</template>

<script>
import Crumbs from "@/components/products/crumbs.vue";
import Categroy from "@/components/products/categroy.vue";
import List from "@/components/products/list.vue";
import Amap from "@/components/public/map.vue";
export default {
  components: {
    Crumbs,
    Categroy,
    List,
    Amap
  },
  data() {
    return {
      list: [],
      types: [],
      areas: [],
      keyword: "",
      point: []
    };
  },
  async asyncData(ctx) {
    let keyword = ctx.query.keyword;
    // console.log("keyword", keyword);
    let city = ctx.store.state.geo.position.city;
    // console.log(city);
    let {
      status,
      data: { count, pois }
    } = await ctx.$axios.get("/search/resultsByKeywords", {
      params: {
        keyword,
        city
      }
    });
    // console.log("pois", pois);
    let {
      status: status2,
      data: { areas, types }
    } = await ctx.$axios.get("/categroy/crumbs", {
      params: {
        city
      }
    });
    // console.log(areas, types);
    if (status === 200 && count > 0 && status2 === 200) {
      // console.log("success");
      return {
        list: pois.filter(item => item.photos.length > 0).map(item => {
          return {
            default: Math.floor(Math.random() * 1000),
            type: item.type,
            img: item.photos[0].url,
            name: item.name,
            comment: Math.floor(Math.random() * 10000),
            rate: Number(item.biz_ext.rating),
            price: Number(item.biz_ext.cost),
            scene: item.tag,
            tel: item.tel,
            status: "可订明日",
            location: item.location,
            module: item.type.split(";")[0],
            pint: (pois.find(item => item.location).location || "").split(",")
          };
        }),
        keyword,
        areas: areas.filter(item => item.type !== "").slice(0, 5),
        types: types.filter(item => item.type !== "").slice(0, 5),
        point: (pois.find(item => item.location).location || "").split(",")
      };
    }
  },
  methods: {
    chPoint(point) {
      console.log(point);
      this.point = point;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>
