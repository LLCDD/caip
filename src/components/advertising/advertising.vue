<template>
  <div class="div">
    <van-cell-group>
      <van-field v-model="pass" label="新密码" type="password" placeholder="请输入新密码" autosize/>
      <van-field v-model="pass1" label="重复新密码" type="password" placeholder="请重复输入新密码" autosize/>
      <van-field
        v-model="phone"
        label="手机号"
        type="number"
        :placeholder="data.user.mobile"
        autosize
        readonly
      />
      <van-field v-model="code" type="number" center clearable label="验证码" placeholder="请输入验证码">
        <van-button
          style="background:none;color:#e60013"
          slot="button"
          size="small"
          type
          @click="tap"
        >{{ timery }}</van-button>
      </van-field>
    </van-cell-group>
    <button class="button" @click="qingqu">确定修改</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pass: "",
      pass1: "",
      phone: "",
      code: "",
      timery: "发送验证码",
      data: {}
    };
  },
  methods: {
    tap() {
      this.http
        .post("/api/send_sms", { mobile: this.data.user.mobile })
        .then(res => {
          if (res.code == 200) {
            if (this.timery == "发送验证码") {
              var timer = null;
              var count = 60;
              timer = setInterval(() => {
                this.timery = --count + "s";
                if (count <= 0) {
                  this.timery = "发送验证码";
                }
              }, 1000);
            } else {
              this.$toasted.error("验证码发送").goAway(1000);
            }
          } else {
            this.$toasted.error(res.message).goAway(1000);
          }
        })
        .catch(res => {
          this.$toasted.error(res.message).goAway(1000);
        });
    },
    qingqu() {
      this.http
        .post("/api/password", {
          password: this.pass,
          password_confirmation: this.pass1,
          sms_code: this.code
        })
        .then(res => {
          if (res.code == 200) {
            this.pass = this.pass1 = this.code = "";
          } else {
            this.$toasted.error(res.message).goAway(1000);
          }
        })
        .catch(res => {
          this.$toasted.error(res.message).goAway(1000);
        });
    }
  },
  mounted() {
    this.http
      .get("/api/me")
      .then(res => {
        if (res.code == 200) {
          this.data = res.data;
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
.div {
  padding-top: 0.88rem;
  height: 100%;
  background: #f2f2f2;
}
.button {
  height: 0.8rem;
  width: 90%;
  background: #e60013;
  margin-left: 5%;
  color: #fff;
  border-radius: 0.5rem;
  margin-top: 0.4rem;
}
</style>
