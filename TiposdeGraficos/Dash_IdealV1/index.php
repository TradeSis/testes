<!--#1 - Chamada html, direcionando para webix, css e jquery-->
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<script src="/ts/js/jquery/jquery.min.js" type="text/javascript"></script>	
	<script type="text/javascript"          src="/ts/js/webix/codebase/webix.min.js"></script>

	<link rel="stylesheet" type="text/css" href="/ts/js/webix/codebase/skins/flat.min.css">


	<style>
		</style>

	<script>
//#2 - Chamada do ajax!
var wURL = '';

function chamaAJAX(wURL,wType="get",wdataType="json") {
    var res = [];

    $.ajax({
			url: wURL,
			type: wType,
			async: false,

			dataType: wdataType,
		
			success: function (json_get) {
				res = json_get;
				
			},
			error: function (xhr, status, errorThrown) {

				alert("errorThrown=" + errorThrown);
			}
		})
		return res;
	}

// #A2 - TITULO
var wTitulo = {
          "view": "label",
          "label": "Dash com 3 Graficos",
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



var wcombo ={
   "rows":[
     {
     
			"view": "toolbar",
			"cols": [
				{ "view": "label", "label": "Seleção de MAIOR e menor" },
				{ view:"combo", width:300,
      label: 'Ano',  name:"ano",

      //options: executa()
      },

      { view:"button", width: 120, align: "center", value:"Seleciona", click:function(){
        var wpar = this.getParentView().getValues();
        wpar = wpar.ano;
     //  alert (wpar);
        executa(wpar); 
       
    }},
    
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

var wgrafico1 = {
  id:"wgrafico1",
  view:"chart",
  type:"bar",
  value:"#vlrano1#",   //Dados que irão para barra
  label:"#vlrano1#",  //Dados em cims da barra, mostrando os valores
  color:"#36abee",
  radius:0,
  barWidth:40,
  height:300,
  tooltip:{
    
    template:"#ano#"      //mostar os dados quando passar o cursor
  },
  xAxis:{
    title:"Total de Vendas",
    template:"'#mes#",  //Dados em baixo da barra(ex.mes)
    lines: false
  },
  padding:{
    left:10,
    right:10,
    top:50
  },
  //data:dataset_colors
};

 var buttons = {
  cols:[
    {},
    { view:"button", value:"Show all", width:140, click:function(){
    	$$('wgrafico1').filter();
    } },
    { view:"button", value:"Vendas < 20000.00", width:140, click:filter1 },
    { view:"button", value:"Vendas > 20000.00", width:140, click:filter2 },
    { view:"button", value:"Meses > 6", width:140, click:filter3 },
    { view:"button", value:"Meses < 7", width:140, click:filter4 },
    {}
  ]
}; 

function filter1(){
  $$('wgrafico1').filter(function(obj){
    return obj.vlrano1 < 20000.00;
  });
};

function filter2(){
  $$('wgrafico1').filter(function(obj){
    return obj.vlrano1 > 20000.00;
  });
};

function filter3(){
  $$('wgrafico1').filter(function(obj){
    return obj.mes <= 6;
  });
};

function filter4(){
  $$('wgrafico1').filter(function(obj){
    return obj.mes >= 7;
  });
}; 

//********************************************************************************************parada02 */
var wgrafico2 = ({
          id:"wgrafico2",
          view:"chart",
        // width:900,
          //height:250,
          type:"bar",
          barWidth:60,
          radius:2,
          
          gradient:"rising",
          xAxis:{
            title:"Vendas 2021",
            template:"'#mes#"
          },
          yAxis:{
            start:0,
            step:10,
            //end:100
          },
          legend:{
            values:[{text:"2021",color:"#36abee"}],
            valign:"middle",
            align:"right",
            width:90,
            layout:"y"
          },
          series:[
            {
              value:"#vlrano1#",
              color: "#58dccd",
              tooltip:{
                template:"#vlrano1#"
              }
            },
            {
              value:"#vlrano1#",
              color:"#a7ee70",
              tooltip:{
                template:"#vlrano1#"
              }
            },
            {
              value:"#vlrano3#",
              color:"#36abee",
              tooltip:{
                template:"#vlrano1#"
              }
            }
          ],
       
});

//***************************************************************************************************** */
var Graficos = {
  "id": "Graficos",
  margin:10,
    "cols":[
      {rows:
          [wgrafico1, buttons]
      }
]
    };
var Graficos2 = {
  "id": "wgrafico2",
  margin:10,
    "cols":[
      {rows:
          [wgrafico2]
      }
]
    };

var wgrafico3 = {
  id: "wgrafico3",
  view: "chart",
  type:"pie3D", //donut
  value:"#vlrano1#",
  tooltip:{
                template:"#vlrano2#"
              },
   //color:"#36abee",
  
  legend:{
    width: 75,
    align:"right",
    valign:"middle",
    template:"#mes#"
  },
  pieInnerText:"#vlrano1#",
  shadow:0,
  gradient:true,
  height:300,
 // width:400, 

};


 

/* DATATABLE parcelas */
const table_tarefas = {                 
    view:"datatable", 
    id:"table_tarefas",
    scroll:"y",
    select:true,
    hover:"myhover",
    save: "/ts/testes/TiposdeGraficos/Dash_IdealV1/save.php",

    columns:                           
        [
            {
              "id": "ano",                     
              "header": "ano",
              "sort": "string"
            },
            {
              "id": "mes",
              "header": "mes",
              "sort": "string"
            },
            {
              "id": "vlrVendas",
              "header": "Valor Vendas",
              "sort": "string"
            },
            {
              "id": "qtdVendas",
              "header": "Quantidade de Vendas",
              "sort": "string" 
            }
          ,       
        { header:"", template:"<span class='webix_icon wxi-close delete_icon'></span>", width:35}
    ],
    onClick:{
        delete_icon(e, id){
        this.remove(id);
        return false;
        }
    },
    on:{
		onItemDblClick(id, e, node) {
			/** PEGA valores do datatable */
			let values = $$("table_tarefas").getItem(id);  
		},
        onAfterSelect(id){
			
		   webix.message("Click on row: " + id.row+", column: " + id.column);
            	
        }
    }
}
// #B1 - TELA PRINCIPAL
var wPrincipal =
          { "id": "wPrincipal",
            "rows": [ wcombo,
                      windices,
                      
                     
                      {cols: 
                        [Graficos, wgrafico3]                         //# 8- Modificação!
                      }   ,    
					  {cols: 
                        [table_tarefas, Graficos2]                         //# 8- Modificação!
                      }
            ]

          };

var wBarraEsquerda =
      {
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
                wBarraEsquerda,      
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
  responsive:true, 
    rows:[  wToolbar // #A1
          , wCorpo   // #C1
         ]
    };

// CHAMA WEBIX
webix.ready(function(){

if (webix.CustomScroll)
      webix.CustomScroll.init();

// SETA WEBIX PARA BR
webix.i18n.setLocale("pt-BR");

 //webix.ui.fullScreen();
 webix.ui(ui);


   executa();
   
});

function showForm(winId, node){
$$(winId).getBody().clear();
$$(winId).show(node);
$$(winId).getBody().focus();
}


function executa(wano){

 //alert ("periodo selecionado: " + wano);

  wJson = chamaAJAX("/ts/testes/TiposdeGraficos/Dash_IdealV1/leitura.php");                         
  
  alert(JSON.stringify(wJson, null, 4));

  $$("table_tarefas").clearAll();
  $$("table_tarefas").parse(wJson.DashServicos);                                                   

    var JsonOriginal = wJson.DashServicos;
     vjsonBling = [];

alert(JsonOriginal);

     var index = 0;

     var i = 0;
    
     var wTotal = 0;

     for(i in JsonOriginal) {
      
      if(JsonOriginal[i].ano != wano){
        continue;
      };

      index = vjsonBling.findIndex(x => x.mes == JsonOriginal[i].mes); 
       //alert(index);
      var vValor = parseFloat(JsonOriginal[i].vlrVendas);
     
  

              if (index == -1 ) {
                

                    vjsonBling.push({ "mes": JsonOriginal[i].mes,     
                                      "ano": JsonOriginal[i].ano,
                                      "vlrano1": vValor});

              
              } else {
                  
                   vjsonBling[index].vlrano1 += vValor; 
                   
              }     
              };
     

console.log("NOVO JSON= "+JSON.stringify(vjsonBling, null, 4));

     $$("wgrafico1").clearAll();                                      
     $$("wgrafico1").parse(vjsonBling) ;
     
     $$("wgrafico2").clearAll();                                      
     $$("wgrafico2").parse(vjsonBling) ;

     $$("wgrafico3").clearAll();                                      
     $$("wgrafico3").parse(vjsonBling) ;
};


</script>


</head>
<body></body>
</html>