function handleskip(){
    console.log('handleskip')
    // const skipText = document.getElementsByClassName('reg-bar')[0]


    var opts = {
        method:"POST"   //请求方法
    }
    // 请求登录接口 fetch是一个promise(异步调用)
    fetch('http://127.0.0.1:3550/login',opts)
        .then((response) => {
            console.log('response', response)
            // 把fetch返回的二进制流转换为json
            return response.json()
        }).then((json) => {
            // 这里才能拿到真正的json数据
            console.log('json',json)

            if ( json.code === 0  ) {
                alert(json.msg)
                const target = `./class_manage.html`
                window.open(target)
            } else {
                alert(json.msg)
            }
            
        })
        .catch(err => {
            console.log('Request Failed', err)
            alert('接口请求失败，请检查')
        }); 
    
    
    
    return
    
    // const skipValue = skipText.value 
    
}

function handleskipres(){
    console.log('handleskipres')

    
    fetch('http://127.0.0.1:2000/res')
    .then((res)=>{
            const resdata = res.json();
            console.log(0,resdata);
            return resdata; 
        }).then((json)=>{ 
            console.log('json',json)
            if (json.code ===0) {
                const target = 'http://zhihu.com'
                window.open(target)
            } 
            else{
                alert(json.msg)
            }
        })
        .catch(err=>{
            console.log('请求出错请检查',err);    
            alert('请求出错请检查')
        });
            
    }
