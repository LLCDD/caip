<template>
  <div class="div">
    <header>
      <span @click="fanhui">
        <img src="../../assets/images/return.png" alt>
      </span>
      {{ msg }}
      <img @click="xuan" class="xuan" src="../../assets/img/xuan.png" alt>
      <van-collapse v-model="activeNames">
        <van-collapse-item class="top" :title="msg" name="1">
          <div class="nei">
            <p @click="hunhe">混合过关</p>
            <p @click="pinfu">胜平负</p>
            <p @click="rangqiu">让球胜平负</p>
            <p @click="jinqiu">总进球</p>
            <p @click="banchang">半全场</p>
            <p @click="pk">比分</p>
          </div>
        </van-collapse-item>
      </van-collapse>
    </header>

    <div class="divy">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "混合过关",
      activeNames: ["0"]
    };
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    // 混合过关
    hunhe() {
      this.msg = "混合过关";
      this.activeNames = ["0"];
      this.$router.replace({ name: "hunhe" });
    },
    // 让球胜平负
    pinfu() {
      this.msg = "胜平负";
      this.activeNames = ["0"];
      this.$router.replace({ name: "pinfu" });
    },
    rangqiu() {
      this.msg = "让球胜平负";
      this.activeNames = ["0"];
      this.$router.replace({ name: "rangqiu" });
    },
    jinqiu() {
      this.msg = "总进球";
      this.activeNames = ["0"];
      this.$router.replace({ name: "jinqiu" });
    },
    banchang() {
      this.msg = "半全场";
      this.activeNames = ["0"];
      this.$router.replace({ name: "banchang" });
    },
    pk() {
      this.msg = "比分";
      this.activeNames = ["0"];
      this.$router.replace({ name: "bifen" });
    },
    // 赛事筛选
    xuan() {
      console.log(this.$store.state.show);
      this.$store.commit("show", true);
      localStorage.setItem("show", true);
    }
  }
};
</script>
<style scoped>
.div {
  height: 100%;
  background: #f2f2f2;
}
.div >>> .van-cell__right-icon {
  position: absolute;
  right: 34%;
}
.div >>> .van-cell__title {
  font-size: 0.34rem;
  color: #fff;
}
.div >>> .van-cell {
  background: #e60013;
}
.top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}
.div >>> .van-cell__right-icon {
  color: #fff;
}
.div >>> .van-collapse-item__content {
  padding: 0;
}
.nei > p {
  height: 0.6rem;
  width: 30%;
  float: left;
  margin-left: 2%;
  margin-top: 2%;
  line-height: 0.6rem;
  color: #fff;
  border-radius: 0.1rem;
  border: 1px solid #fff;
  position: relative;
  z-index: 99;
}
.div > header {
  height: 0.88rem;
  width: 100%;
  background: #e60013;
  position: fixed;
  top: 0;
  z-index: 99;
  line-height: 0.88rem;
  text-align: center;
  color: #fff;
  font-size: 0.34rem;
  box-shadow: 1px 1px 4px #9e9e9e;
}
.div > header > span {
  display: inline-block;
  height: 100%;
  width: 1rem;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
}
.div > header > span > img {
  height: 0.48rem;
  width: 0.26rem;
}
.xuan {
  position: absolute;
  right: 0.3rem;
  height: 0.45rem;
  width: 0.45rem;
  top: 26%;
  z-index: 1000;
}
.divy {
  padding-top: 0.88rem;
  height: 100%;
  overflow: scroll;
}
.nei {
  height: 1.7rem;
  width: 100%;
  background: #e60013;
}
</style>
