<template>
  <div class="div">
    <van-swipe
      class="back"
      style="height:3.8rem;width:100%"
      :autoplay="300000"
      indicator-color="white"
    >
      <van-swipe-item>
        <div class="flex">
          <div>
            <img src="../../assets/img/mobilephone.png" alt>
            <p>站三</p>
            <p>1000</p>
            <img id="img" src="../../assets/img/02.png" alt>
          </div>
          <div>
            <img src="../../assets/img/mobilephone.png" alt>
            <p>站三</p>
            <p>1000</p>
            <img id="img" src="../../assets/img/01.png" alt>
          </div>
          <div>
            <img src="../../assets/img/mobilephone.png" alt>
            <p>站三</p>
            <p>1000</p>
            <img id="img" src="../../assets/img/03.png" alt>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="flex">
          <div>
            <img src="../../assets/img/mobilephone.png" alt>
            <p>站三</p>
            <p>1000</p>
            <img id="img" src="../../assets/img/02.png" alt>
          </div>
          <div>
            <img src="../../assets/img/mobilephone.png" alt>
            <p>站三</p>
            <p>1000</p>
            <img id="img" src="../../assets/img/01.png" alt>
          </div>
          <div>
            <img src="../../assets/img/mobilephone.png" alt>
            <p>站三</p>
            <p>1000</p>
            <img id="img" src="../../assets/img/03.png" alt>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="flex">
          <div>
            <img src="../../assets/img/mobilephone.png" alt>
            <p>站三</p>
            <p>1000</p>
            <img id="img" src="../../assets/img/02.png" alt>
          </div>
          <div>
            <img src="../../assets/img/mobilephone.png" alt>
            <p>站三</p>
            <p>1000</p>
            <img id="img" src="../../assets/img/01.png" alt>
          </div>
          <div>
            <img src="../../assets/img/mobilephone.png" alt>
            <p>站三</p>
            <p>1000</p>
            <img id="img" src="../../assets/img/03.png" alt>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <div class="ddiv">
      <p>
        <router-link replace tag="span" to="fmoney">发单金额</router-link>
      </p>
      <p>
        <router-link replace tag="span" to="prople">跟单人数</router-link>
      </p>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "345"
    };
  }
};
</script>
<style scoped>
.div {
  padding-top: 0.88rem;
  height: 100%;
  background: #f2f2f2;
}
.back {
  background: url("../../assets/img/pai.png") no-repeat;
  background-size: 100% 100%;
}
.flex {
  display: flex;
  justify-content: space-around;
}
.flex > div {
  text-align: center;
  position: relative;
}
.flex > div > img {
  height: 1.6rem;
  width: 1.6rem;
  margin-top: 0.7rem;
  border-radius: 50%;
  background: red;
}
#img {
  position: absolute;
  bottom: 0.44rem;
  right: 4px;
  height: 0.6rem;
  width: 0.4rem;
}
.ddiv {
  height: 1.1rem;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  line-height: 1.1rem;
  font-size: 0.3rem;
}
.router-link-active {
  color: #e60013;
  border-bottom: 2px solid #e60013;
}
</style>
