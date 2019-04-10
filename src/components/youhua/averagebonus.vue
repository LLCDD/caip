<template>
  <div class="divc">
    <table>
      <tr>
        <th>过关</th>
        <th>单注组合</th>
        <th>注数分布</th>
        <th>预测奖金</th>
      </tr>
      <tr v-for="(item, index) in list" :key="index">
        <td>
          <van-checkbox-group v-model="result">
            <van-checkbox :name="item" checked-color="#e60013">2串1</van-checkbox>
          </van-checkbox-group>
        </td>
        <td style="color:#999">塞尔维亚 | 主胜(1.24)
          <br>塞尔维亚 | 主胜(1.24)
        </td>
        <td>
          <p>1</p>
        </td>
        <td style="color:#e60013">37.55</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "averagebonus",
      list: ["a", "b", "c"],
      result: ["a"]
    };
  }
};
</script>
<style scoped>
.divc {
  margin-top: 0.1rem;
}
.divc > table {
  width: 100%;
  text-align: center;
  background: #fff;
}
table td,
table th {
  padding: 15px 5px;
  border: 1px solid #f2f2f2;
}
table td > p {
  height: 100%;
  width: 100%;
  border-radius: 0.1rem;
  color: #999999;
  border: 1px solid #999;
}
</style>
