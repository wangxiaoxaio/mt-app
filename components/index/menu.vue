<template>
  <div class="m-menu">
    <dl class="nav">
      <dl>全部分类</dl>
      <dt v-for="(item,idx) in menu" :key="idx">
        <i :class="item.type"/>{{item.name}}<span class="arrow"/>
      </dt>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu:[
        {
          type:'food',
          name:'美食'
        },
        {
          type:'takeout',
          name:'外卖'
        },
        {
          type:'hotel',
          name:'酒店'
        }
      ]
    }
  }
}
</script>

