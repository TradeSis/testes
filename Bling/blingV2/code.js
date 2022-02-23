var wTitulo = {
  "view": "label",
  "label": "Bling com Tabelas V2.",
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

var wGrid = {
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
      "sort": "string", adjust: true, footer:{ content:"summColumn" }
    }
  ],
  "select": true,
  "scrollX": false,
  
  //"url": "http://localhost/tsweb/php/buscaparcelas.php",
  //"url": "http://localhost/tsweb/api/dbmy/consultaParcelas",
  "id": "wGrid",
  "height": 0,
  //autoheight:true,
  //autowidth:true,
  
  footer:true
};

var wGrid2 = {
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
  
  
  "id": "wGrid2",
  "height": 0,
 
};

var wGrafico2 = {
  "id": "wGrafico2",
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
var wGrafico = {
  "id": "wGrafico",
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

var wexport =
({
   margin:5,
   rows:[
     {
       cols: [
         { view:"button", width: 280, value:"Exportar para Excel", click:function(){
           webix.toExcel(
              [$$("wGrid2"), $$("wGrafico"), $$("wGrafico2")],
              { filename: "My data" }
          );

         }},
         { view:"button", width: 280, value:"Exportar para PDF", click:function(){
          // var sel = $$("vJsonGrid").getSelectedId(true);// array of selected records
 
           webix.toPDF([$$("wGrid2"), $$("wGrafico"), $$("wGrafico2")], {
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
               [wGrid, wGrafico]
              },           
   ]

 };

 var wLinha2 =
 { "id": "wLinha2",
   "rows": [
              
             {cols: 
               [wGrid2, wGrafico2]
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
     $$("wGrid").parse(wJson.notasServico[0]);
     $$("wGrafico").parse(wJson.notasServico[0]);
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
      $$("wGrid2").parse(vJsonGrid);  //tabela
      $$("wGrafico2").parse(vJsonGrid); 
      
  
});