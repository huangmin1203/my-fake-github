function handleclick(){
    console.log('handleclick')
    const inputNode = document.getElementsByClassName('submit')[0]
    //获取标签的内容
    const inputValue = inputNode.value
    //怎么识别并搜索
    const target = `./login.html`
    //输入内容后跳转页面
    window.open(target)
}
