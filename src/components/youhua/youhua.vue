<template>
  <div class="div">
    <header>
      <router-link replace to="averagebonus">
        <span>奖金平均</span>
      </router-link>
      <router-link replace to="breakeven">
        <span>博热保本</span>
      </router-link>
      <router-link replace to="bonus">
        <span>奖金最高</span>
      </router-link>
    </header>
    <div class="center">
      <router-view></router-view>
    </div>
    <footer>
      <div>
        <p>
          计划购买： 买
          <input type="text" value="1">倍
        </p>
      </div>
      <div>
        <div>
          <p>投1注 20倍 共40元</p>
          <p>预计奖金: 222元</p>
        </div>
        <div>
          <button>合买</button>
          <button style="background:#f7b2b8">保存</button>
          <button>购买</button>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "奖金优化"
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
header {
  height: 1.1rem;
  background: #fff;
  display: flex;
  justify-content: space-around;
  line-height: 1.1rem;
  font-size: 0.3rem;
  color: #999;
}
header > a {
  color: #999;
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
  text-align: center;
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

/* footer > :first-child > :last-child {
  color: #fff;
  height: 0.4rem;
  width: 1.4rem;
  border-radius: 0.2rem;
  background: #e60013;
  line-height: 0.4rem;
  margin-top: 0.24rem;
  text-align: center;
} */
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
.router-link-active > span {
  color: #e60013;
  border-bottom: 2px solid #e60013;
}
</style>
