<!--
 * @Description: registerPage is used for information registeration
 * @Author: Dzl

-->
<template>
  <div>
    <Header />
    <div class="center">
      <div class="center_top">
        <div class="logo"><img style="width:121px;height:121px;" src="../assets/img/logo.png" alt=""></div>
        <p class="logo_title">ANNING</p>
        <div class="inputbox">
          <div><span class="box_text">The user name</span><input class="box" type="user"
              placeholder="Please enter your username" v-model="username"></div>
          <div><span class="box_text">Password</span><input class="box" type="password" placeholder="Please enter your password" v-model="password"></div>
          <div><span class="box_text">Confirm the password</span><input class="box" type="password"  placeholder="Please re-enter your password" v-model="repassword"></div>
          <div><span class="box_text">Name</span><input class="box" type="text" placeholder="Please enter your name" v-model="name"></div>
          <div><span class="box_text">Email</span><input class="box" type="email" placeholder="Please enter the Email" v-model="email"></div>
          <div><button class="button" @click="Enroll()">ENROLL</button></div>
        </div>
        
      </div>

    </div>
    <Footer />
  </div>
</template>
<script>
  import Header from "../components/header.vue";
  import Footer from "../components/footer.vue";
  export default {
    name: "Register",
    components: {
      Header,
      Footer,
    },
    data(){
      return{
        username:'',  //用户名
        password:'',    //第一遍输入的密码
        repassword:'',   //第二遍输入的密码
        email:'',         //邮箱
        name:'',         //姓名
      }
    },
    methods:{
      Enroll(){
        if(this.password!=this.repassword){
          window.console.log("前后输入的密码不一致，请重新输入")
        }
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
    position: relative;
    margin-top: 110px;
    width: 1161px;
    height: 726px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 44px;
  }

  .logo_title {
    font-size: 30px;
    font-weight: 600;
    color: #707070;
    text-align: center;
  }

  .logo {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }

  .inputbox {
    display: grid;
    justify-content: center;
    text-align: right;
    margin-right: 20%;
  }

  .box {
    width: 339px;
    height: 53px;
    border-radius: 20px;
    text-align: center;
    margin-top: 19px;
    border: 1px solid grey;
    outline:medium
  }
  /* 注册按钮 */
  .button {
    margin-top: 19px;
    background-color: #BE382D;
    width: 339px;
    line-height: 51px;
    border-radius: 20px;
    text-align: center;
    font-size: 20px;
    border: 1px solid transparent;
  }

 
 .box_text{
  margin-right: 20px; color: grey;
 }
</style>