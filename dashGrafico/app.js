
// #A2 - TITULO
var wTitulo = {
          "view": "label",
          "label": "GRID E GRAFICOS",
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
            "label": "Calendário",
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
          "id":"totalComprado",
          "header":"Total Comprado",
          "sort":"string"
        },
       
        
      ],
      "select": true,
      "scrollX": false,
      
      
      "id": "wGridCli",
      "height": 0
    };

    var wGridRes = {
      "view": "datatable",
      "columns": [
        {
          "id": "TotalVendasF",
          "header": "Vendas Fornecedores",
          "sort": "string"
        },
        {
          "id": "TotalVendasC",
          "header": "Vendas Clientes",
          "sort": "string"
        },
        {
          "id":"MaisVendidosF",
          "header":"Produtos mais comprados",
          "sort":"string"
        },
        {
          "id":"MaisVendidosC",
          "header":"Produtos mais vendidos",
          "sort":"string"
        }
        
      ],
      "select": true,
      "scrollX": false,
      
      
      "id": "wGridRes",
      "height": 0
    };


//Grafico
var tgrafico = {
  "id": "tgrafico",
  "type": "bar",
  "value": "#quantidadeProduto#",                          // #3 - Dados que REALMENTE "CONTROLAM" o grafico
  "label": "#quantidadeProduto#", //#templete#   -  // #2 - Dados que irão em CIMA do grafico
  "view": "chart",

  yAxis:{},
  xAxis:{
    lines:true,
    title:"Vendas por Fornecedor",
    template:"#Fornecedores#"                       // #1 - Dados que irão em BAIXO do grafico
  }
};

var tgrafico2 = {
  "id": "tgrafico2",
  "type": "pie",
  "value": "#totalComprado#", //Json da tabela Clientes         
  "label": "#totalComprado#",
  "view": "chart",

  yAxis:{},
  xAxis:{
    lines:true,
    title:"Vendas por Clientes",
    template:"#cliente#"                       
  }
};

var tgrafico3 = {
  "id": "tgrafico3",
  "type": "pie3D",
  "value": "#TotalVendasF#",         
  "label": "#TotalVendasF#",
  "view": "chart",

  yAxis:{},
  xAxis:{
    lines:true,
    title:"MaisVendidosF",
    template:"#MaisVendidosF#"                       
  }
};

// #B1 - TELA PRINCIPAL
var wPrincipal =
          { "id": "wPrincipal",
            "rows": [
                      wPesquisa , 
                      {cols: 
                        [wGridFor, tgrafico]
                      },
                      {cols:
                      [wGridCli, tgrafico2]
                      },
                      {cols:
                        [wGridRes, tgrafico3]
                        }
                      
                      
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
          , wCorpo // #C1
          
            
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
        "valorTotal":35
       },
       { "Fornecedores":"Saldão de Roupas",
       "cnpj":"123454521",
       "codigoProduto":"000002",
       "quantidadeProduto":"100 un",
       "valorProduto":"9,99 un",
       "valorTotal":50
      },
      { "Fornecedores":"Distribuidora Top",
      "cnpj":"12229021",
      "codigoProduto":"000003",
      "quantidadeProduto":"400 un",
      "valorProduto":"86,00 un",
      "valorTotal":20
     },
     { "Fornecedores":"Delux Dist.",
     "cnpj":"1234666521",
     "codigoProduto":"000004",
     "quantidadeProduto":"60 un",
     "valorProduto":"150,99 un",
     "valorTotal":100
    },
    { "Fornecedores":"Mega 10",
    "cnpj":"123469021",
    "codigoProduto":"000001",
    "quantidadeProduto":"250 un",
    "valorProduto":"15,99 un",
    "valorTotal":98
   }
         
      
      ];

      
      var vJsonCli = 
      
      [
        { "cliente":"Kalita Raquel",
        "cpf":"0020214525",
        "precoProduto":"40,99",
        "quantidadeproduto":"2",
        "totalComprado": 450
       },
       { "cliente":"Lucas Rosa",
        "cpf":"00202146655",
        "precoProduto":"20,99",
        "quantidadeproduto":"8",
        "totalComprado": 290
       },
       { "cliente":"Hélio",
        "cpf":"00209894845",
        "precoProduto":"60,99",
        "quantidadeproduto":"2",
        "totalComprado": 350
       },
       { "cliente":"João",
        "cpf":"00209894845",
        "precoProduto":"60,99",
        "quantidadeproduto":"2",
        "totalComprado": 150
       },
       { "cliente":"Marta",
        "cpf":"00209894845",
        "precoProduto":"60,99",
        "quantidadeproduto":"2",
        "totalComprado": 200
       }
      ];

       $$("wGridFor").parse(vJsonFor);  //tabela
       $$("tgrafico").parse(vJsonFor);  //grafico


       $$("wGridCli").parse(vJsonCli);
       $$("tgrafico2").parse(vJsonCli);  //grafico

      var vJsonRes =
      [
        {"TotalVendasF":2050,
        "TotalVendasC":1570,
        "MaisVendidosF":"Distribuidora",
        "MaisVendidosC":"Kalita"
        },
        {"TotalVendasF":6542,
        "TotalVendasC":5451,
        "MaisVendidosF":"Mega 10",
        "MaisVendidosC":"João"
        },
        {"TotalVendasF":5050,
        "TotalVendasC":3511,
        "MaisVendidosF":"Megao Saldão",
        "MaisVendidosC":"Lucas"
        }
      ];
       $$("wGridRes").parse(vJsonRes);
       $$("tgrafico3").parse(vJsonRes); 
      

}); 

    function showForm(winId, node){
      $$(winId).getBody().clear();
      $$(winId).show(node);
      $$(winId).getBody().focus();
    }

    