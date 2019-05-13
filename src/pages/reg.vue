<template>
    <div class="reg">
        <div class="log">注册</div>
        <van-cell-group>
            <van-field
                v-model="username"
                required
                label="用户名"
                placeholder="请输入用户名"
            />

            <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
        </van-cell-group>
        <div class="denglu">注册</div>
    </div>
</template>
<script>
export default{
    data:{
        username:'',
        password:''
    }
}
</script>
<style scoped>
.log{width:100%;font:40px/60px "";color:#07c160;text-align:center;margin:100px 0 50px}
.denglu{height:50px;background:#f9f;color:#000;margin:10px 0;text-align:center;font:20px/50px ""}
</style>
