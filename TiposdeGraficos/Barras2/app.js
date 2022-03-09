
// #A2 - TITULO
var wTitulo = {
  "view": "label",
  "label": "Grafico de Barras com linha.",
  "id": "wTitulo",
  "height": 0
};

// #A1 - BARRA DE TAREFAS SUPERIOR
var wToolbar = {
  "id": "wToolbar",
  "height": 34,
  "view": "toolbar",
  "css": "webix_dark",
  "padding": {
    "right": 20,
    "left": 20
  },
  "elements": [
       wTitulo // #A2

  ]

};

//************************************************************************************************************** */
var wcombo ={
"rows":[
{
//"css": "webix_dark",
"view": "toolbar",
"cols": [
{ "view": "label", "label": "Dash Serviços" },
{ "label": "Ano", "value": "1", "options": "demo->61d84d09b72b5e00183b319d", "view": "combo", "height": 38 }
] 
}]
};

var windices = {

"rows": [
   { "label": "Faturamento", "view": "label", "align": "center" },
   {
     "cols": [
       { "view": "label"},
       { "label": "Ano", "view": "label", "align": "center"},
       { "label": "Média  Mês", "view": "label", "align": "center" }
     ]
   },
   {
     "cols": [
       { "label": "Realizado", "view": "label" },
       {
         "label": "R$ 999.999.99,99",
         "view": "label",
       
         "align": "right"
         
       },
       { "label": "R$ 99.999.99,99", "view": "label","align": "right" }
     ]
   },
   {
     "cols": [
       { "label": "Meta", "view": "label" },
       {
         "label": "R$ 999.999.99,99",
         "view": "label",
         
       
         "align": "right"
       },
       { "label": "R$ 9.999.99,99", "view": "label", "align": "right" }
     ]
   }
 ]

};

//***************************************************************************************************************** */

var wGridFor = {
"view": "datatable",
"columns": [
{
  "id": "sales",
  "header": "sales",                         
  "sort": "string"
},
{
  "id": "sales2",
  "header": "sales2",
  "sort": "string"
},
{
  "id":"year",
  "header":"year",
  "sort":"string"
}

],
"select": true,
"scrollX": false,


"id": "wGridFor",
"height": 0
};



var chart = ({
  id:"mychart",
  view:"chart",
  type: "bar",
  padding:{
    left:30,
    bottom: 50
  },
  radius:0,
  yAxis:{
  },
  xAxis:{
    lines:true,
    title:"Vendas por Ano",
    template:"#id#"
  },
  legend:{
    layout:"y",
    width:100,
    align:"right",
    valign:"middle",
    values:[
      {text:"Company A",color:"#00ccff"},
      {text:"Company B",color:"#e9df40"},
      {text:"Average", toggle:true,markerType: "item"}
    ]
  },
  scheme:{
    $group: {
      by:"year",
      map:{
        salesA:["sales2","any"],
        salesB:["sales","any"],
        salesAverage:["sales",getAverage]
      }
    }
  },
  series:[
    {
      value:"#salesA#",
      color:"#00ccff",
      barWidth: 32,
      gradient: "falling",
      alpha: 0.8
    },
    {
      type:"area",
      alpha:0.4,
      value:"#salesB#",
      color:"#e9df40"
    },
    {
      type:"line",
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
  ],
 // data: dataset
});
function getAverage(property,data){
  var summ = 0;
  for(var i = 0; i < data.length; i++){
    summ += (parseFloat(data[i].sales)||0);
    summ += (parseFloat(data[i].sales2)||0);
  }
  return data.length?summ/(data.length*2):0;
};



// #B1 - TELA PRINCIPAL
var wPrincipal =
  { "id": "wPrincipal",
    "rows": [
              wcombo,
              windices,
              chart,
              wGridFor
              
             
              
              
    ]

  };


var wBarraEsquerda =
{"id": "wBarraEsquerda",
"view": "sidebar",

"data": [
  {
    "value": "Amigos",
    "icon": "wxi-check"
  },
  {
    "value": "News",
    "icon": "wxi-dots"
  },
  {
    "value": "Photos",
    "icon": "wxi-alert"
  },
  {
    "value": "Messages",
    "icon": "wxi-folder"
  },
  {
    "value": "Settings",
    "icon": "wxi-file"
  }
],
"width": 163,
"id": "wFiltros"
};


var wBarraDireita =  {
      "id": "wBarraDireita",
      "view": "sidebar",
      collapsed:true   ,
      "data": [
        {
          "value": "Amigos 2",
          "icon": "wxi-check"
        },
        {
          "value": "News",
          "icon": "wxi-dots"
        },
        {
          "value": "Photos",
          "icon": "wxi-alert"
        },
        {
          "value": "Messages",
          "icon": "wxi-folder"
        },
        {
          "value": "Settings",
          "icon": "wxi-file"
        }
      ],
      "width": 152
    };


var wCorpo = {
"id": "wCorpo",
"height": 0,
"type": "wide",
"cols": [ 
        wBarraEsquerda
        ,      
        wPrincipal,    
        { "rows":[
          { 
          //  css: "menu", 
           padding: 2, 
            view: "form",
            cols:[
              { view: "button", type: "icon", icon: "bars",
               click: function(){
                 $$("wBarraDireita").toggle();
               }
              }
            ]
          },
        wBarraDireita ]} 
]
};





// 1 - PRINCPAL PARTE
var ui = {
rows:[  wToolbar 
  , wCorpo 
  
    
 ]
};

// CHAMA WEBIX
webix.ready(function(){

if (webix.CustomScroll)
webix.CustomScroll.init();

// SETA WEBIX PARA BR
webix.i18n.setLocale("pt-BR");
// ATIVA UI

webix.ui(ui);

var dataset = [
  { sales:3.0, sales2:12.0, year:"2003" },
  { sales:3.0, sales2:10.0, year:"2004" },
  { sales:3.4, sales2:9.0, year:"2005" },
  { sales:4.1, sales2:8.0, year:"2006" },
  { sales:4.3, sales2:9.0, year:"2007" },
  { sales:7.6, sales2:11.0, year:"2008" },
  { sales:7.8, sales2:13.0, year:"2009" },
  { sales:7.2, sales2:10.0, year:"2010" },
  { sales:5.3, sales2:14.0, year:"20011" },
  { sales:4.8, sales2:12.0, year:"2012" }
];


$$("wGridFor").parse(dataset);  //tabela
$$("mychart").parse(dataset);  //grafico

}); 

function showForm(winId, node){
$$(winId).getBody().clear();
$$(winId).show(node);
$$(winId).getBody().focus();
}

