var wTitulo = {
    "view": "label",
    "label": "Tabelas, Graficos, e Export",
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
        "id": "nome",
        "header": "Nome",
        "sort": "string"
      },
      {
        "id": "sobrenome",
        "header": "Sobre Nome",
        "sort": "string"
      },
      {
        "id":"idade",
        "header":"Idade",
        "sort":"number"
      },
      {
        "id":"cidade",
        "header":"Cidade",
        "sort":"string"
      }
      
    ],
    "select": true,
    "scrollX": false,
    
    
    "id": "wGrid",
    "height": 0,
   
  };

  var wGrafico = {
    "id": "wGrafico",
    "type": "pie3D",
    "value": "#idade#",         
    "label": "#idade#",
    "view": "chart",
  
    yAxis:{},
    xAxis:{
      lines:true,
      title:"nome",
      template:"#nome#"                       
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
                [$$("wGrid"), $$("wGrafico")],
                { filename: "My data" }
            );
             
             
             /* ($$("vJsonGrid"), {
               ignore:{ checked:true },
               filter:function(obj){
                 return obj.checked;
               }
             }); */
           }},
           { view:"button", width: 280, value:"Exportar para PDF", click:function(){
            // var sel = $$("vJsonGrid").getSelectedId(true);// array of selected records
   
             webix.toPDF([$$("wGrid"), $$("wGrafico")], {
                filename: "datatable"
            });
             
             /* ($$("vJsonGrid"), {
               ignore:{ checked:true },
               filter:function(obj){
                 var found = sel.find(function(item){
                   return item.id == obj.id;
                 });
                 return found;
               }
             }); */
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
                }
     ]

   };
 

  var ui = {
    rows:[  
        wToolbar,
          wexport,
           wLinha,
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
                "nome":"Lucas",
                "sobrenome":"Rosa",
                "idade": 24,
                "cidade": "Gravatai"
            },
            {
                "nome":"Kalita",
                "sobrenome":"Olbermann",
                "idade": 24,
                "cidade": "Gravatai"
            },
            {
                "nome":"Hélio",
                "sobrenome":"Alves",
                "idade": 40,
                "cidade": "Porto Alegre"
            },
            {
                "nome":"João",
                "sobrenome":"Silva",
                "idade": 20,
                "cidade": "Canoas"
            }

        ];
        $$("wGrid").parse(vJsonGrid);  //tabela
        $$("wGrafico").parse(vJsonGrid);  //tabela
    
  });