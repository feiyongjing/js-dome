/**
 * 节点类型有7种
 * Document：整个文档树的顶层节点
 * DocumentType：doctype标签
 * Element：网页的各种HTML标签
 * Attribute：网页元素的属性，比如class='right'
 * Text：标签之间或标签包含的文本
 * Comment：注释
 * DocumentFragment：文档的片段
 */

console.log(document);

// getElementsByTagName根据标签名称获取整个标签
var pElements = document.getElementsByTagName('p');
console.log("js获取整个文档全部p标签的内容，是一个数组，如下：")
console.log(pElements)

// getElementsByClassName根据标签class属性获取整个标签
var test01ClassNameElements = document.getElementsByClassName('test01');
console.log("js获取整个文档全部class是test01全部标签的内容，是一个数组，如下：")
console.log(test01ClassNameElements)

// getElementById根据标签属性ID获取整个标签
var textIdElementsContents = document.getElementById('text');
console.log("js获取整个文档标签ID属性是text的内容，如下：")
console.log(textIdElementsContents)

// querySelector接收一个css的选择器，返回第一个选择器匹配的标签
var test02ClassNameElement = document.querySelector('.test02');
console.log("js获取整个文档标签第一个匹配css选择器'test02'标签中的内容，如下：")
console.log(test02ClassNameElement)

// querySelectorAll接收一个css的选择器，返回选择器匹配的全部标签
var test02ClassNameElements = document.querySelectorAll('.test02');
console.log("js获取整个文档标签匹配css选择器'.test02'全部标签中的内容，是一个数组，如下：")
console.log(test02ClassNameElements)

// 创建一个p标签
var p1Element = document.createElement("p");
console.log("创建的p标签如下")
console.log(p1Element)

// 创建一个p标签并且带有内容
var p2Element = document.createElement("p");
var P2Content = document.createTextNode("p标签的内容");
//  appendChild将内容追加放入标签内容尾部
p2Element.appendChild(P2Content);
console.log("创建带有内容p标签如下")
console.log(p2Element)

// 创建一个p标签并且带有属性
var p3Element = document.createElement("p");
var p3ClassAttribute = document.createAttribute("class");
p3ClassAttribute.value = "p3CreateAttribute";
// setAttributeNode将标签属性放入标签
p3Element.setAttributeNode(p3ClassAttribute);
console.log("创建带有class属性的p标签如下")
console.log(p3Element)

// 获取一个页面中的标签并且修改其内容
var test02Element = document.querySelector(".test02");
var test02Content = document.createTextNode("js修改标签的内容");
// appendChild将内容追加放入标签内容尾部
test02Element.appendChild(test02Content);
console.log(test02Element);


// 获取一个页面中的标签并且修改其内容
var dom001Element = document.querySelector(".dom001");
// 修改id、class属性、添加class、移除class、判断是否有class
dom001Element.id = "id001";
dom001Element.className = "dom001 xxx newdom001"
dom001Element.classList.add("yyy", "hhh");
dom001Element.classList.remove("xxx", "yyy");
console.log("判断是否有hhh这个class：" + dom001Element.classList.contains("hhh"));
// 判断是否存在newdom001这个class，如果存在就移除，不存在就添加
dom001Element.classList.toggle("newdom001");
// 使用innerHTML或者innerText读取和修改标签内容，
// 它们的区别是innerHTML会将内容当成HTML来识别，innerText是直接将内容当成字符串
console.log("使用innerHTML读取class=dom001标签原来的内容" + dom001Element.innerHTML);
console.log("使用innerText读取class=dom001标签原来的内容" + dom001Element.innerText);
// 使用innerHTML读取class=dom001标签原来的内容
console.log(dom001Element.innerHTML = "innerHTML修改后的内容");

// 标签的位置获取
var dom002Element = document.querySelector(".dom002");
console.log("视口高度（屏幕高度）是" + document.documentElement.clientHeight);
console.log("页面高度是" + document.body.clientHeight);
//scrollLeft和scrollTop代表屏幕的向右滚动和向下滚动的距离像素
console.log("标签的scrollLeft属性，向右滚动的距离像素：" + document.documentElement.scrollLeft);
console.log("标签的scrollTop属性，向下滚动的距离像素：" + document.documentElement.scrollTop);
console.log("class=dom002的标签属性如下")
console.log("宽度200px、高度200px、边框5px、内边距10px、外边距20px");
// clientWidth和clientHeight代表标签的宽和高，包含padding(内边距)，和scrollWidth和scrollHeight是一致的
console.log("标签的clientWidth属性，包含padding(内边距)：" + dom002Element.clientWidth);
console.log("标签的clientHeight属性，包含padding(内边距)：" + dom002Element.clientHeight);
// scrollWidth和scrollHeight代表标签的宽和高，包含padding(内边距)，和clientWidth和clientHeight是一致的
console.log("标签的scrollWidth属性，包含padding(内边距)：" + dom002Element.scrollWidth);
console.log("标签的scrollHeight属性，包含padding(内边距)：" + dom002Element.scrollHeight);
// offsetWidth和offsetHeight代表标签的宽和高，包含padding(内边距)、border(边框)
console.log("标签的offsetWidth属性，包含padding(内边距)、border(边框)：" + dom002Element.offsetWidth);
console.log("标签的offsetHeight属性，包含padding(内边距)、border(边框)：" + dom002Element.offsetHeight);
// offsetLeft和offsetTop代表标签与父级元素的相对位置，offsetLeft会多8像素，这是浏览器自带的8像素
console.log("标签的offsetLeft属性，" + dom002Element.offsetLeft);
console.log("标签的offsetTop属性，" + dom002Element.offsetTop);

// js操作标签的css样式
var dom003Element = document.querySelector(".dom003");
// 方式一
// dom003Element.setAttribute("style", "width: 100px;height: 100px;border: 5px solid rgb(69, 241, 244);background-color: yellow;")
// 方式二，推荐使用这种方式可以减少字符串拼接出错
// dom003Element.style.width = "100px";
// dom003Element.style.height = "100px";
// dom003Element.style.border = "5px solid rgb(69, 241, 244)";
// 注意下划线变驼峰
// dom003Element.style.backgroundColor = "yellow";
// 方式三
dom003Element.style.cssText = "width: 100px;height: 100px;border: 5px solid rgb(69, 241, 244);background-color: yellow;";





