<template>
  <div class="web">
    <footer>
      <div class="footer_content">
        <div class="footer_logo">
          <div class="logo">
            <img
              style="width:145px;height:145px;"
              src="../assets/img/logo.png"
              alt=""
            />
          </div>
          <p class="logo_title">ANNING</p>
          <div class="logo_info">
            FILL IN YOUR CONTENT FILL IN YOUR CONTENT FILL IN YOUR CONTENT FILL
            IN YOUR CONTENT FILL IN YOUR CONTENT FILL IN YOUR CONTENT FILL IN
            YOUR CONTENT FILL IN YOUR CONTENT
          </div>
        </div>
        <div class="footer_info">
          <div class="footer_p">MORE INFORMATION</div>
          <div class="info_content">
            <div class="info_list">
              <div>
                <img
                  style="width:54px;height:54px;"
                  src="../assets/img/address_icon.png"
                  alt=""
                />
              </div>
              <div>Street Name&Number,<br />Town,Postcode/Zip</div>
            </div>
            <div class="info_list">
              <div>
                <img
                  style="width:54px;height:54px;"
                  src="../assets/img/qq_icon.png"
                  alt=""
                />
              </div>
              <div>+00（123）xxxx xxxx</div>
            </div>
            <div class="info_list">
              <div>
                <img
                  style="width:48px;height:48px;"
                  src="../assets/img/phone_icon.png"
                  alt=""
                />
              </div>
              <div>+00（123）xxxx xxxx</div>
            </div>
            <div class="info_list" style="border:none">
              <div style="padding:0 5px;">
                <img
                  style="width:40px;height:40px;"
                  src="../assets/img/email_icon.png"
                  alt=""
                />
              </div>

              <div>1563421665@xx.com</div>
            </div>
          </div>
        </div>
        <div class="footer_concat">
          <div class="footer_p">MORE INFORMATION</div>
          <div class="info_content">
            <div class="info_list" style="border:none">
              <div>FILL IN YOUR CONTENT</div>
            </div>
            <div class="info_list">
              <div>FILL IN YOUR CONTENT</div>
            </div>
            <div class="info_list">
              <div>FILL IN YOUR CONTENT</div>
            </div>
            <div class="info_list" style="border:none">
              <div>FILL IN YOUR CONTENT</div>
            </div>
          </div>
        </div>
        <div class="footer_right">
          <div class="footer_p">MORE INFORMATION</div>
          <div class="info_content">
            <div class="info_list">
              <div
                style="text-indent: 20px;text-align: justify;line-height: 25px;"
              >
                FILL IN YOUR CONTENT FILL IN YOUR CONTENT FILL IN YOUR CONTENT
                FILL IN YOUR CONTENT FILL IN YOUR CONTENT FILL IN YOUR
              </div>
              <div>FILL IN YOUR CONTENT</div>
            </div>
            <div class="info_list" style="border:none">
              <div
                style="text-indent: 20px;text-align: justify;line-height: 25px;"
              >
                FILL IN YOUR CONTENT FILL IN YOUR CONTENT FILL IN YOUR CONTENT
                FILL IN YOUR CONTENT FILL IN YOUR CONTENT FILL IN YOUR
              </div>
              <div>FILL IN YOUR CONTENT</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="rights">
      <p>Copyright©2021-All Rights Reserved-Domain Name</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
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
  background: #27282b;
}
footer {
  width: 1520px;
  margin: 0 auto;
  .footer_content {
    display: flex;
    padding: 150px 0 185px 0;
    color: #bebebe;
    justify-content: space-between;
    .footer_logo {
      width: 381px;
      .logo {
        display: flex;
        justify-content: center;
      }
      .logo_title {
        font-size: 41px;
        font-weight: 600;
        color: #c8c8c9;
        text-align: center;
        padding: 20px 0px;
      }
      .logo_info {
        font-size: 17px;
        line-height: 25px;
        text-indent: 20px;
      }
    }
    .footer_info {
      padding-top: 100px;
      .info_content {
        margin-top: 20px;
        .info_list {
          display: flex;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #707070;
        }
        .info_list > div:last-child {
          margin-left: 10px;
          font-size: 20px;
        }
      }
    }
    .footer_concat {
      padding-top: 100px;
      .info_content {
        margin-top: 20px;
        .info_list {
          display: flex;
          align-items: center;
          padding: 30px 0;
          border-bottom: 1px solid #707070;
        }
        .info_list > div:last-child {
          margin-left: 10px;
          font-size: 20px;
          font-weight: lighter;
          color: #be382d;
        }
      }
    }
    .footer_right {
      padding-top: 100px;
      width: 345px;
      .info_content {
        margin-top: 20px;
        .info_list {
          padding: 5px 0 20px 0;
          border-bottom: 1px solid #707070;
        }
        .info_list > div:last-child {
          margin-top: 20px;
          font-size: 20px;
          font-weight: lighter;
          color: #be382d;
        }
      }
    }
  }
}
.rights {
  color: #b7b7b7;
  font-size: 18px;
  background: #000000;
  p {
    width: 1520px;
    margin: 0 auto;
    padding: 30px 0 50px 0;
  }
}
.footer_p {
  color: #fff;
  font-size: 25px;
}
</style>
