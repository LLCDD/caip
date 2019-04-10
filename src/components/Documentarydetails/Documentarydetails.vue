<template>
  <div class="hemai_box">
    <!--顶部-->
    <div class="xinxi_img">
      <i>
        <img src="../../assets/img/tou_img.png" alt>
      </i>
      <div class="xinxi_wen">
        <p>张三</p>
        <p>粉丝数：120</p>
      </div>
    </div>
    <div class="heng">
      <span>
        总奖金
        <p>10000</p>
      </span>
      <span>
        带动人数
        <p>126</p>
      </span>
    </div>
    <!--中间内容-->
    <div class="bg_kaifang" v-if="show">
      <i>
        <img src="../../assets/img/hemai_weikaifang.png" alt>
      </i>
      <p>23:56 截止后公开</p>
    </div>
    <div v-else>
      <!-- <div class="dingcan_box">
        <router-link tag="span" replace to="dingdan">
          订单详情
          <p class="xiantiao"></p>
        </router-link>
        <router-link tag="span" replace to="canyu">
          参与人详情
          <p class="xiantiao"></p>
        </router-link>
      </div>-->
      <div class="count_hemai">
        <router-view></router-view>
      </div>
    </div>

    <!--底部下注-->
    <div class="foot_hemai">
      <div class="xiazhu">
        <van-checkbox v-model="checked" checked-color="#e60013">全包</van-checkbox>

        <div class="xiazhu_left">
          买
          <input type="text" placeholder="1" value="1">份
        </div>
      </div>
      <div class="goumai">
        <div class="beishu">
          <p>支付40元</p>
          <p>预计奖金：384.00元</p>
        </div>
        <button @click="goumai_btn">购买</button>
      </div>
    </div>
    <!--弹窗-->
    <van-popup v-model="show1" :overlay="true" class="tanchu">
      <p>温馨提示</p>
      <p style="color:#999">是否确定需要购买？</p>
      <div class="btn_quren">
        <button @click="tap2">取消</button>
        <button @click="tap2">确定</button>
      </div>
    </van-popup>
    <!--弹窗2-->
    <van-popup v-model="show2" :overlay="true" class="tanchu">
      <p>温馨提示</p>
      <p style="color:#999">余额不足请联系商家充值！</p>
      <div class="btn_quren">
        <button @click="tap2">确定</button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      msg: "合买详情",
      show: false,
      checked: true,
      show1: false,
      show2: false
    };
  },
  methods: {
    goumai_btn() {
      console.log(111);
      this.show1 = true;
    },
    tap2() {
      this.show1 = false;
      this.show2 = false;
    }
  }
};
</script>

<style scoped>
.app-content {
  overflow: hidden;
}
.hemai_box {
  padding-top: 0.88rem;
  background: #f5f5f5;
}

.hemai_box .xinxi_img {
  padding: 0.2rem 0.3rem;
  display: flex;
  justify-content: flex-start;
  background: #fff;
}

.hemai_box .xinxi_img i {
  width: 1rem;
  height: 1rem;
  display: block;
  margin-right: 0.19rem;
}

.hemai_box .xinxi_img i img {
  width: 100%;
  height: 100%;
}

.hemai_box .xinxi_wen {
  margin-top: 0.16rem;
}

.hemai_box .xinxi_wen p:first-child {
  font-size: 0.3rem;
  color: #333333;
}

.hemai_box .xinxi_wen p:last-child {
  font-size: 0.3rem;
  color: #999999;
  margin-top: 0.1rem;
}

.heng {
  padding: 0.2rem 0 0.32rem;
  display: flex;
  justify-content: space-around;
  margin-top: 2px;
  margin-bottom: 0.1rem;
  background: #ffffff;
}

.heng span {
  width: 50%;
  text-align: center;
}

.heng p {
  color: #e60013;
  margin-top: 0.21rem;
}

.heng span:first-child {
  border-right: 1px solid #e60013;
}

.app-content {
  background: #f5f5f5;
}

.bg_kaifang {
  text-align: center;
}

.bg_kaifang i {
  display: block;
  width: 69%;
  margin: 1.13rem auto 0.4rem;
}

.bg_kaifang i img {
  width: 100%;
  height: 100%;
}

.bg_kaifang p {
  font-size: 0.3rem;
  color: #999999;
}

.foot_hemai {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #f5f5f5;
}

.foot_hemai .xiazhu {
  position: relative;
  padding: 0.25rem 0.29rem;
  display: flex;
  justify-content: flex-start;
  background: #fff;
  margin-bottom: 2px;
}

.xiazhu_left {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  color: #e60013;
  font-size: 0.3rem;
  height: 0.4rem;
  line-height: 0.4rem;
}

.xiazhu_left input {
  width: 1.01rem;
  height: 0.4rem;
  border: solid 0.02rem #999999;
  border-radius: 0.1rem;
  color: #999999;
  text-align: center;
  margin: 0 0.08rem;
}

.goumai {
  background: #fff;
  padding: 0.24rem 0.3rem;
  display: flex;
  justify-content: space-between;
}

.beishu p:first-child {
  font-size: 0.24rem;
  color: #e60013;
}

.beishu p:last-child {
  color: #999999;
  margin-top: 2px;
}

.goumai button {
  width: 1.31rem;
  height: 0.6rem;
  background-color: #e60013;
  border-radius: 0.3rem;
  font-size: 0.3rem;
  color: #ffffff;
}

.dingcan_box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 1.1rem;
  background: #fff;
}

.dingcan_box span {
  display: inline-block;
  text-align: center;
  width: 50%;
  padding: 0.4rem 0;
}

.xiantiao {
  display: none;
  width: 1rem;
  height: 0.04rem;
  background-color: #e60013;
  border-radius: 0.02rem;
  margin: 4px auto 0;
}

.router-link-active {
  color: #e60013;
}

.dingcan_box span.router-link-active .xiantiao {
  display: block;
}
/*弹窗修改*/

.tanchu {
  width: 66%;
  color: #e60013;
  border-radius: 0.1rem;
}

.tanchu p:nth-child(1) {
  margin: 0.24rem 0;
  text-align: center;
  font-size: 0.3rem;
}

.tanchu p:nth-child(2) {
  text-align: center;
  margin: 0.7rem 0.25rem;
}

.btn_quren {
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.28rem;
}

.btn_quren button:first-child {
  width: 1.31rem;
  height: 0.6rem;
  background-color: #ffffff;
  border-radius: 0.3rem;
  border: solid 0.03rem #e60013;
  color: #e60013;
  font-size: 0.3rem;
}

.btn_quren button:last-child {
  width: 1.31rem;
  height: 0.6rem;
  background-color: #e60013;
  border-radius: 0.3rem;
  color: #ffffff;
  font-size: 0.3rem;
}
.dengdai_chupiao {
  padding: 0.41rem 0.3rem;
}
.count_hemai {
  height: 7.3rem;
}
</style>