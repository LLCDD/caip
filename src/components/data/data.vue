<template>
  <div class="div">
    <div v-for="(item,index) in list" :key="index" @click="fans(item.stars_uid)">
      <img class="img" :src="item.stars.avatar" alt>
      <div>
        <p style="font-size:0.3rem">{{ item.stars.username }}</p>
        <p style="color:#999;font-size:0.22rem">粉丝数：{{ item.stars.fans_count }}</p>
      </div>
      <img class="img1" src="../../assets/images/enter.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "345",
      list: []
    };
  },
  mounted() {
    this.http
      .get("/api/fans")
      .then(res => {
        if (res.code == 200) {
          console.log(res);
          this.list = res.data.record.data;
        } else {
          this.$toasted.error(res.message).goAway(1000);
        }
      })
      .catch(res => {
        this.$toasted.error(res.message).goAway(1000);
      });
  },
  methods: {
    fans(id) {
      console.log(id);
      this.$router.push("/userinfo?id=" + id + "");
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
.div > div {
  height: 1.6rem;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
  padding: 0.3rem;
  position: relative;
}
.div > div > .img {
  height: 100%;
  border-radius: 50%;
  float: left;
  background: pink;
}
.div > div > div {
  float: left;
  line-height: 0.5rem;
  margin-left: 0.3rem;
}
.img1 {
  position: absolute;
  right: 0.3rem;
  height: 0.34rem;
  width: 0.2rem;
  top: 44%;
}
</style>
