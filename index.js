// es6变量/常量声明： const 定义常量 let定义变量 替换es5中的var

// 处理搜索逻辑
function handleSearch() {
    console.log('handleSearch')

    // 获取input框中的值

    // 获取标签
    const inputNode = document.getElementsByClassName('search-input')[0]
    // 获取input框中的值
    const inputValue = inputNode.value
    
    // 字符串拼接
    const target = `https://www.baidu.com/s?wd=${inputValue}`

    // 跳转页面
    // window.location.href = target
    window.open(target)
}

// 搜索框键盘按下事件
function handleInputKeydown() {
    console.log('handleInputKeydown', window.event.keyCode);
    // 判断当前按下的键code 13-回车
    if ( window.event.keyCode === 13 ) {
        handleSearch()
    }
}

// 展示扩展信息
function showExtendInfo() {
    const extendInfoBox = document.getElementsByClassName('extend-info')[0]
    // extendInfoBox.style.display = 'block'


    // 获取元素的子元素数组
    const children = extendInfoBox.children
    const childrenLength = children.length
    
    
    // js修改样式属性
    extendInfoBox.style.height = `${childrenLength*30}px`
}

// 隐藏扩展信息
function hideExtendInfo() {
    const extendInfoBox = document.getElementsByClassName('extend-info')[0]
    // extendInfoBox.style.display = 'none'
    extendInfoBox.style.height = 0
}

// 页面所有资源加载完毕之后再执行函数体内的逻辑
window.onload = function() {
    
}