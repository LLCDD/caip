<template>
  <div class="dingdan_box">
    <div class="jingcai">
      <div class="jingcai_div1">
        <span>竞彩足球</span>
        <span>第2019-09-05期 03-06 20:55截止</span>
      </div>
      <p>合买份数：100份，每份2元</p>
      <p>自购：50份 剩余：50份</p>
      <p>发起人保底：是</p>
    </div>
    <ul class="dingdan_ul">
      <li v-for="(item,index) in 10" :key="index">
        <div class="guanqiu">
          <div class="guanqiu_left">
            <p>亚冠</p>
            <p>周三001</p>
            <p>16:30截止</p>
          </div>
          <div class="guanqiu_right">
            <table border="0" cellspacing="0" cellpadding="0" class="guanqiu_table">
              <caption>
                让球
                <span>悉尼FC VS 蔚山现代</span>
              </caption>
              <tr>
                <td>0</td>
                <td @click="pink_dianji" :class="{'fense':arr.indexOf(1)>=0}">主胜 2.15</td>
                <td>平 1.15</td>
                <td>客胜 1.55</td>
              </tr>
              <tr>
                <td>+1</td>
                <td>主胜 2.15</td>
                <td>平 1.15</td>
                <td>客胜 1.55</td>
              </tr>
              <tr>
                <td></td>
                <td
                  colspan="3"
                  style="text-align: center;background-color: #f7b2b8;color: #ffffff;"
                >1:0</td>
              </tr>
            </table>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "订单详情",
      list: [1, 2],
      arr: [1]
    };
  },
  methods: {
    pink_dianji() {
      var arr = this.arr;
      if (arr.indexOf(1) < 0) {
        arr.push(1);
        this.arr = arr;
      } else {
        arr.splice(arr.indexOf(1), 1); //否则截取当前的下标的元素
        this.arr = arr;
      }
    }
  },
  mounted() {
    console.log(this.$route.params.id);
  }
};
</script>

<style scoped>
.dingdan_box {
  height: 100%;
  padding-bottom: 0.3rem;
  overflow: auto;
  margin-top: 0.1rem;
}

.jingcai {
  background: #ffffff;
  font-size: 0.24rem;
  padding: 0.2rem 0.28rem;
}

.jingcai_div1 {
  display: flex;
  justify-content: space-between;
  color: #999999;
  margin-bottom: 0.21rem;
}

.jingcai_div1 span:first-child {
  color: #e60013;
  font-size: 0.32rem;
}

.jingcai p {
  font-size: 0.24rem;
  color: #999999;
  line-height: 0.35rem;
}

.guanqiu {
  margin-top: 2px;
  background: #fff;
  padding: 0.25rem 0.3rem;
  display: flex;
  justify-content: space-between;
}

.guanqiu_table td {
  text-align: center;
  font-size: 0.18rem;
}

.guanqiu_left {
  padding-top: 0.81rem;
  text-align: center;
}

.guanqiu_table caption {
  font-size: 0.3rem;
  color: #333333;
  margin-bottom: 0.27rem;
  font-weight: 800;
}

.guanqiu_table caption span {
  width: 80%;
  text-align: center;
  display: inline-block;
}

.fense {
  background-color: #f7b2b8;
  color: #fff;
}

@media only screen and (min-width: 100px) and (max-width: 320px) {
  .dingdan_box {
    height: 100%;
    padding-bottom: 2.3rem;
    overflow: auto;
    margin-top: 0.1rem;
  }
}
</style>