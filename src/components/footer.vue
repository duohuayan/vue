<template>
    <div class="footer">
        <van-tabbar
            v-model="active"
            active-color="#07c160"
        >
            <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/news">分类</van-tabbar-item>
            <van-tabbar-item icon="cart-o" to="/detail">购物车</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="user">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
    return {
        active: 0,
        icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
        }
    }
    }
    
}
</script>

<style scoped>
    
</style>