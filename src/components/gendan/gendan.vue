<template>
  <div class="div">
    <p class="tit">方案金额：60元</p>

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
    <textarea v-model="title" name id cols="30" rows="5" placeholder="方案描述 (选填) "></textarea>
    <footer>
      <button @click="tijiao">提交</button>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "1",
      title: ""
    };
  },
  methods: {
    tap(id) {
      this.msg = id;
    },
    tijiao() {
      console.log("提交");
      this.$router.push("/fahemai/3");
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
}
footer > button {
  height: 0.6rem;
  width: 1.3rem;
  background: red;
  color: #fff;
  margin-top: 0.25rem;
  float: right;
  margin-right: 0.3rem;
  border-radius: 0.3rem;
}
</style>