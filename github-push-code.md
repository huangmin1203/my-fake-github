# Github 提交代码

1. github创建仓库


2. 分两种情况

- 本地不存在代码时：
```bash
git clone git@github.com:huangmin1203/my-fake-github.git
```

本地代码已经存在时：
```bash
git init # git初始化
git remote add origin git@github.com:huangmin1203/my-fake-github.git # 关联远程项目
```

3. 暂存
```
git add 
```

4. 提交
```
git commit -m 'feat: 新增github头部'
```

5. 拉取远程代码
```
git pull
```

6. 推送代码到远程
```bash
git push # 常规
git push origin main # 推送到origin的main分支
```
