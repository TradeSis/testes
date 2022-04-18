
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




var ui= ({
  
    view: "scrollview",
    scroll: "y",
    body: {

    cols:[//PRINCIPAL #A1
          { //A2
                rows: [//B1
        
                          { height:0,
                            rows:[
                              wTitulo = { 
                                  "view": "label",
                                  "label": "Dashboard",
                                  "id": "wTitulo",
                                  "height": 0
                                
                              },
                              {
                                "id": "wToolbar",
                                "height": 34,
                                "view": "toolbar",
                                "css": "webix_dark",
                                      "padding": {
                                        "right": 20,
                                        "left": 20
                                      },
                                      "elements": [wTitulo
                                      ]
                              }
                            ]
                          },

                          {
                            
                              "rows":[
                                {
                                
                                 "view": "toolbar",
                                 "cols": [
                                   { "view": "label", "label": "Nota Venda Completo" },
                           
                                   { view:"combo", width:300, id:"wcombo",
                                 label: 'Ano',  name:"ano"
                           
                                 
                                },
                           
                                 { view:"button", width: 120, align: "center", value:"Seleciona", click:function(){
                                   //JSON.stringify( this.getParentView().getValues()); - Olhar a variavel transformada em Json
                                   var wpar = this.getParentView().getValues();
                                   wpar = wpar.ano;
                           
                                   carregaGraficoVendasPorMes(wpar, JsonEntrada);
                                  
                               }},
                               
                                  ] 
                            }]
                           
                          },

                          {
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
                          },
                          
                          {//#A2 
                            
                            rows:[
                              { 

                                id: "graf_linha",
                                view:"chart",
                                        height:300,
                                        type:"line",
                                        barWidth:60,
                                        radius:2,
                                        gradient:"rising",
                                        xAxis:{
                                          template:"'#MesAno#"
                                        },
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
                                              template:"#VTotal#"
                                            },
                                            line:{
                                              color:"#5fe05b"
                                            }
                                            
                                          }
                                        ],

                                                            },
                                                              
                                                          ]
                          },//#A2
                            
                                
          {//A3
            height:500,
              cols:[//#C1

                        { //a31
                          "cols": [{

                            id:"graf_Total", 
                            view:"chart",
                            height:300,
                            type:"bar",
                            barWidth:60,
                            radius:2,
                            gradient:"rising",
                            xAxis:{
                              template:"'#mes#",
                              
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

                        }] 
                      },//a31



                        {//a32
                          "cols": [{

                            id: "graf_pizza",
                            view: "chart",
                            type:"pie3D", //donut
                            value:"#ValorTotal#",
                            label:"#ano#",
                            pieInnerText:"#ValorTotal#",
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

                        }] 
                      },//a32

              ]//#C1
              },//A3,

              { height:500,
                rows:[
                  { //#A4

                        view:"datatable", 
                        id:"table_tarefas",
                        scroll:"y",
                        select:true,
                        hover:"myhover",
                        save: "/ts/testes/Dashboard/NotaVenda/save.php",

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
                                  "sort": "string" 
                                },
                                {
                                  "id": "qtdVendas",
                                  "header": "qtdVendas",
                                  "sort": "string" 
                                },
                              
                            { header:"", template:"<span class='webix_icon wxi-close delete_icon'></span>", width:35}
                        //{ template:"<input class='delbtn' type='button' value='Delete'>", width:100 }
                        ]

                  },//#A4
                    
                ]
              },
              
             

                      ]//B1

            },//A2
          
    ]//PRINCIPAL #A1


    }
     
  });


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
wJson = chamaAJAX("/ts/testes/Dashboard/NotaVenda/leitura.php"); 
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
var vValor = parseFloat(JsonOriginal[i].vlrVendas);



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
                              "ValorTotal":vValor,});

      
      } else {
          
           vjsonPizza[index].ValorTotal += vValor; //
            
      }
};


console.log("NOVO JSON= "+JSON.stringify(vjsonPizza, null, 4));



$$("graf_pizza").clearAll();                                      
$$("graf_pizza").parse(vjsonPizza) ;


};

function carregaAnos(JsonEntrada){

var JsonOriginal = JsonEntrada.notaVenda;
vjsonBling3 = [];

 var index = 0;
 var i = 0;

 var wTotal = 0;

 var ano = 0;
 
 //alert("JSON ORIGINAL= "+JSON.stringify(JsonOriginal, null, 4));
    for(i in JsonOriginal) {
  
                index = vjsonBling3.findIndex(x => x.id == JsonOriginal[i].ano); //Testa se a varialvel id é igual a JsonOriginal.
             
                if (index == -1 ) {
                          

                          vjsonBling3.push({
                                            "id": JsonOriginal[i].ano
                                          
                                            
                                            });
                                           
                    } 
    };
    

    //.....
    return vjsonBling3;
};
    
        
    
   

