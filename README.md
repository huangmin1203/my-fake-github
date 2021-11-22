# My-Fake-Github

Github地址：https://github.com/huangmin1203/my-fake-github

Gitee地址：https://gitee.com/nimgnauh/flex-study


同时推送代码到github/gitee

config文件示例：
```yaml
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
[remote "origin"]
	url = git@gitee.com:nimgnauh/flex-study.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
	remote = origin
	merge = refs/heads/main
```

```bash
# 相当于git push origin main 详情查看.git/config文件
git push
git push github main
```


###### fetch的用法
```
//在React Native中,使用fetch实现网络请求


/* fetch 是一个封装程度更高的网络API, 使用了Promise
* Promise 是异步编程的一种解决方案
* Promise 对象代表一个异步操作,有三种状态:Pending(进行中) Resolved(已完成) Rejected(已失效)
*
* Promise 实例生成以后,可以分别制定'完成' 和'失败'状态的回调函数,实现方式:链式调用方法
*
* 语法:
* fetch(参数)
* .then(完成的回调函数)
* .catch(失败的回调函数)
*
* fetch(url,opts)
* .then((response) => {
*   //网络请求成功,执行该回调函数,得到响应对象,通过response可以获取请求的数据
*   //json text等

　　//你可以在这个时候将Promise对象转换成json对象:response.json()
    //转换成json对象后return，给下一步的.then处理
*
*   return response.text();
*   //或 return response.json();
* })
* .then((resonseData) => {
* //处理请求得到的数据
* })
* .catch((error) => {
* //网络请求失败,执行该回到函数,得到错误信息
* })
*
*
*
* */
```