var do_Button_0 = ui("do_Button_0");
var do_Button_2 = ui("do_Button_2");
var app = sm("do_App");

do_Button_0.on("touch",function(data, e){
	app.openPage("source://view/pindaofile/subpd.ui","");
});

do_Button_2.on("touch",function(data, e){
	app.openPage("source://view/pindaofile/subpd.ui","");
});