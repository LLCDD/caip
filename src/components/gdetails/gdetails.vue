<template>
  <div class="div">
    <p class="p">{{ msg.description }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "56"
    };
  },
  mounted() {
    this.http
      .get("/api/activities/" + this.$route.params.id)
      .then(res => {
        if (res.code == 200) {
          console.log(res);
          this.msg = res.data.activities;
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
  overflow: scroll;
}
.p {
  padding: 0.3rem;
}
</style>
