# AJAX

## 概述
>ajax : asynchronous javascript and xml 用JavaScript以异步的形式操作xml(现在操作的是Json)
### Ajax：一种不用刷新整个页面便可与服务器通讯的办法


# TCP/UDP（传输层协议）

>面向连接的TCP

TCP（Transmission Control Protocol，传输控制协议）是基于连接的协议，也就是说，在正式收发数据前，必须和对方建立可靠的连接。一个TCP连接必须要经过三次“对话”才能建立起来，其中的过程非常复杂，我们这里只做简单、形象的介绍，你只要做到能够理解这个过程即可。


>面向非连接的UDP协议

“面向非连接”就是在正式通信前不必与对方先建立连接，不管对方状态就直接发送。与手机短信非常相似：你在发短信的时候，只需要输入对方手机号就OK了。
UDP（User Data Protocol，用户数据报协议）是与TCP相对应的协议。它是面向非连接的协议，它不与对方建立连接，而是直接就把数据包发送过去！

# 三次握手

1.先Client端发送连接、请求报文。

2.Server端接受连接后回复ACK报文，并为这次连接分配资源。

3.Client端接收到ACK报文后也向Server端发送ACK报文，并分配资源，这样TCP连接就建立了。

# 四次挥手

1.Client端发起中断连接请求，也就是发送FIN报文。Server端接到FIN报文后，意思是说"我Client端没有数据要发给你了"，但是如果你还有数据没有发送完成，则不必急着关闭（Socket），可以继续发送数据。

2.server发送ACK，"告诉Client端，你的请求我收到了，但是我还没准备好，请继续等我的消息"。

wait:这个时候Client端就进入FIN_WAIT状态，继续等待Server端的FIN报文。

3.当Server端确定数据已发送完成，则向Client端发送FIN报文，"告诉Client端，好了，我这边数据发完了，准备好关闭连接了"。

4.Client端收到FIN报文后，"就知道可以关闭连接了，但是他还是不相信网络，怕Server端不知道要关闭，所以发送ACK后进入TIME_WAIT状态，如果Server端没有收到ACK则可以重传。“，Server端收到ACK后，"就知道可以断开连接了"。Client端等待了2MSL后依然没有收到回复，则证明Server端已正常关闭，那好，我Client端也可以关闭连接了。Ok，TCP连接就这样关闭了！

>应用层协议: http https等

>超文本传输协议（HTTP，HyperText Transfer Protocol)是互联网上应用最为广泛的一种网络协议。

HTTPS（全称：Hyper Text Transfer Protocol over Secure Socket Layer），是以安全为目标的HTTP通道，简单讲是HTTP的安全版。

上面的协议为了建立客户端与服务器端的连接，此协议为了让两者进行沟通。


为什么要有此协议呢，让计算机之间按照规矩说话，你问我答，你怎么问我怎么答，否则计算机各说各话，没办法沟通。

>报文 http （请求报文，响应报文） 通过报文进行沟通

## 请求报文：

请求头 
请求行
请求主体

## 响应报文：

响应头
响应行
响应主体


>请求行：

请求方法（GET POST DELETE HEAD TRACE OPTION）       请求资源 (URL)           请求协议版本（HTTP/1.1）



>请求头：

http://tools.jb51.net/table/http_header

>请求主体：

表单提交数据如：name=aimee&age=18;

>响应行

响应协议版本号（HTTP/1.1）       响应状态码  （200）    响应状态文字  （0K）

http://tool.oschina.net/commons?type=5
（响应状态码）

><响应头

http://tools.jb51.net/table/http_header

>响应主体

          ‘sign success’ (注册成功)

# 常见的http状态码

>成功状态码：

200 服务器成功返回内容

301/2 临时/永久重定向

304 资源未被修改过

>失败状态码：

404 请求内容不存在

500 服务器暂时不可用

503 服务器内部错误


# 浏览器缓存机制（http）

Date： 服务器响应内容日期

Cache-control：内容缓存时间

no-cache   不被缓存的，只不过每次在向客户端（浏览器）提供响应数据时，缓存都要向服务器评估缓存响应的有效性。 

no-store 用于防止重要的信息被无意的发布。在请求消息中发送将使得请求和响应消息都不使用缓存。 根据缓存超时 

max-age 指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应。 

min-fresh 指示客户机可以接收响应时间小于当前时间加上指定时间的响应。 

max-stale 指示客户机可以接收超出超时期间的响应消息。如果指定max-stale消息的值，那么客户机可以 接收超出超时期指定值之内的响应消息。 

Expires：内容保质期，表示存在时间，允许客户端在这个时间之前不去检查（发请求），等同max-age的效果。但是如果同时存在，则被cache-control的max-age覆盖。

# Ajax跨域的问题
>解决跨域问题的几种办法

1.Flash （不做讨论）

2.服务器代理中转

3.Jsonp

4.document.domain(针对基础域名相同的情况)
bj.58.com  document.domain = '58.com'
tj.58.com  document.domain = '58.com'


# JSONP原理
```
1.Web页面上用<script> 引入 js文件时则不受是否跨域的影响
（不仅如此，我们还发现凡是拥有"src"这个属性的标签都拥有跨域的能力，比如<script>、<img>、<iframe>）

2.于是我们把数据放到服务器上，并且数据为json形式（因为js可以轻松处理json数据）

3.因为我们无法监控通过<script>的src属性是否把数据获取完成，所以我们需要做一个处理。

4.实现定义好处理跨域获取数据的函数，如 function doJSON（data）{}。

5.用src获取数据的时候添加一个参数cb=‘doJSON’ (服务端会根据参数cb的值返回 对应的内容)   此内容为以cb对应的值doJSON为函数真实要传递的数据为函数的参数的一串字符 如 doJSON（’数据’）
```

# php
> php是一种后台编程语言；使用php可以开发动态网站和后台接口（所谓接口就是url地址，用于给前端提供数据）。
## php基础语法
- 变量
- 字符串拼接
- 单引号与双引号
- 内容输出
- 数据类型
- 运算符
- 分支循环语句
- 函数
- 预定义变量（表单处理）
## 变量
> 变量以$开头 字母/数字/下划线 不能以数字开头，大小写敏感。
## 内容输出
- echo：输出简单数据类型，如字符串、数值
- print_r()：输出复杂数据类型，如数组
- var_dump()：输出详细信息，如对象、数组
## 字符串拼接
- js中字符串拼接用+；php中字符串拼接用.
## 单引号与双引号
- 单引号中的变量会当作普通字符串处理
- 双引号中的变量会解析为变量值
## 运算符
- 与JavaScript基本类似
## 数据类型
- 字符串
- 整型
- 浮点型
- 布尔型
- 数组
- 对象
- NULL
## 预定义变量（表单处理）
- $_GET
- $_POST
## 分支循环
- if/switch
- while
- for
- foreach
## 函数
### 自定义函数
- 语法规则（函数名不区分大小写）
### 系统函数
- gettype()
- json_encode()
