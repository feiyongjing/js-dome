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


    change(snakeBodyXY: Set<string>) {
        let left: number;
        let top: number;

        while (true) {
            left = Math.round(Math.random() * 29) * 10;
            top = Math.round(Math.random() * 29) * 10;

            let XYJson = JSON.stringify({ X: left + "px", Y: top + "px" });
            if(!snakeBodyXY.has(XYJson)){
                break;
            }
            console.log("食物刷新在蛇内部了，重新刷新")
        }

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}


export default Food;