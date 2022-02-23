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

var wGraficoLocal = {
  "id": "wGraficoLocal",
  "type": "bar",
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
         { view:"button", width: 280, value:"Exportar para Excel", click:function(){
           webix.toExcel(
              [$$("wGridBling"),$$("wGridLocal"), $$("wGraficoBling"), $$("wGraficoLocal")],
              { filename: "My data" }
          );

         }},
         { view:"button", width: 280, value:"Exportar para PDF", click:function(){
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
               [wGridBling, wGraficoBling]
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

  webix.ui(ui);
    
  webix.ajax("http://localhost/tsweb/api/tsbling/buscaServicos?filters=dataEmissao[20/12/2021 TO 20/12/2021]; situacao[2]", function(text,data){
    //text = data.parcelas;
    var wJson = data.json();
  //  alert(wJson);
     $$("wGridBling").parse(wJson.notasServico[0]);
     $$("wGraficoBling").parse(wJson.notasServico[0]);
 });


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
      $$("wGridLocal").parse(vJsonGrid);  //tabela
      $$("wGraficoLocal").parse(vJsonGrid); 
      
  
});