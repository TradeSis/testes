
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
  
    { id:"/ts/erp/testes/ajax/testeajax.php", value: "Teste Ajax"},
    { id:"/ts/erp/testes/grid/app.php", value: "Teste Grid"},
    { id:"/ts/erp/testes/webix/13_form_modal.html", value: "Webix Modal"},
    { id:"/ts/erp/testes/webix/13_form_popup.html", value: "Webix POPUP"},
    { id:"/ts/erp/testes/testesLucas/excelLucas/excel.php", value: "Excel 00"},
    { id:"/ts/erp/testes/testesLucas/tgrid/app.php", value: "Tgrid"},
    { id:"/ts/erp/testes/testesLucas/tgrafico/app.php", value: "Tgrafico"},
    { id:"/ts/erp/testes/testesLucas/testegraficos/app.php", value: "Teste Grafico"},
    { id:"/ts/erp/testes/testesLucas/dashGrafico/app.php", value: "Teste Grafico 2"},
    { id:"/ts/erp/testes/testesLucas/export/excel/app.php", value: "Export PDF"},
    { id:"/ts/erp/testes/testesLucas/export/excelGrafico/app.php", value: "Export Grafico PDF"},
    { id:"/ts/erp/testes/testesLucas/TabelaComDados/app.php", value: "Tabela formato dados"}
    
    
  
    
  ]
};

var wMenuAntigos = {
  "value": "Antigos",
  "id" : "wmAntigos",

  labelAlign:"right",
  config:{
    on: {
      onItemClick:function(id){
        $$("menuIframe").define("src", id);
      }
    }
  },
  "submenu": [
    { id:"/ts/erp/antigos/credito/filacredito.html",value:"Fila Credito" },
    { id:"/ts/erp/etiqueta/index.html",value:"Etiquetas Moda" },
    { id:"/ts/erp/antigos/aduana/vendas/dia.html", value: "App Aduana"},
    { id:"http://tradesis.com.br/", value: "TradeSis"}
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
  
    { id:"/ts/erp/exemplos/testedash1/", value: "Layout DashBoard"},
    { id:"/ts/erp/testes/testesLucas/Dashboard_Servicos/index.php", value: "Dashboard Serviços"}

    
    
  ]
};
var wMenuBling = {
  "value": "Bling",
  "id" : "wbling",

  labelAlign:"right",
  config:{
    on: {
      onItemClick:function(id){
        $$("menuIframe").define("src", id);
      }
    }
  },
  "submenu": [
    { id:"/ts/erp/testes/testesLucas/Bling/blingV1/app.php", value: "Bling V1"},
    { id:"/ts/erp/testes/testesLucas/Bling/blingV2/app.php", value: "Bling V2"}, 
    { id:"/ts/erp/testes/testesLucas/Bling/blingV22/app.php", value: "Bling V2.2"},
    { id:"/ts/erp/testes/testesLucas/Bling/blingV3/app.php", value: "Bling V3"}
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
    //{ id:"/ts/erp/exemplos/testedash1/", value: "Teste DashBoard"},
    { id:"/ts/erp/testes/testesLucas/CRUD_V1/index.php", value: "CRUD V1"},
    { id:"/ts/erp/testes/testesLucas/CRUD_V2/index.php", value: "CRUD V2"},
    { id:"/ts/erp/testes/testesLucas/CRUD_V3/index.php", value: "CRUD V3"},
    { id:"/ts/erp/testes/testesLucas/CRUD_V4/index.php", value: "CRUD V4"}


    //{ id:"/ts/erp/testes/testesLucas/Dashboard_Servicos/index.php", value: "Dashboard Serviços"}

  ]
};


var wMenu = {
  "id": "wMenu",
  "data":[  
            
    wMenuApps,
    wMenuTestes,
    
    
    wMenuDash,
    wMenuAntigos,

     wMenuBling,
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
        
    
   

