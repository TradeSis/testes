
// #A2 - TITULO
var wTitulo = {
          "view": "label",
          "label": "Loja de Roupas",
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

  var wPesquisa = {
    "id": "wPesquisa",
    "height": 80,
    "view": "form",
   // "minHeight": 380,
    "autoheight": true,
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
var wGridFor = {
      "view": "datatable",
      "columns": [
        {
          "id": "Fornecedores",
          "header": "Fornecedores",
          "sort": "string"
        },
        {
          "id": "cnpj",
          "header": "CNPJ",
          "sort": "string"
        },
        {
          "id":"codigoProduto",
          "header":"Código Produto",
          "sort":"string"
        },
        {
          "id":"quantidadeProduto",
          "header":"Quantidade de Produtos",
          "sort":"string"
        },
        {
          "id":"valorProduto",
          "header":"Valor dos Produtos",
          "sort":"string"
        },
        {
          "id":"valorTotal",
          "header":"Valor Total",
          "sort":"string"
        }
        
      ],
      "select": true,
      "scrollX": false,
      
      
      "id": "wGridFor",
      "height": 0
    };

    var wGridCli = {
      "view": "datatable",
      "columns": [
        {
          "id": "cliente",
          "header": "Cliente",
          "sort": "string"
        },
        {
          "id": "cpf",
          "header": "CPF",
          "sort": "string"
        },
        {
          "id":"nota",
          "header":"Numero Nota",
          "sort":"string"
        },
        {
          "id":"precoProduto",
          "header":"Preço Produto un.",
          "sort":"string"
        },
        {
          "id":"quantidadeproduto",
          "header":"Quantidade",
          "sort":"string"
        },
        {
          "id":"totalvendido",
          "header":"Total Compra",
          "sort":"string"
        }
        
      ],
      "select": true,
      "scrollX": false,
      
      
      "id": "wGridCli",
      "height": 0
    };

// #B1 - TELA PRINCIPAL
var wPrincipal =
          { "id": "wPrincipal",
            "rows": [
                      wPesquisa , // #B2
                      wGridFor,       // #B3
                      wGridCli
            ]

          };

// #C2
var wBarraEsquerda =
      {"id": "wBarraEsquerda",
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
                wBarraEsquerda
                ,      // #C2
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
                wBarraDireita ]} // #C3
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


       var vJsonFor = 
       [
        { "Fornecedores":"Mega Saldão",
        "cnpj":"123469021",
        "codigoProduto":"000001",
        "quantidadeProduto":"250 un",
        "valorProduto":"15,99 un",
        "valorTotal":"3.997,50"
       },
       { "Fornecedores":"Saldão de Roupas",
       "cnpj":"123454521",
       "codigoProduto":"000002",
       "quantidadeProduto":"100 un",
       "valorProduto":"9,99 un",
       "valorTotal":"999,00"
      },
      { "Fornecedores":"Distribuidora Top",
      "cnpj":"12229021",
      "codigoProduto":"000003",
      "quantidadeProduto":"400 un",
      "valorProduto":"86,00 un",
      "valorTotal":"34.000"
     },
     { "Fornecedores":"Delux Dist.",
     "cnpj":"1234666521",
     "codigoProduto":"000004",
     "quantidadeProduto":"60 un",
     "valorProduto":"150,99 un",
     "valorTotal":"9.059,40"
    },
    { "Fornecedores":"Mega 10",
    "cnpj":"123469021",
    "codigoProduto":"000001",
    "quantidadeProduto":"250 un",
    "valorProduto":"15,99 un",
    "valorTotal":"3.997.50"
   }
         
      
      ];

      
      var vJsonCli = 
      [
        { "cliente":"Kalita Raquel",
        "cpf":"0020214525",
        "nota":"000010",
        "precoProduto":"40,99",
        "quantidadeproduto":"2",
        "totalvendido":"81,98"
       },
       { "cliente":"Lucas Rosa",
        "cpf":"00202146655",
        "nota":"000011",
        "precoProduto":"20,99",
        "quantidadeproduto":"8",
        "totalvendido":"167,92"
       },
       { "cliente":"Hélio",
        "cpf":"00209894845",
        "nota":"000012",
        "precoProduto":"60,99",
        "quantidadeproduto":"2",
        "totalvendido":"121,98"
       },

      
      ];

       $$("wGridFor").parse(vJsonFor);

       $$("wGridCli").parse(vJsonCli);


       
    });


    function showForm(winId, node){
      $$(winId).getBody().clear();
      $$(winId).show(node);
      $$(winId).getBody().focus();
    }