<!--
 * @Description: file information
 * @Author: Dzl
 * @Date: 2021-08-22 10:51:03
 * @LastEditors: Dzl
 * @LastEditTime: 2021-11-11 08:39:10
-->
<template>
  <div class="web">
    <header>
      <div class="header-left"><span>A</span>NNING HOSPITAL</div>
      <div>
        <ul>
          <li v-for="item in headList" :key="item.name" @click="jump(item.url)">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
    jump (url) {
      if (!url) {
        this.$message.warning('此页面暂未开放')
      }
      this.$router.push(url)
    }
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
.web {
  background: #000000;
}
header {
  width: 1520px;
  height: 100px;
  margin: 0 auto;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-left {
    font-size: 20px;
  }
  .header-left > span {
    font-size: 24px;
  }
}
ul {
  display: flex;
}
li {
  font-size: 20px;
  padding: 0 20px;
  list-style: none;
  cursor: pointer;
}
</style>
