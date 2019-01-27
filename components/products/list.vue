<template>
  <div class="m-products-list">
    <dl>
      <dd
        v-for="item in nav"
        :key="item.name"
        :class="[item.name,item.active?'s-nav-active':'']"
        @click="navSelect"
      >{{ item.txt }}</dd>
    </dl>
    <ul>
      <Item
        v-for="(item,idx) in list"
        :key="idx"
        :meta="item" @click="$emit('change-point',(100,100))"/>
    </ul>
  </div>
</template>

<script>
import Item from "./product.vue";
import _ from "lodash";
export default {
  components: {
    Item
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      nav: [
        {
          name: "s-default",
          txt: "智能排序",
          active: true
        },
        {
          name: "s-price",
          txt: "价格最低",
          active: false
        },
        {
          name: "s-visit",
          txt: "人气最高",
          active: false
        },
        {
          name: "s-comment",
          txt: "评价最高",
          active: false
        }
      ]
    };
  },
  async asyncData({ app }) {
    let { data } = await app.$axios.get("searchList");
    return { items: data.list };
  },
  methods: {
    navSelect: function(e) {
      let dom = e.target;
      let text = dom.innerHTML;
      let name;

      for (let x of this.nav) {
        if (x.txt == text) {
          x.active = true;
          name = x.name;
        } else {
          x.active = false;
        }
      }
      if (name === "s-price") {
        this.list = this.list.sort((a, b) => a.price - b.price);
      } else if (name === "s-visit") {
        this.list = this.list.sort((a, b) => a.comment - b.comment);
      } else if (name === "s-comment") {
        this.list = this.list.sort((a, b) => a.rate - b.rate);
      } else {
        this.list = this.list.sort((a, b) => a.default - b.default);
      }
    }
  }
};
</script>
