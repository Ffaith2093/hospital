<!--
 * @Description: file information
 * @Author: Dzl
 * @Date: 2021-08-22 10:51:03
 * @LastEditors: Dzl
 * @LastEditTime: 2022-01-08 15:59:30
-->
<template>
  <div class="banner">
    <div class="banner_center">
      <div>
        <div class="logo">
          <img
            style="width:178px;height:178px;"
            src="../assets/img/logo.png"
            alt=""
          />
        </div>
        <p class="logo_title">ANNING</p>
      </div>
      <div class="banner_text">
        <div>FILL I N TYOUR CONTENT</div>
        <div style="margin:10px 0 0 70px;">
          <p>xkkan inanaiund buiandjdksndjak bibaiu</p>
          <p>ada a s uiiubuiui bu u b abu a ddad</p>
        </div>
      </div>
      <div class="see_more" @click="seeMore">See More</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  components: {},
  data () {
    return {}
  },
  created () {},
  methods: {
    seeMore () {
      this.$message.warning('此功能暂未开放')
    }
  },
  mounted () {}
}
</script>
<style scoped>
.banner {
  min-width: 1520px;
  background: url(../assets/img/banner.png) center no-repeat;
  background-size: 100% 100%;
  height: 993px;
  display: flex;
  justify-content: center;
}
.banner_center {
  margin-top: 110px;
}
.logo_title {
  font-size: 41px;
  font-weight: 600;
  color: #707070;
  text-align: center;
  /* // padding: 20px 0px; */
}
.logo {
  display: flex;
  justify-content: center;
}
.banner_text {
  margin-top: 100px;
  color: #fff;
  font-size: 35px;
}
.banner_text > div > p {
  font-size: 20px;
}
.see_more {
  width: 242px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  padding: 5px 0;
  border-radius: 10px;
  background: #be382d;
  margin: 50px auto;
  cursor: pointer;
  font-weight: lighter;
}
</style>
