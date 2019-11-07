

### BOM操作   *
```js
一、BOM
BOM 是 browserobjectmodel 的缩写，简称浏览器对象模型。
主要处理浏览器窗口和框架， 描述了与浏览器进行交互的方法和接口，可以对浏览器窗口进行访问和操作，譬如可以弹出 新的窗口，回退历史记录，获取 url……
二、BOM 与 DOM（Document Object Model）的关系
1、javacsript 是通过访问 BOM 对象来访问、控制、修改浏览器 
2、BOM 的 window 包含了 document，因此通过 window 对象的 document 属性就可以访问、 检索、修改文档内容与结构。 
3、document 对象又是 DOM 模型的根节点。 
因此，BOM 包含了 DOM，浏览器提供出来给予访问的是 BOM 对象，从 BOM 对象再访 问到 DOM 对象，从而 js 可以操作浏览器以及浏览器读取到的文档
三、BOM 对象包含以下内容
Window JavaScript 层级中的顶层对象，表示浏览器窗口。 
Navigator包含客户端浏览器的信息。 
History 包含了浏览器窗口访问过的 URL。 
Location 包含了当前 URL 的信息。 
Screen 包含客户端显示屏的信息。
Window 对象
Window 对象表示一个浏览器窗口或一个框架。
在客户端 JavaScript 中，Window 对象 是全局对象，所有的表达式都在当前的环境中计算。
也就是说，要引用当前窗口根本不需要 特殊的语法，可以把那个窗口的属性作为全局变量来使用。
例如，可以只写 document，而 不必写 window.document。
1、window 对象属性
closed 返回窗口是否已被关闭。 
defaultStatus 设置或返回窗口状态栏中的默认文本。（仅Opera支持）
document 对 Document 对象的只读引用。
请参阅 Document 对象。 
history 对 History 对象的只读引用。
请参数 History 对象。 
innerheight 返回窗口的文档显示区的高度。 
innerwidth 返回窗口的文档显示区的宽度。 
length 设置或返回窗口中的框架数量。 
location 用于窗口或框架的 Location 对象。
请参阅 Location 对象。 
name 设置或返回窗口的名称。 
Navigator 对 Navigator 对象的只读引用。
请参数 Navigator 对象。
opener 返回对创建此窗口的窗口的引用。 
outerheight 返回窗口的外部高度。 
outerwidth 返回窗口的外部宽度。 
pageXOffset 设置或返回当前页面相对于窗口显示区左上角的 X 位置。 
pageYOffset 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。 
parent 返回父窗口。 Screen 对 Screen 对象的只读引用。
请参数 Screen 对象。 
self 返回对当前窗口的引用。
等价于 Window 属性。 
status 设置窗口状态栏的文本。(默认只支持Opera) 
top 返回最顶层的先辈窗口。 
window window 属性等价于 self 属性，它包含了对窗口自身的引用。 
screenLeft screenTop screenX screenY 只读整数。
声明了窗口的左上角在屏幕上的的 x 坐标和 y 坐标。 
IE、 Safari、 Chrome 和 Opera 支持 screenLeft 和 screenTop，而 Chrome、Firefox 和 Safari 支持 screenX 和 screenY。
2、window对象方法 
alert() 显示带有一段消息和一个确认按钮的警告框。 
blur() 把键盘焦点从顶层窗口移开。 
clearInterval() 取消由 setInterval() 设置的 timeout。 
clearTimeout() 取消由 setTimeout() 方法设置的 timeout。
close() 关闭浏览器窗口。 
confirm() 显示带有一段消息以及确认按钮和取消按钮的对话框。 
createPopup() 创建一个弹出窗口。只有ie支持（不包括ie11） 
focus() 把键盘焦点给予一个窗口。 
moveBy() 可相对窗口的当前坐标把它移动指定的像素。 
moveTo() 把窗口的左上角移动到一个指定的坐标。 
open()打开一个新的浏览器窗口或查找一个已命名的窗口。
window.open(URL,name,features,replace)
print() 打印当前窗口的内容。 
prompt() 显示可提示用户输入的对话框。 
resizeBy() 按照指定的像素调整窗口的大小。 
resizeTo() 把窗口的大小调整到指定的宽度和高度。 
scrollBy() 按照指定的像素值来滚动内容。 
scrollTo() 把内容滚动到指定的坐标。 
setInterval() 按照指定的周期（以毫秒计）来调用函数或计算表达式。 
setTimeout() 在指定的毫秒数后调用函数或计算表达式。
Navigator 对象
Navigator 对象包含的属性描述了正在使用的浏览器。可以使用这些属性进行平台专用的配置。虽然这个对象的 名称显而易见的是 Netscape 的 Navigator 浏览器，但其他实现了 JavaScript 的浏览器也支持这个对象。
1、Navigator 对象属性 appCodeName 返回浏览器的代码名。以 Netscape 代码为基础的浏览器中，它的值是 "Mozilla"。为兼容 Microsoft 也是 appMinorVersion 返回浏览器的次级版本。（IE4、Opera支持） appName 返回浏览器的名称。 appVersion 返回浏览器的平台和版本信息。 browserLanguage 返回当前浏览器的语言。（IE和Opera支持）
cookieEnabled 返回指明浏览器中是否启用 cookie 的布尔值。 cpuClass 返回浏览器系统的 CPU 等级。（IE支持） onLine 返回指明系统是否处于脱机模式的布尔值。 platform 返回运行浏览器的操作系统平台。 systemLanguage 返回当前操作系统的默认语言。（IE支持） userAgent 返回由客户机发送服务器的 user-agent 头部的值。 
userLanguage 返回操作系统设定的自然语言。（IE和Opera支持） 
plugins 返回包含客户端安装的所有插件的数组
2、Navigator对象方法 
javaEnabled() 规定浏览器是否支持并启用了 Java。 
taintEnabled() 规定浏览器是否启用数据污点 (data tainting)。
History 对象
History 对象包含用户（在浏览器窗口中）访问过的 URL
1、History 对象属性 
length 返回浏览器历史列表中的 URL 数量。
2、History 对象方法 
back() 加载 history 列表中的前一个 URL。 
forward() 加载 history 列表中的下一个 URL。 
go() 加载 history 列表中的某个具体页面。
Location 对象
Location 对象包含有关当前 URL 的信息。
1、Location 对象属性 
hash 设置或返回从井号 (#) 开始的 URL（锚）。 
host 设置或返回主机名和当前 URL 的端口号。 
hostname 设置或返回当前 URL 的主机名。 
href 设置或返回完整的 URL。 
pathname 设置或返回当前 URL 的路径部分。 
port 设置或返回当前 URL 的端口号。 
protocol 设置或返回当前 URL 的协议。 search 设置或返回从问号 (?) 开始的 URL（查询部分）。
2、Location 对象方法 assign() 加载新的文档。 
reload(‘force’) 重新加载当前文档。参数可选，不填或填false则取浏览器缓存的文档
replace() 用新的文档替换当前文档。
Screen 对象
Screen 对象包含有关客户端显示屏幕的信息。
每个 Window 对象的 screen 属性都引 用一个 Screen 对象。
Screen 对象中存放着有关显示浏览器屏幕的信息。
JavaScript 程序将 利用这些信息来优化它们的输出，以达到用户的显示要求。
例如，一个程序可以根据显示器 的尺寸选择使用大图像还是使用小图像，它还可以根据显示器的颜色深度选择使用 16 位色 还是使用 8 位色的图形。
另外， JavaScript 程序还能根据有关屏幕尺寸的信息将新的浏览器 窗口定位在屏幕中间。
Screen 对象属性 
availHeight 返回显示屏幕的高度 (除 Windows 任务栏之外)。 
availWidth 返回显示屏幕的宽度 (除 Windows 任务栏之外)。 bufferDepth 设置或返回调色板的比特深度。（仅IE支持）
colorDepth 返回目标设备或缓冲器上的调色板的比特深度。 
deviceXDPI 返回显示屏幕的每英寸水平点数。（仅IE支持） 
deviceYDPI 返回显示屏幕的每英寸垂直点数。（仅IE支持） 
fontSmoothingEnabled 返回用户是否在显示控制面板中启用了字体平滑。（仅IE支持） 
height 返回显示屏幕的高度。 
logicalXDPI 返回显示屏幕每英寸的水平方向的常规点数。（仅IE支持） 
logicalYDPI 返回显示屏幕每英寸的垂直方向的常规点数。（仅IE支持） 
pixelDepth 返回显示屏幕的颜色分辨率（比特每像素）。
updateInterval 设置或返回屏幕的刷新率。（仅IE11以下支持） 
width 返回显示器屏幕的宽度
```

### 选择器 *
```javascript
返回一个包括所有给定标签名称的元素的HTML集合HTMLCollection。 
整个文件结构都会被搜索，包括根节点。
返回的 HTML集合是动态的
意味着它可以自动更新自己来保持和 DOM 树的同步而不用再次调用 document.getElementsByTagName() 
语法：
var elements = document.getElementsByTagName(name);
elements 是一个由发现的元素出现在树中的顺序构成的动态的HTML集合 HTMLCollection (但是看下面的提示) 。
name 是一个代表元素的名称的字符串。特殊字符 "*" 代表了所有元素。
注意: 最新的 W3C 规范 说明这些元素是 HTMLCollection（HTML集合）； 然而, 这个方法在WebKit内核的浏览器中返回一个 NodeList 。
在以下的例子中
getElementsByTagName() 开始于一个具体的父级元素
并且从它自上而下递归地在DOM树中搜索符合标签名称参数的子元素
注意调用 getElementsByTagName() 的不是那个文件节点 document
事实上是使用这个方法 element.getElementsByTagName()
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>getElementsByTagName example</title>
  <script>
    function getAllParaElems() {
      var allParas = document.getElementsByTagName("p");
      var num = allParas.length;
      alert("There are " + num + " paragraph in this document");
    }
    function div1ParaElems() {
      var div1 = document.getElementById("div1");
      var div1Paras = div1.getElementsByTagName("p");
      var num = div1Paras.length;
      alert("There are " + num + " paragraph in #div1");
    }
    function div2ParaElems() {
      var div2 = document.getElementById("div2");
      var div2Paras = div2.getElementsByTagName("p");
      var num = div2Paras.length;
      alert("There are " + num + " paragraph in #div2");
    }
  </script>
</head> 
<body style="border: solid green 3px">
  <p>Some outer text</p>
  <p>Some outer text</p>      

  <div id="div1" style="border: solid blue 3px">
    <p>Some div1 text</p>
    <p>Some div1 text</p>
    <p>Some div1 text</p>     

    <div id="div2" style="border: solid red 3px">
      <p>Some div2 text</p>
      <p>Some div2 text</p>
    </div>
  </div>

  <p>Some outer text</p>
  <p>Some outer text</p>

  <button onclick="getAllParaElems();">
    show all p elements in document</button><br />

  <button onclick="div1ParaElems();">
    show all p elements in div1 element</button><br />

  <button onclick="div2ParaElems();">
    show all p elements in div2 element</button>
        
</body>
</html>
当在一个HTML 文件上执行时， getElementsByTagName() 会在执行前把参数转换为小写字母。这是试着在一个HTML文件的子树匹配驼峰命名法的 SVG 元素时不希望的。 document.getElementsByTagNameNS() 在那种情况下会有用
document.getElementsByTagName() 类似于 element.getElementsByTagName()

```
### 转义符号   *
- HTML转义符

```java
"		&quot;
'		&apos;
&		&amp;
<		&lt;   // less than  小于
>		&gt;   // greater than  大于
空格	   &nbsp;
©		&copy;
```


### 根据id获取元素

```javascript
var div = document.getElementById('main');
console.log(div);

// 获取到的数据类型 HTMLDivElement，对象都是有类型的
```

注意：由于id名具有唯一性，部分浏览器支持直接使用id名访问元素，但不是标准方式，不推荐使用。

### 根据标签名获取元素

```javascript
var divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
  var div = divs[i];
  console.log(div);
} 
```

### 根据name获取元素*

```javascript
var inputs = document.getElementsByName('hobby');
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  console.log(input);
}
```

### 根据类名获取元素*

```javascript
var mains = document.getElementsByClassName('main');
for (var i = 0; i < mains.length; i++) {
  var main = mains[i];
  console.log(main);
}
```

### 根据选择器获取元素*

```javascript
var text = document.querySelector('#text');
console.log(text);

var boxes = document.querySelectorAll('.box');
for (var i = 0; i < boxes.length; i++) {
  var box = boxes[i];
  console.log(box);
}
```

### 事件对象的属性和方法

- event.type 获取事件类型
- clientX/clientY     所有浏览器都支持，窗口位置
- pageX/pageY       IE8以前不支持，页面位置
- event.target || event.srcElement 用于获取触发事件的元素
- event.preventDefault() 取消默认行为

### 常用的鼠标和键盘事件

- onmouseup 鼠标按键放开时触发
- onmousedown 鼠标按键按下触发
- onmousemove 鼠标移动触发
- onkeyup 键盘按键按下触发
- onkeydown 键盘按键抬起触发

### 定时器

#### setTimeout()和clearTimeout()

在指定的毫秒数到达之后执行指定的函数，只执行一次

```javascript
// 创建一个定时器，1000毫秒后执行，返回定时器的标示
var timerId = setTimeout(function () {
  console.log('Hello World');
}, 1000);

// 取消定时器的执行
clearTimeout(timerId);
```
#### setInterval()和clearInterval()

定时调用的函数，可以按照给定的时间(单位毫秒)周期调用函数

```javascript
// 创建一个定时器，每隔1秒调用一次
var timerId = setInterval(function () {
  var date = new Date();
  console.log(date.toLocaleTimeString());
}, 1000);

// 取消定时器的执行
clearInterval(timerId);

```
###  JavaScript标签自定义属性 *
```js
自定义属性，给标签添加自己定义的属性，目的是可存储内容。 添加自定义属性有两种方法，一是直接在标签上添加属性，
比如： <span score="20">小名的成绩</span>,二是代码添加自定义属性。
声明了自定义属性之后，在js中是没办法直接“对象.属性”来获取其属性的值的，
因为js获取的对象说到底是DOM对象，
DOM对象中是没有自定义属性的，所以想直接通过“对象.属性”来获取其属性的值，是不可取的。
所以js给我们提供了添加自定义属性，获取自定义属性值和删除属性的方法：
	1. 添加自定义属性：对象.setAttribute("自定义属性名","属性的值")
	2. 获取自定义属性的值：对象.getAttribute("自定义属性名")
删除自定义属性，也可删除js自带的属性：对象.removeAttribute("属性名")
```
### 浏览器兼容性问题 *
``` c#
浏览器的兼容性无非还是样式兼容性（css），交互兼容性（javascript），浏览器 hack 三个方面
样式兼容性（css）方面


1. 因为历史原因，不同的浏览器样式存在差异，可以通过 Normalize.css 抹平差异，也可以定制自己的 reset.css，例如通过通配符选择器，全局重置样式
 * { margin: 0; padding: 0; }

2. 在CSS3还没有成为真正的标准时，浏览器厂商就开始支持这些属性的使用了。CSS3样式语法还存在波动时，浏览器厂商提供了针对浏览器的前缀，直到现在还是有部分的属性需要加上浏览器前缀。在开发过程中我们一般通过IDE开发插件、css 预处理器以及前端自动化构建工程帮我们处理。
浏览器内核与前缀的对应关系如下
内核	主要代表的浏览器	前缀
Trident	IE浏览器	-ms
Gecko	Firefox	-moz
Presto	Opera	-o
Webkit	Chrome和Safari	-webkit
3. 在还原设计稿的时候我们常常会需要用到透明属性，所以解决 IE9 以下浏览器不能使用 opacit。
 opacity: 0.5;
 filter: alpha(opacity = 50); //IE6-IE8我们习惯使用filter滤镜属性来进行实现
 filter: progid:DXImageTransform.Microsoft.Alpha(style = 0, opacity = 50); //IE4-IE9都支持滤镜写法progid:DXImageTransform.Microsoft.Alpha(Opacity=xx)

交互兼容性（javascript）


4. 事件兼容的问题，我们通常需要会封装一个适配器的方法，过滤事件句柄绑定、移除、冒泡阻止以及默认事件行为处理
 var  helper = {}

//绑定事件
 helper.on = function(target, type, handler) {
 	if(target.addEventListener) {
 		target.addEventListener(type, handler, false);
 	} else {
 		target.attachEvent("on" + type,
 			function(event) {
 				return handler.call(target, event);
 		    }, false);
 	}
 };

//取消事件监听
 helper.remove = function(target, type, handler) {
 	if(target.removeEventListener) {
 		target.removeEventListener(type, handler);
 	} else {
 		target.detachEvent("on" + type,
 	    function(event) {
 			return handler.call(target, event);
 		}, true);
     }
 };

5. new Date()构造函数使用，'2018-07-05'是无法被各个浏览器中，使用new Date(str)来正确生成日期对象的。 正确的用法是'2018/07/05'.
6. 获取 scrollTop 通过 document.documentElement.scrollTop 兼容非chrome浏览器
 var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;

浏览器 hack


7. 快速判断 IE 浏览器版本
 <!--[if IE 8]> ie8 <![endif]-->
 
 <!--[if IE 9]> 骚气的 ie9 浏览器 <![endif]-->

8. 判断是否是 Safari 浏览器
 /* Safari */
 var isSafari = /a/.__proto__=='//';

9. 判断是否是 Chrome 浏览器
 /* Chrome */
 var isChrome = Boolean(window.chrome);

身段不能掉，我们是个有逼格的前端
“什么？你们公司要兼容IE6，我们今天的面试就到这里为止吧，告辞”。
作者：程序员解决师

```


