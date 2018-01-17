// 运行环境：安卓软件Auto.js(https://github.com/hyb1996/Auto.js), 下载地址: https://github.com/hyb1996/Auto.js/releases
// 需求root权限或者安卓7.0以上才能运行本脚本

var url = "http://answer.sm.cn/answer/curr?activity=million&activity=million";
var thisRound = 0;

setScreenMetrics(device.width, device.height);

console.show();
log("准备开始答题喽~");
log("祝你好运~");
log("Code By Weikexin");

setInterval(function () {
  // 轮询请求接口
    var res = http.get(url);
    if (res.statusCode == 200) {
        var data = JSON.parse(res.body.string());
        if (data.data.correct) {
            if (Number(data.data.round) > thisRound) {
                thisRound = Number(data.data.round) ;
                var correct = Number(data.data.correct)+1;
                clickNow(thisRound, correct);
            }
        } else {
            // toast("答题还未开始")
        }
    } else {
        toast("请求失败:" + res.statusMessage);
    }
},300)

function clickNow(round, correct) {
  // 自动点击方法
  log("第"+ round +"题"+ "选"+correct);
  if (correct == 1) {
    click(550, 790);
    click(550, 790);
    log("已自动为您选择");
  }
  if (correct == 2) {
    click(550, 980);
    click(550, 980);
    log("已自动为您选择");
  }
  if (correct == 3) {
    click(550, 1160);
    click(550, 1160);
    log("已自动为您选择");
  }
}


//启用按键监听
events.observeKey();
events.onKeyDown("volume_down", function(event){
    engines.stopAllAndToast();
    log("您停止了程序");
});

setInterval(function(){
  toast("答题程序运行中~");
},20000)
