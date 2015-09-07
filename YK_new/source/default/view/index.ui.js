var app = sm("do_App");
var page = sm("do_Page");
var nf = sm("do_Notification");
var global = sm("do_Global");
var do_slideview_1 = ui("do_slideview_1");
var listdata = mm("do_ListData");
var canBack = false;
var do_button = ui("do_button");
var do_button_0 = ui("do_button_0");
var do_button_1 = ui("do_button_1");
var do_button_2 = ui("do_button_2");
var do_button_3 = ui("do_button_3");
var imageview = ui("imageview");

page.on("back", function(){
    if (canBack) {
        global.exit();
    } else {
        nf.toast("再按一次退出优酷");
        canBack = true;
        delay3.start();
    }
});

do_button.on("touch",function(data, e){
	if(do_button.text == "下载")
	{
		app.openPage("source://view/download.ui","a");
	}
});

do_button_0.on("touch",function(data, e){
	app.openPage("source://view/shouyefile/barcode.ui","a");
});

do_button_1.on("touch",function(data, e){
	app.openPage("source://view/sub.ui","a");
	imageview.visible = false;
	do_button_3.visible = false;
});

do_button_2.on("touch",function(data, e){
	if(imageview.visible == true)
	{
		imageview.visible = false;
		do_button_3.visible = false;
	}
	else
	{
		imageview.visible = true;
		do_button_3.visible = true;
	}
});

do_button_3.on("touch",function(data, e){
	imageview.visible = false;
	do_button_3.visible = false;
});

var delay3 = mm("do_Timer");
delay3.delay = 3000;
delay3.interval = 1000;
delay3.on("tick", function(){
    this.stop();
    canBack = false;
});

var action_alys = [ui("shouye"), ui("pindao"), ui("dingyue"),ui("wode")];
var action_imgs = [ui("img_0"), ui("img_1"), ui("img_2"), ui("img_3")];
var action_lbs = [ui("lb_0"), ui("lb_1"), ui("lb_2"), ui("lb_3"),];

do_slideview_1.bindItems(listdata );

listdata.addData([
    {template : 0},
    {template : 1},
    {template : 2},
    {template : 3}
]);
do_slideview_1.refreshItems({});


var shouye = ui("shouye");
shouye.on("touch",function(data, e){
	do_slideview_1.set({index: 0});
    do_slideview_1.refreshItems();
    do_button.text = "下载";
	action_imgs[0].source = "source://image/main/shouyeb.png";
	action_imgs[1].source = "source://image/main/pindao.png";
	action_imgs[2].source = "source://image/main/dingyue.png";
	action_imgs[3].source = "source://image/main/wode.png";
	action_lbs[0].fontColor = "0080FFFF";
	action_lbs[1].fontColor = "222222FF";
	action_lbs[2].fontColor = "222222FF";
	action_lbs[3].fontColor = "222222FF";
	imageview.visible = false;
	do_button_3.visible = false;
});

var pindao = ui("pindao");
pindao.on("touch",function(data, e){
	do_slideview_1.set({index: 1});
    do_slideview_1.refreshItems();
    do_button.text = "频道";
	action_imgs[0].source = "source://image/main/shouye.png";
	action_imgs[1].source = "source://image/main/pindaob.png";
	action_imgs[2].source = "source://image/main/dingyue.png";
	action_imgs[3].source = "source://image/main/wode.png";
	action_lbs[0].fontColor = "222222FF";
	action_lbs[1].fontColor = "0080FFFF";
	action_lbs[2].fontColor = "222222FF";
	action_lbs[3].fontColor = "222222FF";
	imageview.visible = false;
	do_button_3.visible = false;
});

var dingyue = ui("dingyue");
dingyue.on("touch",function(data, e){
	do_slideview_1.set({index: 2});
    do_slideview_1.refreshItems();
    do_button.text = "订阅";
	action_imgs[0].source = "source://image/main/shouye.png";
	action_imgs[1].source = "source://image/main/pindao.png";
	action_imgs[2].source = "source://image/main/dingyueb.png";
	action_imgs[3].source = "source://image/main/wode.png";
	action_lbs[0].fontColor = "222222FF";
	action_lbs[1].fontColor = "222222FF";
	action_lbs[2].fontColor = "0080FFFF";
	action_lbs[3].fontColor = "222222FF";
	imageview.visible = false;
	do_button_3.visible = false;
});

var wode = ui("wode");
wode.on("touch",function(data, e){
	do_slideview_1.set({index: 3});
    do_slideview_1.refreshItems();
    do_button.text = "我的";
	action_imgs[0].source = "source://image/main/shouye.png";
	action_imgs[1].source = "source://image/main/pindao.png";
	action_imgs[2].source = "source://image/main/dingyue.png";
	action_imgs[3].source = "source://image/main/wodeb.png";
	action_lbs[0].fontColor = "222222FF";
	action_lbs[1].fontColor = "222222FF";
	action_lbs[2].fontColor = "222222FF";
	action_lbs[3].fontColor = "0080FFFF"
	imageview.visible = false;
	do_button_3.visible = false;
});


do_slideview_1.on("indexChanged",function(data, e){
	if(data == 0)
	{
		action_imgs[0].source = "source://image/main/shouyeb.png";
		action_imgs[1].source = "source://image/main/pindao.png";
		action_imgs[2].source = "source://image/main/dingyue.png";
		action_imgs[3].source = "source://image/main/wode.png";
		action_lbs[0].fontColor = "0080FFFF";
		action_lbs[1].fontColor = "222222FF";
		action_lbs[2].fontColor = "222222FF";
		action_lbs[3].fontColor = "222222FF";
		do_button.text = "下载";
	}
	else if(data == 1)
	{
		action_imgs[0].source = "source://image/main/shouye.png";
		action_imgs[1].source = "source://image/main/pindaob.png";
		action_imgs[2].source = "source://image/main/dingyue.png";
		action_imgs[3].source = "source://image/main/wode.png";
		action_lbs[0].fontColor = "222222FF";
		action_lbs[1].fontColor = "0080FFFF";
		action_lbs[2].fontColor = "222222FF";
		action_lbs[3].fontColor = "222222FF";
		do_button.text = "频道";
	}
	else if(data == 2)
	{
		action_imgs[0].source = "source://image/main/shouye.png";
		action_imgs[1].source = "source://image/main/pindao.png";
		action_imgs[2].source = "source://image/main/dingyueb.png";
		action_imgs[3].source = "source://image/main/wode.png";
		action_lbs[0].fontColor = "222222FF";
		action_lbs[1].fontColor = "222222FF";
		action_lbs[2].fontColor = "0080FFFF";
		action_lbs[3].fontColor = "222222FF";
		do_button.text = "订阅";
	}
	else
	{
		action_imgs[0].source = "source://image/main/shouye.png";
		action_imgs[1].source = "source://image/main/pindao.png";
		action_imgs[2].source = "source://image/main/dingyue.png";
		action_imgs[3].source = "source://image/main/wodeb.png";
		action_lbs[0].fontColor = "222222FF";
		action_lbs[1].fontColor = "222222FF";
		action_lbs[2].fontColor = "222222FF";
		action_lbs[3].fontColor = "0080FFFF";
		do_button.text = "我的";
	}
});



page.on("event1", function(data, e) {
	do_slideview_1.set({index: 2});
    do_slideview_1.refreshItems();
    do_button.text = "订阅";
	action_imgs[0].source = "source://image/main/shouye.png";
	action_imgs[1].source = "source://image/main/pindao.png";
	action_imgs[2].source = "source://image/main/dingyueb.png";
	action_imgs[3].source = "source://image/main/wode.png";
	action_lbs[0].fontColor = "222222FF";
	action_lbs[1].fontColor = "222222FF";
	action_lbs[2].fontColor = "0080FFFF";
	action_lbs[3].fontColor = "222222FF";
	imageview.visible = false;
	do_button_3.visible = false;
});