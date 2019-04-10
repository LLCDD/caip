<template>
  <div class="div">
    <p class="tit">方案金额：60元</p>
    <div class="first">
      <p>
        <span>设置份数：</span>
        <input
          v-model="shu1"
          style="text-align:center;color:#999999"
          type="text"
          placeholder="请填写设置份数"
        >
        <span style="color:red">份</span>
      </p>
      <p style="color:red">每份1元</p>
    </div>
    <div class="first">
      <p>
        <span>自购份数：</span>
        <input style="text-align:center;color:#999999" type="text" placeholder v-model="shu">
        <span style="color:red">份</span>
      </p>
      <p style="color:red"></p>
    </div>
    <div class="one">
      <span>中奖佣金:</span>
      <div>
        <p @click="tap(1)" :class="{'red':msg == 1}">1%</p>
        <p @click="tap(2)" :class="{'red':msg == 2}">3%</p>
        <p @click="tap(3)" :class="{'red':msg == 3}">3%</p>
        <p @click="tap(4)" :class="{'red':msg == 4}">3%</p>
        <p @click="tap(5)" :class="{'red':msg == 5}">3%</p>
      </div>
    </div>
    <div class="one">
      <span>是否公开:</span>
      <div>
        <p style="width:50%" @click="tap2(1)" :class="{'red':msg2 == 1}">订单公开</p>
        <p style="width:50%" @click="tap2(2)" :class="{'red':msg2 == 2}">截图后可见</p>
      </div>
    </div>
    <div class="one">
      <span>中奖保底:</span>
      <div>
        <p style="width:50%" @click="tap1(1)" :class="{'red':msg1 == 1}">是</p>
        <p style="width:50%" @click="tap1(2)" :class="{'red':msg1 == 2}">否</p>
      </div>
    </div>
    <textarea v-model="title" name id cols="30" rows="5" placeholder="方案描述 (选填) "></textarea>
    <footer>
      <div>
        <p>支付40元</p>
        <p>预计奖金：384.00</p>
      </div>
      <button @click="goumai">购买</button>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "1",
      msg1: "1",
      msg2: "1",
      title: "",
      //   合买的 份数
      shu: "20",
      shu1: ""
    };
  },
  methods: {
    tap(id) {
      this.msg = id;
    },
    goumai() {
      console.log("提交");
    },
    tap2(id) {
      this.msg2 = id;
    },
    tap1(id) {
      this.msg1 = id;
    }
  }
};
</script>
<style scoped>
.div {
  padding-top: 0.88rem;
  height: 100%;
  background: #f2f2f2;
}
.tit {
  height: 0.8rem;
  padding: 0 0.3rem;
  line-height: 0.8rem;
  background: #fff;
  font-size: 0.3rem;
  color: #e60013;
}
.one {
  margin-top: 0.1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.3rem;
  background: #fff;
  font-size: 0.3rem;
}
.one > span {
  float: left;
  width: 24%;
}
.one > div {
  float: left;
  width: 75.8%;
  height: 0.4rem;
  border-radius: 0.1rem;
  overflow: hidden;
  margin-top: 0.2rem;
}
.one > div > p {
  float: left;
  width: 19.9%;
  text-align: center;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #cccccc;
  border: 1px solid #cccccc;
}
.red {
  background: red;
  color: #fff !important;
}
textarea {
  width: 100%;
  padding: 0.3rem;
  font-size: 0.3rem;
  margin-top: 0.02rem;
}
footer {
  height: 1.1rem;
  width: 100%;
  background: #fff;
  border-top: 1px solid #c4c4c4;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0.3rem;
}
footer > div {
  line-height: 0.34rem;
}
footer > div > :first-child {
  color: #e60013;
}
footer > div > :last-child {
  color: #999;
}
footer > button {
  height: 0.6rem;
  width: 1.3rem;
  background: red;
  color: #fff;
  border-radius: 0.3rem;
}
.first {
  height: 0.8rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  line-height: 0.8rem;
}
.first > p > input {
  /* padding: 0.2rem; */
  width: 2rem;
}
</style>