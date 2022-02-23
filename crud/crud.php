<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<script src="/ts/js/jquery/jquery.min.js" type="text/javascript"></script>	
	<script type="text/javascript"          src="/ts/js/webix/codebase/webix.min.js"></script>

	<link rel="stylesheet" type="text/css" href="/ts/js/webix/codebase/skins/flat.min.css">


	<style>
		</style>

	<script>
var wURL = '';

function chamaAJAX(wURL,wType="get",wdataType="json") {
	var res = [];
	
	$.ajax({
			url: wURL,
			type: wType,
			async: false,

			dataType: wdataType,
		
			success: function (json_get) {
				res = json_get;
				/*
				obj = json_get;
				for(var i in obj) {
					//  alert(JSON.stringify(obj[i], null, 4));
					//   alert(obj[i].numeroNFSe);
					//	res.push(obj[i]);
				}
				*/
			//  alert(JSON.stringify(res, null, 4));

				
			},
			error: function (xhr, status, errorThrown) {

				alert("errorThrown=" + errorThrown);
			}
		})
		return res;
	}

/**FUNCAO clearParcelas */
let clearParcelas = () => {
    webix.confirm({
        title:"All data will be lost!",
        text:"Are you sure?"
    }).then(
        () => {
            
            $$("form_parcelas").clear();
            $$("form_parcelas").clearValidation();
        }
)};

/**FUNCAO saveParcelas */
let saveParcelas = () => {
    let form = $$( "form_parcelas" );  
    let list = $$( "table_parcelas" );  
    let item_data = $$("form_parcelas").getValues();    
    
   // alert(JSON.stringify(item_data, null, 4));
   
   

    if( form.isDirty() /*&& form.validate()*/  ){
      
        if( item_data.id ) 
            list.updateItem(item_data.id, item_data);
        else 
            list.add( item_data );
    }
	$$("win_parcelas").hide();
   //alert("saveParcelas");
   

}

// #A2 - TITULO
var wTitulo = {
          "view": "label",
          "label": "App CRUD - V1.1 Demo",
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
            "cols": [
              {
                "label": "Parametros",
                "view": "button",
                "height": 0,
                click:function(){ showForm("win1", this.$view) }
              },
			  {
                "label": "Inclusão",
                "view": "button",
				"width":120,
                "height": 0,
                click:function(){ showForm("win_parcelas") }
              }
            ]
          }
        ]
      };

var wDtinicial = { id:"dtinicial","view": "datepicker", "height": 0 ,
              
               stringResult:true, 	icons: true};
var wDtfinal   = { id:"dtfinal","view": "datepicker", "height": 0 ,	
               
              stringResult:true, icons: true};

/* FORMULARIO DE pesquisa */
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



/* DATATABLE parcelas */
const table_parcelas = {
    view:"datatable", 
    id:"table_parcelas",
    scroll:"y",
    select:true,
   // url:"data/data.js",
    hover:"myhover",
    save:"/ts/erp/testes/crud/save.php", /* PHP SAVE IN MYSQL */
    columns:
        [
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
          ,       
        { header:"", template:"<span class='webix_icon wxi-close delete_icon'></span>", width:35}
		//{ template:"<input class='delbtn' type='button' value='Delete'>", width:100 }
    ],
    onClick:{
        delete_icon(e, id){
        this.remove(id);
        return false;
        }
    },
    on:{
		onItemDblClick(id, e, node) {

			/** PEGA valores do datatable */
			let values = $$("table_parcelas").getItem(id);
			
			

			//showForm("win_parcelas", this.$view);
			/** MOSTRA form_parcelas */
			  showForm("win_parcelas");
			
			/** COLOCA valores do datatable no form_parcelas */
            $$("form_parcelas").setValues(values);

		},
        onAfterSelect(id){
			
		   webix.message("Click on row: " + id.row+", column: " + id.column);
            
			
        }
    }
}

/** FORMULARIO parcelas */
const form_parcelas = {
    view:"form", 
    id:"form_parcelas", 
	autowidth:true,
  borderless:true,
 
    elements:[
        { type:"section", template:"Edição de Parcelas"},
        { view:"text", name:"codigoCliente", label:"Codigo", invalidMessage:"Should be between 1970 and current" },
        { view:"text", name:"numContrato", label:"Contrato", invalidMessage:"Should be between 1970 and current" },
        { view:"text", name:"numParcela", label:"Parcela", invalidMessage:"Should be between 1970 and current" },
        { view:"text", name:"dtemi", label:"Dt Emissao", invalidMessage:"Should be between 1970 and current" },
		{ view:"text", name:"dtven", label:"Dt Venc", invalidMessage:"Should be between 1970 and current" },
        { view:"text", name:"valor", label:"Valor", invalidMessage:"Cannot be empty or 0" },
        { view:"text", name:"dtpag", label:"Dt Pag", invalidMessage:"Must be less than 100000" }, 
        {
            margin:10, cols:[
                { view:"button", id:"btn_save", value:"Save",click:saveParcelas},
                { view:"button", id:"btn_clear", value:"Clear", click:clearParcelas}
                
            ]
        },
        {}
    ]
    /*,
    rules:{
        title: webix.rules.isNotEmpty,
        rating(value){
            if(webix.rules.isNumber(value)){
                return true;
            }
        },
        votes(value){
            return value < 1000000 && value >= 1;
        },
        year(value){
            return value>=1970 && value <= new Date().getFullYear();
        }
    }*/
}



// #B1 - TELA PRINCIPAL
var wPrincipal =
          { "id": "wPrincipal",
            "rows": [
                      wPesquisa , // #B2
                      
					  {cols: 
                        [table_parcelas]
                      }
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
     
	/** CRIA WINDOW POPUP para o FORM de PESQUISA */
	  webix.ui({
        view:"popup",
        id:"win1",
        width:500,
        head:false,
        body:webix.copy(form)
      });
       
	  /** CRIA WINDOW para o FORM form_parcelas */
	  webix.ui({
		view:"window",
        id:"win_parcelas",
		width:300,
      
            modal:true,
		position:"center",
	head:false,
        body:webix.copy(form_parcelas)
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
       
	  /** Chama dados das parcelas */
       executa(periodo);
      

       
    });

    function showForm(winId, node){
      $$(winId).getBody().clear();
      $$(winId).show(node);
      $$(winId).getBody().focus();
    }


    function executa(wvar){

     // alert ("periodo selecionado: " + wvar);
		wJson = chamaAJAX("/ts/api/dbmy/consultaParcelas");
		
		//alert(JSON.stringify(wJson, null, 4));

		$$("table_parcelas").clearAll();
		$$("table_parcelas").parse(wJson.parcelas);

	  /* AJAX WEBIX	
      webix.ajax("/ts/api/dbmy/consultaParcelas", function(text,data){
        	var wJson = data.json();
			$$("wGrid").clearAll();
	         $$("wGrid").parse(wJson.parcelas);
       });
	   */
	}

	 
		
	</script>


</head>
<body></body>
</html>
