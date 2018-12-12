<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="input"
          />
          <button class="el-button el-button--primary">
            <i class="el-icon-search"/>
          </button>
          <dl v-if="isFocus" class="hotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(value,idx) in hotPlaces" :key="idx">{{ value }}</dd>
          </dl>
          <dl v-if="isSearchList" class="searchList">
            <dd v-for="(value,idx) in searchList" :key="idx">{{ value }}</dd>
            <dd>电网</dd>
            <dd>电网</dd>
            <dd>电网</dd>
            <dd>电网</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">火锅</a>
          <a href="#">火锅</a>
          <a href="#">火锅</a>
          <a href="#">火锅</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿|公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund"/>
            <p class="txt">随时退</p>
          </li>
          <li>
            <i class="single"/>
            <p class="txt">不满意免单</p>
          </li>
          <li>
            <i class="overdue"/>
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFocus: false,
      search: "",
      hotPlaces: ["谷歌", "谷歌", "谷歌", "谷歌"],
      searchList: ["大道朝天"]
    };
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.search;
    },
    isSearchList() {
      return this.isFocus && this.search;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    },
    input(e) {
      console.log("input");
    }
  }
};
</script>
