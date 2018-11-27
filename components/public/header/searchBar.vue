<template>
   <div class="search-panel">
       <el-row class="m-header-searchbar">
           <el-col class="left" :span="3">
               <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
           </el-col>
           <el-col class="center" :span="15">
               <div class="wrapper">
                   <el-input 
                    placeholder="搜索商家或地点"/>
                    <button class="el-button el-button--primary">
                        <i class="el-icon-search"/>
                    </button>
                    <dl class="hotPlace" style="display:block;">
                        <dt>热门搜索</dt>
                        <dd>故宫博物院</dd>
                        <dd>故宫博物院</dd>
                        <dd>故宫博物院</dd>
                        <dd>故宫博物院</dd>
                    </dl> 
                    <!-- <dl class="searchList">
                        <li>电网</li>
                        <li>电网</li>
                        <li>电网</li>
                    </dl>            -->
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
           <el-col class="right" :span="6">
               <ul class="security">
                   <li><i class="refund"/><p class="txt">随时退</p></li>
                   <li><i class="single"/><p class="txt">不满意免单</p></li>
                   <li><i class="overdue"/><p class="txt">过期退</p></li>
               </ul>
           </el-col>
       </el-row>
   </div>
</template>
