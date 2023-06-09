function loadImageAsync(url) {
    // Promise构造器接收一个函数，函数的两个参数：resolve和reject是默认的
    // resolve函数在异步代码执行成功后手动调用，接收的参数是异步操作成功返回的结果
    // reject函数在异步代码执行失败后手动调用，接收的参数是异步操作失败返回的结果
    const promise = new Promise(function (resolve, reject) {
        const image = new Image();
        image.onload = function () {
            resolve(image);
        }
        image.onerror = function () {
            reject(new Error("图片url错误" + url))
        }
        image.src = url;
    })
    return promise;
}

var loadImageAsyncElement = document.querySelector(".loadImageAsync")
// 执行异步操作，得到未来的结果
const pormise = loadImageAsync("https://i1.hdslb.com/bfs/archive/ddf53c86e10b75b74d150a7b0f137b2ee52e42c4.jpg");

// pormise.then对异步操作未来的结果进行处理，接收两个函数参数，
// 第一个函数接收resolve函数异步操作成功返回的结果，并对这个结果进行处理
// 第二个函数接收reject函数异步操作失败返回的结果，并对这个结果进行处理
pormise.then(function (data) {
    loadImageAsyncElement.appendChild(data);
}, function (error) {
    loadImageAsyncElement.innerHTML = "图片加载失败";
    console.log(error);
})

// Ajax请求
const getJSON = function (url) {
    const promise = new Promise(function (resolve, reject) {

        const headler = function () {
            if (this.readyState !== 4) {
                // readyState存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
                // 0: 请求未初始化
                // 1: 服务器连接已建立
                // 2: 请求已接收
                // 3: 请求处理中
                // 4: 请求已完成，且响应已就绪
                return;
            }
            // status是http请求响应码
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
        // 创建一个Ajax请求
        const client = new XMLHttpRequest();
        // open设置请求方式、请求url
        client.open("GET", url);
        // 当XMLHttpRequest中的readyState发生变化时会调用onreadystatechange函数
        client.onreadystatechange = headler;
        // post请求需要添加content-type
        // client.setRequestHeader("content-type","application/json; charset=UTF-8")
        client.responseType = "application/json; charset=utf-8";
        client.setRequestHeader("accept", "application/json")
        // onload是请求完成触发的事件，也就是回调函数
        // client.onload() = function () { console.log(JSON.parse(client.responseText)) }

        // 发送请求，如果是POST请求需要在send函数中添加body参数
        client.send();
    })
    return promise;
}
// 由于大多数的网页有跨域拦截，所以这里的url要使用只能自己写一个web服务使用
getJSON("url").then(function (data) {
    console.log("请求成功json", data)
}, function (error) {
    console.log("请求失败json", error);
})

// async和await使异步变同步
function timeout(ms, value) {
    const promise = new Promise(function (resolve, reject) {
        console.log("value的值：", value)
        resolve(value)
    })
    return pormise;
}

async function asyncPrint() {
    var ms10 = await timeout(10, "111").then(function (value) {
        console.log("异步打印", value)
    }, function (error) {
        console.log("异步打印错误", error);
    })
    var ms20 = await timeout(20, "222").then(function (value) {
        console.log("异步打印", value)
    }, function (error) {
        console.log("异步打印错误", error);
    })
    var ms30 = await timeout(30, "333").then(function (value) {
        console.log("异步打印", value)
    }, function (error) {
        console.log("异步打印错误", error);
    })
    console.log("同步打印")
}

asyncPrint()