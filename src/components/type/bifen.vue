<template>
  <div class="hunhe">
    <van-collapse class="tap" v-model="activeNames">
      <van-collapse-item
        v-for="(item,index) in data"
        :key="index"
        :title="data[index].name"
        :name="index"
      >
        <div style="background:#f2f2f2">
          <div v-for="(item,index) in data[index].value" :key="index" class="hegiht">
            <div class="black">
              <p>{{ item.l_cn_abbr }}</p>
              <p>{{ item.num }}</p>
              <p>{{ item.time.slice(0,5) }} 截止</p>
            </div>
            <p class="vs">
              <span></span>
              <span>{{ item.h_cn_abbr }} VS {{ item.a_cn_abbr }}</span>
            </p>
            <table>
              <!-- <tr>
                <td @click="cnu" :class="{'pink': arr.indexOf(1) >= 0}">主胜 2.15</td>
                <td>平 1.15</td>
                <td>客胜 1.55</td>
                <td
                  @click="tap"
                  style="font-size:0.26rem;text-algin:bottom;color:#ec676d;border-bottom:0"
                >展开</td>
              </tr>-->
              <tr @click="show1(item.crs)">
                <td>主胜 2.15</td>
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
    <van-popup class="warp" :close-on-click-overlay="false" v-model="this.$store.state.show">
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
    <!-- 主胜的数据 -->
    <van-popup class="warp1" :close-on-click-overlay="false" v-model="shows">
      <div class="puop">
        <p>悉尼FC VS 蔚山现代</p>
        <div class="fen">
          <p :class="{'hopgn': Class == 1}" @click="s1(1)">主胜</p>
          <p :class="{'hopgn': Class == 2}" @click="p1(2)">平</p>
          <p :class="{'hopgn': Class == 3}" @click="f1(3)">主负</p>
        </div>
        <div class="li1">
          <p style="font-size:0.24rem" v-for="(item,index) in s" :key="index">
            {{ item.value }}
            <span style="color:#999">{{ item.t }}</span>
          </p>
          <p style="font-size:0.24rem">
            <span>全选</span>
          </p>
          <p style="font-size:0.24rem">
            <span>取消</span>
          </p>
        </div>
        <p class="dibu">
          <button @click="tap2">取消</button>
          <button @click="tap2" style="margin-left:15%">确定</button>
        </p>
      </div>
    </van-popup>
    <!-- 平的数据 -->
    <van-popup class="warp1" :close-on-click-overlay="false" v-model="showp">
      <div class="puop">
        <p>悉尼FC VS 蔚山现代</p>
        <div class="fen">
          <p :class="{'hopgn': Class == 1}" @click="s1(1)">主胜</p>
          <p :class="{'hopgn': Class == 2}" @click="p1(2)">平</p>
          <p :class="{'hopgn': Class == 3}" @click="f1(3)">主负</p>
        </div>
        <div class="li1">
          <p style="font-size:0.24rem" v-for="(item,index) in p" :key="index">
            {{ item.value }}
            <span style="color:#999">{{ item.t }}</span>
          </p>
          <p style="font-size:0.24rem">
            <span>全选</span>
          </p>
          <p style="font-size:0.24rem">
            <span>取消</span>
          </p>
        </div>
        <p class="dibu">
          <button @click="tap2">取消</button>
          <button @click="tap2" style="margin-left:15%">确定</button>
        </p>
      </div>
    </van-popup>
    <!-- 负的数据 -->
    <van-popup class="warp1" :close-on-click-overlay="false" v-model="showf">
      <div class="puop">
        <p>悉尼FC VS 蔚山现代</p>
        <div class="fen">
          <p :class="{'hopgn': Class == 1}" @click="s1(1)">主胜</p>
          <p :class="{'hopgn': Class == 2}" @click="p1(2)">平</p>
          <p :class="{'hopgn': Class == 3}" @click="f1(3)">主负</p>
        </div>
        <div class="li1">
          <p style="font-size:0.24rem" v-for="(item,index) in f" :key="index">
            {{ item.value }}
            <span style="color:#999">{{ item.t }}</span>
          </p>
          <p style="font-size:0.24rem">
            <span>全选</span>
          </p>
          <p style="font-size:0.24rem">
            <span>取消</span>
          </p>
        </div>
        <p class="dibu">
          <button @click="tap2">取消</button>
          <button @click="tap2" style="margin-left:15%">确定</button>
        </p>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: [0],
      Class: 1,
      show: false,
      arr: [1],
      showf: false,
      // 测试拆分 时间
      data: [],
      // sfp 胜负平的数据
      s: [],
      p: [],
      f: [],
      showp: false,
      shows: false
    };
  },
  methods: {
    tap() {
      this.show = true;
    },
    ok() {
      this.$router.push("/tzxq/4");
    },
    // 取消事件
    over() {
      this.show = false;
    },
    tap1() {
      this.$store.commit("show", false);
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
    // 赛事的显示和隐藏
    show1(index) {
      // 比分生平负的区分
      // for (var j = 0; j < this.data.length; j++) {
      //   // console.log(data[j]);
      //   for (var i = 0; i < data[j].value.length; i++) {
      //     // console.log(data[j].value[i].crs);
      //     for (var k in data[j].value[i].crs) {
      //       if (k.indexOf(0) >= 0 || k.indexOf("-") >= 0) {
      //         // console.log(k);
      //         // console.log(data[j].value[i].crs[k]);
      //         arry.push(k);
      //         // console.log(arry);
      //       }
      //     }
      //   }
      // }
      // s 为保存胜的 数据
      var s = [];
      //  p 为保存平的数据
      var p = [];
      // f 为保存负的数据
      var f = [];
      for (var i in index) {
        if (i.indexOf(0) >= 0 || i.indexOf("-") >= 0) {
          // 前比分
          var a = parseInt(i.slice(1, 2));
          var b = parseInt(i.slice(3, 4));
          // 如果a > b 是胜
          if (a > b) {
            var shu = "0" + a + "0" + b;
            var t = a + ":" + b;
            s.push({ t: index[shu], value: t });
          } else if (a == b) {
            // 这个是 平的时候的数据
            var ping = "0" + a + "0" + b;
            var pi = a + ":" + b;
            p.push({ t: index[ping], value: pi });
          } else if (a < b) {
            // 这个是 负的时候的数据
            console.log(a, b);
            var fu = "0" + a + "0" + b;
            var fus = a + ":" + b;
            f.push({ t: index[fu], value: fus });
          }
        }
      }
      s.push({ t: index["-1-h"], value: "胜其他" });
      p.push({ t: index["-1-d"], value: "平其他" });
      f.push({ t: index["-1-a"], value: "负其他" });
      this.s = s;
      this.p = p;
      this.f = f;
      console.log(s, p, f);
      this.shows = true;
    },
    tap2() {
      this.Class = 1;
      this.shows = false;
      this.showf = false;
      this.showp = false;
    },
    // s胜平负的事件
    s1(id) {
      this.Class = id;
      this.shows = true;
      this.showf = false;
      this.showp = false;
    },
    p1(id) {
      // 平
      this.Class = id;
      this.shows = false;
      this.showf = false;
      this.showp = true;
    },
    f1(id) {
      // 负
      this.Class = id;
      this.shows = false;
      this.showf = true;
      this.showp = false;
    }
  },
  mounted() {
    this.http
      .get("/api/match?type[0]=crs")
      .then(res => {
        if (res.code == 200) {
          for (var i in res.data.match) {
            this.data.push({ name: i, value: res.data.match[i] });
          }
        } else {
          this.$toasted.error(res.message).goAway(1000);
        }
      })
      .catch(res => {
        this.$toasted.error(res.message).goAway(1000);
      });
  }
};
</script>
<style scoped>
.hunhe {
  min-height: 100%;
  background: #f2f2f2;
  z-index: -1;
  overflow: auto;
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
.hopgn {
  background: pink;
  color: #fff;
}
.hunhe > footer > p {
  float: left;
  margin-left: 0.3rem;
}
.hunhe > footer > p {
  line-height: 0.36rem;
}
.hegiht {
  height: 2.4rem;
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
  margin-top: 0.6rem;
}
table tr {
  height: 1.2rem;
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
.warp > .puop {
  width: 100%;
  color: #e60013;
}
.warp > .puop > p {
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
.warp1 {
  width: 88%;
  border-radius: 0.1rem;
}
.warp1 > .puop {
  width: 100%;
  text-align: center;
}
.warp1 > .puop > :first-child {
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.3rem;
}
.li1 {
  padding-left: 7%;
  float: left;
  width: 100%;
}
.li1 > p {
  float: left;
  width: 28%;
  height: 0.6rem;
  border: 1px solid #999999;
  border-radius: 0.1rem;
  line-height: 0.6rem;
  margin-right: 5%;
  margin-top: 0.2rem;
}
.fen {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
}
.fen > p {
  float: left;
  width: 33.3%;
}
</style>
