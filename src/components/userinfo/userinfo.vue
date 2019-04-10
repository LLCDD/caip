<template>
  <div class="div">
    <div class="top">
      <div class="header">
        <div>
          <img :src="data.user.avatar" alt>
        </div>
        <p>用户信息</p>
        <span @click="go" class="span">
          <img class="left" src="../../assets/images/return.png" alt>
        </span>
        <button class="button" v-if="data.has_fan == 0" @click="guanzhu(data.user.id)">关注</button>
        <button class="button" v-if="false" @click="qu(data.user.id)">已关注</button>
        <button class="button" v-if="false">关注45</button>
        <p>{{ data.user.username }}</p>
        <div class="inline">
          <p>粉丝数： {{ data.user.fans_count }}</p>|
          <p>已关注：{{ data.user.stars_count }}</p>
        </div>
      </div>
      <div class="fise">
        <div>
          <p>总奖金</p>
          <p>100.00</p>
        </div>
        <div>
          <p>中奖几率</p>
          <p>{{ data.user.san }}</p>
        </div>
        <div style="border-right:0">
          <p>带红人数</p>
          <p>{{ data.lucky_count }}</p>
        </div>
      </div>
    </div>
    <div style="margin-top:5.4rem">
      <div class="divn" v-for="(item,index) in 4" :key="index">
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
            <span>方案金额</span>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "用户信息",
      src: "",
      nickname: "张三",
      data: {
        user: { avatar: "" }
      }
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    // 关注好友
    guanzhu(uid) {
      console.log(uid);
      this.http
        .post("/api/fans", { id: uid })
        .then(res => {
          if (res.code == 200) {
            this.$toasted.success(res.message).goAway(1000);
            this.chushi();
          }
        })
        .catch(res => {
          this.$toasted.error(res.messsage).goAway(1000);
        });
    },
    // 取消关注
    qu(uid) {
      this.http
        .get("/api/fans/" + uid + "")
        .then(res => {
          if (res.code == 200) {
            console.log(res);
          } else {
            this.$toasted.error(res.message).goAway(1000);
          }
        })
        .catch(res => {
          this.$toasted.error(res.message).goAway(1000);
        });
    },
    chushi() {
      this.http
        .get("/api/fans/" + this.$route.query.id + "")
        .then(res => {
          if (res.code == 200) {
            this.data = res.data;
          } else {
            this.$toasted.error(res.message).goAway(1000);
          }
        })
        .catch(res => {
          this.$toasted.error(res.message).goAway(1000);
        });
    }
  },
  mounted() {
    this.chushi();
  }
};
</script>
<style scoped>
.div {
  height: 100%;
  overflow-y: auto;
  background: #f2f2f2;
  width: 100%;
}
.header {
  height: 4rem;
  width: 100%;
  background: url("../../assets/images/b1.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  padding-top: 0.44rem;
}
.header > :first-child > img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
.header > .span > .left {
  position: absolute;
  left: 0rem;
  top: 0.1rem;
  height: 0.4rem;
}
.span {
  display: inline-block;
  height: 1rem;
  width: 1rem;
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
}
.button {
  height: 0.5rem;
  width: 1.1rem;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 0.5rem;
  background: none;
  position: absolute;
  right: 0.3rem;
  top: 0.5rem;
}
.header > :first-child {
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  background: red;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  border: 0.1rem solid #fac399;
}
.header > div > img {
  position: absolute;
  left: 0;
  top: 0;
}
.header > p {
  color: #fff;
  margin-top: 0.18rem;
}
.inline {
  display: flex;
  width: 50%;
  justify-content: space-around;
  margin: 0 auto;
  color: #ffffff;
  margin-top: 0.2rem;
}
.fise {
  height: 1.2rem;
  justify-content: space-around;
  background: #fff;
  padding-top: 0.2rem;
  padding-bottom: 0.4rem;
  line-height: 0.4rem;
}
.fise > div {
  border-right: 1px solid #e60013;
  width: 33.3%;
  float: left;
  text-align: center;
}
.fise > div > :last-child {
  color: #e60013;
}
.fise > div > :first-child {
  font-size: 0.3rem;
  color: #000;
}
.top {
  position: fixed;
  top: 0;
  width: 100%;
}
.divn {
  padding-top: 0.2rem;
  min-height: 3.3rem;
  background: #fff;
  padding: 0 0.3rem;
  padding-bottom: 0.2rem;
  overflow: hidden;
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
