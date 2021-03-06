var multiple_dataset = [
	{ sales:"20", sales2:"35", sales3:"55", year:"02" },
	{ sales:"40", sales2:"24", sales3:"40", year:"03" },
	{ sales:"44", sales2:"20", sales3:"27", year:"04" },
	{ sales:"23", sales2:"50", sales3:"43", year:"05" },
	{ sales:"21", sales2:"36", sales3:"31", year:"06" },
	{ sales:"50", sales2:"40", sales3:"56", year:"07" },
	{ sales:"30", sales2:"65", sales3:"75", year:"08" },
	{ sales:"90", sales2:"62", sales3:"55", year:"09" },
	{ sales:"55", sales2:"40", sales3:"60", year:"10" },
	{ sales:"72", sales2:"45", sales3:"54", year:"11" }
];


webix.ui({
  view:"chart",
  width:900,
  height:250,
  type:"bar",
  barWidth:60,
  radius:2,
  gradient:"rising",
  xAxis:{
    template:"'#year#"
  },
  yAxis:{
    start:0,
    step:10,
    end:100
  },
  legend:{
    values:[{text:"Type A",color:"#58dccd"},{text:"Type B",color:"#a7ee70"},{text:"Type C",color:"#36abee"}],
    valign:"middle",
    align:"right",
    width:90,
    layout:"y"
  },
  series:[
    {
      value:"#sales#",
      color: "#58dccd",
      tooltip:{
        template:"#sales#"
      }
    },
    {
      value:"#sales2#",
      color:"#a7ee70",
      tooltip:{
        template:"#sales2#"
      }
    },
    {
      value:"#sales3#",
      color:"#36abee",
      tooltip:{
        template:"#sales3#"
      }
    }
  ],
  data:multiple_dataset
});
