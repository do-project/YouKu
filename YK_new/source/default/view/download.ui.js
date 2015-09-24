var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
var do_progressbar_0 = ui("do_progressbar_0");
var do_button_2 = ui("do_button_2");
var lb_progress = ui("lb_progress");
var do_imageview_1 = ui("do_imageview_1");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

var http = mm("do_Http");
http.timeout = 30000;
http.contentType = "application/json";
http.url = "http://h.hiphotos.baidu.com/baike/c0%3Dbaike60%2C5%2C5%2C60%2C20%3Bt%3Dgif/sign=88e9903f8735e5dd8421ad8d17afcc8a/f9198618367adab48dc66b2e89d4b31c8701e44d.jpg";

http.on("success", function(data) {
	do_imageview_1.source="data://xiazai.png";
	do_button_2.text = "下载成功";
});

http.on("progress", function(data) {
    do_ProgressBar_0.progress = data.currentSize * 100 / data.totalSize;
    lb_progress.text = data.currentSize * 100 / data.totalSize + "%";
});

do_button_2.on("touch",function(data, e){
	http.download("data://xiazai.png");
});
