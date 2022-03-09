
// #A2 - TITULO
var wTitulo = {
  "view": "label",
  "label": "Grafico Donut/Positivo e Negativo.",
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
  "id": "val",
  "header": "val",                         
  "sort": "string"
},
{
  "id": "type",
  "header": "type",
  "sort": "string"
},
{
  "id": "color1",
  "header": "color1",
  "sort": "string"
},
{
  "id": "color2",
  "header": "color2",
  "sort": "string"
}

],
"select": true,
"scrollX": false,


"id": "wGridFor",
"height": 0
};



var grafico = ({
  id:"mychart",
  view: "scrollview",
  scroll: "y",
  body: {
    type:"clean",
    cols:[
      {
        id:"mychart1",
        view: "chart",
        donutInnerText: function(data) {
          return "<span style='font-size:20px'>"+data[0].type+":</span><br>"+data[0].val+"%";
        },
        type:"donut",
        innerRadius:70, 
        value:"#val#",  
        color:"#color1#",
        height:300,
        //width:300,
       // data
      },
      {
        id:"mychart2",
        view: "chart",
        donutInnerText:"<span style='font-size: 20px'>Negative</span></br>30%",
        type:"donut",
        innerRadius:70, 
        value:"#val#",  
        color:"#color2#",
        height:300,
        //width:300,
      //  data
      }
    ]
  }
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

var data = [
  { val:"70", type:"Positive", color1: "#2ECC71", color2:"#AAB7B8" },
  { val:"30", type:"Negative", color1: "#AAB7B8", color2:"#E74C3C" }
];


$$("wGridFor").parse(data);  //tabela
$$("mychart1").parse(data);  //grafico
$$("mychart2").parse(data);  //grafico

}); 

function showForm(winId, node){
$$(winId).getBody().clear();
$$(winId).show(node);
$$(winId).getBody().focus();
}

