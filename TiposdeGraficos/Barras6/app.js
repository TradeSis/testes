
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
  "id":"mes",
  "header":"mes",
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
 // width:900,
  height:250,
  type:"bar",
  barWidth:60,
  radius:2,
  gradient:"rising",
  xAxis:{
    template:"'#mes#"
  },
  yAxis:{
    start:0,
    step:10,
    end:100
  },
  legend:{
    values:[{text:"2019",color:"#58dccd"},{text:"2020",color:"#a7ee70"},{text:"2021",color:"#36abee"}],
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
 // data:multiple_dataset
});;



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
{ sales:"20", sales2:"35", sales3:"55", mes:"01" },
{ sales:"20", sales2:"35", sales3:"55", mes:"02" },
{ sales:"40", sales2:"24", sales3:"40", mes:"03" },
{ sales:"44", sales2:"20", sales3:"27", mes:"04" },
{ sales:"23", sales2:"50", sales3:"43", mes:"05" },
{ sales:"21", sales2:"36", sales3:"31", mes:"06" },
{ sales:"50", sales2:"40", sales3:"56", mes:"07" },
{ sales:"30", sales2:"65", sales3:"75", mes:"08" },
{ sales:"90", sales2:"62", sales3:"55", mes:"09" },
{ sales:"55", sales2:"40", sales3:"60", mes:"10" },
{ sales:"72", sales2:"45", sales3:"54", mes:"11" },
{ sales:"72", sales2:"45", sales3:"54", mes:"12" }
];


$$("wGridFor").parse(multiple_dataset);  //tabela
$$("mychart").parse(multiple_dataset);  //grafico

}); 

function showForm(winId, node){
$$(winId).getBody().clear();
$$(winId).show(node);
$$(winId).getBody().focus();
}

