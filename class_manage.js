function handlleclass(){
    console.log('handlleclass')
    

    // 请求课程管理接口 fetch是一个promise(异步调用)，fetch是浏览器原生的请求方法
    fetch('http://127.0.0.1:3500/class_manage')
        .then((response) => {
            console.log('response', response)
            // 把fetch返回的二进制流转换为json
            return response.json()
        }).then((json) => {
            // 这里才能拿到真正的json数据，接收第一步的then的数据
            console.log('json',json)

            if ( json.code === 0  ) {
                // alert(json.msg)
                // 目标：把返回的数据渲染到页面上
                // 1. 找到目标元素，[0]就是取数组的第一个元素，getElementsByClassName返回的是一个数组
                // 同类：getElementById、getElementByName、getElementByTagName
                // 2. 遍历数组，组装成html字符串
                // 3. 把html字符串放进目标元素
                const classList = document.getElementsByClassName('class-list')[0]
                console.log('classList',classList)
                let htmlStr = ''
                for (let index = 0; index < json.data.length; index++) {
                    htmlStr += `<dt>${json.data[index]}</dt>`
                }
                console.log(htmlStr);
                // 设置classList的内容为遍历取到的htmlStr数据
                classList.innerHTML = htmlStr
                classList.append('888888')
            } else {
                alert(json.msg)
            }
            
        })
        // .catch是为了捕获异常
        // code不等于0，比如必填参数缺失
        .catch(err => {
            console.log('Request Failed', err)
            alert('接口请求失败，请检查')
        }); 
    
    return
    }

    handlleclass()