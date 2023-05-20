const input = document.querySelector("input");
const log = document.getElementById("values");

// input.addEventListener("input", updateValue);

input.oninput = (event) => {
    console.log('9', event.target.value)
    log.textContent = event.target.value;
};

function updateValue(e) {
    log.textContent = e.target.value;
}


var formOninputElement = document.querySelector(".formOninput");
formOninputElement.setAttribute("placeholder", "内容发生变化时实时读取输入的数据")
formOninputElement.oninput = function (event) {
    console.log("内容发生变化时实时读取输入的数据：", event.target.value);
}

var formOnSelectElement = document.querySelector(".formOnSelect");
formOnSelectElement.setAttribute("placeholder", "内容被选中了触发")
formOnSelectElement.onselect = function (event) {
    console.log("内容被选中了触发");
}

var formOnChangeElement = document.querySelector(".formOnChange");
formOnChangeElement.setAttribute("placeholder", "内容被修改完成失去焦点或者是按下回车时触发")
formOnChangeElement.onchange = function (event) {
    console.log("内容被修改完成失去焦点或者是按下回车时触发");
}

var formResetElement = document.querySelector(".formReset");
var formElement = document.querySelector(".formEvent");
formResetElement.onclick = function (event) {
    formElement.onreset();
    console.log("清除表单的全部输入");
}

var formElement = document.querySelector(".formEvent");
formElement.onsubmit = function (event) {
    console.log("提交表单的全部输入");
}


var eventBrokerElement = document.querySelector(".eventBroker");
eventBrokerElement.onclick = function (event) {
    console.log("父元素会监听代理子元素相同的事件");
    console.log(event.target.innerHTML);
}

// setTimeout设置延时定时器，第一参数是执行函数，第二参数是延时多久执行单位毫秒
// 需要注意的是第一参数函数中的变量是针对与全局的变量，除非局部变量声明
var timer = setTimeout(
    function () {
        console.log("定时器执行了");
    },
    3000
)
// setTimeout设置延时定时器，第一参数是执行函数，第二参数是周期时长执行单位毫秒
// 需要注意的是第一参数函数中的变量是针对与全局的变量，除非局部变量声明
var i = 1;
var interval = setInterval(

    function () {
        console.log("定时器周期执行次数：", i++);
    },
    3000
)

// 取消定时器，参数是定时器
clearTimeout(interval)

// 限制事件在3秒内只执行一次，其他的点击无效
var restrictionElement = document.querySelector(".restriction");
// restrictionElement.onclick = debounce(e, 3000);
restrictionElement.addEventListener("click", debounce)
isClick = true;
function debounce(e) {
    if (isClick) {
        isClick = false;
        //事件
        console.log(e.target.innerHTML);
        console.log('我被点击了');
        //定时器
        setTimeout(function () {
            isClick = true;
        }, 3000);//3秒内不能重复点击
    } else {
        console.log('请勿过快点击');
    }
}


var formOninputElement = document.querySelector(".throttling");
formOninputElement.setAttribute("placeholder", "焦点在内容输入时每隔2s提交一次")
isInput = true;
formOninputElement.oninput = function (event) {
    if (isInput) {
        isInput = false;
        //事件
        console.log("提交的内容"+event.target.value);
        //定时器
        setTimeout(function () {
            isInput = true;
        }, 5000);//5秒内不能重复提交
    } else {
        console.log('5秒内不能重复提交');
    }
}

