module.exports = {
    // 继承 eslint规则，不同框架的项目或者是不同的企业有不同的代码规范
    // 下面rules配置的规则会覆盖继承的eslint规则检查
    extends: ["eslint:recommended"],

    env: {
        node: true,    // 启用node中的全局变量
        browser: true, // 启用浏览器中的全局变量
    },

    parserOptions: {
        ecmaVersion: 6,     // 使用es6的检查
        sourceType: "module", // 使用es的模块化检查
    },
    rules: {
        // 配置是语法检查项和检查规则，
        // 'off'或0是关闭规则检查
        // 'warn'或1是开启规则检查，使用警告级别的错误，不会导致程序的退出
        // 'error'或2是开启规则检查，使用错误级别的错误，当触发时会导致程序的退出
        "no-var": 2,// 不能使用var定义变量
    }
}