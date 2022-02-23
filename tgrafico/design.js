
webix.ready(function(){
	if (webix.CustomScroll)
		webix.CustomScroll.init();
	webix.ui({
	"rows": [
		{
			"url": "demo->61d84d09b72b5e00183b319b",
			"type": "line",
			"xAxis": "#value#",
			"yAxis": {},
			"view": "chart"
		}
	]
});
});