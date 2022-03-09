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
     //"css": "webix_dark",
			"view": "toolbar",
			"cols": [
				{ "view": "label", "label": "Seleção de MAIOR e menor" },
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
              value:"#vlrano2#",
              color:"#a7ee70",
              tooltip:{
                template:"#vlrano2#"
              }
            },
            {
              value:"#vlrano3#",
              color:"#36abee",
              tooltip:{
                template:"#vlrano3#"
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
  value:"#vlrano2#",
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
  pieInnerText:"#vlrano2#",
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
    save: "/ts/testes/Dashboard/DashBoardcom3Graficos/save.php",

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


function executa(wvar){

// alert ("periodo selecionado: " + wvar);
  wJson = chamaAJAX("/ts/testes/Dashboard/DashBoardcom3Graficos/leitura.php");                         
  
  //alert(JSON.stringify(wJson, null, 4));

  $$("table_tarefas").clearAll();
  $$("table_tarefas").parse(wJson.DashServicos);                                                 

    var JsonOriginal = wJson.DashServicos;
     vjsonBling = [];

     var index = 0;
     var i = 0;
    
     var wTotal = 0;

     for(i in JsonOriginal) {
      //alert("CAMPO= "+JSON.stringify(JsonOriginal[i], null, 4));

      index = vjsonBling.findIndex(x => x.mes == JsonOriginal[i].mes); // TESTA SE EXISTE
       //alert(index);
      var vValor = parseFloat(JsonOriginal[i].vlrVendas);
      var vvlrano2019 = 0;
      var vvlrano2020 = 0;
      var vvlrano2021 = 0;

     //  alert("Mes="+JsonOriginal[i].mes+" Ano="+JsonOriginal[i].ano+" Valor="+vValor);
       if (JsonOriginal[i].ano=="2019") {
                      vvlrano2019 = vValor;                   
                  }
       if (JsonOriginal[i].ano=="2020") {
                      vvlrano2020 = vValor;                   
       }
       if (JsonOriginal[i].ano=="2021") {
              vvlrano2021 = vValor;  
              
              wTotal += vValor;

       }

              if (index == -1 ) {
                

                    vjsonBling.push({ "mes": JsonOriginal[i].mes,     //n achou, criar um registro novo vJsonBlig
                                      "ano": JsonOriginal[i].ano,
                                      "vlrano1": vvlrano2019,
                                      "vlrano2": vvlrano2020,
                                      "vlrano3": vvlrano2021});

              
              } else {
                  
                   vjsonBling[index].vlrano1 += vvlrano2019; //
                   vjsonBling[index].vlrano2 += vvlrano2020; //
                   vjsonBling[index].vlrano3 += vvlrano2021; //
                    
              }
     };
 
          //alert(wTotal);***** ******************************************************
          var JsonOriginal = wJson.DashServicos;
     vjsonBling3 = [];

     var index = 0;
     var i = 0;
    
     var wTotal = 0;

     for(i in JsonOriginal) {
      //alert("CAMPO= "+JSON.stringify(JsonOriginal[i], null, 4));

      index = vjsonBling3.findIndex(x => x.mes == JsonOriginal[i].mes); // TESTA SE EXISTE
       //alert(index);
      var vValor = parseFloat(JsonOriginal[i].vlrVendas);
      
      var vvlrano2020 = 0;
      

     //  alert("Mes="+JsonOriginal[i].mes+" Ano="+JsonOriginal[i].ano+" Valor="+vValor);
       
       if (JsonOriginal[i].ano=="2020") {
                      vvlrano2020 = vValor;                   
       }
       

              if (index == -1 ) {
                

                    vjsonBling3.push({ "mes": JsonOriginal[i].mes,     //n achou, criar um registro novo vJsonBlig
                                      "ano": JsonOriginal[i].ano,
                                      
                                      "vlrano2": vvlrano2020});

              
              } else {
                  
                   
                   vjsonBling3[index].vlrano2 += vvlrano2020; //
                  
                    
              }
     };
     //********************************************************************************************************************** */
     var JsonOriginal = wJson.DashServicos;
     vjsonBling2 = [];

     var index = 0;
     var i = 0;
    
     var wTotal = 0;

     for(i in JsonOriginal) {
      //alert("CAMPO= "+JSON.stringify(JsonOriginal[i], null, 4));

      index = vjsonBling2.findIndex(x => x.mes == JsonOriginal[i].mes); // TESTA SE EXISTE
       //alert(index);
      var vValor = parseFloat(JsonOriginal[i].vlrVendas);
      
      var vvlrano2021 = 0;
      

     //  alert("Mes="+JsonOriginal[i].mes+" Ano="+JsonOriginal[i].ano+" Valor="+vValor);
       
       if (JsonOriginal[i].ano=="2021") {
                      vvlrano2021 = vValor;                   
       }
       

              if (index == -1 ) {
                

                    vjsonBling2.push({ "mes": JsonOriginal[i].mes,     //n achou, criar um registro novo vJsonBlig
                                      "ano": JsonOriginal[i].ano,
                                      
                                      "vlrano3": vvlrano2021});

              
              } else {
                  
                   
                   vjsonBling2[index].vlrano3 += vvlrano2021; //
                  
                    
              }
     };

console.log("NOVO JSON= "+JSON.stringify(vjsonBling, null, 4));

     $$("wgrafico1").clearAll();                                      
     $$("wgrafico1").parse(vjsonBling) ;
    
     $$("wgrafico2").clearAll();                                      
     $$("wgrafico2").parse(vjsonBling2) ;

     $$("wgrafico3").clearAll();                                      
     $$("wgrafico3").parse(vjsonBling3) ;
}

</script>


</head>
<body></body>
</html>