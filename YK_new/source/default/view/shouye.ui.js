var page = sm("do_Page");
var app = sm("do_App");

var listdata = mm("do_ListData");
var movieview = ui("movieview");
var do_label_0 = ui("do_label_0");
var do_label_1 = ui("do_label_1");
var do_label_2 = ui("do_label_2");
var do_label_3 = ui("do_label_3");

var do_Button_0 = ui("do_Button_0");
var do_Button_1 = ui("do_Button_1");
var do_Button_2 = ui("do_Button_2");
var do_Button_3 = ui("do_Button_3");
var do_Button_4 = ui("do_Button_4");
var do_Button_5 = ui("do_Button_5");
var do_Button_6 = ui("do_Button_6");
var do_Button_7 = ui("do_Button_7");
var do_Button_8 = ui("do_Button_8");
var do_Button_9 = ui("do_Button_9");

var timer = mm("do_Timer");
var DURATION = 0;

movieview.bindItems(listdata);
listdata.addData([
    {template : 0},
    {template : 1},
    {template : 2},
    {template : 3}
]);
movieview.refreshItems({});

var ind = 0;
timer.delay = 0;
timer.interval = 1000;
timer.start({});
timer.on("tick", function(){
	DURATION++;
    if(DURATION == 3){
    	ind =(ind+1)%4
    	movieview.set({index: ind});
    	movieview.refreshItems();
    	DURATION = 0;
    }
});

movieview.on("indexChanged",function(data, e){
	if(data == 0)
	{
		do_label_0.visible = true;
		do_label_1.visible = false;
		do_label_2.visible = false;
		do_label_3.visible = false;
	}
	else if(data == 1)
	{
		do_label_0.visible = false;
		do_label_1.visible = true;
		do_label_2.visible = false;
		do_label_3.visible = false;
	}
	else if(data == 2)
	{
		do_label_0.visible = false;
		do_label_1.visible = false;
		do_label_2.visible = true;
		do_label_3.visible = false;
	}
	else
	{
		do_label_0.visible = false;
		do_label_1.visible = false;
		do_label_2.visible = false;
		do_label_3.visible = true;
	}
	ind = data;
	DURATION = 0;
});

do_Button_0.on("touch",function(data, e)
{
	page.fire("event1","");
});

do_Button_1.on("touch",function(data, e)
{
	app.openPage("source://view/shouyefile/zhwvideo.ui","");
});

do_Button_2.on("touch",function(data, e)
{
	app.openPage("source://view/shouyefile/zhwvideo.ui","");
});

do_Button_3.on("touch",function(data, e)
{
	app.openPage("source://view/shouyefile/zhwvideo.ui","");
});

do_Button_4.on("touch",function(data, e)
{
	app.openPage("source://view/shouyefile/zhwvideo.ui","");
});

do_Button_5.on("touch",function(data, e)
{
	app.openPage("source://view/shouyefile/zhwvideo.ui","");
});

do_Button_6.on("touch",function(data, e)
{
	app.openPage("source://view/shouyefile/zhwvideo.ui","");
});

do_Button_7.on("touch",function(data, e)
{
	app.openPage("source://view/shouyefile/zhwvideo.ui","");
});

do_Button_8.on("touch",function(data, e)
{
	app.openPage("source://view/shouyefile/zhwvideo.ui","");
});

do_Button_9.on("touch",function(data, e)
{
	app.openPage("source://view/shouyefile/zhwvideo.ui","");
});

