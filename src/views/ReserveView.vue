<template>
  <div>
    <Header />
    <div class="center">
      <div class="center_top" v-if="visible==true">RESERVE</div>
      <div class="center_top" v-else>RESERVE-Personal Information</div>
      <div class="content">
        <div class="left">
          <ul class="list">
            <li v-for="(name,index) in departmentInfor" :key="index" @click="selectDepartment(name)"
              :style="{'border':name==defaultDepartmentName?'3px solid #BE382D':'3px solid #B7B7B7'}"
              >{{name}}</li>
          </ul>
        </div>
        <div class="right" v-if="visible==true">
          <button  v-for="(name,index) in list" :key="index"
            @click="toSecondURL(name)">
            <img :src="img1Url" alt="" class="avatar">
            <div style="margin:28px 0">{{name}}</div>
          </button>
        </div>
        <PersonalInfor v-else  :visible.sync="visible" :name="name"></PersonalInfor>
       
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import PersonalInfor from "./PersonalInforView.vue";
export default {
    name: "ReserveView",
    components: {
      Header,
      Footer,
      PersonalInfor
    },
    data() {
      return {
        name:'',
        visible:true,
        img1Url: require("../assets/img/header.jpg"),
        defaultDepartmentName: 'Medical Department',
        departmentInfor: [
          'Surgical Department',
          'Medical Department',
          'Dental Department',
          'Ophthalmology Department',
          'Urology Department',
          'SDermatological Department',
          '',
          ''
        ],
        list: [
          'Dr John',
          'Dr John',
          'Dr John',
          'Dr John',
          'Dr Tom',
        ]
      };
    },
    methods: {
      selectDepartment(x) {
        this.defaultDepartmentName = x;
        console.log(x);
      },
      toFirstURL() {
        this.visible=true;
      },
      toSecondURL(y){
        this.visible=false;
        this.name=y;
      }
    }
  };
</script>
<style lang="less" scoped>
  .center {
    margin-top: 30px;
    text-align: left;
    margin-left: 10%;
    margin-bottom: 200px;
  }

  .center_top {
    font-size: 40px;
    font-weight: bold;
  }

  .content {
    display: flex;
    margin-top: 20px;
  }

  .left {
    height: 700px;
  }

  .list {
    margin-right: 30px;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    /*三角箭头的颜色*/
    scrollbar-arrow-color: #bec5ca;
    /*立体滚动条的颜色*/
    scrollbar-face-color: #bec5ca;
    /*立体滚动条亮边的颜色*/
    scrollbar-3dlight-color: #bec5ca;
    /*滚动条空白部分的颜色*/
    scrollbar-highlight-color: #bec5ca;
    /*立体滚动条阴影的颜色*/
    scrollbar-shadow-color: #bec5ca;
    /*立体滚动条强阴影的颜色*/
    scrollbar-darkshadow-color: #bec5ca;
    /*立体滚动条背景颜色*/
    scrollbar-track-color: #e5e7eb;
    /*滚动条的基本颜色*/
    scrollbar-base-color: #e5e7eb;
  }

  ::-webkit-scrollbar {
    margin-top: 30px;
    width: 15px;
    /* 纵向滚动条 宽度 */
    height: 15px;
    /* 整体背景 */
    border-radius: 10px;
    /* 整体 圆角 */
  }

  ::-webkit-scrollbar-button {
    height: 40px;
    /* 纵向滚动条 高度 */
    background: transparent;
    border-radius: 10px;
  }

  /* 3,外层轨道 */
  ::-webkit-scrollbar-track {
    /* background: red; */
    height: 500px;
    background: chartreuse;
    border-radius: 100px;
  }

  /* 4.内层轨道，它会覆盖外层轨道的样式。 */
  ::-webkit-scrollbar-track-piece {
    width: 4px;
    background-color: #EDEDED;
    margin: 0 -2px 0;
    border-radius: 10px;
  }

  /* 5,滑块 */
  ::-webkit-scrollbar-thumb {
    background: #bec5ca;
    min-height: 50px;
    min-width: 50px;
    border-radius: 10px;
  }

  /* 纵向滑块悬浮 */
  ::-webkit-scrollbar-thumb:vertical:hover {
    background: black;
  }

  .list>li {
    line-height: 89px;
    width: 381px;
    font-size: 23px;
    border-radius: 26px;
    text-align: center;
    margin-top: 20px;
  }

  .right {
    width: 1200px;
  }

  .right>button {
    margin: 20px 0 0 20px;
    font-size: 32px;
    font-weight: bold;
    background: #EDEDED;
    border: 2px solid #EDEDED;
    width: 514px;
    height: 89px;
    border-radius: 26px;
    display: inline-flex; text-align: left;
  }

  .avatar {
    width: 49px;
    height: 49px;
    border-radius: 50%;
    border: 3px solid white;
    margin: 16px 20px 0 25px;
    box-shadow: -2px 3px #A1A1A1;
  }
</style>