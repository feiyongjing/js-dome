// 蛇
class Snake {

    // 蛇头
    head: SnakeItem;

    // 蛇尾
    foot: SnakeItem;

    // 蛇的容器
    element: HTMLElement;

    // 蛇的长度
    length: number;

    // 蛇的身体坐标
    bodyXY: Set<string>;


    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = new SnakeItem(document.querySelector('#snake > div')!, null);
        this.foot = new SnakeItem(document.querySelector('#snake > div')!, null);
        this.bodyXY = new Set<string>();

        this.bodyXY.add(JSON.stringify({ X: this.head.value.offsetLeft + "px", Y: this.head.value.offsetTop + "px" }))
        this.length = 1;
    }


    get headX() {
        return this.head.value.offsetLeft;
    }

    set headX(value: number) {
        if (this.headX === value) {
            return;
        }

        if (this.headX < 0 || this.headX > 290) {
            throw new Error('蛇撞墙了')
        }

        this.head.value.style.left = value + "px";
    }

    get headY() {
        return this.head.value.offsetTop;
    }

    set headY(value: number) {
        if (this.headY === value) {
            return;
        }

        if (this.headY < 0 || this.headY > 290) {
            throw new Error('蛇撞墙了')
        }

        this.head.value.style.top = value + "px";
    }

    checkEatOneself(X: number, Y: number) {
        let XYJson = JSON.stringify({ X: X + "px", Y: Y + "px" })

        if (this.length > 4 && this.bodyXY.has(XYJson)) {
            throw new Error('蛇吃自己了')
        }
    }


    // 将蛇尾调到蛇头，同时更新蛇尾的位置
    transfer(X: number, Y: number, plugIn: boolean) {

        // 去除蛇尾的地址添加蛇头的地址
        let footXYJson = JSON.stringify({ X: this.foot.value.offsetLeft + "px", Y: this.foot.value.offsetTop + "px" })
        this.bodyXY.delete(footXYJson)
        let newHeadXYJson = JSON.stringify({ X: X + "px", Y: Y + "px" })
        this.bodyXY.add(newHeadXYJson)

        let newFoot = this.foot.next

        if (X < 0 || X > 290 || Y < 0 || Y > 290) {
            if(!plugIn){
                throw new Error('蛇撞墙了')
            }
        }

        let ele = this.foot.value;

        ele.style.left = X + 'px';
        ele.style.top = Y + 'px';

        let newhead = new SnakeItem(ele, null)

        this.head.next = newhead;
        this.head = newhead;

        if (this.length === 1) {
            this.foot = newhead
        } else {
            this.foot = newFoot!
        }

    }



    addBody(X: number, Y: number) {
        // 向蛇的容器中添加一个div在蛇头的位置
        let ele = document.createElement('div', {})

        ele.style.left = X + "px";
        ele.style.top = Y + "px";

        this.element.insertAdjacentElement("beforeend", ele);

        let newHead = new SnakeItem(ele, null)

        this.head.next = newHead;
        this.head = newHead;

        // 添加蛇头的坐标
        let XYJson = JSON.stringify({ X: X + "px", Y: Y + "px" })
        this.bodyXY.add(XYJson)

        this.length += 1;
    }
}


// 蛇身体
class SnakeItem {

    value: HTMLElement;

    next: SnakeItem | null;


    constructor(value: HTMLElement, next: SnakeItem | null) {
        this.value = value!;
        this.next = next!;

    }

}



export default Snake;