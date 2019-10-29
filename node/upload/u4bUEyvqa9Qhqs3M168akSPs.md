## 开发账户

- 15210801931 祖坤
- 18911649204 建伟
- 18601114997  伟红
- 13161204011
- 15510518132  天蓝蓝
- 18500233740 学部助教
### SVN
- 地址 112.126.82.150/MOBILE/
- xuebuApp      学部(主要业务)
- xuebuApp-wx   瑜伽一刻(小程序)
- activity-wx   学部拼拼(小程序)
- xuebu-nuxt    老师/企业端项目
- pc_site/home  pc官网
- ping          哈希点评(已废弃)
## 常用地址
#### 接口调试地址
[http://112.126.82.150/yuenr/i](http://112.126.82.150/yuenr/i)
#### dev地址(学部)
[http://112.126.82.150:3001/?#/](http://112.126.82.150:3001/?#/)<br/>
[http://112test.yuenr.com/](http://112test.yuenr.com/)
#### 正式地址(学部)
[http://m.xuebuapp.com/?#/](http://m.xuebuapp.com/?#/)
#### 企业/老师管理
[http://cms.xuebuapp.com](http://cms.xuebuapp.com)
#### 学部原型
[https://pro.modao.cc/app/2fa009c589eb87598107ed3c9b107db35d4e3989?#screen=sf16df097e7bdd0a0f9e9fc](https://pro.modao.cc/app/2fa009c589eb87598107ed3c9b107db35d4e3989?#screen=sf16df097e7bdd0a0f9e9fc)
#### 企业/老师原型
[https://modao.cc/app/740cb3f0a783712b745aaf8ffd3132cfc2338236#screen=see719d92e285dce6a69965](https://modao.cc/app/740cb3f0a783712b745aaf8ffd3132cfc2338236#screen=see719d92e285dce6a69965)
#### 哈希点评原型
[https://pro.modao.cc/app/4fd258e141c67ee0a2157c56185f1019834c7e81#screen=sa81f7123face76ffc1e0df](https://pro.modao.cc/app/4fd258e141c67ee0a2157c56185f1019834c7e81#screen=sa81f7123face76ffc1e0df)
#### 瑜伽一刻原型
[https://free.modao.cc/app/e648861c03eba262c67873f34726a61e4befbc17#screen=s21683202f642b597f24a3f](https://free.modao.cc/app/e648861c03eba262c67873f34726a61e4befbc17#screen=s21683202f642b597f24a3f)
## 常用平台账户
### 瑜伽一刻
- wx08421c61609e9fc5
- 用户名：yuenr@yiyigo.com
- 密码：yiyi33191011

### 学部拼拼
- wxd1c50e761f706ec3
- 用户名：xuebuxcx@yiyiglobal.com 
- 密码：Yi123456

### 测试环境服务器
- sftp://112.126.82.150
- root 112.126.82.150 YiYi33191011
- ssh root@112.126.82.150
- 学部部署路径  /usr/local/web-server/apache-tomcat-7-8801/webapps/H5
- 老师端部署路径 
 /usr/local/web-server/node/xuebu-nuxt/

### 学部正式环境服务器
- 主机: 182.92.114.178 root  YiYi1011QAZxsw2
- 路径  /usr/local/web-server/apache-tomcat-8801/webapps/ROOT

### shufa正式环境服务器
- 主机: 101.200.77.126 root  YiYi33191011
部署：/usr/local/web-server/apache-tomcat-8-8805/webapps/ROOT


### 112管理后台
- 地址 http://112.126.82.150:8802/yuenrAdmin
- 账户 admin
- 密码 123456

### 融云
- 账户 info@yiyiglobal.com
- 密码 yiyi33191011
## 业务
### xuebuApp目录结构
- components 静态文件夹(其他移动端引用)
- static  静态图片以及微信回调页
- src/http.js http请求拦截器
- src/components 公有组件
- src/constant 接口
- src/pages 页面
- src/router 路由
- src/store/store vuex
