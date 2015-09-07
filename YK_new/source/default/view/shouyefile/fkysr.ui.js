var app = sm("do_App");
var do_Button_1 = ui("do_Button_1");

do_Button_1.on("touch", function(data, e) {
	app.openPage("source://view/shouyefile/fkysrvideo.ui","a");
});