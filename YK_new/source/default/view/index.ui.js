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

var delay3 = mm("do_Timer");
delay3.delay = 3000;
delay3.interval = 1000;
delay3.on("tick", function(){
    this.stop();
    canBack = false;
});

function subChange(num,button,imgs,lbs)
{
	var strings = ["优酷","频道","订阅","我的"];
	button.text = strings[num];
	var url = [
	           "source://image/main/shouye",
	           "source://image/main/pindao",
	           "source://image/main/dingyue",
	           "source://image/main/wode"
	           ];
	for(var i = 0 ; i < 4 ; i++)
    {
    	imgs[i].source = url[i];
    	lbs[i].fontColor = "222222FF";
    }
    imgs[num].source += "b";
    lbs[num].fontColor = "0080FFFF";
    for(var i = 0 ; i < 4 ; i++)
    {
    	imgs[i].source += ".png";
    }
	img.visible = false;
	bt.visible = false;
}

function indexChange(num,sv,button,imgs,lbs,img,bt)
{
	sv.set({index: num});
    sv.refreshItems();
    subChange(num,button,imgs,lbs);
}


do_button_0.on("touch",function(data, e){
	app.openPage("source://view/shouyefile/barcode.ui","");
});

do_button_1.on("touch",function(data, e){
	app.openPage("source://view/sub.ui","");
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


//点击底部按钮实现主界面以及底部图片颜色的切换
var action_imgs = [ui("img_0"), ui("img_1"), ui("img_2"), ui("img_3")];
var action_lbs = [ui("lb_0"), ui("lb_1"), ui("lb_2"), ui("lb_3"),];

do_slideview_1.bindItems(listdata);

listdata.addData([
    {template : 0},
    {template : 1},
    {template : 2},
    {template : 3}
]);
do_slideview_1.refreshItems({});


var shouye = ui("shouye");
shouye.on("touch",function(data, e){
	indexChange(0,do_slideview_1,do_button,action_imgs,action_lbs,imageview,do_button_3);
});

var pindao = ui("pindao");
pindao.on("touch",function(data, e){
	indexChange(1,do_slideview_1,do_button,action_imgs,action_lbs,imageview,do_button_3);
});

var dingyue = ui("dingyue");
dingyue.on("touch",function(data, e){
	indexChange(2,do_slideview_1,do_button,action_imgs,action_lbs,imageview,do_button_3);
});

var wode = ui("wode");
wode.on("touch",function(data, e){
	indexChange(3,do_slideview_1,do_button,action_imgs,action_lbs,imageview,do_button_3);
});

//滑动主界面实现底部图片的切换
do_slideview_1.on("indexChanged",function(data, e){
	subChange(data,do_button,action_imgs,action_lbs);
});



page.on("event1", function(data, e) {
	indexChange(2,do_slideview_1,do_button,action_imgs,action_lbs,imageview,do_button_3);
});