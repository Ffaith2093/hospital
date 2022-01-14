<!--
 * @Description: this page is used to view message and chat
 * @Author: Dzl
-->
<template>
  <div>
    <Header />
    <div class="center">
      <div class="center_top">CHAT</div>
      <div class="content">
        <div class="info_aside">
          <ul class="list">
            <li
              v-for="(detailInfor, index) in recentInfor"
              :key="index"
              @click="changeColor(detailInfor.name)"
              :style="{
                background: detailInfor.name == talkingMan ? '#fff' : '#EDEDED',
                border: detailInfor.name == talkingMan ? '2px solid black' : ''
              }"
            >
              <div class="item_left">
                <div
                  class="state"
                  style="width: 12px;height: 12px;border-radius: 50%;background-color: #60E871;position: relative;left: 55px;top:4px"
                ></div>
                <img :src="img1Url" alt="" />
                <div class="infor">
                  {{ detailInfor.name }}
                  <div
                    style="font-weight: normal;margin-top: 5px;margin-left: 20px;"
                  >
                    {{ detailInfor.message }}
                  </div>
                </div>
              </div>
              <div class="date">
                {{ detailInfor.date }}
                <div class="messageNum">3</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="box">
          <div class="name">
            <img :src="img1Url" alt="" />
            <div style="margin-left: 20px;font-weight: bold;font-size: 30px;">
              {{ talkingMan }}
            </div>
          </div>
          <div class="chat_box">
            <div class="message_box">
              <div
                v-for="(messagedetail, index) in messageInfor"
                :class="[
                  messagedetail.messageType == 'other'
                    ? 'left_infor'
                    : 'right_infor'
                ]"
                :key="index"
              >
                <div
                  :class="[
                    messagedetail.messageType == 'other'
                      ? 'other_frame'
                      : 'mine_frame'
                  ]"
                >
                  {{ messagedetail.content }}
                  <div class="triangle"></div>
                </div>
              </div>
            </div>

            <div class="chat_input">
              <input
                type="text"
                style="width: 75%;height: 44px; border-color: transparent;margin-left: 5%;font-size: 25px;outline:medium"
                placeholder="Type Something..."
              />
              <div class="group">
                <button>
                  <img src="../assets/img/face_icon.png" alt="" />
                </button>
                <button><img src="../assets/img/link.png" alt="" /></button>
                <button>
                  <img
                    src="../assets/img/compass.png"
                    alt=""
                    style="
                  width: 44px;
                  height: 44px;
                  background-color: #BE382D;
                  border-radius: 50%;
                  transform:rotate(150deg);
                  -ms-transform:rotate(150deg);
                  -moz-transform:rotate(150deg);
                  -webkit-transform:rotate(150deg);
                  -o-transform:rotate(150deg);"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
export default {
  name: 'ChatView',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      img1Url: require('../assets/img/header.jpg'),
      defaultValue: false,
      talkingMan: 'JAY',
      realTimeMessage: '',
      recentInfor: [
        // 最近信息
        { name: 'JAY', date: '14 Sep', message: 'See you downstairs.' },
        { name: 'Tom', date: '1 Sep', message: 'See you downstairs.' },
        { name: 'Jack', date: '15 Sep', message: 'See you downstairs.' },
        { name: 'Dom', date: '26 Sep', message: 'See you downstairs.' },
        { name: 'Hommy', date: '26 Sep', message: 'See you downstairs.' },
        { name: 'Book', date: '26 Sep', message: 'See you downstairs.' },
        { name: 'Sunny', date: '26 Sep', message: 'See you downstairs.' },
        { name: 'Atut', date: '26 Sep', message: 'See you downstairs.' },
        { name: 'Rainy', date: '26 Sep', message: 'See you downstairs.' }
      ],
      messageInfor: [
        // 聊天内容
        { messageType: 'other', content: 'What are you doing today?' },
        { messageType: 'mine', content: 'Stygying' },
        { messageType: 'mine', content: 'What about you?' },
        { messageType: 'other', content: 'not bad!' },
        {
          messageType: 'other',
          content: 'I want to walking,do you want to join me?'
        },
        { messageType: 'mine', content: 'OK,Wait for me to change my shoes' },
        {
          messageType: 'mine',
          content:
            'After the walk,I want to go to the supermarket.Do you want to go shopping together?'
        },
        { messageType: 'other', content: 'Fine,I just used up my paper' },
        { messageType: 'mine', content: 'See you downstairs.' }
      ]
    }
  },
  methods: {
    changeColor (man) {
      this.talkingMan = man
    }
  }
}
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

.info_aside {
  height: 700px;
}

/* .list {
    list-style: none;

  } */
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

.list > li {
  width: 381px;
  height: 89px;
  background-color: #ededed;
  margin-top: 20px;
  border-radius: 26px;
  display: flex;
  justify-content: space-between;
  position: relative;
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
  width: 30px;
  /* 横向滚动条 宽度 */
  height: 40px;
  /* 纵向滚动条 高度 */
  background: transparent;
  border-radius: 10px;
}

/* 3,外层轨道 */
::-webkit-scrollbar-track {
  /* background: red; */
  border-radius: 10px;
}

/* 4.内层轨道，它会覆盖外层轨道的样式。 */
::-webkit-scrollbar-track-piece {
  width: 4px;
  background-color: #ededed;
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

.item_left {
  padding-top: 15px;
  padding-left: 15px;
  display: flex;
}

.item_left > img {
  /* overflow: hidden; */
  border-radius: 50%;
  width: 55px;
  height: 55px;
  background-color: #fff;
  border: 3px solid #fff;
  box-shadow: -2px 3px #a1a1a1;
}

.infor {
  margin-top: 5px;
  margin-left: 20px;
  font-weight: bold;
}

.date {
  padding-top: 12px;
  padding-right: 15px;
  font-size: 17px;
  position: relative;
}

.messageNum {
  position: absolute;
  margin-left: 35%;
  margin-top: 7px;
  height: 22px;
  width: 22px;
  background-color: #df4242;
  border-radius: 50%;
  text-align: center;
  color: #fff;
}

.box {
  margin-left: 40px;
  margin-top: 20px;
}

.name {
  width: 1060px;
  line-height: 89px;
  background-color: #ededed;
  border-radius: 26px;
  display: flex;
}

.name > img {
  margin-top: 15px;
  margin-left: 20px;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  background-color: #fff;
  border: 3px solid #fff;
  box-shadow: -2px 2px #a1a1a1;
}

.chat_box {
  padding-right: 20px;
  margin-top: 20px;
  width: 1040px;
  height: 593px;
  border-radius: 26px;
  background-color: #ededed;
  position: relative;
}

.message_box {
  height: 80%;
  background-color: transparent;
  overflow: auto;
  overflow-x: hidden;
}

.left_infor {
  /* padding-top: 50px; */
  padding-left: 4%;
  width: 100%;
  left: 3%;
}

.right_infor {
  /* display: flex;
    flex: 2; */
  margin-top: 20px;
  font-size: 30px;
  position: relative;
  text-align: right;
  padding-right: 2%;
}

.other_frame {
  max-width: 616px;
  /* height: 109px; */
  background-color: #fff;
  border-radius: 15px 15px 15px 0px;
  position: relative;
  margin-top: 40px;
  padding: 10px 30px 10px 30px;
  display: inline-block !important;
  display: inline;
  font-size: 20px;
}

.mine_frame {
  max-width: 500px;
  padding: 10px 30px 10px 30px;
  display: inline-block !important;
  display: inline;
  position: relative;
  text-align: left;
  background-color: #be382d;
  border-radius: 15px 15px 0 15px;
  font-size: 20px;
}

.other_frame .triangle {
  /* 气泡三角*/
  border-style: solid dashed dashed;
  border-width: 15px 15px 0px 10px;
  width: 0px;
  height: 0px;
  position: absolute;
  border-color: transparent #fff transparent transparent;
  left: -23px;
  bottom: 0px;
}

.mine_frame .triangle {
  /* 气泡三角*/
  border-style: solid dashed dashed;
  border-width: 15px 15px 0px 10px;
  width: 0px;
  height: 0px;
  position: absolute;
  border-color: transparent transparent transparent #be382d;
  right: -23px;
  bottom: 0px;
}

.chat_input {
  position: absolute;
  left: 3%;
  bottom: 25px;
  width: 987px;
  height: 80px;
  background-color: #fff;
  border-radius: 30px;
  display: flex;
  align-items: center;
}
.group > button {
  width: 42px;
  height: 44px;
  border-radius: 50%;
  border-color: #fff;
  margin: 0 10px 0 10px;
}
.group > button > img {
  width: 42px;
  height: 44px;
}
</style>
