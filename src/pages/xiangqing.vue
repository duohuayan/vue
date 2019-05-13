<template>
    <div class="xiangqing">
    <van-nav-bar
    title="商品详情"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    />
        <van-swipe :autoplay="3000" height="250">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image.value" class="swipe-item-img"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default{
    data(){
        return{
            list: [],
            images:[]
            
        }
    },
    methods: {
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
                let sArr = eval('('+ str +')');
                for(let i=0;i<sArr.length;i++){
                    this[arr].push({
                        id:sArr[i].cardId,
                        value:sArr[i].type,
                        // urls:sArr[i].url,
                        cont:sArr[i].cont,
                        price:sArr[i].price,
                        oldPrice:sArr[i].oldPrice
                    })
                }
            }
        })
    },
    onClickLeft() {
       this.$router.push("/detail");  
    }
  },
  mounted(){
//   this.request({arr:'list',type:'names',index:8});
  this.request({arr:'images',type:'urls',index:9});
  }
}
</script>
<style scoped>
.van-nav-bar{position:fixed;top:0;left:0;width:100%;z-index:999}
.van-swipe{margin-top:50px}
.swipe-item-img{width: 100%;}
</style>