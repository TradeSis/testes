
// #A2 - TITULO
var wTitulo = {
  "view": "label",
  "label": "Grafico com Interação do mouse",
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
  "id": "id",
  "header": "id",                         
  "sort": "string"
},
{
  "id": "sales",
  "header": "sales",
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
    //  data: dataset
    },
    {
      template:'<div id="log_div" style="widht:100%; height:100%; font-family:Tahoma;overflow:auto"></div>'
    }
  ]
});

 /* $$("chart").attachEvent("onMouseMove", function(id){
  id = this.getItem(id).year;
  log("onMouseMove", id);
});

$$("chart").attachEvent("onMouseOut", function(ev){                            //NÃO ESTÁ FUNCIONANDO OS COMANDOS!!!!
  log("onMouseOut", ev);
});

$$("chart").attachEvent("onItemClick", function(id){
  id = this.getItem(id).year;
  log("onItemClick", id);
});

$$("chart").attachEvent("onItemDblClick", function(id){
  id = this.getItem(id).year;
  log("onItemDblClick", id);
});   */

function log(name, id){
  var t = document.createElement("DIV");
  t.innerHTML = name+" for element "+id;

  var p = document.getElementById("log_div");
  p.insertBefore(t, p.firstChild);
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
	{ "id":"1", sales:20, year:"02"},
  { "id":"2", sales:55, year:"03"},
	{ "id":"3", sales:40, year:"04"},
	{ "id":"4", sales:78, year:"05"},
	{ "id":"5", sales:61, year:"06"},
	{ "id":"6", sales:35, year:"07"},
	{ "id":"7", sales:80, year:"08"},
	{ "id":"8", sales:50, year:"09"},
	{ "id":"9", sales:65, year:"10"},
	{ "id":"10", sales:59, year:"11"} 
];


$$("wGridFor").parse(dataset);  //tabela
$$("chart").parse(dataset);  //grafico

}); 

function showForm(winId, node){
$$(winId).getBody().clear();
$$(winId).show(node);
$$(winId).getBody().focus();
}

