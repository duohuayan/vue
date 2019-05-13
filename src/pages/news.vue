<template>
    <div class="news">
        <van-tabs>
            <van-tab v-for="(item,index) of list" :title=item.value :key="index">
            <component :is="item.src"></component>
            </van-tab> 
        </van-tabs>
    </div>
</template>
<script>
import newOne from '../components/newOne';
import newTwo from '../components/newTwo';
import newThree from '../components/newThree';
import new4 from '../components/news4';
import new5 from '../components/news5';
export default {
    data() {
        return {
            list:[]
            
        }
    },
    components:{
        newOne,newTwo,newThree,new4,new5
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
                            src:sArr[i].src
                        })
                    }
                }
            })
        }
    },
    mounted(){
        this.request({arr:'list',type:'biaoqian',index:1})
    }
                        
}
</script>
<style scoped>
.van-tabs >>> .van-tabs__line {
    background-color: #07c160;
}
</style>