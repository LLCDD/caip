<template>
  <div class="div">
    <p class="p">
      <span>反馈意见</span>
    </p>
    <textarea v-model="text" cols="30" rows="10" placeholder="请填写反馈意见 (500字内)"></textarea>
    <button @click="tijioa">确定发送</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "34534",
      text: ""
    };
  },
  methods: {
    tijioa() {
      this.http
        .post("/api/complaint", { content: this.text })
        .then(res => {
          if (res.code == 200) {
            this.text = "";
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
.p {
  padding: 0 0.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
}
.p > span {
  padding-left: 0.2rem;
  border-left: 2px solid #e60013;
  color: #e60013;
  font-size: 0.3rem;
}
textarea {
  width: 100%;
  padding: 0.3rem;
}
button {
  width: 90%;
  height: 0.8rem;
  border-radius: 0.5rem;
  color: #fff;
  margin-left: 5%;
  margin-top: 0.5rem;
  background: #e60013;
}
</style>
