
var mouseClickElement = document.querySelector(".mouseClick");
mouseClickElement.onclick=function (event) {
    mouseClickElement.style.cssText = "color: blue";
    console.log("鼠标单击事件触发");
}


var mouseDoubleClickElement = document.querySelector(".mouseDoubleClick");
mouseDoubleClickElement.ondblclick=function (event) {
    mouseDoubleClickElement.style.cssText = "background-color: pink";
    console.log("鼠标双击事件触发");
}

var onMouseDownElement = document.querySelector(".onMouseDown");
onMouseDownElement.onmousedown=function (event) {
    onMouseDownElement.style.cssText = "color: rgb(0,255,0)";
    console.log("鼠标按下事件触发");
}

var onMouseUpElement = document.querySelector(".onMouseUp");
onMouseUpElement.onmouseup=function (event) {
    onMouseUpElement.style.cssText = "color: rgb(6, 245, 229)";
    console.log("鼠标抬起事件触发");
}

var onMouseMoveElement = document.querySelector(".onMouseMove");
onMouseMoveElement.style.cssText = "width: 100px;height: 100px;background-color: yellow;";
onMouseMoveElement.onmousemove=function (event) {
    onMouseMoveElement.style.backgroundColor="red"
    console.log("鼠标移动事件触发");
}

var onMouseEnterElement = document.querySelector(".onMouseEnter");
onMouseEnterElement.style.cssText = "width: 100px;height: 100px;background-color: rgb(240, 160, 55);";
onMouseEnterElement.onmouseenter=function (event) {
    onMouseEnterElement.style.backgroundColor="red"
    console.log("鼠标进入事件触发");
}

var onMouseLeaveElement = document.querySelector(".onMouseLeave");
onMouseLeaveElement.style.cssText = "width: 100px;height: 100px;background-color: rgb(206, 248, 117);";
onMouseLeaveElement.onmouseleave=function (event) {
    onMouseLeaveElement.style.backgroundColor="red"
    console.log("鼠标离开事件触发");
}

var onMouseOverFatherElement = document.querySelector(".onMouseOverFather");
var subOnMouseOverSonElement = document.querySelector(".subOnMouseOverSon");
onMouseOverFatherElement.style.cssText = "width: 200px;height: 200px;background-color: rgb(206, 248, 117);";
subOnMouseOverSonElement.style.cssText = "width: 100px;height: 100px;background-color: rgba(0, 38, 255, 0.5);";
onMouseOverFatherElement.onmouseover=function (event) {
    onMouseOverFatherElement.style.backgroundColor="red"
    console.log("鼠标进入背景变红，进入子元素会再次触发一次");
}

var onMouseOutFatherElement = document.querySelector(".onMouseOutFather");
var onMouseOutSonElement = document.querySelector(".onMouseOutSon");
onMouseOutFatherElement.style.cssText = "width: 200px;height: 200px;background-color: rgb(206, 248, 117);";
onMouseOutSonElement.style.cssText = "width: 100px;height: 100px;background-color: rgba(187, 0, 255, 0.5);";
onMouseOutFatherElement.onmouseout=function (event) {
    onMouseOutFatherElement.style.backgroundColor="red"
    console.log("鼠标离开背景或进入子元素变红，从子元素离开父元素会再次触发一次");
}


var onMouseWheelElement = document.querySelector(".onMouseonWheel");
onMouseWheelElement.style.cssText = "width: 200px;height: 200px;background-color: rgb(206, 248, 117);";
onMouseWheelElement.onmousewheel=function (event) {
    onMouseWheelElement.style.backgroundColor="red"
    console.log("鼠标滚轮滑动背景变红");
}