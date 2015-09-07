var app, page, nf;
nf = sm("do_Notification");
app = sm("do_App");
page = sm("do_Page");
var do_progressbar_0 = ui("do_progressbar_0");
var timer = mm("do_Timer");
var do_button_2 = ui("do_button_2");
var lb_progress = ui("lb_progress");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

do_button_2.on("touch",function(data, e){
	if (!timer.isStart()) {
		nf.toast("开始下载");
		do_button_2.text = "下载中";
        timer.start();
    } else {
        nf.toast("正在下载");
    }
});

timer.delay = 0;
timer.interval = 1000;
timer.DURATION = 0;
timer.on("tick", function(data, e){
    if( this.DURATION >= 100){
        this.DURATION = 0;
        return timer.stop();
    }
    do_progressbar_0.progress = this.DURATION++;
    lb_progress.text = this.DURATION + "%";
	if (lb_progress.text === "100%"){
		do_button_2.text = "重新下载";
		nf.toast("下载完成");
	}
});



