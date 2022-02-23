
// #A2 - TITULO
var wTitulo = {
          "view": "label",
          "label": "App Padrão - V1.1",
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
                "label": "Click me",
                "view": "button",
                "height": 0
              },
              {
                "label": "Data",
                "value": "2021-12-09 15:12:57",
                "view": "datepicker",
                "height": 0
              }
            ]
          }
        ]
      };



 

 

   
    


// #B3 - TELA PRINCIPAL - GRID
var wGrid = {
      "view": "datatable",
      "columns": [
        {
          "id": "codigoCliente",
          "header": "Codigo Cliente",
          "sort": "string"
        },
        {
          "id": "numContrato",
          "header": "Contrato",
          "sort": "string"
        },
        {
          "id": "numParcela",
          "header": "Parcela",
          "sort": "string"
        },
        {
          "id": "dtemi",
          "header": "Dt Emissão",
          "sort": "string"
        },
        {
          "id": "dtven",
          "header": "Dt Venc",
          "sort": "string"
        },
        {
          "id": "valor",
          "header": "Valor",
          "sort": "string"
        },
        {
          "id": "dtpag",
          "header": "Dt Pag",
          "sort": "string"
        }
      ],
      "select": true,
      "scrollX": false,
      
      //"url": "http://localhost/tsweb/php/buscaparcelas.php",
      //"url": "http://localhost/tsweb/api/dbmy/consultaParcelas",
      "id": "wGrid",
      "height": 0
    };

// #B1 - TELA PRINCIPAL
var wPrincipal =
          { "id": "wPrincipal",
            "rows": [
                      wPesquisa , // #B2
                      wGrid       // #B3
            ]

          };

// #C2
var wBarraEsquerda =
      {
        "view": "sidebar",
      //  "url": "demo->61b12d86b72b5e00183b15eb",
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

// #C3
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

// #C1
var wCorpo = {
      "id": "wCorpo",
      "height": 0,
      "type": "wide",
      "cols": [
                wBarraEsquerda,      // #C2
                wPrincipal,    // #B1
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
      // ATIVA UI

     

       
       webix.ui(ui);
    
       webix.ajax("/ts/api/dbmy/consultaParcelas", function(text,data){
         //text = data.parcelas;
         var wJson = data.json();
         
          $$("wGrid").parse(wJson.parcelas);
      });

       
    });
