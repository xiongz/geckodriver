 
const {Builder, By, Key, until} = require('selenium-webdriver');
const {Options} = require('selenium-webdriver/chrome');
 
 
var driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new Options().excludeSwitches(["ignore-certificate-errors", 'user-data-dir="C:\\Users\\qiang\\AppData\\Local\\Google\\Chrome\\User Data"']))
    .build();
 
driver.get('https://image.baidu.com/')
    .then(function () {
        driver.executeScript(`var url=$('.imgrow img').attr('src');console.log(url);window.open(url);`)
    }).catch(function (e) {
    console.log(e);
});