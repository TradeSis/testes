
// #A2 - TITULO
var wTitulo = {
          "view": "label",
          "label": "Grafico de Barras com Seleção",
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

  var wPesquisa = {
    "id": "wPesquisa",
    "height": 80,
    "view": "form",
   // "minHeight": 380,
    "autoheight": true,
    "elements": [
      {
        "rows": [
          {
            "label": "Parametros",
            "view": "button",
            "height": 0,
            click:function(){ showForm("win1", this.$view) }
          }
        ]
      }
    ]
  };

  var wDtinicial = { id:"dtinicial","view": "datepicker", "height": 0 ,
              
               stringResult:true, 	icons: true};
var wDtfinal   = { id:"dtfinal","view": "datepicker", "height": 0 ,	
               
              stringResult:true, icons: true};

var form = {
  id:"formulario",
  view:"form",
  autowidth:true,
  borderless:true,
  "rows": [
		{
			"height": 58,
			"cols": [ wDtinicial, wDtfinal
			]
		},
		{ view:"button", value: "Pesquisa", click:function(){
                   conteudo = $$("dtinicial").getText() + " TO " + $$("dtfinal").getText();
                   //01/11/2021 TO 30/11/2021
                  executa(conteudo);
                  $$("win1").hide();
                }
   }
	],
  elementsConfig:{
    labelPosition:"top",
  }
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


    


// #B3 - TELA PRINCIPAL - GRID
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
        },
        {
          "id":"company",
          "header":"company",
          "sort":"string"
        }
        
      ],
      "select": true,
      "scrollX": false,
      
      
      "id": "wGridFor",
      "height": 0
    };

  

//Grafico
var tgrafico = {
  view:"chart",
  id:"mychart",
  type:"bar",
  value:"#sales#",
  preset: "alpha",
  height:300,
  xAxis:{
    template:"#id#"
  },
  yAxis:{},
  scheme:{
    $sort:{
      by:"id",
      as:"string",
      dir:"asc"
    },
    $group:{
      by:"year",
      map:{
        sales:["sales","sum"]
      }	
    }
  },
 // data:groupdata
};

var buttons = {
  cols:[
    { 
      view:"label", label:"Group by", align:"center", width:80
    },
    { view:"select", id:"groupby", width:200, value:"B", options:[
      { id:"A", value:"company" },
      { id:"B", value:"year (total sales)" },
      { id:"C", value:"year (max sales)" },
      { id:"D", value:"year (min sales)" },
      { id:"E", value:"year (average sales)" }
    ], on:{ onChange: prepareGrouping }},
    {}
  ]
};

var conjunto = {
  rows:[
    tgrafico,
    buttons
  ]
};

function prepareGrouping(){
  var select = $$("groupby").getValue();
  var mapAttr = "sales";         
  var by = (select == "A") ? "company" : "year";
  var mapOperation;               
  switch (select){
    case "A":
      mapOperation = "sum";
      break;
    case "B":
      mapOperation = "sum";
      break;
    case "C":
      mapOperation = "max";
      break;
    case "D":
      mapOperation = "min";
      break;
    case "E":
      mapOperation = getAverage;
      break;
  };
  group(by, mapAttr, mapOperation)
};

function group(by, attr, operation){
  $$("mychart").group({
    by:by,
    map:{
      sales:[attr, operation]
    }
  });
  $$("mychart").sort("id","asc","string");
};

function getAverage(prop, data){
  if (!data.length) return 0;
  var summ = 0;
  for (var i = data.length - 1; i >= 0; i--) {
    summ += prop(data[i])*1;
  };
  return summ/data.length;
};



// #B1 - TELA PRINCIPAL
var wPrincipal =
          { "id": "wPrincipal",
            "rows": [
                      wcombo,
                      windices,
                      //wPesquisa ,
                      conjunto,
                      wGridFor
                      /* {cols: 
                        [wGridFor, tgrafico]
                      }, */
                     
                      
                      
            ]

          };

// #C2
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

// #C3
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

// #C1
var wCorpo = {
      "id": "wCorpo",
      "height": 0,
      "type": "wide",
      "cols": [ 
                wBarraEsquerda
                ,      // #C2
                wPrincipal,    // #B1
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
                wBarraDireita ]} // #C3
      ]
    };

  



// 1 - PRINCPAL PARTE
var ui = {
    rows:[  wToolbar // #A1
          , wCorpo // #C1
          
            
         ]
    };

    // CHAMA WEBIX
    webix.ready(function(){

      if (webix.CustomScroll)
    		webix.CustomScroll.init();

      // SETA WEBIX PARA BR
      webix.i18n.setLocale("pt-BR");
      // ATIVA UI

     
      webix.ui({
        view:"popup",
        id:"win1",
        width:500,
        head:false,
        body:webix.copy(form)
      });
       
       webix.ui(ui);

       /* Inicializa form */
       var dtini = new Date();
       var dd = '01';
       var mm = String(dtini.getMonth() + 1).padStart(2, '0'); //January is 0!
       var yyyy = dtini.getFullYear();
      // alert(yyyy+' '+mm+' '+dd);
       $$("dtinicial").setValue(new Date(yyyy,mm - 1,dd));
       var periodo = dd + '/' + mm + '/' + yyyy;
       var hoje = new Date();
       var dd = String(hoje.getDate()).padStart(2, '0');
       var mm = String(hoje.getMonth() + 1).padStart(2, '0'); //January is 0!
       var yyyy = hoje.getFullYear();
       $$("dtfinal").setValue(new Date(yyyy,mm - 1,dd));
       periodo += ' TO ' + dd + '/' + mm + '/' + yyyy;


       var groupdata = [
         {"id":"1","sales":"262","year":"2003","company":"Company 3"},
         {"id":"2","sales":"527","year":"1998","company":"Company 1"},
         {"id":"3","sales":"629","year":"2006","company":"Company 3"},
         {"id":"4","sales":"403","year":"2008","company":"Company 2"},
         {"id":"5","sales":"652","year":"2005","company":"Company 3"},
         {"id":"6","sales":"708","year":"2006","company":"Company 3"},
         {"id":"7","sales":"377","year":"2006","company":"Company 2"},
         {"id":"8","sales":"714","year":"2004","company":"Company 3"},
         {"id":"9","sales":"385","year":"2000","company":"Company 3"},
         {"id":"10","sales":"113","year":"2002","company":"Company 3"},
         {"id":"11","sales":"215","year":"2004","company":"Company 2"},
         {"id":"12","sales":"149","year":"2003","company":"Company 1"},
         {"id":"13","sales":"391","year":"1996","company":"Company 3"},
         {"id":"14","sales":"234","year":"2006","company":"Company 2"},
         {"id":"15","sales":"847","year":"2003","company":"Company 3"},
       ];
       

       $$("wGridFor").parse(groupdata);  //tabela
       $$("mychart").parse(groupdata);  //grafico

}); 

    function showForm(winId, node){
      $$(winId).getBody().clear();
      $$(winId).show(node);
      $$(winId).getBody().focus();
    }

    