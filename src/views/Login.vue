<!--
 * @Description: loginPage
 * @Author: Dzl

-->
<template>
  <div>
    <Header />
    <div class="center">
      <div class="center_top">
        <div class="logo">
          <img
            style="width:178px;height:178px;"
            src="../assets/img/logo.png"
            alt=""
          />
        </div>
        <p class="logo_title">ANNING</p>
        <div class="input">
          <input
            class="box"
            placeholder="The acount name"
            v-model="username"
            type="user"
          />
          <input
            class="box"
            type="password"
            style="margin-top: 19px;"
            placeholder="Password"
            v-model="password"
          />
          <div class="checkbox">
            <input type="checkbox" style="height:18px;width:18px;" />
            <span>Remember the password</span>
          </div>
          <button class="button" @click="SignIn()">SIGN IN</button>
          <button class="button" @click="test()">ENROLL</button>
          <a href="" style="text-align: right;margin-top: 10px;"
            >Forget your password?</a
          >
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../components/header.vue'
import CardList from '../components/cardList.vue'
import Footer from '../components/footer.vue'
export default {
  name: 'Login',
  components: {
    Header,
    Footer,
    // eslint-disable-next-line vue/no-unused-components
    CardList
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    SignIn () {
      console.log(this.username + this.password)
    }
  }
}
</script>
<style lang="less" scoped>
.center {
  min-width: 1520px;
  background: url(../assets/img/banner.png) center no-repeat;
  background-size: 100% 100%;
  height: 993px;
  display: flex;
  justify-content: center;
}

.center_top {
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

.input {
  display: grid;
  margin-top: 35px;
}
/* 输入框 */
.box {
  position: relative;
  width: 339px;
  height: 53px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  text-align: center;
  border: 1px solid grey;
  outline: medium;
  font-size: 20px;
}
/* 勾选框，选择是否记住密码 */
.checkbox {
  margin-top: 10px;
}

.checkbox > span {
  font-size: 10px;
  margin-left: 25px;
  color: #adadad;
}

/* 按钮：登录和注册按钮 */
.button {
  margin-top: 19px;
  background-color: #be382d;
  border: 1px solid transparent;
  width: 339px;
  line-height: 51px;
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
}
</style>
