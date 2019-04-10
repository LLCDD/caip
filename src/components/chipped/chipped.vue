<template>
  <div class="div">
    <div class="chirld">
      <p>
        <router-link replace tag="span" to="hemai">合买金额</router-link>
        <router-link replace tag="span" to="hemai1">合买人数</router-link>
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
.chirld {
  width: 100%;
  height: 1.1rem;
  background: #fff;
  position: fixed;
  top: 0.88rem;
}
.chirld > p {
  display: flex;
  justify-content: space-around;
  line-height: 1.1rem;
  color: #999999;
}
.chirld > p > span {
  height: 0.8rem;
  font-size: 0.3rem;
}
.router-link-active {
  color: #e60013;
  border-bottom: 2px solid #e60013;
}
</style>
