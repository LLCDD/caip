<template>
  <div class="canyu_box">
    <ul class="canyu_ul">
      <li v-for="item in 10" :key="item">
        <div class="liebiao_left">
          <i>
            <img src="../../assets/img/tou_img.png" alt>
          </i>
          <span>
            张三
            <b class="yanse_red">（发起人）</b>
          </span>
        </div>
        <div class="liebiao_right">
          <p>10份</p>
          <p>12-18 15:16</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "参与人详情",
      list: [1, 2]
    };
  },
  methods: {}
};
</script>

<style scoped>
.canyu_box {
  background: #f5f5f5;
  height: 100%;
  overflow: auto;
  padding-bottom: 0.3rem;
  margin-top: 0.1rem;
}
.canyu_ul li {
  padding: 0.2rem 0.3rem;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  margin-top: 0.1rem;
}
.liebiao_left i {
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.19rem;
}
.liebiao_left i img {
  width: 100%;
  height: 100%;
}
.liebiao_left {
  display: flex;
  justify-content: flex-start;
}
.liebiao_left span {
  margin-top: 0.25rem;
}
.yanse_red {
  color: #e60013;
}
.liebiao_right {
  line-height: 0.28rem;
  margin-top: 0.11rem;
  text-align: right;
  font-size: 0.24rem;
  color: #999999;
}
.canyu_ul li:last-child {
  margin-bottom: 3rem;
}
@media only screen and (min-width: 100px) and (max-width: 320px) {
  .dingdan_box {
    height: 100%;
    padding-bottom: 2.3rem;
    overflow: auto;
    margin-top: 0.1rem;
  }
}
.canyu_ul {
  height: 100%;
}
</style>