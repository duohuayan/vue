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
                            id:sArr[i].id,
                            value:sArr[i][type],
                            tile:sArr[i].title
                        })
                    }
                }
            })
        }

this.request('arr','name',0)