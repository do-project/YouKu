var page = sm("do_Page");
var app = sm("do_App");
var barcode = ui("do_BarcodeView_1");
page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

var nf = sm("do_Notification");

//根据ID获取BarcodeView实例对象；
var barcode = ui("do_BarcodeView_1");
start();

function start(){
        //开始启动扫描
        barcode.start(function(data, e) {
                //扫描成功，执行回调函数
                var result = JSON.stringify(data);  
                nf.alert("扫描二维码成功！", "完成")
        });
}

var btn = ui("btn_restart");
btn.on("touch", function(data, e) {
        start();
})
