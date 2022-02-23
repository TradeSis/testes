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
alert("oi");

webix.ui({
  view:"chart",
  type:"line",
  width:600,
  height:270,
  xAxis:{
    template:"'#year#"
  },
  yAxis:{
    start:0,
    step: 10,
    end: 100
  },
  offset:0,
  legend:{
    values:[{text:"Company A"},{text:"Company B"},{text:"Company C"}],
    align:"right",
    valign:"middle",
    layout:"y",
    width: 100,
    margin: 8,
    marker:{
      type: "item",
      width: 18
    }
  },
  series:[
    {
      value:"#sales#",
      item:{
        borderColor: "#447900",
        color: "#69ba00"
      },
      line:{
        color:"#69ba00",
        width:2
      },
      tooltip:{
        template:"#sales#"
      }
    },
    {
      value:"#sales2#",
      item:{
        borderColor: "#0a796a",
        color: "#4aa397",
        type:"s",
        radius: 4
      },
      line:{
        color:"#4aa397",
        width:2
      },
      tooltip:{
        template:"#sales2#"
      }
    },
    {
      value:"#sales3#",
      item:{
        borderColor: "#b7286c",
        color: "#de619c",
        type:"t",
        radius: 4
      },
      line:{
        color:"#de619c",
        width:2
      },
      tooltip:{
        template:"#sales3#"
      }
    }
  ],
  data: multiple_dataset
});