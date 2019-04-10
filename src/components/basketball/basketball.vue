<template>
  <div class="div">
    <header>
      <span @click="fanhui">
        <img src="../../assets/images/return.png" alt>
      </span>
      {{ msg }}
      <img @click="xuan" class="xuan" src="../../assets/img/xuan.png" alt>
    </header>

    <div class="divy">
      <div class="hunhe">
        <van-collapse class="tap" v-model="activeNames">
          <van-collapse-item
            v-for="(item,index) in 4"
            :key="index"
            title="2019-03-05 (星期二) 有三场比赛"
            :name="index"
          >
            <div style="background:#f2f2f2">
              <div v-for="(item,index) in 6" :key="index" class="hegiht">
                <div class="black">
                  <p>亚冠</p>
                  <p>周三001</p>
                  <p>16:30截止</p>
                </div>
                <p class="vs">
                  <span></span>
                  <span>(客) 悉尼FC VS 蔚山现代 (主)</span>
                </p>
                <table>
                  <tr>
                    <td @click="cnu" :class="{'pink': arr.indexOf(1) >= 0}">主胜 2.15</td>
                    <td>平 1.15</td>
                    <td>客胜 1.55</td>
                    <td style="width:0.6rem" @click="tap" rowspan="3">展开全部</td>
                  </tr>
                  <tr>
                    <td>主胜 2.15</td>
                    <td>平 1.15</td>
                    <td>客胜 1.55</td>
                  </tr>
                  <tr>
                    <td colspan="3">客胜 3.05</td>
                  </tr>
                </table>
              </div>
            </div>
          </van-collapse-item>
          <!-- <van-collapse-item title="2019-03-05 (星期二) 有三场比赛" name="2">网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失</van-collapse-item> -->
        </van-collapse>
        <footer>
          <img src="../../assets/img/trash.png" alt>
          <p>
            <span style="color:#e60013;font-size:0.3rem">至少选择2场比赛投注</span>
            <br>
            <span style="color:#b6b6b6;font-size:0.2rem">页面信息奖金仅供参考, 请已出票的固定奖金为准</span>
          </p>
          <button @click="ok">确定</button>
        </footer>
        <van-popup style="width:92%;border-radius: 0.1rem;" v-model="show">
          <div class="show">
            <p>悉尼FC VS 蔚山现代</p>
            <!-- 赛事的比分 -->
            <div>
              <table class="table">
                <tr>
                  <td>主胜 1.91</td>
                  <td>平 3.25</td>
                  <td>客胜 3.05</td>
                </tr>
                <tr>
                  <td>主胜 1.91</td>
                  <td>平 3.25</td>
                  <td>客胜 3.05</td>
                </tr>
              </table>
              <table class="table">
                <tr>
                  <td>主胜 1.91</td>
                  <td>平 3.25</td>
                </tr>
              </table>
              <table class="table2">
                <tr style="height:0">
                  <td rowspan="3" style="width:0.32rem;background:#83bcf3;color:#fff">全场</td>
                </tr>
                <tr>
                  <td>主胜 1.91</td>
                  <td>主胜 1.91</td>
                  <td>平 3.25</td>
                  <td>客胜 3.05</td>
                </tr>
                <tr>
                  <td>主胜 1.91</td>
                  <td>平 3.25</td>
                  <td>客胜 3.05</td>
                  <td>客胜 3.05</td>
                </tr>
              </table>
              <table class="table2" style="margin-top:0.02rem">
                <tr style="height:0">
                  <td rowspan="3" style="width:0.32rem;background:#ff8a66;color:#fff">主胜</td>
                </tr>
                <tr>
                  <td>主胜 1.91</td>
                  <td>主胜 1.91</td>
                  <td>平 3.25</td>
                  <td>客胜 3.05</td>
                </tr>
                <tr>
                  <td>主胜 1.91</td>
                  <td>平 3.25</td>
                  <td>客胜 3.05</td>
                  <td>客胜 3.05</td>
                </tr>
              </table>
              <div class="dib">
                <button @click="over">取消</button>
                <button @click="over">确定</button>
              </div>
            </div>
          </div>
        </van-popup>

        <van-popup class="warp" :close-on-click-overlay="false" v-model="show1">
          <div class="puop">
            <p>
              <span>赛事筛选</span>
              <span>清空</span>
            </p>
            <div class="li">
              <p v-for="(item,index) in 15" :key="index">美超</p>
            </div>
            <p class="dibu">
              <button @click="tap1">取消</button>
              <button @click="tap1">确定</button>
            </p>
          </div>
        </van-popup>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "竞彩篮球",
      activeNames: [0],
      show: false,
      show1: false,
      arr: [1]
    };
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    tap() {
      this.show = true;
    },
    ok() {
      console.log("45");
    },
    // 取消事件
    over() {
      this.show = false;
    },
    tap1() {
      this.show1 = false;
    },
    // 测试
    cnu() {
      console.log(this.arr.indexOf(1));
      var arr = this.arr;
      if (arr.indexOf(1) < 0) {
        arr.push(1);
        this.arr = arr;
      } else {
        arr.splice(arr.indexOf(1), 1);
        this.arr = arr;
      }
    },
    // 筛选
    xuan() {
      this.show1 = true;
    }
  }
};
</script>
<style scoped>
.div {
  min-height: 100%;
  background: #f2f2f2;
  z-index: -1;
  overflow: auto;
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
}
.nei {
  height: 1.7rem;
  width: 100%;
  background: #e60013;
}
.hunhe {
  height: 100%;
  overflow: hidden;
  background: #f2f2f2;
  z-index: -1;
}
.hunhe >>> .van-cell {
  background: #ffffff;
  height: 0.6rem;
}
.hunhe >>> .van-cell__title {
  color: #999;
  font-size: 0.2rem;
  line-height: 0.3rem;
}
.hunhe >>> .van-cell__right-icon {
  color: #cccccc;
  position: absolute;
  right: 0.2rem;
  top: 18%;
}
.tap {
  margin-bottom: 1.2rem;
}
.hunhe > footer {
  height: 1.1rem;
  width: 100%;
  background: #fff;
  border-top: 1px solid #c4c4c4;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0.3rem;
}
footer > button {
  height: 0.6rem;
  width: 1.3rem;
  background: #e60013;
  color: #fff;
  border-radius: 0.3rem;
  float: right;
  position: absolute;
  right: 0.3rem;
}
.hunhe > footer > img {
  height: 0.44rem;
  width: 0.4rem;
  margin-left: 0.2rem;
  float: left;
  margin-top: 0.1rem;
}
.hunhe > footer > p {
  float: left;
  margin-left: 0.3rem;
}
.hunhe > footer > p {
  line-height: 0.36rem;
}
.hegiht {
  height: 3rem;
  width: 100%;
  padding: 0.3rem 0.3rem 0.3rem 0.5rem;
  margin-top: 0.14rem;
  background: #fff;
}
.black {
  color: #000;
  width: 22%;
  height: 100%;
  text-align: center;
  padding-top: 0.36rem;
  float: left;
  margin-top: 4%;
}
.vs {
  font-size: 0.3rem;
  text-align: center;
  position: relative;
  width: 78%;
  float: right;
}
.vs > :first-child {
  position: absolute;
  left: 0;
  font-size: 0.2rem;
  color: #000;
}
.vs > :last-child {
  color: #000;
}
table {
  font-size: 0.18rem;
  color: #333333;
  width: 78%;
}
table tr {
  height: 0.7rem;
}
table td {
  padding: 5px;
  text-align: center;
}
.show {
  width: 100%;
  text-align: center;
  padding: 0 0.3rem;
}
.show > p {
  line-height: 0.9rem;
}
.table {
  width: 100%;
}
.table tr {
  border: #fff;
}
.table td {
  background: #e6e6e6;
  border: 1px solid #fff;
  font-size: 0.24rem;
}
.table1 {
  width: 100%;
  margin-top: 0.2rem;
}
.table1 tr {
  border: #fff;
}
.table1 td {
  background: #e6e6e6;
  border: 1px solid #fff;
  font-size: 0.24rem;
}
.table2 {
  width: 100%;
  margin-top: 0.2rem;
}
.table2 tr {
  border: #fff;
}
.table2 td {
  background: #e6e6e6;
  border: 1px solid #fff;
  font-size: 0.24rem;
}
.dib {
  height: 1.1rem;
  display: flex;
  justify-content: space-around;
}
.dib > :first-child {
  height: 0.6rem;
  width: 1.3rem;
  background: #f7b2b8;
  color: #fff;
  border-radius: 0.3rem;
  margin-top: 0.2rem;
}
.dib > :last-child {
  height: 0.6rem;
  width: 1.3rem;
  background: #e60013;
  color: #fff;
  border-radius: 0.3rem;
  margin-top: 0.2rem;
}
.puop {
  width: 100%;
  color: #e60013;
}
.puop > p {
  display: flex;
  justify-content: space-between;
  font-size: 0.3rem;
}
.warp {
  width: 80%;
  min-height: 2rem;
  border-radius: 0.2rem;
  padding: 0.3rem;
}
.li {
  margin-top: 0.3rem;
}
.li > p {
  float: left;
  height: 0.6rem;
  width: 30%;
  border: 1px solid #999999;
  margin-bottom: 0.16rem;
  margin-right: 3%;
  line-height: 0.6rem;
  text-align: center;
  border-radius: 0.1rem;
  color: #999;
}
.dibu {
  height: 1rem;
  float: left;
  display: flex;
  width: 100%;
}
.dibu > button {
  height: 0.6rem;
  width: 1.3rem;
  border-radius: 0.4rem;
  color: #fff;
  margin-top: 0.2rem;
}
.dibu > :last-child {
  background: #e60013;
  margin-right: 20%;
}
.dibu > :first-child {
  margin-left: 20%;
}
.pink {
  background: pink !important;
  color: #fff;
}
</style>
