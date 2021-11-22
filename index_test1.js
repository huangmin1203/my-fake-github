// 文本框搜索逻辑，鼠标点击事件
function handleSearch() {
    console.log('handleSearch')
    //获取标签
    const inputNode = document.getElementsByClassName('search-input')[0]
    //获取标签的内容
    const inputValue = inputNode.value
    //怎么识别并搜索
    const target = `https://cn.bing.com/search?q=${inputValue}`
    //输入内容后跳转页面
    window.open(target)
}

// 搜索框键盘按下事件
function handleInputKeydown() {
    console.log('handleInputKeydown', window.event.keyCode);
    if (window.event.keyCode === 13) {
        handleSearch()
    }

}


// 展开
function showExtendInfo() {
    const extendinfobox = document.getElementsByClassName('extend-info')[0]
    const children = extendinfobox.children
    const childrenLength = children.length

    extendinfobox.style.height = `${childrenLength*20}px`
}

// 隐藏


function hideExtendInfo() {
    const extendinfobox = document.getElementsByClassName('extend-info')[0]
    extendinfobox.style.height = 0
}



// 更多展开
function showMoreInfo() {
    const moreinfobox = document.getElementsByClassName('more-info')[0]
    const children = moreinfobox.children
    const childrenLength = children.length

    moreinfobox.style.height = `${childrenLength*20}px`
}

// 更多隐藏


function hideMoreInfo() {
    const moreinfobox = document.getElementsByClassName('more-info')[0]
    moreinfobox.style.height = 0
}


// // 背景图片列表
const backgroundList = [
    `https://img0.baidu.com/it/u=3015107692,3301923892&fm=26&fmt=auto`,
    `https://img1.baidu.com/it/u=757606031,646429214&fm=26&fmt=auto`,
    `https://img1.baidu.com/it/u=3465066951,577846474&fm=26&fmt=auto`,
    `https://img2.baidu.com/it/u=64944061,1344734849&fm=26&fmt=auto`,
    `https://img1.baidu.com/it/u=2201558941,4109635095&fm=26&fmt=auto`,
    `https://img1.baidu.com/it/u=1322800825,931757870&fm=26&fmt=auto`
]


//实现点击时语言样式切换
function handletoggle(type) {
    console.log(type);
    const toggleNodeLeft = document.getElementsByClassName('language-text-left')[0]
    const toggleNodeRight = document.getElementsByClassName('language-text-right')[0]
    if (type === 'left') {
        toggleNodeRight.style.backgroundColor = `rgba(255, 255, 255, 0.5)`
        toggleNodeLeft.style.backgroundColor = `#fff`
    } else {
        toggleNodeLeft.style.backgroundColor = `rgba(255, 255, 255, 0.5)`
        toggleNodeRight.style.backgroundColor = `#fff`
    }


}

// 当前背景图索引（第几个）
let currentBgIndex = 0

//实现点击时切换框左右切换
function handletoggleBg(type) {
    console.log(type);
    const leftToggle = document.getElementsByClassName('left-toggle')[0]
    const rightToggle = document.getElementsByClassName('right-toggle')[0]
    const container = document.getElementsByClassName('container')[0]


    if (type === 'left') {
        if (currentBgIndex - 1 < 0) {
            currentBgIndex = 0
        } else {
            currentBgIndex -= 1
            // leftToggle 
        }

    } else {
        // console.log(`ba`, backgroundList.length - 1)
        if (currentBgIndex + 1 > backgroundList.length - 1) {
            currentBgIndex = backgroundList.length - 1
        } else {
            currentBgIndex += 1
        }

    }
// opacity设置透明度
    console.log(currentBgIndex)
    if (currentBgIndex === 0) {
        leftToggle.style.opacity = '0.7'
    }
    else{
        leftToggle.style.opacity = '1'
    }
    if (currentBgIndex === backgroundList.length - 1) {
        rightToggle.style.opacity = '0.7'
    }
    else{
        rightToggle.style.opacity = '1'
    }
    container.style.backgroundImage = `url(${backgroundList[currentBgIndex]})`
}