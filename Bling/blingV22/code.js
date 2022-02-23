var wTitulo = {
  "view": "label",
  "label": "Bling com Tabelas V2.2",
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
      "id": "fornecedor",
      "header": "fornecedor",
      "sort": "string", adjust: true
    },
    {
      "id": "cliente",
      "header": "cliente",
      "sort": "string", adjust: true
    },
    {
      "id": "cpf",
      "header": "cpf",
      "sort": "string", adjust: true
    },
    {
      "id": "loja",
      "header": "loja",
      "sort": "string", adjust: true
    },
    {
      "id": "valor",
      "header": "valor",
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
      "id": "loja",
      "header": "loja",
      "sort": "string"
    },
    {
      "id":"cliente",
      "header":"cliente",
      "sort":"number"
    },
    {
      "id":"dataEmissao",
      "header":"Data de Emissão",
      "sort":"string"
    },
    {
      "id":"valor",
      "header":"Valor",
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
  "value": "#valor#",         
  "label": "#valor#",
  "view": "chart",

  yAxis:{},
  xAxis:{
    lines:true,
    title:"numeroNFSe",
    template:"#loja#"                       
  }
};
var wGrafico = {
  "id": "wGrafico",
  "type": "bar",
  "value": "#valor#",         
  "label": "#valor#",
  "view": "chart",

  yAxis:{},
  xAxis:{
    lines:true,
    title:"Valor comprado por cliente",
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
              [$$("wGrid"), $$("wGrid2"), $$("wGrafico"), $$("wGrafico2")],
              { filename: "My data" }
          );

         }},
         
         { view:"button", width: 280, value:"Exportar para PDF", click:function(){
          // var sel = $$("vJsonGrid").getSelectedId(true);// array of selected records
 
           webix.toPDF([$$("wGrid"), $$("wGrid2"), $$("wGrafico"), $$("wGrafico2")], {
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
    
 /************************************************************** */
  var vJsonGrid = 
      [
          {
              "fornecedor":"Ponto das Novidades",
              "cliente":"Lucas",
              "cpf": 96662168000131,
              "loja": "A",
              "valor": 1034
          },
          {
            "fornecedor":"Mega Saldão",
            "cliente":"Lucas",
            "cpf": 9666216807771,
            "loja": "B",
            "valor": 984
        },{
          "fornecedor":"Top Ofertas",
          "cliente":"Marcelo",
          "cpf": 96662168007841,
          "loja": "C",
          "valor": 3502
      },{
        "fornecedor":"Top 10",
        "cliente":"Paula",
        "cpf": 9666216546540,
        "loja": "D",
        "valor": 1036
    },{
      "fornecedor":"Ponto da Moda",
      "cliente":"Paula",
      "cpf": 96662168007845,
      "loja": "E",
      "valor": 2056
  },{
    "fornecedor":"Vida Nativa",
    "cliente":"João",
    "cpf": 966621688956956,
    "loja": "F",
    "valor": 1021
},
{
  "fornecedor":"Nike",
  "cliente":"João",
  "cpf": 96662168000131,
  "loja": "G",
  "valor": 2654
},
      ];

      var JsonOriginal = vJsonGrid;
     vjsonBling = [];
     var index = 0;
     var i = 0;
     for(i in JsonOriginal) {
      //alert("CAMPO= "+JSON.stringify(JsonOriginal[i], null, 4));
      index = vjsonBling.findIndex(x => x.cliente == JsonOriginal[i].cliente);
     // alert(index);

      var vValor = parseFloat(JsonOriginal[i].valor)
      
              if (index == -1) {
                        
                vjsonBling.push({ "cliente": JsonOriginal[i].cliente,     //n achou criar um registro no vJsonBlig
                                  "valor": vValor});

              
              } else {
                
                vjsonBling[index].valor += vValor; //

              }
     };
 
     
     //alert("RESULTADO= "+JSON.stringify(vjsonBling, null, 4));
     $$("wGrafico").clearAll();
     $$("wGrafico").parse(vjsonBling);

     $$("wGrid").parse(vJsonGrid);  //tabela
       
      

//************************************************************ */
  var vJsonGrid2 = 
      [
          {
              "numeroNFSe":202200000000005,
              "loja":"A",
              "cliente": "Lucas",
              "dataEmissao": "2022-01-03",
              "valor": 1030
          },
          {
            "numeroNFSe":202200000000005,
            "loja":"A",
            "cliente": "Marcelo",
            "dataEmissao": "2022-01-03",
            "valor": 1205
         },
         {
            "numeroNFSe": 202200000000005,
            "loja":"B",
            "cliente": "Marcelo",
            "dataEmissao": "2022-01-03",
            "valor": 4000
          },
          {
            "numeroNFSe":202200000000005,
            "loja":"B",
            "cliente": "Paulo",
            "dataEmissao": "2022-01-03",
            "valor": 1520
          },
          {
            "numeroNFSe":202200000000005,
            "loja":"C",
            "cliente": "Paulo",
            "dataEmissao": "2022-01-03",
            "valor": 6636
        },
        {
          "numeroNFSe":202200000000005,
          "loja":"E",
          "cliente": "João",
          "dataEmissao": "2022-01-03",
          "valor": 2004
        },
        {
          "numeroNFSe":202200000000005,
          "loja":"F",
          "cliente": "João",
          "dataEmissao": "2022-01-03",
          "valor": 684
        },
        {
          "numeroNFSe":202200000000005,
          "loja":"F",
          "cliente": "João",
          "dataEmissao": "2022-01-03",
          "valor": 684
        },
        {
          "numeroNFSe":202200000000005,
          "loja":"F",
          "cliente": "Carlos",
          "dataEmissao": "2022-01-03",
          "valor": 2664
        },
        {
          "numeroNFSe":202200000000005,
          "loja":"F",
          "cliente": "José",
          "dataEmissao": "2022-01-03",
          "valor": 541
        },
        {
          "numeroNFSe":202200000000005,
          "loja":"F",
          "cliente": "José",
          "dataEmissao": "2022-01-03",
          "valor": 6541
        },
        {
          "numeroNFSe":202200000000005,
          "loja":"G",
          "cliente": "Paula",
          "dataEmissao": "2022-01-03",
          "valor": 5136
        }


      ];

      var JsonOriginal = vJsonGrid2;
     vjsonBling = [];
     var index = 0;
     var i = 0;
     for(i in JsonOriginal) {
      //alert("CAMPO= "+JSON.stringify(JsonOriginal[i], null, 4));
      index = vjsonBling.findIndex(x => x.loja == JsonOriginal[i].loja);
     // alert(index);

      var vValor = parseFloat(JsonOriginal[i].valor)
      
              if (index == -1) {
                        
                vjsonBling.push({ "loja": JsonOriginal[i].loja,     //n achou criar um registro no vJsonBlig
                                  "valor": vValor});

              
              } else {
                
                vjsonBling[index].valor += vValor; //

              }
     };
 
     
     //alert("RESULTADO= "+JSON.stringify(vjsonBling, null, 4));
     $$("wGrafico2").clearAll();
     $$("wGrafico2").parse(vjsonBling);

     $$("wGrid2").parse(vJsonGrid2);  //tabela
      
      
  
});