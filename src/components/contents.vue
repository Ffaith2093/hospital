<!--
 * @Description: file information
 * @Author: Dzl
 * @Date: 2021-08-22 10:51:03
 * @LastEditors: Dzl
 * @LastEditTime: 2021-11-11 08:38:56
-->
<template>
  <div class="web">
    <div class="them">
      <div>FILL IN YOUR CONTENT</div>
      <div class="them_line"></div>
    </div>
    <div class="them_content">
      <div class="them_list" v-for="item in 3" :key="item.id">
        <div class="them_list_title">FILL IN YOUR CONTENT</div>
        <div class="them_list_intro">FILL IN YOUR CONTENT</div>
        <div class="them_list_article">
          <div class="them_list_article_text">
            FILL IN YOUR CONTENT FILL IN YOUR CONTENT FILL IN YOUR CONTENT FILL
            IN YOUR CONTENT FILL IN YOUR CONTENT FILL IN YOUR CONTENT FILL IN
            YOUR CONTENT FILL IN YOUR CONTENT
          </div>
          <div class="them_list_article_name">
            <span>xxxxx</span>
            <span>|</span>
            <span>xxxxx</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  components: {},
  data () {
    return {}
  },
  created () {},
  methods: {
    jump (url) {
      if (!url) return
      this.$router.push(url)
    }
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
.web {
  width: 1520px;
  margin: 0 auto;
  padding: 100px 0;
}
.them {
  text-align: center;
  font-size: 40px;
  .them_line {
    width: 120px;
    height: 3px;
    border-radius: 999px;
    background: #be382d;
    margin: 20px auto;
  }
}
.them_content {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
}
.them_list {
  width: 456px;
}
.them_list_title {
  color: #be382d;
  font-size: 30px;
  font-weight: lighter;
}
.them_list_intro {
  color: #707070;
  font-size: 18px;
  padding-top: 10px;
}
.them_list_article {
  margin-top: 50px;
  font-size: 24px;
}
.them_list_article_text {
  text-align: justify;
  text-indent: 40px;
}
.them_list_article_name {
  margin-top: 20px;
  color: #101010;
  font-size: 18px;
  padding: 0 5px;
}
.them_list_article_name > span:nth-child(2) {
  margin: 0 5px;
}
</style>
