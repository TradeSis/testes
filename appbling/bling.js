
// #A2 - TITULO
var wTitulo = {
          "view": "label",
          "label": "App Bling - V1.1 Demo",
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

// #B3 - TELA PRINCIPAL - GRID
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
          "sort": "string", adjust: true
            , footer:{ content:"summColumn" }
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
      // ATIVA UI
     
      webix.ui({
        view:"popup",
        id:"win1",
        width:500,
        head:false,
        body:webix.copy(form)
      });
       
    
       webix.ui.fullScreen();
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

     // alert ("periodo selecionado: " + wvar);

      webix.ajax("/ts/api/tsbling/buscaServicos?filters=dataEmissao["+wvar+"]; situacao[2]", function(text,data){
        //text = data.parcelas;
        var wJson = data.json();
      //  alert(wJson);
      $$("wGrid").clearAll();

         $$("wGrid").parse(wJson.notasServico[0]);
     });

   

  }
  

      
