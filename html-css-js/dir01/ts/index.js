function updateValue(e) {
    var view = document.getElementById("values");
    if (!view) {
        return;
    }
    var value = e.target.value;
    console.log('内容发生变化时实时读取输入的数据：', value);
    view.textContent = value;
}
function run() {
    console.log(99);
    // const input: HTMLInputElement | null = document.querySelector("#test-input");
    // input.addEventListener("input", updateValue);
    // input.oninput = updateValue
    var formOninputElement = document.querySelector("#formOninput");
    // formOninputElement.setAttribute("placeholder", "内容发生变化时实时读取输入的数据")
    if (!formOninputElement) {
        return;
    }
    formOninputElement.oninput = updateValue;
}
run();
