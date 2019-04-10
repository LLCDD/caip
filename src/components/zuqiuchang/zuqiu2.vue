<template>
  <div class="zuqiu_box">
    <div class="zuqiu_qishu">
      <span>第20190301期</span>
      <span>截止时间:2019-03-21 22:55:00</span>
    </div>
    <ul class="zuqiu_ul">
      <li v-for="(item,index) in 11" :key="index">
        <div class="left_div">
          <p>001</p>
          <p>亚冠</p>
          <p>03-09</p>
          <p>16:30截止</p>
        </div>
        <div class="right_div">
          <div @click="dianji_color" :class="{'fense':arr.indexOf(1)>=0}">
            <p>不莱梅</p>
            <p>主胜 2.01</p>
          </div>
          <div>
            <p>VS</p>
            <p>平 2.01</p>
          </div>
          <div>
            <p>沙尔克</p>
            <p>客胜 2.01</p>
          </div>
        </div>
      </li>
    </ul>
    <div class="zuqiu_btn">
      <i class="iocn_shanchu">
        <img src="../../assets/img/suoyou_shanchu.png">
      </i>
      <div class="btn_xinxi">
        <p>必须选择9场比赛</p>
        <p>页面信息奖金仅供参考，请以出票的固定奖金为准</p>
      </div>
      <button class="btn_anniu">确认</button>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      msg: "任选9场",
      list: [1, 2],
      arr: [1]
    };
  },
  methods: {
    dianji_color() {
      var arr = this.arr;
      if (arr.indexOf(1) < 0) {
        arr.push(1);
        this.arr = arr;
      } else {
        arr.splice(arr.indexOf(1), 1); //否则截取当前的下标的元素
        this.arr = arr;
      }
    }
  }
};
</script>
<style >
@import "../../assets/css/zuqiu.css";
</style>