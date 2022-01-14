<template>
  <div>
    <div class="right">
      <div class="top">
        <div class="name"><img :src="img1Url" alt="">{{this.name}}</div>
        <button class="el-icon-right" type="button" @click="returnButton"></button>
      </div>
      <div class="infor_box">
        <img :src="img1Url" alt="" class="infor_header">
        <div class="infor_detail">
          <span style="font-size: 30px;">Grace</span>
          <input type="text" placeholder="Identify : Physician">
          <input type="text" placeholder="Gender:Male">
          <span style="padding-left: 40px;">Available time:
          </span>
          <div class="day_buttongroup">
            <button type="button" v-for="(day,index) in dayList" :key="index" @click="selectDay(day)" :style="{
                'border':day.type==true?'3px solid #BE382D':'3px solid #B7B7B7',
                
              }">{{day.day}}</button>
          </div>
          <div class="time_buttongroup">
            <button type="button" v-for="(time,index) in timeFrame" :key="index" @click="selectTime(time)"
              :style="{'background':time.type==true?'#BE382D':'','color':time.type==true?'white':'',}">{{time.time}}</button>
          </div>
          <div class="label_location">
            <div class="label"></div> The presentative has been booked
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "PersonalInforView",
    props: ['visible', 'name'],
    data() {
      return {
        selectType: false,
        img1Url: require("../assets/img/header.jpg"),
        img2Url: require("../assets/img/arrows.png"),
        defaultDepartmentName: 'Medical Department',
        departmentInfor: [
          'Surgical Department',
          'Medical Department',
          'Dental Department',
          'Ophthalmology Department',
          'Urology Department',
          'SDermatological Department',
          '',
          '',
          '',
          '',
          '',
          ''
        ],
        dayList: [
          { day: 'Mon', type: true },
          { day: 'Tue', type: false },
          { day: 'Wed', type: false },
          { day: 'Thur', type: false },
          { day: 'Fri', type: false },
          { day: 'Sat', type: false },
          { day: 'Sun', type: false }
        ],
        timeFrame: [    //时段
          { time: '08:00-09:00', type: true },
          { time: '09:00-10:00', type: true },
          { time: '10:00-11:00', type: true },
          { time: '11:00-12:00', type: false },
          { time: '14:00-15:00', type: false },
          { time: '15:00-16:00', type: false },
          { time: '16:00-17:00', type: false }
        ]
      };
    },
    methods: {
      selectDepartment(x) {
        this.defaultDepartmentName = x;
        console.log(x);
      },
      selectDay(y) {
        if (y.type == true) {
          y.type = false;
        } else {
          y.type = true;
        }
      },
      selectTime(z) {
        if (z.type == true) {
          z.type = false;
        } else {
          z.type = true;
        }
      },
      returnButton() {
        console.log('该按钮有效');
        this.$emit('update:visible', true);
        console.log(this.visible)
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
    width: 100%;
  }

  .top {
    position: relative;
    width: 1100px;
  }

  .name {
    margin-top: 20px;
    font-size: 32px;
    font-weight: bold;
    background: #EDEDED;
    width: 514px;
    line-height: 89px;
    margin-left: 40px;
    border-radius: 26px;
    display: flex;
  }

  .name>img {
    width: 49px;
    height: 49px;
    border-radius: 50%;
    border: 3px solid white;
    margin: 15px 20px 0 25px;
    box-shadow: -2px 3px #A1A1A1;
  }

  .el-icon-right {
    font-size: 50px;
    color: #DBDBDB;
    height: 79px;
    width: 79px;
    border-radius: 22px;
    position: absolute;
    top: 0;
    right: 0;
    background: transparent;
    border: 3px solid #DBDBDB;
  }

  .infor_header {
    width: 129px;
    height: 129px;
    border-radius: 50%;
  }

  .infor_box {
    margin: 40px 0 0 40px;
    display: flex;
  }

  .infor_detail {
    display: grid;
    margin-left: 40px;
  }

  .infor_detail>input {
    width: 826px;
    line-height: 90px;
    border-width: 0 0 2px 0;
    outline: medium;
    font-size: 25px;
    margin-top: 10px;
  }

  .infor_detail>span {
    margin-top: 30px;
    font-size: 25px;
  }

  .day_buttongroup>button {
    width: 111px;
    line-height: 49px;
    border: 3px;
    border-radius: 20px;
    text-align: center;
    font-size: 25px;
    background-color: transparent;
    margin: 30px 15px 0 0;
  }

  .time_buttongroup {
    margin-top: 20px;
    width: 826px;
  }

  .time_buttongroup>button {
    margin: 20px 25px 0 0;
    width: 168px;
    height: 31px;
    border-radius: 13px;
    border: 3px solid #BE382D;
    background: transparent;
    font-size: 20px;
  }

  .label_location {
    margin: 50px 0 0 58%;
    display: flex;
  }

  .label {
    width: 79px;
    height: 19px;
    border-radius: 10px;
    background-color: #BE382D;
    margin-right: 20px;
  }
</style>