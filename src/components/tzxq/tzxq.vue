<template>
  <div class="div">
    <div class="frist">
      <p>+添加赛事</p>
      <p>清空重选</p>
    </div>
    <div class="warp">
      <div v-for="(item,index) in 10" :key="index">
        <p>
          <span>周四001</span>
          <span>盛大aasdfdfasd 开到底</span>
          <span>
            <img @click="smg(2)" v-if="msg == 1" class="img" src="../../assets/img/dan-h.png" alt>
            <img @click="smg(1)" v-if="msg == 2" class="img" src="../../assets/img/dan.png" alt>
          </span>
        </p>
        <table>
          <tr>
            <td>0</td>
            <td>主胜 1.34</td>
            <td>平 3.24</td>
            <td>客胜 3.54</td>
            <td rowspan="3" style="color:red">取消</td>
          </tr>
          <tr>
            <td>1</td>
            <td :class="{'pink':true}">主胜 3.34</td>
            <td>平 3.24</td>
            <td>客胜 3.54</td>
          </tr>
          <tr v-if="false">
            <td></td>
            <td colspan="3" style="color:#999">未选择其他玩法</td>
          </tr>
          <tr v-if="true">
            <td></td>
            <td colspan="3" style="color:#999">1:0 2:0</td>
          </tr>
        </table>
      </div>
    </div>
    <footer>
      <div>
        <p @click="chuan">
          2串1
          <img src="../../assets/img/play.png" alt>
        </p>
        <p>
          买
          <input type="text" value="1">倍
        </p>
        <p @click="youhua">奖金优化</p>
      </div>
      <div>
        <div>
          <p>投1注 20倍 共40元</p>
          <p>预计奖金: 222元</p>
        </div>
        <div>
          <button @click="he">合买</button>
          <button style="background:#f7b2b8">保存</button>
          <button>购买</button>
        </div>
      </div>
    </footer>
    <van-popup class="so" v-model="show">
      <div>
        <div class="top">
          <p @click="tap(1)" :class="{'red':true}" v-for="(item,index) in 10" :key="index">二串一</p>
        </div>
        <div class="top" style="border:0">
          <p :class="{'red':false}" v-for="(item,index) in 40" :key="index">3串3</p>
        </div>
      </div>
      <div class="bottom">
        <button @click="qx">取消</button>
        <button @click="qx">确定</button>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "2",
      show: false,
      arr: []
    };
  },
  methods: {
    smg(id) {
      this.msg = id;
    },
    // 选择串的界面
    chuan() {
      this.show = true;
    },
    // 样式的设置
    tap(id) {
      var arr = this.arr;
      if (arr.indexOf(id) > 0) {
        arr.splice(arr.indexOf(id), 1);
        this.arr = arr;
      } else {
        arr.push(id);
        this.arr = arr;
      }
    },
    // 关闭串的选择
    qx() {
      this.show = false;
    },
    // 奖金优化
    youhua() {
      this.$router.push("/youhua/3");
    },
    // 发起合买
    he() {
      this.$router.push("/fahemai/3");
    }
  }
};
</script>
<style scoped>
.div {
  padding-top: 0.88rem;
  height: 100%;
  overflow: auto;
  background: #f2f2f2;
}
.frist {
  display: flex;
  justify-content: space-around;
  font-size: 0.3rem;
  height: 1rem;
  color: #e60013;
  line-height: 1rem;
  position: fixed;
  width: 100%;
  top: 0.88rem;
}
.frist > p {
  background: #fff;
  width: 100%;
  text-align: center;
  border-right: 1px solid #f2f2f2;
}
.warp {
  /* padding: 0 0.3rem; */
  padding-top: 1.2rem;
  margin-bottom: 2.2rem;
}
.warp > div {
  width: 100%;
  background: #fff;
  padding: 0 0.3rem;
  padding-bottom: 0.2rem;
  margin-top: 0.2rem;
}
.warp > div > p {
  height: 0.6rem;
  line-height: 0.6rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
}
.warp > div > table {
  padding: 0 0.3rem;
  width: 100%;
  margin-top: 0.2rem;
  text-align: center;
}
.pink {
  background: pink;
  color: #fff;
}
.img {
  height: 0.4rem;
  width: 0.4rem;
}
footer {
  height: 2rem;
  background: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
}
footer > :first-child {
  height: 0.9rem;
  line-height: 0.9rem;
  border-bottom: 2px solid #f2f2f2;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  color: #e60013;
}
footer > :first-child > p > input {
  width: 1rem;
  height: 0.4rem;
  text-align: center;
  border-radius: 0.1rem;
  background: #ffffff;
  border: 1px solid #b7b7b7;
  color: #b7b7b7;
}
footer > :first-child > p > img {
  height: 0.2rem;
  width: 0.3rem;
}
footer > :first-child > :last-child {
  color: #fff;
  height: 0.4rem;
  width: 1.4rem;
  border-radius: 0.2rem;
  background: #e60013;
  line-height: 0.4rem;
  margin-top: 0.24rem;
  text-align: center;
}
footer > :last-child {
  height: 1.1rem;
  /* line-height: 1.1rem; */
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
}
footer > :last-child > div > button {
  background: red;
  height: 0.6rem;
  width: 1rem;
  color: #fff;
  border-radius: 0.5rem;
  margin-right: 0.1rem;
}
footer > :last-child > :first-child {
  line-height: 0.3rem;
  color: #e60013;
}
footer > :last-child > :first-child > :last-child {
  color: #999;
}
.so {
  width: 90%;
  border-radius: 0.1rem;
  min-height: 2rem;
}
.top {
  padding: 0.3rem;
  float: left;
  width: 100%;
  border-bottom: 2px solid #f2f2f2;
}
.top > p {
  float: left;
  height: 0.6rem;
  width: 24%;
  margin-right: 1%;
  line-height: 0.6rem;
  text-align: center;
  margin-top: 1%;
  border-radius: 0.1rem;
  border: 1px solid #999;
  color: #999;
}
.bottom {
  display: flex;
  justify-content: space-around;
  float: left;
  width: 100%;
  padding-bottom: 0.4rem;
}
.bottom > button {
  height: 0.6rem;
  width: 1.3rem;
  border-radius: 0.3rem;
  color: #fff;
  /* f7b2b8 */
}
.bottom > :first-child {
  background: #f7b2b8;
}
.bottom > :last-child {
  background: #e60013;
}
.red {
  color: #e60013 !important;
  border: 1px solid #e60013 !important;
}
</style>