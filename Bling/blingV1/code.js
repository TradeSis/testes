var wTitulo = {
  "view": "label",
  "label": "Bling com Tabelas V1.",
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
  
  
  "id": "wGrid",
  "height": 0,
 
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
var wGrafico2 = {
  "id": "wGrafico2",
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

/* var wGrafico2 = {
  "id": "wGrafico2",
  "type": "bar",
  "value": "#numeroNFSe#",         
  "label": "#numeroNFSe#",
  "view": "chart",

  yAxis:{},
  xAxis:{
    lines:true,
    title:"numeroNFSe",
    template:"#cnpj#"                       
  }
}; */

var wexport =
({
   margin:5,
   rows:[
     {
       cols: [
         { view:"button", width: 280, value:"Exportar para Excel", click:function(){
           webix.toExcel(
              [$$("wGrid"), $$("wGrafico"), $$("wGrafico2")],
              { filename: "My data" }
          );

         }},
         { view:"button", width: 280, value:"Exportar para PDF", click:function(){
          // var sel = $$("vJsonGrid").getSelectedId(true);// array of selected records
 
           webix.toPDF([$$("wGrid"), $$("wGrafico"), $$("wGrafico2")], {
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
               [wGrafico2]
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
      $$("wGrid").parse(vJsonGrid);  //tabela
      $$("wGrafico").parse(vJsonGrid); 
      $$("wGrafico2").parse(vJsonGrid);
  
});