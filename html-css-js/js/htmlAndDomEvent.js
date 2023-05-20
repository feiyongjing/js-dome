// html事件，不推荐使用，原因是js和html没有分开
var dom004Element = document.querySelector(".dom004");
function clickHandle(str) {
    console.log(str)
}


// DOM0级事件，js和html是分离的，但是只能触发一个事件(后面的事件覆盖前面的事件)，无法同时触发多个事件
var dom005Element = document.querySelector(".dom005");
// 添加鼠标点击DOM0级事件
dom005Element.onclick = function () {
    console.log("触发了鼠标点击DOM0级事件")
}
// dom005Element.setAttribute("onclick", "clickHandle('触发了鼠标点击DOM0级事件')");


// DOM2级事件，js和html是分离的，可以同时触发多个事件
var dom006Element = document.querySelector(".dom006");
// 添加鼠标点击DOM2级事件
dom006Element.addEventListener("click",function(){
    console.log("触发了鼠标点击DOM2级事件：第一个事件")
})
// 添加鼠标点击DOM2级事件
dom006Element.addEventListener("click",function(){
    console.log("触发了鼠标点击DOM2级事件：第二个事件")
})

var dom007Element = document.querySelector(".dom007");
// Event事件对象就是参数
dom007Element.onclick=function (event) {
    console.log(event.target);
    event.target.innerHTML="按钮内容使用Event事件对象修改";
    console.log("当前按钮的事件类型："+event.type);
}

var dom008Element = document.querySelector(".dom008");
// Event事件对象 preventDefault取消浏览器对当前事件的默认行为，比如a标签的跳转
dom008Element.onclick=function (event) {
    event.preventDefault();
    console.log("取消浏览器对当前事件的默认行为");
}

// 父标签的css样式
var dom009Element = document.querySelector(".dom009");
dom009Element.style.cssText = "width: 200px;height: 200px;background-color: green;";
// 子标签的css样式
var dom010Element = document.querySelector(".dom010");
dom010Element.style.cssText = "width: 100px;height: 100px;background-color: yellow;";

dom009Element.onclick=function (event) {
    console.log("父元素事件触发");
}
dom010Element.onclick=function (event) {
    // 禁止在子元素与父元素重叠的部分触发事件时触发父元素事件，而是只触发子元素
    event.stopPropagation();
    console.log("子元素事件触发");
}

