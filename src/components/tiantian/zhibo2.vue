<template>
  <div class="zhibo_guanzhu_box bscroll">
    <ul class="guanzhu_bisai">
      <li v-for="(item,index) in list.record.data" :key="index">
        <div class="guanzhu_bg">
          <span>{{ list.record.data[index].num }} {{ list.record.data[index].time.slice(0,5) }} {{ list.record.data[index].l_cn_abbr }}</span>
          <span
            class="bisai"
            style="left:55%"
            v-if="list.record.data[index].status == 'Playing'"
          >比赛中</span>
          <span
            v-if="list.record.data[index].status == 'Selling'"
            class="bisai"
            style="left:55%"
          >未开始</span>
          <span v-if="list.record.data[index].status == 'Played'" class="bisai" style="left:55%">已结束</span>
          <i class="shoucang">
            <img
              @click="guahzu(list.record.data[index].id)"
              src="../../assets/img/shoucang_zhong.png"
              alt
            >
          </i>
          <div class="guanzhu_pk">
            <span>{{ list.record.data[index].h_cn_abbr }}</span>
            <span>vs</span>
            <span>{{ list.record.data[index].a_cn_abbr }}</span>
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
      msg: "345",
      list: {}
    };
  },
  mounted() {
    this.football();
  },
  methods: {
    guahzu(id) {
      this.http
        .post("/api/subscribe", { id: id })
        .then(res => {
          if (res.code == 200) {
            console.log(res);
            this.football();
            this.$toasted.success(res.message).goAway(1000);
          } else {
            this.$toasted.error(res.message).goAway(1000);
          }
        })
        .catch(res => {
          this.$toasted.error(res.message).goAway(1000);
        });
    },
    football() {
      this.http
        .get("/api/live?type=football&limit=500")
        .then(res => {
          if (res.code == 200) {
            this.list = res.data;
          } else {
            this.$toasted.error(res.message).goAway(1000);
          }
        })
        .catch(res => {
          this.$toasted.error(res.message).goAway(1000);
        });
    }
  }
};
</script>

<style scoped>
.bscroll {
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}
</style>