const webdriver = require('selenium-webdriver')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two second later');
}


!async function () {

  // 新建一个 firefox 的 driver 实例
  console.log(1, Date.now())
  let driver = await new webdriver.Builder().forBrowser('chrome').build()


  console.log(2, Date.now())

  // 访问极验demo页

  await driver.get('http://www.geetest.com/type/')
  await sleep(1000);
  console.log(3, Date.now())
  await driver.findElement(webdriver.By.css('.products-content li:nth-child(2)')).click()
  console.log(4, Date.now())

  await sleep(5000);
  console.log(5, Date.now())
  await driver.findElement(webdriver.By.css('.geetest_radar_tip')).click()
  await sleep(1000);
  // 隐藏原图再截图
  console.log(6, Date.now())
  
  await driver.executeScript(`document.querySelector('.geetest_canvas_fullbg').style.display = 'none'`)

  console.log(7, Date.now())

  // 找到验证码背景图元素, 是一个 canvas

  // const bgCanvas = await driver.findElement(webdriver.By.css('.geetest_canvas_bg'))


  console.log(8, Date.now())
  // 获得一个 base64 格式的 png 截图

  // const bgPng = await bgCanvas.takeScreenshot()

  await a(driver)

}()

async function a(driver) {
  // 获取拼图滑块按钮

  const button = await driver.findElement(webdriver.By.css('.geetest_slider_button'))



  // 获取按钮位置等信息

  const buttonRect = await button.getRect()



  // 初始化 action

  let actions = driver.actions()  // { async: true }



  // 把鼠标移动到滑块上, 然后点击
  console.log(10, Date.now(), buttonRect, actions)

  // actions = actions.mouseMove(button)
  // console.log(actions)
  // actions.perform()
// mouseDown()
// .dragAndDrop(button, {
//     x: buttonRect.x + 10 + 100 - 5,
//     y: buttonRect.y + 10
// }).mouseUp().perform()
  
  
  

  actions.move({
    origin: button
  }).mouseDown(button).release().perform()
  return

  actions.press().move({

    x: buttonRect.x + 10 + 100 - 5,

    y: buttonRect.y + 10,

    duration: 1000

  })
  // .release().perform()
}


function b(){
  const count = 30 // 小编分成30步进行滑动

const steps = getSteps(distance, count)

const totalDuration = 8000 // 一共耗时8秒, 慢才能充实轨迹~
 

_.reduce(steps, (actions, step) => {

  return actions.move({

    x: x + 10 + step,

    y: y + 10 + _.random(-5, 40), // 加上y轴随机数

    duration: parseInt(_.random(totalDuration / count / 2, totalDuration / count * 2)) // 加上时长随机数

  })

}, actions)

 

// 随机拆成n份

function getRandomDistribution(total, count) {

  let item = total / count

  item = item + _.random(-item * 2, item * 3)

  item = parseInt(item)

  if (count === 1) {

    return [total]

  } else {

    return [item].concat(getRandomDistribution(total - item, count - 1))

  }

}

 

// 获取每次滑动的X坐标

function getSteps(total, count) {

  let distribution = getRandomDistribution(total, count)

  return _.map(distribution, (item, i) => {

    return _.sum(distribution.slice(0, i + 1))

  })

}
}