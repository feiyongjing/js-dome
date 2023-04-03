var keydownElement = document.querySelector(".keydown");
keydownElement.setAttribute("placeholder","键盘事件敲下键盘触发背景变红")
keydownElement.onkeydown=function (event) {
    keydownElement.style.backgroundColor="red"
    console.log("键盘事件敲下触发背景变红");
}


var keypressElement = document.querySelector(".keypress");
keypressElement.setAttribute("placeholder","键盘事件敲下有值的键盘触发背景变红，Ctrl、Alt、Shift、win是无值键盘，当然同时按下Ctrl+c是可以触发的")
keypressElement.onkeypress=function (event) {
    event.target.style.cssText = "width: 100%;background-color:green;"
    console.log("键盘事件敲下有值的键盘触发背景变绿，Ctrl、Alt、Shift、win是无值键盘，当然同时按下Ctrl+c是可以触发的");
}

var keyupElement = document.querySelector(".keyup");
keyupElement.setAttribute("placeholder","键盘事件敲下键盘松开时触发背景变黄")
keyupElement.onkeyup=function (event) {
    event.target.style.cssText = "width: 100%;background-color:yellow;"
    console.log("键盘事件敲下键盘松开时触发背景变黄");
    console.log("keyCode是验证输入的唯一标识，比如回车的keyCode是13");
    if(event.keyCode==13){
        console.log("验证回车的keyCode是13"+keyCode);
    }
    
}