<template>
    <div class="detail">
    <van-nav-bar
    title="购物车"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    />
        <div class="car">
            <div class="box" v-for="val in imageURL"
                    :key="val.id">
                <input type="checkbox" class="fuxuan">
                <div class="cards">
                
                    <van-card
                    tag="热卖"
                    :price="val.price"
                    :desc="val.cont"  
                    :title="val.value"
                    :thumb="val.urls"
                    :origin-price="val.oldPrice"                      
                    >
                    <div slot="footer">
                        <van-stepper v-model="val.num" />
                        <router-link to="/xiangqing">商品详情</router-link>
                        <van-button size="mini" @click="del($event)">删除</van-button>
                    </div>
                    </van-card> 
                              
                </div>
            </div>
        </div>
        
        <van-submit-bar
            :price="3050"
            button-text="提交订单"
            @submit="onSubmit"
            >
            <van-checkbox v-model="checked">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>
<script>
export default{
    data(){
        return{
            checked:0,
            imageURL:[],
            list: ['a', 'b', 'c'],
            result: [],
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
                        urls:sArr[i].url,
                        cont:sArr[i].cont,
                        price:sArr[i].price,
                        oldPrice:sArr[i].oldPrice
                    })
                }
            }
        })
    },
    cptSum(){

    },
    onClickLeft() {
       this.$router.push("/home");  
    },
    onSubmit(){
        alert('提交成功')
    },
    del(e){
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
    },
    get (id,index){
        // console.log(id,index)
    }
  },
  mounted(){
  this.request({arr:'imageURL',type:'names',index:8})
  }
}
</script>
<style scoped>
.van-nav-bar{position:fixed;top:0;left:0;width:100%;z-index:999}
.car{margin-top:46px;margin-bottom:50px}
.box{position:relative}
.fuxuan{display:inline-block;position: absolute;;z-index:100;top:30px;left:15px;background:#f00}
.cars{display:inline-block;}
.van-card{padding-left:30px}
</style>