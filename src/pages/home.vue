<template>
    <div class="home">
        <van-row class="home-nav">
            <van-col span="3">
                <a href="#" class="logo">LOGO</a>
            </van-col>
            <van-col span="18">
                <van-search
                    label="热搜"
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    shape="round"
                    >
                    </van-search>
            </van-col>
            <van-col span="3"><van-icon class="qr" name="qr" size="40px" color="#07c160" /></van-col>
        </van-row>
        <van-swipe :autoplay="3000" :height="250">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image.value" class="swipe-item-img"/>
            </van-swipe-item>
        </van-swipe>
        <van-row class="home-product">
            <van-col  class="home-product-col1" span="6" v-for="(item,index) in list" :key="index">
                <a href="#">
                <img :src="item.value">
                <span>描述{{item.id}}</span>
                </a>
            </van-col>
        </van-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value:'',
            images: [],
            list:[]
        }
    },
    methods:{
        request(options){
            let url = options.url
            let arr = options.arr
            let type = options.type
            let index = options.index
            url = url ? url : '/data/data.json'; //url做默认处理
            axios({
                url:url
            }).then(res => {
                if(res.status){
                    let str = JSON.stringify(res.data[index]);
                    let sArr = eval('('+ str +')')
                    for(let i=0;i<sArr.length;i++){
                        this[arr].push({
                            id:sArr[i].homeid,
                            value:sArr[i][type],
                            tile:sArr[i].title
                        })
                    }
                }
            })
        }
    },
    mounted(){
        this.request({arr:'list',type:'url',index:0});
        this.request({arr:'images',type:'urls',index:9});
    }
}
</script>

<style scoped>
.home-nav{background:#fff}
.logo{color:#07c160;font-weight:700;font-size:16px;text-align:center;line-height:20px}
.swipe-item-img{width: 100%;}
.home-product {
    background-color: white;
    margin-top:10px;
    padding: 0 10px;
}
.home-product-col1 {
    margin-top:10px;
    text-align: center;
}
.home-product-col1 img {
    width:60%;
}
.home-product-col1 span {
    display: block;
    color: #555;
    font-size: 12px;
}
</style>
