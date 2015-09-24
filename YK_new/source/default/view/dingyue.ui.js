var jxgb = ui("jxgb");
var asj = ui("asj");
var apd = ui("apd");

var viewShower = ui("viewShower");

var data = [ {
	"id" : "view0",
	"path" : "source://view/dingyuefile/view0.ui"
}, {
	"id" : "view1",
	"path" : "source://view/dingyuefile/view1.ui"
}, {
	"id" : "view2",
	"path" : "source://view/dingyuefile/view2.ui"
}];

viewShower.addViews(data);

viewShower.showView("view0");

jxgb.on("touch",function(data, e)
{
	viewShower.showView("view0");
	jxgb.fontColor = "1164E1FF";
	asj.fontColor = "000000FF";
	apd.fontColor = "000000FF";
	jxgb.fontStyle = "bold";
	asj.fontStyle = "normal";
	apd.fontStyle = "normal";
});

asj.on("touch",function(data, e)
{
	viewShower.showView("view1");
	jxgb.fontColor = "000000FF";
	asj.fontColor = "1164E1FF";
	apd.fontColor = "000000FF";
	jxgb.fontStyle = "normal";
	asj.fontStyle = "bold";
	apd.fontStyle = "normal";
});

apd.on("touch",function(data, e)
{
	viewShower.showView("view2");
	jxgb.fontColor = "000000FF";
	asj.fontColor = "000000FF";
	apd.fontColor = "1164E1FF";
	jxgb.fontStyle = "normal";
	asj.fontStyle = "normal";
	apd.fontStyle = "bold";
});