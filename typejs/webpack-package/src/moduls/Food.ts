// 食物类
class Food {
    element: HTMLElement;

    constructor() {
        // 将食物元素获取赋值给实例对象，可能为空，在后面加！抑制断言不为空
        this.element = document.getElementById('food')!;
    }

    // 获取食物的x坐标
    get X() {
        return this.element.offsetLeft;
    }

    // 获取食物的y坐标
    get Y() {
        return this.element.offsetTop;
    }


    change() {

        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}


export default Food;