###### 第一步：div标签怎么布局
- 分成几大模块，并对每个模块命名，引用css样式地址+js的地址
- 对模块进行弹性布局以及垂直水平居中显示
- 对某一模块的多重子元素使用一个样式时添加父盒子
- 使用内边距padding 、外边距margin、边框border对模块内容进行微调
- 添加下拉框时，确定哪个元素下添加，并添加监听事件
- 注意：弹性布局默认将子元素自适应摆成一行
- 弹性布局的


``` html
<div class='header'>
        <div class='header-left'>
            <div class='logo'></div>
            <img class='logo_img'
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2F006xyoBFly4gug5i3r33dj60km08q74e02.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636988837&t=590ce511c7fd5d5bf0bf15e79afaa634">

            <div class='text'>
                <div class="item">图片</div>
                <div class="item">视频</div>
                <div class="item"
                    onmouseover="showExtendInfo()"
                    onmouseout="hideExtendInfo()"
                
                >...</div>

                <div class="extend-info">
                    <div class="content">学术</div>
                    <div class="content">词典</div>
                    <div class="content">地图</div>
                    <div class="content">MSV</div>
                    <div class="content">Office</div>
                </div>
            </div>

        </div>
```

``` css
1、对浏览器的默认设置
html, body, div, p, span, img, input {
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-tap-highlight-color: transparent;
    outline: 0;
    /* 字体颜色 */
    color: #fff;
}

2、大模块的弹性布局
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color: thistle;
    
}
.header-left{
    position: relative;
    display: flex;
    align-items: center;
    height: 20px;
   
}
3、父盒子的设置
.extend-info{
     /* height: 0; */
     position: absolute;
     top: 45px;
     background:  thistle;;
     right: 10px;
     overflow: hidden;

     /* 过渡 */
    transition: 0.3s;
    padding: 0 20px;
}

```

```js
添加监听事件=鼠标移入事件、鼠标移出事件

eg:展开和隐藏
1、通过浏览器的document对象调用getElementsByClassName函数，得到一个获取标签元素的数组
2、读取子元素
3、获取子元素的长度
4、修改样式属性

隐藏即获取到class标签内容后，直接样式高度为0即可

```