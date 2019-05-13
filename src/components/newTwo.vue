<template>
    <div class="news">
       <div class="news">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-cell 
            :title="val.value" 
            is-link 
            size="large" 
            :label="val.newCount" 
            v-for="(val,index) in list" :key="index"
          />
      </van-pull-refresh>   
    </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      isLoading: false,
      list:[]
    }
  },
  methods:{
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    },
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
                        newCount:sArr[i].newCount
                    })
                }
            }
        })
    }
  },
  mounted(){
  this.request({arr:'list',type:'newTitle',index:3})
  }
}
</script>

<style scoped>

</style>