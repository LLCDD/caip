<template>
  <div class="div">
    <div class="tap">
      <p>
        <span style="font-size:0.3rem;color:#e60013">竞彩足球</span>
        <span style="font-size:0.24rem;color:#999999">竞彩足球51651651651651</span>
      </p>
      <div>
        <p>订单金额 : 1532元</p>
        <p>2串1</p>
        <p>倍数 : 2倍</p>
      </div>
    </div>
    <div style="background:#f2f2f2;margin-bottom:1.2rem">
      <div v-for="(item,index) in 6" :key="index" class="hegiht">
        <div class="black">
          <p>亚冠</p>
          <p>周三001</p>
          <p>16:30截止</p>
        </div>
        <p class="vs">
          <span>让球</span>
          <span>悉尼FC VS 蔚山现代</span>
        </p>
        <table>
          <tr>
            <td>0</td>
            <td>主胜 2.15</td>
            <td>平 1.15</td>
            <td>客胜 1.55</td>
          </tr>
          <tr>
            <td>+1</td>
            <td>主胜 2.15</td>
            <td>平 1.15</td>
            <td>客胜 1.55</td>
          </tr>
          <tr>
            <td></td>
            <td colspan="3">2.15</td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 底部中奖 -->
    <footer v-if="false">已中奖：1000</footer>
    <!-- 底部未中奖 -->
    <footer v-if="false" style="color:#999">未中奖...</footer>
    <!-- 出票未发起跟单 -->
    <footer style="display:flex;justify-content: space-between;">
      <span>已出票</span>
      <button @click="gen">发起跟单</button>
    </footer>
    <!-- 等待出票 -->
    <footer v-if="false" style="color:#e60013;text-align: left;">等待出票中....</footer>
    <!-- 出票已跟单 -->
    <footer v-if="false" style="display:flex;justify-content: space-between;">
      <span>已出票</span>
      <button style="background:#cccccc">发起跟单</button>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "自选详情"
    };
  },
  methods: {
    gen() {
      this.$router.push("/gendan/2");
    }
  }
};
</script>
<style scoped>
.div {
  padding-top: 0.88rem;
  height: 100%;
  background: #f2f2f2;
  overflow: auto;
}
.tap {
  padding: 0 0.3rem;
  padding-bottom: 0.3rem;
  background: #ffffff;
}
.tap > p {
  height: 0.7rem;
  line-height: 0.7rem;
  display: flex;
  justify-content: space-between;
}
.tap > div {
  line-height: 0.4rem;
  font-size: 0.24rem;
  color: #999;
}
.hegiht {
  height: 2.4rem;
  width: 100%;
  padding: 0.3rem 0.3rem 0.3rem 0.5rem;
  margin-top: 0.02rem;
  background: #fff;
}
.black {
  color: #000;
  width: 22%;
  height: 100%;
  text-align: center;
  padding-top: 0.36rem;
  float: left;
  margin-top: 4%;
}
.vs {
  font-size: 0.3rem;
  text-align: center;
  position: relative;
  width: 78%;
  float: right;
}
.vs > :first-child {
  position: absolute;
  left: 0;
  font-size: 0.2rem;
  color: #000;
}
.vs > :last-child {
  color: #000;
  padding-bottom: 0.1rem;
  display: inline-block;
}
table {
  font-size: 0.18rem;
  color: #333333;
  width: 78%;
}
table tr {
  height: 0.5rem;
}
table td {
  padding: 5px;
  text-align: center;
}
footer {
  height: 1.1rem;
  width: 100%;
  background: #fff;
  line-height: 1.1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e5e5e5;
  box-shadow: 10px 10px 5px #e5e5e5;
  font-size: 0.3rem;
  text-align: center;
  color: #e60013;

  padding: 0 0.3rem;
}
footer > button {
  height: 0.6rem;
  background: #e60013;
  color: #fff;
  line-height: 0.6rem;
  width: 1.8rem;
  border-radius: 0.3rem;
  margin-top: 0.25rem;
}
</style>
