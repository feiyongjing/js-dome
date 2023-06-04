// 分数和等级类
class ScorePanel {

    // 分数和等级
    score = 0;
    level = 1;

    upScore = 10;
    maxLevel = 10;

    // 页面上分数和等级的标签
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    constructor(upScore:number,maxLevel:number) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.upScore=upScore;
        this.maxLevel=maxLevel;
    }


    addScore() {
        this.score += 1;
        this.scoreEle.innerHTML = this.score + "";
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }


    levelUp() {
        if (this.level <= this.maxLevel) {
            this.level += 1;
            this.levelEle.innerHTML = this.level + "";
        }

    }
}

export default ScorePanel;