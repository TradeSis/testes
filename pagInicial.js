
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
      { id:"/ts/erp/applucas/menu.php", value: "App Lucas "},
      { id:"/ts/erp/testes/ajax/testeajax.php", value: "Teste Ajax"},
      { id:"/ts/erp/testes/grid/app.php", value: "Teste Grid"},
      { id:"/ts/erp/testes/webix/13_form_modal.html", value: "Webix Modal"},
      { id:"/ts/erp/testes/webix/13_form_popup.html", value: "Webix POPUP"}
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
  
  var wMenuEx = {
    "value": "Exemplos",
    "id" : "wmex",
  
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
      { id:"/ts/erp/exemplos/testedash1/", value: "Teste DashBoard"}
      
    ]
  };
  
  var wMenu = {
    "id": "wMenu",
    "data":[  
              wMenuApps,
              wMenuTestes,
              
              
              wMenuEx,
              wMenuAntigos
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
    view:"form",
    borderless:true,
    elements: [
        { view:"text", label:'Login', name:"login" },
        { view:"text", label:'Email', name:"email" },
        { view:"button", value: "Submit", click:function(){
            if (this.getParentView().validate()){ //validate form
                webix.message("All is correct");
                this.getTopParentView().hide(); //hide window
            }
            else
                webix.message({ type:"error", text:"Form data is invalid" });
        }}
    ],
    rules:{
        "email":webix.rules.isEmail,
        "login":webix.rules.isNotEmpty
    },
    elementsConfig:{
        labelPosition:"top",
    }
};
/*
webix.ui({
view:"popup",
id:"win1",
width:500,
head:false,
body:webix.copy(form)
});
*/
function showForm(winId, node){
    $$(winId).getBody().clear();
    $$(winId).show(node);
    $$(winId).getBody().focus();
}

webix.ui({
    align:"left",
    body:{
        height:40, 
        margin:10,
        cols:[
            { view:"button",
                width:100, value: 'Login',
                click:function(){ showForm("win1", this.$view) }
            }
        ]
    }
});
   
  var wlogo =  { view: "label", label: "", width: 160, autoheight:true, css:'app-logo',  height: 30 };
  
  var wamb = {
    view: "label",
    label: "Ambiente de Testes",
    css:'amb'
  };
  
  /* var icon = { view:"combo", options:list_data, icon:"my-pentacle", inputWidth:200 }; */
  
  var wcabec =
  {
    css:'wMenu',
    "height": 50,
    "cols": [ wlogo, wMenu, wamb, 
              
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
  //****************************************************************** */

    
  //****************************************************************** */
  var ui = {
    
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
        webix.ui(ui);
  
      });

    /*  webix.ui({
        view:"popup",
        id:"win1",
        width:500,
        head:false,
        body:webix.copy(form)
      });
  */