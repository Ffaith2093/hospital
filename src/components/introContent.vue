<template>
  <div class="intro_content">
    <div class="intro_center">
      <div class="intro_line"></div>
      <div class="intro_row">
        <div
          :class="
            index % 2 == 0 ? 'intro_list' : 'intro_list intro_list_active'
          "
          v-for="(item, index) in list"
          :key="item.id"
        >
          <div class="intro_box"></div>
          <p class="intro_list_name">FILL IN YOUR CONTENT</p>
          <div class="intro_list_content">
            <p>FILL IN YOUR CONTENT</p>
            <p>FILL IN YOUR CONTENT</p>
            <p>FILL IN YOUR CONTENT</p>
            <p>FILL IN YOUR CONTENT</p>
          </div>
        </div>
      </div>
      <div class="intro_img">
        <div class="intro_img_list">
          <div class="intro_img_list_top"><img src="" alt="JPG." /></div>
          <div class="intro_img_list_bot">
            <div>FILL IN YOUR CONTENT</div>
            <div @click="seeMore">
              <img
                style="width:47px;height:47px;"
                src="../assets/img/right_icon1.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="intro_img_list">
          <div class="intro_img_list_top"><img src="" alt="JPG." /></div>
          <div class="intro_img_list_bot">
            <div>FILL IN YOUR CONTENT</div>
            <div @click="seeMore">
              <img
                style="width:47px;height:47px;"
                src="../assets/img/right_icon1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IntroContent',
  components: {},
  data () {
    return {
      list: [{}, {}, {}, {}]
    }
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
<style lang="less" scoped>
.intro_center {
  position: relative;
  width: 1520px;
  margin: 0 auto;
}
.intro_line {
  height: 300px;
}
.intro_row {
  position: absolute;
  top: -130px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
}
.intro_list {
  background: #be382d;
  border-radius: 10px;
  padding: 30px 50px;
  font-size: 20px;
  color: #fff;
  .intro_box {
    width: 79px;
    height: 79px;
    margin: 0 auto;
    border-radius: 50%;
    background: #fff;
  }
  .intro_list_name {
    padding: 10px 0;
  }
  .intro_list_content {
    padding-bottom: 20px;
  }
}
.intro_list_active {
  background: #fff;
  color: #000;
  /* // box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3); */
  .intro_box {
    background: #be382d;
  }
}
.intro_img {
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
}
.intro_img > div {
  width: 733px;
}
.intro_img_list_top {
  width: 100%;
  height: 426px;
  background: #bbbbbb;
}
.intro_img_list_top > img {
  width: 100%;
  height: 100%;
}
.intro_img_list_bot {
  display: flex;
  font-size: 20px;
  font-weight: lighter;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #bbbbbb;
  justify-content: space-between;
}
.intro_img_list_bot > div {
  display: flex;
}
</style>
