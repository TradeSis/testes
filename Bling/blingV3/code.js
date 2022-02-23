var wTitulo = {
  "view": "label",
  "label": "Bling com Tabelas V3.",
  "id": "wTitulo",
  "height": 0
};

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

// #B2 - TELA PRINCIPAL - PESQUISAS
var wPesquisa = {
  "id": "wPesquisa",
  "height": 100,
  "view": "form",
  "minHeight": 380,
  "autoheight": false,
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
             alert(conteudo);
             
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

var wGridBling = {
  "view": "datatable",
  autoConfig:true,
  "columns": [
    {
      "id": "numeroNFSe",
      "header": "numeroNFSe",
      "sort": "string", adjust: true
    },
    {
      "id": "cliente",
      "header": "cliente",
      "sort": "string", adjust: true
    },
    {
      "id": "clienteCNPJ",
      "header": "clienteCNPJ",
      "sort": "string", adjust: true
    },
    {
      "id": "dataEmissao",
      "header": "Dt Emissão",
      "sort": "string", adjust: true
    },
    {
      "id": "valorNota",
      "header": "valorNota",
      "sort": "string", adjust: true, footer:{ content:"summColumn" }              //Soma dos valores da tabela
    }
  ],
  "select": true,
  "scrollX": false,
  "id": "wGridBling",
  "height": 0,
  footer:true
};

var wGridLocal = {
  "view": "datatable",
  "columns": [
    {
      "id": "numeroNFSe",
      "header": "Numero NFSe",
      "sort": "string"
    },
    {
      "id": "cliente",
      "header": "cliente",
      "sort": "string"
    },
    {
      "id":"cnpj",
      "header":"Cliente CNPJ",
      "sort":"number"
    },
    {
      "id":"dataEmissao",
      "header":"Data de Emissão",
      "sort":"string"
    },
    {
      "id":"valorNota",
      "header":"Valor da Nota",
      "sort":"number"
    },
    
  ],
  "select": true,
  "scrollX": false,
  
  
  "id": "wGridLocal",
  "height": 0,
 
};

var wGraficoBling = {
  "id": "wGraficoBling",
  "type": "bar",
  "value": "#valorNota#",         
  "label": "#valorNota#",
  "view": "chart",

  yAxis:{},
  xAxis:{
    lines:true,
    title:"Faturamento",
    template:"#cliente#"                       
  }
};

var wGraficoBling2 = {
  "id": "wGraficoBling2",
  "type": "bar",
  "value": "#valorNota#",         
  "label": "#valorNota#",
  "view": "chart",

  yAxis:{},
  xAxis:{
    lines:true,
    title:"Cliente",
    template:"#cliente#"                       
  }
};

var wGraficoLocal = {
  "id": "wGraficoLocal",
  "type": "pie3D",
  "value": "#valorNota#",         
  "label": "#valorNota#",
  "view": "chart",

  yAxis:{},
  xAxis:{
    lines:true,
    title:"numeroNFSe",
    template:"#cliente#"                       
  }
};


var wexport =
({
   margin:5,
   rows:[
     {
       cols: [
         { view:"button", width: 200, value:"Exportar para Excel", click:function(){
           webix.toExcel(
              [$$("wGridBling"),$$("wGridLocal"), $$("wGraficoBling"), $$("wGraficoLocal")],
              { filename: "My data" }
          );

         }},
         { view:"button", width: 200, value:"Exportar para PDF", click:function(){
          // var sel = $$("vJsonGrid").getSelectedId(true);// array of selected records
 
           webix.toPDF([$$("wGridBling"),$$("wGridLocal"), $$("wGraficoBling"), $$("wGraficoLocal")], {
              filename: "datatable"
          });
           
           
         }},
       ]
     },
   ]
 }); 
       

  var wLinha =
 { "id": "wLinha",
   "rows": [
              
             {cols: 
               [wGridBling, wGraficoBling, wGraficoBling2]
              },           
   ]

 };

 var wLinha2 =
 { "id": "wLinha2",
   "rows": [
              
             {cols: 
               [wGridLocal, wGraficoLocal]
              },           
   ]

 };


var ui = {
  rows:[  
      wToolbar,
      wPesquisa,
        wexport,
         wLinha,
         wLinha2
         
         
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
     

     executa(periodo);
    

     
  });

  function showForm(winId, node){
    $$(winId).getBody().clear();
    $$(winId).show(node);
    $$(winId).getBody().focus();
  }

  function executa(wvar){
  webix.ajax("/ts/api/tsbling/buscaServicos?filters=dataEmissao["+wvar+"]; situacao[2]", function(text,data){
    //text = data.parcelas;
    var wJson = data.json();
  //  alert(wJson);
     $$("wGridBling").clearAll();
     $$("wGridBling").parse(wJson.notasServico[0]);
     
     $$("wGraficoBling").clearAll();
     $$("wGraficoBling").parse(wJson.notasServico[0]);


     //***************** */
     var JsonOriginal = wJson.notasServico[0];
     vjsonBling = [];
     var index = 0;
     var i = 0;
     for(i in JsonOriginal) {
      //alert("CAMPO= "+JSON.stringify(JsonOriginal[i], null, 4));
      index = vjsonBling.findIndex(x => x.cliente == JsonOriginal[i].cliente);
     // alert(index);

      var vValorNota = parseFloat(JsonOriginal[i].valorNota)
      
              if (index == -1) {
                        
                vjsonBling.push({ "cliente": JsonOriginal[i].cliente,     //n achou criar um registro no vJsonBlig
                                  "valorNota": vValorNota});

              
              } else {
                
                vjsonBling[index].valorNota += vValorNota; //

              }
     };

     
     //alert("RESULTADO= "+JSON.stringify(vjsonBling, null, 4));
     $$("wGraficoBling2").clearAll();
     $$("wGraficoBling2").parse(vjsonBling);


  var vJsonGrid = 
      [
          {
              "numeroNFSe":202200000000005,
              "cliente":"DREBES & CIA LTDA",
              "cnpj": 96662168000131,
              "dataEmissao": "2022-01-03",
              "valorNota": 10332.00
          },
          {
            "numeroNFSe":202200000000005,
            "cliente":"DREBES & CIA LTDA",
            "cnpj": 96662168000131,
            "dataEmissao": "2022-01-03",
            "valorNota": 12000.00
         },
         {
            "numeroNFSe": 202200000000005,
            "cliente":"DREBES & CIA LTDA",
            "cnpj": 96662168000131,
            "dataEmissao": "2022-01-03",
            "valorNota": 1400.00
          },
          {
            "numeroNFSe":202200000000005,
            "cliente":"DREBES & CIA LTDA",
            "cnpj": 96662168000131,
            "dataEmissao": "2022-01-03",
            "valorNota": 2100.00
          },
          {
            "numeroNFSe":202200000000005,
            "cliente":"DREBES & CIA LTDA",
            "cnpj": 96662168000131,
            "dataEmissao": "2022-01-03",
            "valorNota": 2620.80
        }

      ];
      $$("wGridLocal").clearAll();
      $$("wGridLocal").parse(vJsonGrid);  //tabela

      $$("wGraficoLocal").clearAll();
      $$("wGraficoLocal").parse(vJsonGrid); 
      
  
});
  }
