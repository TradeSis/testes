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

var JsonEntrada = {};

var Xanos = {};




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
          "label": "Dashboard",
          "id": "wTitulo",
          "height": 0
        };

// #A1 - BARRA DE TAREFAS SUPERIOR
var wToolbar = {
          "id": "wToolbar",
          "height": 44,
          "view": "toolbar",
          "css": "webix_dark",
          "padding": {
            "right": 20,
            "left": 20
          },
          "elements": [
               wTitulo // #A2
               ,
               { view:"combo", width:300, id:"wcombo", label: 'Ano',  name:"ano"},

                { view:"button", width: 120, align: "center", value:"Seleciona", click:function(){
                  //JSON.stringify( this.getParentView().getValues()); - Olhar a variavel transformada em Json
                  var wpar = this.getParentView().getValues();
                  wpar = wpar.ano;

                  carregaGraficoVendasPorMes(wpar, JsonEntrada);
                
              }}

          ]

        };



var windices1 = {
			"label": "Total",
			"view": "fieldset",
      
			"body": {
				"view": "form",
        borderless:true, 
				"autoheight": true,
        "disabled": true,
				"rows": [
					{ "view": "text", "label": "Realizado", "id": "wvlrRealizado", format:"R$ 11111.111,00" },
					{ "view": "text", "label": "Meta", "id": "wvlrMeta" ,format:"R$ 11111.111,00"}
				]
			}
		};

var windices2 = {
			"label": "Média",
			"view": "fieldset",
    
			"body": {
				"view": "form",
        borderless:true, 
				"autoheight": true,
				"rows": [
					{ "view": "text", "label": "Mensal", "id": "wvlrmedMensal" ,"disabled": true, format:"R$ 11111.111,00"},
					{ "view": "text", "label": "Anual", "id": "wvlrmedAnual" , format:"R$ 11111.111,00"}
				]
			}
		};

var windices = {
			"label": "Faturamento",
			"view": "fieldset",
     
			"body": {
				"view": "form",
				"autoheight": true,
        borderless:true, 
				"cols": [
					windices1,
					windices2
				]
			}
		};


var graf_Total = {
          id:"graf_Total", 
          view:"chart",
          height:300,
          type:"bar",
          barWidth:60,
          radius:2,
          gradient:"rising",
          xAxis:{
            template:"#mes#",
            
          },
          yAxis:{
            start:0,
            step:10,
            //end:100
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
                 
  };

  var graf_linha = {
  id: "graf_linha",
  view:"chart",
          height:300,
          type:"line",
          barWidth:60,
          radius:2,
          gradient:"rising",
         /* xAxis:{
            template:"#MesAno#"
          },*/
          yAxis:{
            start:0,
            step:10,
            //end:100
          },
          series:[
            {
              value:"#VTotal#",
              color: "#5fe05b",
              tooltip:{
                template:"#MesAno# #VTotal#"
              },
              line:{
                color:"#5fe05b"
              }
              
            }
          ],
        };

var graf_pizza = {
        id: "graf_pizza",
        height:300,
        view: "chart",
        type:"pie3D", //donut
        value:"#ValorTotal#",
      
        
        label:"#ano#",
        //pieInnerText:"#ValorTotal#",
        pieInnerText:function(obj){ return webix.i18n.numberFormat(obj.ValorTotal);},
        
        tooltip:{
                      template:"#ano#"
                    },
        //color:"#36abee",
        
        legend:{
          width: 75,
          align:"right",
          valign:"middle",
          template:"#ano#"
        },
        //pieInnerText:function(obj){ return obj.Xanos},
        //pieInnerText:"#ano#",
        shadow:0,
        gradient:true,
        //height:300,
};
       



/* DATATABLE parcelas */
const table_tarefas = {                 
    view:"datatable", 
    id:"table_tarefas",
    height:600,
    scroll:"y",
    select:true,
    hover:"myhover",
    save: "/ts/testes/Dashboard/NotaVendaCompleto/save.php",

    columns:                           //# 1- Modificação!
        [
          {
              "id": "empresa",                     
              "header": "empresa",
              "sort": "string"
            },
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
              "header": "vlrVendas",
              "sort": "string" ,
              format:"R$ 11111.111,00"
            },
            {
              "id": "qtdVendas",
              "header": "qtdVendas",
              "sort": "string" 
            },{
              "id": "vlrImpostos",
              "header": "Impostos",
              "sort": "string" 
            }
    ],
    on:{
		onItemDblClick(id, e, node) {

			/** PEGA valores do datatable */
			let values = $$("table_tarefas").getItem(id);       //# 5- Modificação!

            //showForm("win_parcelas", this.$view);
			/** MOSTRA form_parcelas */
			  showForm("win_tarefas");
			
			
            $$("form_tarefas").setValues(values);

		},
        onAfterSelect(id){
			
		   webix.message("Click on row: " + id.row+", column: " + id.column);
            	
        }
    }
}
// #B1 - TELA PRINCIPAL
var wPrincipal =
          {
             "id": "wPrincipal",
           
            "rows": [ 
                      {view: "scrollview",
                       
                       scroll: "y",
                      
                        body:{ "type": "wide", "rows": [
                                    windices,
                                    {
                                        "label": "Evolução mes a mes",
                                        "view": "fieldset",
                                        "body":  graf_linha
                                    },
                                    {"type": "clean", cols:[
                                            {
                                              "label": "Comparativo mes a mes",
                                              "view": "fieldset",
                                              "body":  graf_Total
                                          },  
                                          {
                                          "label": "Totais por ano",
                                              "view": "fieldset",
                                              "body":   graf_pizza
                                          }                                       
                                         
                                          ]
                                    },
                                    {
                                          "label": "Vendas mensais",
                                              "view": "fieldset",
                                              "body":   table_tarefas
                                          }  
                                     
                                  ]
                              }
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
    //  "height": 0,
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

      

      

      JsonEntrada = carregaJson();
      //alert("CAMPO= "+JSON.stringify(JsonEntrada, null, 4));

      Xanos = carregaAnos(JsonEntrada);
     // alert(Xanos);
      //alert("CAMPO= "+JSON.stringify(Xanos , null, 4));
      
      $$("wcombo").define({
            options:Xanos
      });

      $$("wcombo").refresh();

      carregaTableVendas(JsonEntrada);

      carregaGraficoLinha(JsonEntrada);

      carregaGraficoBarras(JsonEntrada);

      carregaGraficoPizza(JsonEntrada)

      

      

      
        
});

function showForm(winId, node){
$$(winId).getBody().clear();
$$(winId).show(node);
$$(winId).getBody().focus();
}

function carregaJson(){
  wJson = chamaAJAX("/ts/testes/Dashboard/NotaVendaCompleto/leitura.php"); 
  
  

  return wJson;
};

function carregaTableVendas(wJson){
  $$("table_tarefas").clearAll();
  $$("table_tarefas").parse(wJson.notaVenda);
};
//GRAFICOS

//GRAFICO DE LINHA
function carregaGraficoLinha(JsonEntrada){
 
 var JsonOriginal = JsonEntrada.notaVenda;
  vjsonLinha = [];
 
  var index = 0;
  var i = 0;
 
  for(i in JsonOriginal) {
   //alert("CAMPO= "+JSON.stringify(JsonOriginal[i], null, 4));
 
   var AnoMes = JsonOriginal[i].mes + '/' + JsonOriginal[i].ano;
 
   index = vjsonLinha.findIndex(x => x.MesAno == AnoMes); // TESTA SE EXISTE
    //alert(index);
   var vValor = (JsonOriginal[i].vlrVendas);
   
   
 
  //  alert("Mes="+JsonOriginal[i].mes+" Ano="+JsonOriginal[i].ano+" Valor="+vValor);
 
 
           if (index == -1 ) {
             
 
            vjsonLinha.push({
                   //nome da estrutura/variavel
                                   "MesAno": AnoMes,
                                   "VTotal": vValor
                                });
 
           
           } else {
               
                //
                vjsonLinha[index].VTotal += vValor;
           }
  };
 
 
 console.log("NOVO JSON= "+JSON.stringify(vjsonLinha, null, 4));
  
  $$("graf_linha").clearAll();                                      
  $$("graf_linha").parse(vjsonLinha) ;
 
 };
//GRAFICO DE BARRAS

function carregaGraficoBarras(JsonEntrada){

var JsonOriginal = JsonEntrada.notaVenda;
 vjsonBarras = [];

 var index = 0;
 var i = 0;

 var wTotal = 0;

 for(i in JsonOriginal) {
  //alert("CAMPO= "+JSON.stringify(JsonOriginal[i], null, 4));

  index = vjsonBarras.findIndex(x => x.mes == JsonOriginal[i].mes); // TESTA SE EXISTE
   //alert(index);
  var vValor = (JsonOriginal[i].vlrVendas);
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
            

                vjsonBarras.push({ "mes": JsonOriginal[i].mes,     //n achou, criar um registro novo vJsonBlig
                                  "ano": JsonOriginal[i].ano,
                                  "vlrano1": vvlrano2019,
                                  "vlrano2": vvlrano2020,
                                  "vlrano3": vvlrano2021});

          
          } else {
              
               vjsonBarras[index].vlrano1 += vvlrano2019; //Acumula valores
               vjsonBarras[index].vlrano2 += vvlrano2020; //
               vjsonBarras[index].vlrano3 += vvlrano2021; //
                
          }
 };


console.log("NOVO JSON= "+JSON.stringify(vjsonBarras, null, 4));

 $$("graf_Total").clearAll();                                      
 $$("graf_Total").parse(vjsonBarras) ;
};
//GRAFICO DE PIZZA

function carregaGraficoPizza(JsonEntrada){

var JsonOriginal = JsonEntrada.notaVenda;
 vjsonPizza = [];

 var index = 0;
 var i = 0;

 var wTotal = 0;

 for(i in JsonOriginal) {
  //alert("CAMPO= "+JSON.stringify(JsonOriginal[i], null, 4));

  index = vjsonPizza.findIndex(x => x.ano == JsonOriginal[i].ano); // TESTA SE EXISTE
   //alert(index);
  var vValor = parseFloat(JsonOriginal[i].vlrVendas);
  var vvlrano2019 = 0;
  var vvlrano2020 = 0;
  var vvlrano2021 = 0;

 //  alert("Mes="+JsonOriginal[i].mes+" Ano="+JsonOriginal[i].ano+" Valor="+vValor);


          if (index == -1 ) {
            

                vjsonPizza.push({     
                                  "ano": JsonOriginal[i].ano,
                                  "ValorTotal":vValor});

          
          } else {
              
               vjsonPizza[index].ValorTotal += vValor; //
                
          }
 };


console.log("NOVO JSON= "+JSON.stringify(vjsonPizza, null, 4));

 

 $$("graf_pizza").clearAll();                                      
 $$("graf_pizza").parse(vjsonPizza) ;

 
};

function carregaAnos(JsonEntrada){

    var wqtdAnos  = 0;
    var wqtdMeses = 0;
    var wvlrRealizado = 0;
    var wmedMensal = 0;
    var wmedAnual = 0;

    var JsonOriginal = JsonEntrada.notaVenda;
    vjsonBling3 = [];

     var index = 0;
     var i = 0;
    
     var wTotal = 0;

     var ano = 0;
     var vValor = 0.00;

    // alert("JSON ORIGINAL= "+JSON.stringify(JsonOriginal, null, 4));
        for(i in JsonOriginal) {
              var vValor = (JsonOriginal[i].vlrVendas);
           
              wvlrRealizado = wvlrRealizado + vValor;
              wqtdMeses = wqtdMeses + 1;

                    index = vjsonBling3.findIndex(x => x.id == JsonOriginal[i].ano); //Testa se a varialvel id é igual a JsonOriginal.
                 
                    if (index == -1 ) {
                              
                              wqtdAnos = wqtdAnos + 1;
                              vjsonBling3.push({
                                                "id": JsonOriginal[i].ano
                                              
                                                
                                                });
                                               
                        } 
        };
    
    
    wmedMensal = wvlrRealizado / wqtdMeses;
    wmedAnual  = wvlrRealizado / wqtdAnos;

    
   
    $$("wvlrRealizado").setValue(wvlrRealizado);
    $$("wvlrmedAnual").setValue(wmedAnual);
    $$("wvlrmedMensal").setValue(wmedMensal);
    

    return vjsonBling3;
};



</script>


</head>
<body></body>
</html>