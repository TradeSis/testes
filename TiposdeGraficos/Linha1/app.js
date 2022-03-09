
// #A2 - TITULO
var wTitulo = {
  "view": "label",
  "label": "Grafico com 3 Barras.",
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
  "id": "sales3",
  "header": "sales3",
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



var grafico = ({
  id:"mychart",
  view:"chart",
  type:"line",
  //width:600,
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
  //data: multiple_dataset
});



// #B1 - TELA PRINCIPAL
var wPrincipal =
  { "id": "wPrincipal",
    "rows": [
              wcombo,
              windices,
              grafico,
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
rows:[  wToolbar, 
        wCorpo 
  
    
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


$$("wGridFor").parse(multiple_dataset);  //tabela
$$("mychart").parse(multiple_dataset);  //grafico

}); 

function showForm(winId, node){
$$(winId).getBody().clear();
$$(winId).show(node);
$$(winId).getBody().focus();
}

