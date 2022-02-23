var wgrafico1 = {
    "id": "wgrafico1",
    "type": "bar",
    "value": "#vlrVendas#",         
    "label": "#mes#",    //add no php e bd um campo com os meses!
    "view": "chart",
    "height": 136,
    yAxis:{},
    xAxis:{
      lines:true,
      title:"TradeSis",
      template:"#mes#"                       
    }
  };


  webix.ui(wgrafico1);
  