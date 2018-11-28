<template>
  <section class="m-istyle">
    <dl>
      <dt>有格调</dt>
      <dd :class="{active:kind==='all'}" kind="all" keyword="景点" @mouseenter="enter">
        全部
      </dd>
      <dd :class="{active:kind==='part'}" kind="part" keyword="美食" @mouseenter="enter">约会聚餐</dd>
      <dd :class="{active:kind==='spa'}" kind="spa" keyword="丽人" @mouseenter="enter">丽人SPA</dd>
      <dd :class="{active:kind==='movie'}" kind="movie" keyword="电影" @mouseenter="enter">电影演出</dd>
      <dd :class="{active:kind==='travel'}" kind="travel" keyword="旅游" @mouseenter="enter">品质出游</dd>
    </dl>
    <transition appear>
      <ul class="ibody">
      <li v-for="(item,idx) in cur" :key="idx">
        <el-card :body-style="{padding:'0px'}" shadow='never'>
          <img class="image" :src="item.img" alt="">
          <ul class="cbody">
            <li class="title">{{item.title}}</li>
            <li class="pos">{{item.pos}}</li>
            <li class="price">{{item.price}}</li>
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
      kind: 'all',
      list: {
        all: [
          {
            img: '//p0.meituan.net/msmerchant/d2059b07f199484680d32e829b780d9756730.jpg@368w_208h_1e_1c',
            title: '分米鸡 DM Chicken（合景·摩方店)',
            pos: '分米鸡10DM套餐1份，有赠品',
            price: 398,
          },
          {
            img: '//p1.meituan.net/msmerchant/8071fc2511131749b6aa47c8b1487f08194991.jpg@368w_208h_1e_1c',
            title: 'COSTA COFFEE（王府井）',
            pos: '玫瑰黑巧茶拿铁1份',
            price: 11,
          },
          {
            img: '//p1.meituan.net/wedding/8f9b0c8dac41fe65ad9d8a0a10455f7893928.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
            title: '子时·TATTOO',
            pos: '子时·TATTOO',
            price: 875
          },
          {
            img: '//p0.meituan.net/poi/ec9127ac73d519016c1f55a5cbfe4014566042.png@368w_208h_1e_1c',
            title: '青春光线电影院',
            pos: '免押金,儿童票,有WIFI,4K厅,60帧厅',
            price: 19.9
          },
          {
            img: '//p1.meituan.net/tdchotel/a82bd59342a2fcab8f9768f95e667457270498.jpg@368w_208h_1e_1c',
            title: '正义路酒店',
            pos: '新客超值优惠',
            price: 343
          }

        ],
        part: [
          {
            img: '//p1.meituan.net/msmerchant/8071fc2511131749b6aa47c8b1487f08194991.jpg@368w_208h_1e_1c',
            title: 'COSTA COFFEE（王府井）',
            pos: '玫瑰黑巧茶拿铁1份',
            price: 11,
          }
        ],
        spa: [
          {
            img: '//p1.meituan.net/wedding/8f9b0c8dac41fe65ad9d8a0a10455f7893928.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
            title: '子时·TATTOO',
            pos: '子时·TATTOO',
            price: 875
          }
        ],
        movie: [
          {
            img: '//p0.meituan.net/poi/ec9127ac73d519016c1f55a5cbfe4014566042.png@368w_208h_1e_1c',
            title: '青春光线电影院',
            pos: '免押金,儿童票,有WIFI,4K厅,60帧厅',
            price: 19.9
          }
        ],
        travel: [
          {
            img: '//p1.meituan.net/tdchotel/a82bd59342a2fcab8f9768f95e667457270498.jpg@368w_208h_1e_1c',
            title: '正义路酒店',
            pos: '新客超值优惠',
            price: 343
          }
        ],
      }
    }
  },
  computed: {
    cur() {
      return this.list[this.kind]
    }
  },
  methods: {
    enter(e) {
      this.kind = e.target.getAttribute('kind')
    }
  }

}
</script>


<style lang="scss">
@import '@/assets/css/index/artistic.scss';
</style>
