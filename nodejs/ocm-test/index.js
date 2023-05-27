const { By, Builder, Browser } = require('selenium-webdriver');

(async function example() {
    // 打开chrome浏览器
    let driver = new Builder().forBrowser('chrome').build();
    try {

        // 打开美孚uat登录页面
        await driver.get('https://uat.nonprd-ocm.mobil.com.cn/customer/login');

        // 点击美孚管理员
        await driver.findElement({ xpath: '/html/body/div[1]/div/div/div/div[2]/div/div[2]/button[1]/span' }).click();

        // 输入密码
        await driver.findElement({ xpath: '/html/body/div[2]/div[2]/div/div/div[2]/div/input' }).sendKeys('npllsbsb');

        // 点击提交
        await driver.findElement({ xpath: '/html/body/div[2]/div[2]/div/div/div[3]/button[2]/span' }).click();
    } finally {
        // 关闭浏览器
        // await driver.quit()
    }

})()


