
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<script src="/ts/js/jquery/jquery.min.js" type="text/javascript"></script>	
	<script type="text/javascript"          src="/ts/js/webix/codebase/webix.min.js"></script>

	<link rel="stylesheet" type="text/css" href="/ts/js/webix/codebase/skins/flat.min.css">
  <link rel="stylesheet" type="text/css" href="/ts/testes/CrudTabelas/menu.css">

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
			},
			error: function (xhr, status, errorThrown) {

				alert("errorThrown=" + errorThrown);
			}
		})
		return res;
	}

let clearServicos = () => {                             
    webix.confirm({
        title:"All data will be lost!",
        text:"Are you sure?"
    }).then(
        () => {
            
            $$("form_servicos").clear();               
            $$("form_servicos").clearValidation();     
        }
)};

let saveServicos = () => {                               
    let form = $$( "form_servicos" );                      
    let list = $$( "table_servicos" );                     
    let item_data = $$("form_servicos").getValues();    
 
    if( form.isDirty()){
      
        if( item_data.id ) 
            list.updateItem(item_data.id, item_data);
        else 
            list.add( item_data );
    }
	$$("win_servicos").hide();                             
}

var wTitulo = {
          "view": "label",
          "label": "Serviços",
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
               wTitulo

          ]

        };

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
                click:function(){ showForm("win_servicos");
                  $$("empresa").define("disabled", false); }                        
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
                   
                  executa(conteudo);
                  $$("win1").hide();
                }
   }
	],
  elementsConfig:{
    labelPosition:"top",
  }
};

const table_servicos = {                 
    view:"datatable", 
    id:"table_servicos",
    scroll:"xy",
    select:true,
    hover:"myhover",
    save:"/ts/testes/CrudTabelas/Servicos_save.php",

    columns:                           
        [
            {
              "id": "ID",                     
              "header": "ID",
              "sort": "string",
              "width":50,
            },
            {
              "id": "empresa",
              "header": "empresa",
              "sort": "string",
              "width":200,
            },
            {
              "id": "clienteCodigo",
              "header": "clienteCodigo",
              "sort": "string",
              "width":200,
            },
            {
              "id": "titulo",
              "header": "titulo",
              "sort": "string",
              "width":200,
            },
            {
              "id": "descricao",
              "header": "Descrição",
              "sort": "string",
              "width":250,
            },
            {
              "id": "dataInclusao",
              "header": "dataInclusao",
              "sort": "string",
              "format":webix.Date.dateToStr("%d-%m-%Y")
            },
            {
              "id": "dataAprovacao",
              "header": "dataAprovacao",
              "sort": "string",
              "format":webix.Date.dateToStr("%d-%m-%Y")
            },
            {
              "id": "dataEntrega",
              "header": "dataEntrega",
              "sort": "string",
              "format":webix.Date.dateToStr("%d-%m-%Y")
            },
            {
              "id": "dataEncerramento",
              "header": "dataEncerramento",
              "sort": "string",
              "format":webix.Date.dateToStr("%d-%m-%Y")
            },
            {
              "id": "valor",
              "header": "valor",
              "sort": "string",
              "format":webix.i18n.numberFormat,
              "width":100,
            },
            {
              "id": "horas",
              "header": "horas",
              "sort": "string",
              "width":100,
            },
            {
              "id": "vlrHora",
              "header": "vlrHora",
              "sort": "string",
              "format":webix.i18n.numberFormat,
              "width":100,
            },
            {
              "id": "statusSer",                                                             
              "header": "statusSer",
              "sort": "string",
              "width":150,
            },
                
        { header:"", template:"<span class='webix_icon wxi-close delete_icon'></span>", width:35}
    ],
    onClick:{
        delete_icon(e, id){
        this.remove(id);
        return false;
        }
    },
    on:{
		onItemDblClick(id, e, node) {

			let values = $$("table_servicos").getItem(id);       

			  showForm("win_servicos");
			
            $$("form_servicos").setValues(values);

		},
        onAfterSelect(id){
			
		   webix.message("Click on row: " + id.row+", column: " + id.column);
            	
        }
    }
}

const form_servicos = {                                  
    view:"form", 
    id:"form_servicos", 
	autowidth:true,
  borderless:true,
 
    elements:[                                               
        { type:"section", template:"Servços"},
        { view:"text", name:"empresa", label:"empresa", disabled:true},
        { view:"text", name:"clienteCodigo", label:"clienteCodigo", disabled:true},
        { view:"text", name:"titulo", label:"titulo"},
		    { view:"text", name:"descricao", label:"descricao"},
        { view:"text", name:"dataInclusao", label:"dataInclusao"},
        { view:"text", name:"dataAprovacao", label:"dataAprovacao"},
        { view:"text", name:"dataEntrega", label:"dataEntrega"}, 
        { view:"text", name:"dataEncerramento", label:"dataEncerramento"},
        { view:"text", name:"valor", label:"valor"},
        { view:"text", name:"horas", label:"horas"},
        { view:"text", name:"vlrHora", label:"vlrHora"},
        { view:"text", name:"statusSer", label:"statusSer", disabled:true},
        {
            margin:10, cols:[
                { view:"button", id:"btn_save", value:"Save",click:saveServicos},            
                { view:"button", id:"btn_clear", value:"Clear", click:clearServicos}
                
            ]
        },
        {}
    ]
}

var wPrincipal =
          { "id": "wPrincipal",
            "rows": [
                      wPesquisa ,
                      
					  {cols: 
                        [table_servicos]                        
                      }
            ]
          };

var wBarraEsquerda =
      {
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

var wCorpo = {
      "id": "wCorpo",
      "height": 0,
      "type": "wide",
      "cols": [
                wBarraEsquerda,      
                wPrincipal,   
                { "rows":[
                  { 
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

var ui = {
  responsive:true, 
    rows:[  wToolbar 
          , wCorpo   
         ]
    };

webix.ready(function(){

if (webix.CustomScroll)
      webix.CustomScroll.init();

webix.i18n.setLocale("pt-BR");

webix.ui({
  view:"popup",
  id:"win1",
  width:500,
  head:false,
  body:webix.copy(form)
});

webix.ui({                                                         
  view:"window",
  id:"win_servicos",                                       
  width:300,

      modal:true,
  position:"center",
head:false,
  body:webix.copy(form_servicos)
});

 webix.ui.fullScreen();
 webix.ui(ui);

 var dtini = new Date();
 var dd = '01';
 var mm = String(dtini.getMonth() + 1).padStart(2, '0'); 
 var yyyy = dtini.getFullYear();
// alert(yyyy+' '+mm+' '+dd);
 $$("dtinicial").setValue(new Date(yyyy,mm - 1,dd));
 var periodo = dd + '/' + mm + '/' + yyyy;
 var hoje = new Date();
 var dd = String(hoje.getDate()).padStart(2, '0');
 var mm = String(hoje.getMonth() + 1).padStart(2, '0'); 
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

  wJson = chamaAJAX("/ts/testes/CrudTabelas/Servicos_leitura.php");                        
  

  $$("table_servicos").clearAll();
  $$("table_servicos").parse(wJson.servicos);                                                 

}


  
</script>


</head>
<body></body>
</html>

<!-- ,
    { view:"button", value:"Remove", click:function(){
      $$("table_servicos").remove("id");
    }}, -->