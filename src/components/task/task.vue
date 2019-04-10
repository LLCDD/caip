<template>
  <div class="div">
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="(item,index) in list" :key="index" :title="item">
        <!-- 自选的代码 -->
        <div v-show="item == '自选'" class="div2">
          <div v-for="(item,index) in 20" :key="index" @click="optional">
            <div class="n">
              <span style="color:#e60013;font-size:0.3rem">12</span>
              <span style="color:#e60013">22月</span>
            </div>
            <p class="title" :class="{'p1' : item=='自选'}">竞彩足球</p>
            <img class="img" src="../../assets/images/enter.png" alt>
            <div class="jiang">未中奖</div>
            <div class="jiang1" v-if="item=='自选'">
              <p>已中奖</p>
            </div>
            <p class="mon" v-if="item=='自选'">￥1000.00</p>
          </div>
        </div>
        <!-- 合买的代码 -->
        <div v-show="item == '合买'" class="div2">
          <div v-for="(item,index) in 20" :key="index" @click="hemai">
            <div class="n">
              <span style="color:#e60013;font-size:0.3rem">12</span>
              <span style="color:#e60013">22月</span>
            </div>
            <p class="title" :class="{'p1' : item=='自选'}">竞彩足球</p>
            <img class="img" src="../../assets/images/enter.png" alt>
            <div class="jiang">未中奖</div>
            <div class="jiang1" v-if="item=='自选'">
              <p>已中奖</p>
            </div>
            <p class="mon" v-if="item=='自选'">￥1000.00</p>
          </div>
        </div>
        <!-- 跟单的代码 -->
        <div v-show="item == '跟单'" class="div2">
          <div v-for="(item,index) in list" :key="index" @click="Documentarydetails">
            <div class="n">
              <span style="color:#e60013;font-size:0.3rem">12</span>
              <span style="color:#e60013">22月</span>
            </div>
            <p class="title" :class="{'p1' : item=='自选'}">竞彩足球</p>
            <img class="img" src="../../assets/images/enter.png" alt>
            <div class="jiang">未中奖</div>
            <div class="jiang1" v-if="item=='自选'">
              <p>已中奖</p>
            </div>
            <p class="mon" v-if="item=='自选'">￥1000.00</p>
          </div>
        </div>
        <!-- 保存的代码 -->
        <div v-show="item == '保存'" class="div3">
          <div v-for="(item,index) in list" :key="index">
            <div class="py">
              <span class="spped">竞彩足球</span>
              <p>
                <img class="img1" src="../../assets/img/trash.png" alt>
                <van-checkbox-group v-model="res">
                  <van-checkbox :name="item" checked-color="#e60013"></van-checkbox>
                </van-checkbox-group>
              </p>
            </div>
            <div class="line">
              <p style="margin-top:0.24rem">345</p>
              <p>435345</p>
              <p>345345</p>
            </div>
          </div>
          <p class="footer">
            <van-checkbox class="inp" v-model="checked" checked-color="#e60013">全选</van-checkbox>
            <img src="../../assets/img/trash.png" alt>
            <span class="right" style="float:right">
              合计：0元
              <button>购买</button>
            </span>
          </p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      active: "0",
      list: ["自选", "合买", "跟单", "保存"],
      res: ["自选", "合买", "跟单"],
      checked: ""
    };
  },
  mounted() {},
  watch: {
    active(newname, oldname) {
      if (newname == 0) {
        console.log("自选");
        document.getElementsByClassName("div")[0].scrollTop = 0;
      } else if (newname == 1) {
        console.log("合买");
        document.getElementsByClassName("div")[0].scrollTop = 0;
      } else if (newname == 2) {
        console.log("跟单");
        document.getElementsByClassName("div")[0].scrollTop = 0;
      } else {
        console.log("保存");
        document.getElementsByClassName("div")[0].scrollTop = 0;
      }
    },
    checked(newname, old) {
      if (newname == true) {
        this.res = this.list;
      } else {
        this.res = [];
      }
    }
    // res(newname, old) {
    //   if (newname.length == this.list.length) {
    //     this.checked = true;
    //     console.log(newname.length);
    //   }
    // }
  },
  methods: {
    // 自选
    optional() {
      this.$router.push("/optional/1");
    },
    // 合买
    hemai() {
      this.$router.push("/xiangqing/1");
    },
    // 跟单详情
    Documentarydetails() {
      this.$router.push("/Documentarydetails/3");
    }
  }
};
</script>
<style scoped>
.div {
  padding-top: 0.88rem;
  height: 100%;
  background: #f5f5f5;
  overflow: auto;
}
.div >>> .van-tabs__nav--line {
  padding-bottom: 0px;
  position: fixed;
  width: 100%;
  height: 1rem;
}
.div >>> .van-tab--active {
  color: #e60013;
}
.div >>> .van-checkbox {
  float: right;
  position: absolute;
  right: 0.3rem;
  top: 0.2rem;
}
.div2 {
  width: 100%;
  overflow: hidden;
  margin-top: 0.12rem;
  margin-bottom: 1rem;
}
.div3 > div {
  margin-top: 0.12rem;
  height: 2.05rem;
  background: #fff;
  padding: 0.3rem;
  padding-top: 0.2rem;
  position: relative;
}
.div2 > div {
  margin-top: 0.12rem;
  width: 100%;
  height: 1.4rem;
  padding: 0.3rem;
  line-height: 1.4rem;
  background: #ffffff;
  position: relative;
}
.n {
  height: 0.8rem;
  width: 0.6rem;
  background: url("../../assets/img/timer.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  float: left;
}
.n > :first-child {
  position: absolute;
  top: -0.5rem;
  right: 0.15rem;
}
.n > :last-child {
  position: absolute;
  top: -4px;
}
.title {
  float: left;
  height: 100%;
  line-height: 0.8rem;
  font-size: 0.3rem;
  margin-left: 0.24rem;
  color: #e60013;
}
.p1 {
  color: #999;
}
.img {
  position: absolute;
  right: 0.3rem;
  height: 0.3rem;
  width: 0.2rem;
  top: 44%;
}
.jiang {
  color: #fff;
  line-height: 0.4rem;
  width: 1rem;
  border-radius: 0.2rem;
  background: #cccccc;
  position: absolute;
  top: 0.3rem;
  right: 0.6rem;
  text-align: center;
}
.jiang1 {
  color: #fff;
  line-height: 0.4rem;
  width: 1rem;
  border-radius: 0.2rem;
  background: #e60013;
  position: absolute;
  top: 0.3rem;
  right: 0.6rem;
  text-align: center;
}
.mon {
  position: absolute;
  top: 0.3rem;
  right: 0.6rem;
  color: #e60013;
}
.footer {
  height: 1.1rem;
  background: #fff;
  width: 100%;
  position: fixed;
  bottom: 1rem;
  line-height: 1.1rem;
  padding-left: 0.3rem;
  color: #999;
}
.footer > img {
  float: left;
  height: 0.4rem;
  width: 0.4rem;
  line-height: 1.1rem;
  margin-top: 0.36rem;
  margin-left: 0.2rem;
}
.inp {
  float: left !important;
  position: absolute;
  left: 1.3rem;
  top: 0 !important;
}
.spped {
  padding-left: 0.2rem;
  border-left: 3px solid #e60013;
  font-size: 0.36rem;
  color: #e60013;
}
.py {
  display: flex;
  justify-content: space-between;
}
.img1 {
  height: 0.4rem;
  width: 0.4rem;
  margin-right: 0.6rem;
}
.line {
  line-height: 0.38rem;
  color: #999;
}
.right {
  color: #e60013;
  padding-right: 0.3rem;
}
.right > button {
  height: 0.6rem;
  line-height: 0.6rem;
  width: 1rem;
  background: #e60013;
  color: #fff;
  border-radius: 0.4rem;
  margin-left: 0.2rem;
}
</style>
