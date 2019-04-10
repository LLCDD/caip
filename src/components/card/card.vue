<template>
  <div class="div">
    <van-cell-group>
      <van-field v-model="pass" label="昵称" type="text" placeholder="请输入昵称" autosize/>
      <van-field v-model="pass1" label="手机号" type="text" placeholder="请重复输入新密码" autosize/>
    </van-cell-group>
    <button class="button" @click="qingqu">确定修改</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pass: "",
      pass1: ""
    };
  },
  methods: {
    qingqu() {
      this.http
        .post("/api/user", { username: this.pass, mobile: this.pass1 })
        .then(res => {
          if (res.code == 200) {
            console.log(res);
            this.pass = this.pass1 = "";
            this.$toasted.success(res.message).goAway(1000);
          } else {
            this.$toasted.error(res.message).goAway(1000);
          }
        })
        .catch(res => {
          this.$toasted.error(res.message).goAway(1000);
        });
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
.button {
  height: 0.8rem;
  width: 90%;
  background: #e60013;
  margin-left: 5%;
  color: #fff;
  border-radius: 0.5rem;
  margin-top: 0.4rem;
}
</style>
