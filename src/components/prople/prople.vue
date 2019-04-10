<template>
  <div class="div1">
    <div class="divn" v-for="(item,index) in list" :key="index">
      <div style="margin-bottom:0.2rem">
        <img class="img2" src="../../assets/img/logo.png" alt>
        <div class="zil">
          <p>张三</p>
          <p>奖金总额：1000</p>
        </div>
        <div class="zil1">
          <p>竞彩足球 2串1 阿萨德可能</p>
          <p>奖金总额：1000</p>
        </div>
      </div>
      <div class="divp">中奖宣言：</div>
      <div class="divm">
        <p>
          <span>订单总额</span>
          <span>100.00</span>
        </p>
        <p>
          <span>自购金额</span>
          <span>50</span>
        </p>
        <p>
          <span>单倍金额</span>
          <span>26</span>
        </p>
        <p>
          <span>跟单人数</span>
          <span>26</span>
        </p>
        <button>立即跟单</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "合买金额",
      list: [1, 2, 3, 3]
    };
  }
};
</script>
<style scoped>
.div1 {
  margin-top: 0.12rem;
  min-height: 100%;
  overflow-y: auto;
  background: #f2f2f2;
}
.divn {
  padding-top: 0.2rem;
  min-height: 3.3rem;
  background: #fff;
  padding: 0 0.3rem;
  overflow: hidden;
  padding-bottom: 0.2rem;
  margin-top: 0.2rem;
}
.img2 {
  height: 0.8rem;
  width: 0.8rem;
  margin-top: 0.2rem;
  float: left;
}
.zil {
  float: left;
  margin-top: 0.2rem;
  line-height: 0.4rem;
  margin-left: 0.2rem;
}
.zil > :first-child {
  font-size: 0.28rem;
}
.zil > :last-child {
  font-size: 0.24rem;
  color: #999999;
}
.zil1 {
  float: right;
  margin-top: 0.2rem;
  line-height: 0.4rem;
  text-align: right;
  color: #999;
}
.divp {
  height: 1rem;
  background: #f7b2b8;
  float: left;
  width: 100%;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  padding: 0.2rem;
  color: #fff;
}
.divm {
  display: flex;
  margin-top: 0.2rem;
  justify-content: space-between;
  float: left;
  line-height: 0.36rem;
  text-align: center;
}
.divm > p > :last-child {
  color: #999;
}
.divm > button {
  height: 0.7rem;
  width: 1.7rem;
  background: #e60013;
  color: #fff;
  border-radius: 0.2rem;
}
</style>
