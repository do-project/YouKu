var page = sm("do_Page");
var app = sm("do_App");
var do_VideoView_1 = ui("do_VideoView_1");
var do_Button_1 = ui("do_Button_1");
var do_Button_2 = ui("do_Button_2");
var do_Button_3 = ui("do_Button_3");

page.on("back", function(){ app.closePage() });
ui("action_back").on("touch", function(){ app.closePage() });

do_Button_1.on("touch", function(data, e) {
	if(do_Button_1.text == "播放")
	{
		do_VideoView_1.play(0);
		do_Button_1.text = "暂停";
	}
	else if(do_Button_1.text == "暂停")
	{
		do_VideoView_1.pause();
		do_Button_1.text = "继续";
	}
	else if(do_Button_1.text == "继续")
	{
		do_VideoView_1.resume();
		do_Button_1.text = "暂停";
	}
		
});

do_Button_2.on("touch", function(data, e) {
	do_Button_1.text = "播放";
	do_VideoView_1.stop();
});