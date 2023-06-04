import Food from './Food';

import ScorePanel from './ScorePanel';

import Snake from './Snake';


// 游戏控制器
class GameControl {

    // 蛇
    snake: Snake;
    // 食物
    food: Food;
    // 积分版和等级
    scorePanel: ScorePanel;

    // 游戏是否开始
    isLive = true;

    // 蛇的移动方向
    direction: string = '';

    // 是否开启外挂，外挂拥有穿墙、原地掉头、可以穿过自己的身体
    plugIn = false;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10, 10);

        this.init();
    }

    init() {
        // 绑定键盘事件
        // 注意this默认是GameControl的实例对象但是在绑定事件时是在给document绑定事件所以this是document
        // 如果希望this是GameControl的实例对象则可以写箭头回调函数或者是使用bind(this)来绑定调用者的this是GameControl的实例对象
        document.addEventListener("keydown", this.keydownHandler.bind(this));

        // 使蛇移动
        this.run();
    }

    // 修改蛇的移动方向，除非蛇是初始化长度否则不允许进行反方向的直接掉头
    keydownHandler(event: KeyboardEvent) {

        if (!this.plugIn && this.snake.length !== 1) {
            switch (event.key) {
                case "ArrowUp":
                case "Up":
                    if (this.direction === "ArrowDown" || this.direction === "Down") return;
                    break;
                case "ArrowDown":
                case "Down":
                    if (this.direction === "ArrowUp" || this.direction === "Up") return;
                    break;
                case "ArrowLeft":
                case "Left":
                    if (this.direction === "ArrowRight" || this.direction === "Right") return;
                    break;
                case "ArrowRight":
                case "Right":
                    if (this.direction === "ArrowLeft" || this.direction === "Left") return;
                    break;
            }
        }
        this.direction = event.key;
    }


    // 蛇进行移动
    run() {
        let X = this.snake.headX;
        let Y = this.snake.headY;

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        try {
            // 检查吃自己
            if (!this.plugIn) {
                this.snake.checkEatOneself(X, Y);
            }

            // 检查吃食物
            if (!this.checkEat(X, Y)) {
                // 将蛇尾调到蛇头，同时更新蛇尾的位置
                this.snake.transfer(X, Y,this.plugIn)
            }

        } catch (e) {
            alert((e as Error).message);
            this.isLive = false;
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }


    // 检查蛇是否吃到食物
    checkEat(X: number, Y: number): boolean {
        if (X === this.food.X && Y === this.food.Y) {
            // 添加分数
            this.scorePanel.addScore();

            // 蛇的身体变长（在旧的蛇头前添加新的蛇头）
            this.snake.addBody(X, Y);

            // 食物重新刷新变化
            this.food.change(this.snake.bodyXY);
            return true;
        }
        return false;
    }
}


export default GameControl;