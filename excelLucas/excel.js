
// #A2 - TITULO
var wTitulo = {
          "view": "label",
          "label": "Teste Excel 00",
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


    
wBotaoCarrega = { view:"uploader", value:"Importar Arquivo Excel", on:{
  onBeforeFileAdd: function(upload){
    $$("wGrid").clearAll();
    $$("wGrid").parse(upload.file, "excel");
    return false;
  }
}};
/*
FILIAL	DATA_VENDA	PREVISAO_QTDE	PREVISAO_VALOR (META LOJA)	ESTOQUE	ESTOQUE_VALORIZADO	ESTOQUE_VALORIZADO_MOEDA	QTDE_SAIDA	QTDE_ENTRADA	QTDE_VENDA
	QTDE_TROCA	VENDA	DESCONTO	CUSTO	TROCA	TROCA_CUSTO	TROCA_DESCONTO	NUMERO_TICKETS	PRAZO_MEDIO	PREVISAO_QTDE_MES	
  PREVISAO_VALOR_MES (META TKTM LOJA)	META_VENDEDOR_QTDE_DIA	META_VENDEDOR_VALOR_DIA (META_TKTM)	META_VENDEDOR_QTDE_MES	META_VENDEDOR_VALOR_MES (META VENDEDOR)
*/
json_columns = [
    {id:"field1", header:"Nome"},  {id:"field2",  header: "CPF"},  {id:"field3", header: "Tipo Contrato"},
    {id:"field4", header:"Valor Compra"},  {id:"field5",  header: "Parcelas"},  {id:"field6", header: "Valor total"}
    /*
    {id:"field7", header:"ESTOQUE_VALORIZADO_MOEDA"},  {id:"field8",  header: "QTDE_SAIDA"},  {id:"field9", header: "QTDE_ENTRADA"},
    {id:"field10", header:"QTDE_VENDA"}, {id:"field11", header: "QTDE_TROCA"},  {id:"field12", header: "VENDA DESCONTO"},
    {id:"field13", header:"CUSTO	TROCA"}, {id:"field14", header: "TROCA_CUSTO"},  {id:"field15", header: "TROCA_DESCONTO"},
    {id:"field16", header:"NUMERO_TICKETS"}, {id:"field17", header: "PRAZO_MEDIO"},  {id:"field18", header: "PREVISAO_QTDE_MES"},
    {id:"field19", header:"PREVISAO_VALOR_MES  (META TKTM LOJA)"}, {id:"field20", header: "META_VENDEDOR_QTDE_DIA"},  {id:"field21", header: "META_VENDEDOR_VALOR_DIA (META_TKTM)"},
    {id:"field22", header:"META_VENDEDOR_QTDE_DIA"}, {id:"field23", header: "META_VENDEDOR_VALOR_DIA (META_TKTM)"},  {id:"field24", header: "META_VENDEDOR_QTDE_MES"},
    {id:"field25", header:"META_VENDEDOR_VALOR_MES (META VENDEDOR)"} */
   ];

// #B3 - TELA PRINCIPAL - GRID
var wGrid = { 
  view:"datatable", 
  "id": "wGrid",
  "height": 0,
  
  //type:"excel",
scheme:{
  $init:function(obj){
    obj.field1 = obj.data0;
    obj.field2 = obj.data1;
    obj.field3 = obj.data2;
    obj.field4 = obj.data3;
    obj.field5 = obj.data4;
    obj.field6 = obj.data5;
   /*  obj.field7 = obj.data6;
    obj.field8 = obj.data7;
    obj.field9 = obj.data8;
    obj.field10 = obj.data9;
    obj.field11 = obj.data10;
    obj.field12 = obj.data11;
    obj.field13 = obj.data12;
    obj.field14 = obj.data13;
    obj.field15 = obj.data14;
    obj.field16 = obj.data15;
    obj.field17 = obj.data16;
    obj.field18 = obj.data17;
    obj.field19 = obj.data18;
    obj.field20 = obj.data19;
    obj.field21 = obj.data20;
    obj.field22 = obj.data21;
    obj.field23 = obj.data22;
    obj.field24 = obj.data23;
    obj.field25 = obj.data24; */

  }
},      
  //data : theData,
  columns : json_columns 
};

// #B1 - TELA PRINCIPAL
var wPrincipal =
          { "id": "wPrincipal",
            "rows": [
                      wPesquisa ,
                      wBotaoCarrega, // #B2
                      wGrid       // #B3
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
  
    });


    function showForm(winId, node){
      $$(winId).getBody().clear();
      $$(winId).show(node);
      $$(winId).getBody().focus();
    }


    /*
    banco sql server

    if exists(SELECT * from Student where FirstName='Akhil' and LastName='Mittal')            
BEGIN            
 update Student set FirstName='Anu' where FirstName='Akhil'  
End                    
else            
begin  
insert into Student values(1,'Akhil','Mittal',28,'Male',2006,'Noida','Tenth','LFS','Delhi')  
end 
*/