<template>
  <ul class="contact-container">
      <li>
          <a href="tel:18700370115">
              <div class="icon">
                  <Icon type="tel" />
              </div>
              <span>{{ data.tel }}</span>
          </a>
          <div class="pop">
              <img src="" alt="">
          </div>
      </li>
      <li>
          <a :href="`tencent://message/?Menu=yes&uin=${ data.qq }&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">
              <div class="icon">
                  <Icon type="qq" />
              </div>
              <span>{{ data.qq }}</span>
          </a>
          <div class="pop">
              <img :src="data.qqQrCode" alt="">
          </div>
      </li>
      <li>
          <a href="">
              <div class="icon">
                  <Icon type="weixin" />
              </div>
              <span>{{ data.weixin }}</span>
          </a>
          <div class="pop">
              <img :src="data.weixinQrCode" alt="">
          </div>
      </li>
      <li>
          <a :href="`mailto:${data.mail}`">
              <div class="icon">
                  <Icon type="mail" />
              </div>
              <span>{{ data.mail }}</span>
          </a>
          <div class="pop">
              <img src="" alt="">
          </div>
      </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
    components:{
        Icon,
    },
    computed:mapState("setting",["data"]),
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container{
    list-style: none;
    padding: 20px;
    margin: 0;
    color: @gray;
    @itemHeight:30px;
    li{
        height: @itemHeight;
        line-height: 30px;
        margin:14px 0;
        position: relative;
        &:hover{
            .pop{
                transform: scaleY(1);
            }
        }
    }
    a{
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
    }
    .icon{
        font-size: 26px;
        width:20px;
    }
    .pop{
        position: absolute;
        left:-15px;
        bottom: @itemHeight + 6px;
        padding: 10px 15px;
        background-color: #fff;
        border-radius: 5px;
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: .3s;
        img{
            width:150;
            height: 150px;
        }
        &::after{
            content:"";
            position: absolute;
            left:50%;
            transform: translateX(-50%) rotate(45deg);
            width: 8px;
            height:8px;
            background-color:#fff;
            bottom:-4px;
        }
    }
}
</style>