<template>
  <div class="zhibo_box">
    <div class="tab_qiehuan">
      <router-link tag="span" replace to="guanzhu">关注</router-link>
      <router-link tag="span" replace to="zuqiu">足球</router-link>
      <router-link tag="span" replace to="lanqiu">篮球</router-link>
    </div>
    <div class="count_box1">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "比分直播"
    };
  }
};
</script>

<style scoped>
@import "../../assets/css/zhibo.css";
</style>