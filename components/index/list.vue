<template>
  <section class="m-istyle">
    <dl>
      <dt>有格调</dt>
      <dd :class="{active:kind==='all'}" kind="all" keyword="景点" @mouseenter="over">全部</dd>
      <dd :class="{active:kind==='part'}" kind="part" keyword="美食" @mouseenter="over">约会聚餐</dd>
      <dd :class="{active:kind==='spa'}" kind="spa" keyword="丽人" @mouseenter="over">丽人SPA</dd>
      <dd :class="{active:kind==='movie'}" kind="movie" keyword="电影" @mouseenter="over">电影演出</dd>
      <dd :class="{active:kind==='travel'}" kind="travel" keyword="旅游" @mouseenter="over">品质出游</dd>
    </dl>
    <transition appear
    >
      <ul class="ibody" >
        <li v-for="(item,idx) in cur" :key="idx">
          <el-card :body-style="{padding:'0px'}" shadow="never">
            <img :src="item.img" class="image" alt>
            <ul class="cbody">
              <li class="title">{{ item.title }}</li>
              <li class="pos"><span>{{ item.pos }}</span></li>
              <li class="price">￥<em>{{ item.price }}</em></li>
            </ul>
          </el-card>
        </li>
      </ul>
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loading2: true,
      kind: "all",
      list: {
        all: [],
        part: [],
        spa: [],
        movie: [],
        travel: []
      }
    };
  },
  computed: {
    cur() {
      return this.list[this.kind];
    }
  },
  async mounted() {
    let self = this;
    let {
      status,
      data: { count, pois }
    } = await self.$axios.get(
      `http://localhost:3000/search/resultsByKeywords`,
      {
        params: {
          keyword: "景点",
          city: self.$store.state.geo.position.city
        }
      }
    );
    if (status === 200 && count > 0) {
      let r = pois.filter(item => item.photos.length).map(item => {
        return {
          title: item.name,
          pos: item.type.split(";")[0],
          price: item.biz_ext.cost || "暂无",
          img: item.photos[0].url,
          url: "//abc.com"
        };
      });
      self.list[self.kind] = r.slice(0, 12);
    } else {
      self.list[self.kind] = [];
    }
  },
  methods: {
    over: async function(e) {
      let dom = e.target;
      let tag = dom.tagName.toLowerCase();
      let self = this;
      if (tag === "dd") {
        this.kind = dom.getAttribute("kind");
        let keyword = dom.getAttribute("keyword");
        var loading = self.$loading({ target: dom });
        let {
          status,
          data: { count, pois }
        } = await self.$axios.get(
          `http://localhost:3000/search/resultsByKeywords`,
          {
            params: {
              keyword,
              city: self.$store.state.geo.position.city
            }
          }
        );
        if (status === 200 && count > 0) {
          loading.close();
          let r = pois.filter(item => item.photos.length).map(item => {
            return {
              title: item.name,
              pos: item.type.split(";")[0],
              price: item.biz_ext.cost || "暂无",
              img: item.photos[0].url,
              url: "//abc.com"
            };
          });
          self.list[self.kind] = r.slice(0, 12);
        } else {
          self.list[self.kind] = [];
        }
      }
    }
  }
};
</script>


<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
