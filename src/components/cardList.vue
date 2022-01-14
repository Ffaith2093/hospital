<!--
 * @Description: file information
 * @Author: Dzl
 * @Date: 2021-08-22 10:51:03
 * @LastEditors: Dzl
 * @LastEditTime: 2022-01-08 15:59:18
-->
<template>
  <div class="web">
    <p class="jpg">JPG.</p>
    <div class="card_content">
      <div
        :class="index % 2 == 0 ? 'card_list' : 'card_list card_list_active'"
        v-for="(item, index) in headList"
        :key="item.id"
      >
        <div class="round"></div>
        <p>TITLE</p>
        <div class="card_text">
          FILL IN YOUR CONTENT FILL IN YOUR CONTENT FILL IN YOUR CONTENT FILL IN
          YOUR CONTENT FILL IN YOUR CONTENT FILL
        </div>
        <div class="card_icon" @click="jump">
          <img
            style="width:28px;height:28px;"
            src="../assets/img/right_icon2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardList',
  components: {},
  data () {
    return {
      headList: [
        { name: 'Home', url: '' },
        { name: 'Introduction', url: '' },
        { name: 'Sectioin navigation', url: '' },
        { name: 'Booking', url: '' },
        { name: 'News', url: '' },
        { name: 'Announcement', url: '' }
      ]
    }
  },
  created () {},
  methods: {
    jump () {
      this.$message.warning('此页面暂未开放')
    }
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
.web {
  background: #b6b6b6;
  padding: 20px 0 200px 0;
}
.jpg {
  font-size: 50px;
  color: #fff;
  text-align: center;
  padding: 30px 0 10px 0;
}
.card_content {
  width: 1520px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.card_list {
  position: relative;
  padding: 20px 0;
  margin-top: 60px;
  width: 461px;
  color: #fff;
  background: #000;
}
.round {
  width: 65px;
  height: 65px;
  position: absolute;
  left: 15px;
  top: -30px;
  background: white;
  border-radius: 50%;
  border: 1px solid #707070;
}
.card_list_active {
  background: #be382d;
}
.card_list > p {
  width: 100%;
  font-size: 30px;
  text-align: center;
}
.card_text {
  width: 313px;
  text-indent: 40px;
  font-size: 20px;
  text-align: justify;
  margin: 20px auto;
}
.card_icon {
  display: flex;
  justify-content: center;
  cursor: pointer;
}
</style>
