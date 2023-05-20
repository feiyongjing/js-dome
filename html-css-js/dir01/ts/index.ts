function updateValue(e: Event) {
    const view: HTMLElement | null = document.getElementById("values");
    if (!view) { return }
    const value = (e.target as HTMLInputElement).value
    console.log('内容发生变化时实时读取输入的数据：', value)
    view.textContent = value;
}

function run() {
    console.log(99)
    // const input: HTMLInputElement | null = document.querySelector("#test-input");
    // input.addEventListener("input", updateValue);
    // input.oninput = updateValue
    const formOninputElement: HTMLInputElement | null = document.querySelector("#formOninput");
    // formOninputElement.setAttribute("placeholder", "内容发生变化时实时读取输入的数据")
    if (!formOninputElement) { return }
    formOninputElement.oninput = updateValue
}
run()