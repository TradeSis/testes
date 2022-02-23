
var dataset = [
  { sales:3.0, sales2:12.0, year:"2003" },
  { sales:3.0, sales2:10.0, year:"2004" },
  { sales:3.4, sales2:9.0, year:"2005" },
  { sales:4.1, sales2:8.0, year:"2006" },
  { sales:4.3, sales2:9.0, year:"2007" },
  { sales:7.6, sales2:11.0, year:"2008" },
  { sales:7.8, sales2:13.0, year:"2009" },
  { sales:7.2, sales2:10.0, year:"2010" },
  { sales:5.3, sales2:14.0, year:"2001" },
  { sales:4.8, sales2:12.0, year:"2012" }
];

var chartSeries = [
  {   type:"spline",
    value:"#sales2#",
    color:"#00ccff",
    barWidth: 32,
    gradient: "falling",
    alpha: 0.8
  },
  {
   type:"spline",
    alpha:0.4,
    value:"#sales#",
    color:"#e9df40"
  },
  {
    type:"spline",
    value:"#salesAverage#",
    item:{
      radius:2,
      borderColor: "#7fa505"
    },
    line:{
      color:"#7fa505",
      width:2
    }
  }
];

var chartLegend = {
  layout:"y",
  width:100,
  align:"right",
  valign:"middle",
  values:[
    {text:"Company A",color:"#00ccff"},
    {text:"Company B",color:"#e9df40"},
    {text:"Average", toggle:true,markerType: "item"}
  ]
};

webix.ui({
  view:"chart",
  id:"chart",
  type: "bar",
  padding:{
    left:30,
    bottom: 50
  },
  radius:0,
  yAxis:{},
  xAxis:{
    lines:true,
    title:"Sales per year",
    template:"#year#"
  },
  scheme:{
    $init:function(obj){      
      obj.salesAverage = getMean(obj)
    }
  },
  on:{
    "data->onParse":function(driver, data){
      // the raw dataset before loading
      alert(JSON.stringify(data))
    }
  },
  series:chartSeries,  
  legend:chartLegend,
  data: dataset
});

function getMean(obj){
  var summ = 0;
  summ += (parseFloat(obj.sales)||0);
  summ += (parseFloat(obj.sales2)||0);  
  return summ?summ/2:0;
};
