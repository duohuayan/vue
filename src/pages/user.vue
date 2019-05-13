<template>
    <div class="user">
        <van-nav-bar
            title="我的基本信息"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="card">
          <van-row>
            <van-col span="4">图片</van-col>
            <van-col span="16">
            <p>会员号：</p>
            <p>昵称：</p>
            </van-col>
            其他
            <van-col span="4">
            
            </van-col>
          </van-row>
          <van-row class="row1">
            <van-col span="8">
            <router-link class="t1" icon="home-o" to="detail" >购物车</router-link>
            </van-col>
            <van-col span="8"><router-link class="t1" icon="star-o" to="/home">收藏</router-link></van-col>
            <van-col span="8"><router-link class="t1" icon="search" to="/home">查询</router-link></van-col>
          </van-row>
        </div>
        <div class="dingdan">
            <van-cell-group title="订单">
            <van-cell title="订单1" value="裙子1" />
            <van-cell title="订单2" value="裙子2" />
            <van-cell title="订单3" value="裙子3" />
            </van-cell-group>
            <van-cell-group title="分组2">
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" />
            </van-cell-group>
            <van-cell-group title="分组3">
            <van-cell title="单元格22" value="内容" />
            <van-cell title="单元格22" value="内容" />
            <van-cell title="单元格22" value="内容" />
            </van-cell-group>
     
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    }
  }
}
</script>
<style scoped>
.van-nav-bar{position:fixed;top:0;width:100%}
.card{text-align:center;height:160px;background:#07c160;position:relative;top:46px;}
.row1{padding:5px 0;background:#9ff;position:absolute;bottom:0;width:100%;}
.row1 .t1{color:#f80;}
.dingdan{position:relative;top:50px}
.van-cell{background:#fff}
</style>