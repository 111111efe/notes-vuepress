# NodeJs

## 安装NodeJs
### CentOs7
```bash
# 到https://github.com/nodesource/distributions#installation-instructions-1
# 复制更新软件源命令，并执行
curl -sL https://rpm.nodesource.com/setup_12.x | bash -
# 安装
yum install -y nodejs
```

## npm和yarn镜像
> ### 如果使用yarn，就把命令开头的npm替换为yarn
```bash
# 查看仓库地址
npm config get registry

# 设置官方仓库地址
npm config set registry https://registry.npmjs.org

# 设置淘宝镜像仓库地址
npm config set registry https://registry.npm.taobao.org

# 查看代理地址
npm config get proxy
npm config get https-proxy

# 设置代理地址
npm config set proxy http://127.0.0.1:1080
# 设置https代理地址
npm config set https-proxy http://server:port

# 设置代理用户名和密码
npm config set proxy http://username:password@server:port
npm confit set https-proxy http://username:password@server:port

# 删除代理地址
npm config delete proxy
npm config delete https-proxy
```

## 更新依赖包
### yarn
#### 更新所有到最新版本
> 推荐，不需要安装过多的依赖就可以达到目的

```bash
# 需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择
yarn upgrade-interactive --latest
```
#### 更新单个到指定版本
```bash
# yarn.lock和package.json都会更新，但是会进行版本锁定
yarn upgrade package@latest
```

### npm

> 更新dependencies到最新版本

```bash
# 先安装
npm install -g npm-check-updates
# 或者
yarn global add npm-check-updates
# 更新
npm-check-updates
# 或者
ncu -u
# 或者
ncu --upgrade
# 安装最新版本依赖
npm install
```


## 依赖管理
### yarn、npm命令简单比较
| npm                                | yarn                      | 说明                         |
|------------------------------------|---------------------------|----------------------------|
| npm install(i)                     | yarn                      | 安装                         |
| npm uninstall(un)                  | yarn remove               | 卸载                         |
| npm install xxx –-global(-g)       | yarn global add xxx       | 全局安装                       |
| npm install xxx –save(-S)          | yarn add xxx              | 安装包                        |
| npm install xxx –save-dev(-D)      | yarn add xxx –dev(-D)     | 开发模式安装包                    |
| npm update –save                   | yarn upgrade              | 更新                         |
| npm update –global                 | yarn global upgrade       | 全局更新                       |
| npm uninstall [–save/–save-dev]    | yarn remove xx            | 卸载                         |
| npm cache clean                    | yarn cache clean          | 清除缓存                       |
| rm -rf node_modules && npm install | yarn upgrade              | 重装                         |
| npm init                           | yarn init                 | 初始化某个项目                    |
| npm install/link                   | yarn install/link         | 默认的安装依赖操作                  |
| npm install koa --save             | yarn add koa              | 安装某个依赖，并且默认保存到package      |
| npm uninstall koa --save           | yarn remove koa           | 移除某个依赖项目                   |
| npm install koa --save-dev         | yarn add koa --dev        | 安装某个开发时依赖项目                |
| npm update koa --save              | yarn upgrade koa          | 更新某个依赖项目                   |
| npm install koa --global           | yarn global add koa       | 安装某个全局依赖项目                 |
| npm publish/login/logout           | yarn publish/login/logout | 发布/登录/登出，一系列NPM Registry操作 |
| npm run/test                       | yarn run/test             | 运行某个命令                     |
