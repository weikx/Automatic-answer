/**
 * 此代码为2018年初用于网络活动自动答题脚本
 * 现已无用，仅供参考
 * 
 * 运行环境：安卓软件 Auto.js(https://github.com/hyb1996/Auto.js)
 * 需求root权限或者安卓7.0以上才能运行本脚本
 */

const url = "http://answer.sm.cn/answer/curr?activity=million&activity=million";
let thisRound = 0;

setScreenMetrics(device.width, device.height);

console.show();
log("准备开始答题喽~");
log("祝你好运~");
log("Code By Weikexin");

setInterval(() => {
  // 轮询请求接口
  const res = http.get(url);
  if (res.statusCode == 200) {
    const data = JSON.parse(res.body.string()).data;
    if (data.correct && Number(data.round) > thisRound) {
      thisRound = Number(data.round);
      let correct = Number(data.correct) + 1;
      clickNow(thisRound, correct);
    }
  } else {
    toast(`请求失败: ${res.statusMessage}`);
  }
}, 300)

function clickNow (round, correct) {
  // 自动点击方法
  log(`第${round}题选${correct}`);
  switch (correct) {
    case 1:
      click(550, 790);
      break
    case 2:
      click(550, 980);
      break
    case 3:
      click(550, 1160);
      break
  }
  log("已自动为您选择");
}

//启用按键监听
events.observeKey();
events.onKeyDown("volume_down", event => {
  engines.stopAllAndToast();
  log("您停止了程序");
});

setInterval(() => {
  toast("答题程序运行中~");
}, 20000)