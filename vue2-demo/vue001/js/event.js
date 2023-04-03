// 去除vue在启动时生成生产提示 大概率不生效，需要去修改引入的vue源码
Vue.config.productionTip = false
// 有些时候F12找不到Vue就显示设置
Vue.config.devtools = true

const v = new Vue({
    // el指定创建的Vue对象为一个容器服务，值通常是css选择器表达式，即使css选择器表达式匹配多个容器也只有第一个容器生效
    el: ".event",
    // data存储数据对象式写法，数据提供给el属性指定的容器服务，一旦Vue中data存储的数据变化el属性指定的容器中引用的地方也会变化
    data: {
        name: "熔岩巨兽",
        url: "./img/熔岩巨兽.webp",
        xyx: "test",
        passiveSkill: "被动技能花岗岩护盾：墨菲特被岩石护盾保护，最多吸收最大生命值10%的伤害，若10秒内未受到攻击，护盾将重置。",
        qSkill: "Q技能地震碎片：墨菲特将一块岩石碎片从地下射向目标，造成70/120/170/220/270(+0.6)魔法伤害，并偷取目标14/17/20/23/26%移动速度，持续4秒。 伤害：70/120/170/220/270 移动速度：14/17/20/23/26% 法力消耗：70/75/80/85/90",
        wSkill: "W技能野蛮打击：被动：墨菲特的普通攻击对他目标附近的单位造成攻击力30/38/46/54/62%的伤害。 主动：墨菲特的护甲和攻击力增加20/25/30/35/40%，持续6秒。 溅射伤害比例： 30/38/46/54/62% 额外攻击力：20/25/30/35/40% 额外护甲：20/25/30/35/40%",
        eSkill: "E技能大地震颤：墨菲特锤击地面，对周围敌人造成 60/100/140/180/220(+0.3)(+0.2)魔法伤害，同时减少目标 30/35/40/45/50% 的攻击速度，持续 3 秒。 提高护甲可增加该技能的伤害，加成伤害为墨菲特护甲值的 30%。 伤害：60/100/140/180/220 攻击速度减少：30/35/40/45/50% 法力消耗：50/55/60/65/70",
        rSkill: "R技能势不可挡：墨菲特冲击目标区域，造成200/300/400(+1)魔法伤害，并将所有敌人抛向空中1.5秒。 伤害：200/300/400 冷却时间：130/115/100",
        background: "墨菲特是一个庞大的岩石生物，为了给混乱的世界赐予秩序而不懈奋斗。他诞生之初的身份是一个石仆，侍奉着一块超乎凡人理解的石碑，名为“独石”。他用万钧元素之力维护自己的先祖，但最终遭遇了失败。在随后的毁灭中，墨菲特成为了唯一的幸存者。如今他忍受着符文之地的脆弱凡人和他们流水一般多变的性情，同时想尽办法给自己寻找一个存于世上的新位置，让自己不愧为同胞中的最后一员。",
        // 注意不用使用箭头函数，否则函数中的this不是指向当前对象
        // methods: function showInfo(event){
        //     alert(this.passiveSkill+this.qSkill+this.wSkill+this.eSkill+this.rSkill)
        // }


        // 上述函数的简写，显示技能
        showSkill(event) {
            event.target.innerHTML = this.passiveSkill + this.qSkill + this.wSkill + this.eSkill + this.rSkill
        },

        // 显示英雄背景故事
        showBackground(event) {
            event.target.innerHTML = this.background
        },

        // 显示原英雄图片
        showImg(event) {
            if (event.clientX < window.innerWidth / 2) {
                event.target.style.cssText = "width: 100%;height: 500px;background-image: url(./img/熔岩巨兽.webp);background-size: contain;background-repeat: no-repeat;position: relative;";
            }
        },

        // 显示英雄皮肤图片
        showWuweihaoImg(event) {

            console.log("xxxx")
            if (event.clientX > window.innerWidth / 2) {
                event.target.style.cssText = "width: 50%;height: 500px;background-image: url(./img/无畏号墨菲特.jpg);background-size: contain;background-repeat: no-repeat;position: absolute;left: 50%;";
            }

        },

        // 弹窗显示技能
        showSkill(event) {
            alert(this.passiveSkill + this.qSkill + this.wSkill + this.eSkill + this.rSkill)
        },

        // 输入多少就打印多少
        testlog(num){
            console.log(num)
        },


        testKeyup(event){
            // js的写法，vue的写法直接在html写
            // if(event.keyCode==13){
            //     console.log("按下回车才会打印输入的数据"+event.target.value);
            // }
            console.log(event.target.value)
        }
    }

    // data存储数据函数式写法，data是个函数，该函数的返回值是最终的数据
    // data:function(){         
    //     return {
    //         name:"熔岩巨兽",
    //     }
    // }

})

// $mount可以指定Vue对象的el属性，挂载容器到Vue对象
// v.$mount(".event")

