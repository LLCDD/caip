<template>
  <div id="app">
    <div class="outter">
      <!--通用头部-->
      <!-- <header class="app-header" :class="{'header-hide':!$store.state.headerStatus}">
        <wx-header :pageName="pageName"></wx-header>
      </header>-->
      <header id="header" v-if="this.$route.meta.header">
        <span class="span" @click="fanhui" v-if="this.$route.meta.fan == 1">
          <img src="./assets/images/return.png" alt>
        </span>
        <span class="span1" @click="fanhui1" v-if="this.$route.meta.ce == 1">
          <img src="./assets/img/other.png" alt>
        </span>
        {{ this.$route.meta.title }}
      </header>
      <div class="senter" v-if="bool">
        <p>全部</p>
        <p>已开奖</p>
        <p>未开奖</p>
      </div>
      <!--搜索框 只在“微信”和“通讯录”页面下显示-->
      <!--四个门面页 “微信” “通讯录” “发现” “我”-->
      <section class="app-content">
        <!-- <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"> -->
        <router-view></router-view>
        <!-- </transition> -->
      </section>
      <!--底部导航 路由 -->
      <footer class="app-footer" v-if="this.$route.meta.footer">
        <wx-nav></wx-nav>
      </footer>
    </div>
  </div>
</template>
<script>
import mixin from "./mixin"; // 混合被单独放在 mixin.js 中管理
window.mixin = mixin; // 将 混合/mixin 暴露在窗口对象中，某些组件需要时，直接提取 window.mixin
import WxHeader from "@/components/common/wx-header";
import WxNav from "@/components/common/wx-nav";

export default {
  name: "app",
  components: {
    WxHeader,
    WxNav
  },
  data() {
    return {
      pageName: "",
      routerAnimate: false,
      enterAnimate: "", //页面进入动效
      leaveAnimate: "", //页面离开动效
      bool: false,
      activeName: ""
    };
  },
  created() {},
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    // fanhui1
    fanhui1() {
      this.bool = !this.bool;
    }
  },
  watch: {
    // 监听 $route 为店内页设置不同的过渡效果
    $route(to, from) {
      const toDepth = to.path.length;
      const fromDepth = from.path.length;
      if (toDepth === 2) {
        this.$store.commit("setPageName", to.name);
      }
      //同一级页面无需设置过渡效果
      if (to.meta.Athesamelevel) {
        return;
      }
      // this.enterAnimate =
      //   toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft";
      // this.leaveAnimate =
      //   toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight";
    }
  },
  updated() {
    // 只要组件发生变化都会触发可用于切换组件时公共数据的刷新
    // this.$store.dispatch('newbalance')
    if (this.$route.meta.ce != 1) {
      this.bool = false;
    }
  }
};
</script>


<style lang="scss">
// .action-block{
//   display: none !important;
// }
$material-icons-font-path: "~material-icons/iconfont/";
@import "material-icons/iconfont/material-icons.scss";
@import "./assets/css/toast.css";
@import "assets/css/base.css";
@import "assets/css/common.css";
@import "assets/css/wx-header.css";
/*阿里 fonticon*/
@import "assets/css/lib/iconfont.css";
/*过渡效果需要的动画库*/
@import "assets/css/lib/animate.css";
/*weui 样式库 非常适合高仿微信*/
@import "assets/css/lib/weui.min.css";
.app-content {
  min-height: 100%;
  background: #fff;
  -webkit-overflow-scrolling: touch;
}
#header {
  height: 0.88rem;
  width: 100%;
  background: #e60013;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  line-height: 0.88rem;
  font-size: 0.34rem;
  color: #fff;
  z-index: 99;
  box-shadow: 1px 1px 4px #9e9e9e;
}
.senter {
  position: fixed;
  z-index: 9999;
  right: 0;
  top: 0.88rem;
  width: 1.82rem;
  height: 1.9rem;
}
.senter > p {
  height: 0.6rem;
  line-height: 0.6rem;
  color: #fff;
  text-align: center;
  background: #e60013;
  margin-top: 1px;
}
#header > .span {
  display: inline-block;
  position: absolute;
  left: 0;
  width: 1rem;
}
#header > .span > img {
  width: 0.2rem;
  height: 0.3rem;
}
#header > .span1 {
  display: inline-block;
  position: absolute;
  right: 0;
  width: 1rem;
}
#header > .span1 > img {
  width: 0.4rem;
  height: 0.3rem;
}
</style>
