
var wMenuTestes = {
  "value": "Testes",
  "id" : "wmTestes",

  labelAlign:"right",
  config:{
    on: {
      onItemClick:function(id){
        $$("menuIframe").define("src", id);
      }
    }
  },
  "submenu": [
    { id:"/ts/testes/ajax/", value: "Ajax"},
    { id:"/ts/testes/Bling/", value: "Bling"},
    { id:"/ts/testes/Crud_Add_Registros/", value: "Crud_Add_Registros"},
    { id:"/ts/testes/CrudTabelas/", value: "CrudTabelas"},
    { id:"/ts/testes/Dashboard/", value: "Dashboard"},
    { id:"/ts/testes/Excel/", value: "Excel"},
    { id:"/ts/testes/exemplos/", value: "exemplos"},
    { id:"/ts/testes/form/", value: "form"},
    { id:"/ts/testes/grid/", value: "grid"},
    { id:"/ts/testes/helio/", value: "Hélio"},
    { id:"/ts/testes/ModeloDataDinheiro/", value: "Data e Dinheiro"},
    { id:"/ts/testes/protestos/", value: "protestos"},
    { id:"/ts/testes/Tabela/", value: "Tabela"},
    { id:"/ts/testes/testeAjax/", value: "testeAjax"},
    { id:"/ts/testes/TiposdeGraficos/", value: "TiposdeGraficos"},
    { id:"/ts/testes/webix/", value: "WEBIX"},
  ]
};


var wMenuApps = {
  "value": "Apps",
  "id" : "wmApps",

  labelAlign:"right",
  config:{
    on: {
      onItemClick:function(id){
        $$("menuIframe").define("src", id);
      }
    }
  },
  "submenu": [
    { id:"/ts/erp/apppadrao/app.php", value: "App Padrão v1"},
    { id:"/ts/erp/appbling/bling.php", value: "App BLING v1"}
    
    
  ]
};

var wMenuDash = {
  "value": "DashBoards",
  "id" : "wmdash",

  labelAlign:"right",
  config:{
    on: {
      onItemClick:function(id){
        $$("menuIframe").define("src", id);
      }
    }
  },
  "submenu": [
    { id:"/ts/testes/Dashboard/Dashboard_Servicos/index.php", value: "DashServiços"},
    { id:"/ts/testes/Dashboard/Dashboardcom3Graficos/index.php", value: "Dashboard 3 Graficos"},
    { id:"/ts/testes/Dashboard/dashGrafico/app.php", value: "DashGrafico"},
    { id:"/ts/testes/Dashboard/GraficoSelecaoAno/index.php", value: "G.Seleção Ano"},
    { id:"/ts/testes/Dashboard/testegraficos/app.php", value: "TesteGraficos"},
    { id:"/ts/testes/Dashboard/NotaVenda/index.php", value: "NotaVenda"}
  ]
};
var wMenuTabelas = {
  "value": "Tabelas",
  "id" : "wtabelas",

  labelAlign:"right",
  config:{
    on: {
      onItemClick:function(id){
        $$("menuIframe").define("src", id);
      }
    }
  },
  "submenu": [
    { id:"/ts/testes/CrudTabelas/Empresa_index.php", value: "Empresa"},
    { id:"/ts/testes/CrudTabelas/Aplicacao_index.php", value: "Aplicação"},
    { id:"/ts/testes/CrudTabelas/AplicacaoEmpresa_index.php", value: "A. Empresa"},
    { id:"/ts/testes/CrudTabelas/Usuario_index.php", value: "Usuários"},
    { id:"/ts/testes/CrudTabelas/Cliente_index.php", value: "Clientes"},
    { id:"/ts/testes/CrudTabelas/StatusSer_index.php", value: "Status Serviço"},
    { id:"/ts/testes/CrudTabelas/Servicos_index.php", value: "Serviços"}
  ]
};

var wMenuCrud = {
  "value": "Crud",
  "id" : "wcrud",

  labelAlign:"right",
  config:{
    on: {
      onItemClick:function(id){
        $$("menuIframe").define("src", id);
      }
    }
  },
  "submenu": [
    { id:"/ts/erp/exemplos/webix-crud/", value: "Ex CRUD webix"},
    { id:"/ts/erp/testes/testesLucas/CRUD_V1/index.php", value: "CRUD V1"},
    { id:"/ts/erp/testes/testesLucas/CRUD_V2/index.php", value: "CRUD V2"},
    { id:"/ts/erp/testes/testesLucas/CRUD_V3/index.php", value: "CRUD V3"},
    { id:"/ts/erp/testes/testesLucas/CRUD_V4/index.php", value: "CRUD V4"}
  ]
};


var wMenu = {
  "id": "wMenu",
  "data":[  
            
    wMenuApps,
    wMenuTestes,
    
    
    wMenuDash,
    

     wMenuTabelas,
    wMenuCrud 
         ],

 // "layout": "x",
  "type": {
    "subsign": true
    ,
    autowidth:true
  },
  submenuConfig:{
    autowidth:true,
    autoheight:true
},
  "view": "menu",
  css:"myCss"
  
};


var wMenuBotoes = {
  "cols": [
    {
     "label": "usuario",
      "id":"btnusuario",
      "view": "button", 
       css:"btn_fundoazul"
    },
    {
      "label": "configuração",
      "view": "button",
       css:"webix_transparent"
    },
    {
      "label": "sair",
      "view": "button",
       css:"webix_transparent",
       
       on:{
        // the default click behavior that is true for any datatable cell
        "onItemClick":function(id, e, trg){ 
           // webix.message("Click on row: " + id.row+", column: " + id.column)
            var wURL = "/ts/matacookie.php";
           // alert(wURL);
            var wdestino = chamaAJAX (wURL);
          //  alert(wdestino);

            this.getTopParentView().hide(); //hide window
            if (wdestino == "/ts/dashboard"){
              window.location.href="/ts/login";
            } else {
              window.location.href=wdestino;
            }
            

        }
    }}],
  
    
  
  width:300
};
var wlogo =  { view: "label", label: "", width: 160, autoheight:true, css:'app-logo' };
var wlogoempresa =  { id:"logoempresa", view: "label", label: "tt", width: 160, autoheight:true};

var wcabec =
{
  "height": 50,
  "cols": [ wlogo, wMenu  , wlogoempresa,
            
            wMenuBotoes

  ]
};

var wframe = {
  "id": "menuIframe",
  "view": "iframe", 
  "multiview": true,
  animate:{ type:"flip", subtype:"vertical" },
  "disabled": false,
  "height": 0,
  "src": ""
};

var ui = {
  responsive:true, 
    rows:[ wcabec,
           wframe
         ]
    };

    // CHAMA WEBIX
    webix.ready(function(){

      if (webix.CustomScroll)
    		webix.CustomScroll.init();

      // SETA WEBIX PARA BR
      webix.i18n.setLocale("pt-BR");
      // ATIVA UI
      webix.ui.fullScreen();
      webix.ui(ui);
      
      var wURL = "/ts/pegacookie.php";

      var wcookie = chamaAJAX (wURL);
      //alert(wcookie);
      var warraysplit = (wcookie.split('|'));

      var wempresa  = warraysplit[0];
     // alert(wempresa);
      var wusuario  = warraysplit[1];
      $$("logoempresa").define("label",wempresa);
      $$("logoempresa").refresh();
      $$("btnusuario").define("label", wusuario);
      $$("btnusuario").refresh();

      //document.getElementById("btnusuario").innerHTML = wusuario;

    });

    
    var wURL = '';

	function chamaAJAX(wURL) {
        var res = "";
        
         $.ajax({
                url: wURL,
                type: "get",
                async: false,

                dataType: "text",
              
                success: function (json_get) {

					        res = json_get;
                  
                },
                error: function (xhr, status, errorThrown) {

                    alert("errorThrown=" + errorThrown);
                }
            })
            return res;
        }
        
    
   

