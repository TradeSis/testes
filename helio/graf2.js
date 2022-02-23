
var dataset = [
	{ id:1, sales:20, year:"02"},
	{ id:2, sales:55, year:"03"},
	{ id:3, sales:40, year:"04"},
	{ id:4, sales:78, year:"05"},
	{ id:5, sales:61, year:"06"},
	{ id:6, sales:35, year:"07"},
	{ id:7, sales:80, year:"08"},
	{ id:8, sales:50, year:"09"},
	{ id:9, sales:65, year:"10"},
	{ id:10, sales:59, year:"11"}
];

webix.ui({
    height:300,
    cols:[
      {
        id:"chart",
        view:"chart",
        type:"bar",
        value:"#sales#",
        xAxis:{
          template:"'#year#",
          lines:false
        },
        barWidth:35,
        radius:0,
        gradient:"falling",
        data: dataset
      },
      {
        template:'<div id="log_div" style="widht:100%; height:100%; font-family:Tahoma;overflow:auto"></div>'
      }
    ]
  });
  
  $$("chart").attachEvent("onMouseMove", function(id){
    id = this.getItem(id).year;
    log("onMouseMove", id);
  });
  
  $$("chart").attachEvent("onMouseOut", function(ev){
    log("onMouseOut", ev);
  });
  
  $$("chart").attachEvent("onItemClick", function(id){
    id = this.getItem(id).year;
    log("onItemClick", id);
  });
  
  $$("chart").attachEvent("onItemDblClick", function(id){
    id = this.getItem(id).year;
    log("onItemDblClick", id);
  });
  
  function log(name, id){
    var t = document.createElement("DIV");
    t.innerHTML = name+" for element "+id;
  
    var p = document.getElementById("log_div");
    p.insertBefore(t, p.firstChild);
  }