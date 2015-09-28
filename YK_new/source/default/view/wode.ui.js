var nf = sm("do_Notification");
var app = sm("do_App");

var login = ui("login");
var logins = ui("logins");
var inf = ui("inf");
var loginLayout = ui("loginLayout");

var do_TextField_1 = ui("do_TextField_1");
var do_Button_1 = ui("do_Button_1");
var xiazai = ui("xiazai");
var jilu = ui("jilu");
var shangchuan = ui("shangchuan");
var xiaoxi = ui("xiaoxi");
var shoucang = ui("shoucang");
var dingyue = ui("dingyue");
var huiyuan = ui("huiyuan");
var shezhi = ui("shezhi");

login.on("touch",function(data, e){
	loginLayout.visible = true;
});

logins.on("touch",function(data, e){
	loginLayout.visible = true;
	do_Button_1.getRect();
});

do_Button_1.on("touch",function(data, e){
	loginLayout.visible = false;
	if(do_TextField_1.text != "")
	{
		inf.text = "您好，"+do_TextField_1.text;
		do_TextField_1.text = "";
		do_TextField_2.text = "";
	}
});

xiazai.on("touch",function(data, e){
		app.openPage("source://view/download.ui","");
});

jilu.on("touch",function(data, e){
	nf.alert("您目前还没有观看记录");
});

shangchuan.on("touch",function(data, e){
	nf.alert("您目前还没有上传记录");
});

shoucang.on("touch",function(data, e){
	nf.alert("您目前还没有收藏影片");
});

xiaoxi.on("touch",function(data, e){
	nf.alert("您目前还没有消息通知");
});

dingyue.on("touch",function(data, e){
	nf.alert("您还没有订阅");
});

huiyuan.on("touch",function(data, e){
	nf.alert("尊敬的会员，您好");
});

shezhi.on("touch",function(data, e){
	app.openPage("source://view/shezhi.ui","");
});