
// #A2 - TITULO
var wTitulo = {
          "view": "label",
          "label": "teste grid",
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
  
  height:0,
  
  "rows": [
	      
            { "view": "text", "label": "qtdsel", "name": "qtdsel" },
            { "view": "text", "label": "vlrctrmin", "name":  "vlrctrmin" },
            { "view": "text", "label": "vlrctrmax", "name":  "vlrctrmax" },
            { "view": "text", "label": "vlrabemin", "name":  "vlrabemin" },
            { "view": "text", "label": "vlrabemax", "name":  "vlrabemax" },
            { "view": "text", "label": "vlrparcmin", "name": "vlrparcmin" },
            { "view": "text", "label": "vlrparcmax", "name":  "vlrparcmax" },
            { "view": "text", "label": "vlrparcmax", "name": "vlrparcmax" },
            { "view": "text", "label": "diasatrasmax", "name":  "diasatrasmax" },
            { "view": "text", "label": "dtemiini", "name":  "dtemiini" },
            { "view": "text", "label": "dtemimax", "name":  "dtemimax" },
            { "view": "text", "label": "modcod", "name":  "modcod" },
            { "view": "text", "label": "tpcontrato", "name":  "tpcontrato" }
               
			
		,{ view:"button", value: "Pesquisa", click:function(){
          
                  alert( 
                      JSON.stringify(
                          $$("formulario").getValues()
                        )
                  );
                }
   }
	]
};


  
// #B1 - TELA PRINCIPAL
var wPrincipal =
          { "id": "wPrincipal",
            "rows": [
                    //  wPesquisa ,
                      form // #B2
                      
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


       var vJson = 
       [
        { "cliente":"Helio Alves",
          "contrato":"123467",
          "dataVencimento":"26/11/1967",
          "valor":"123.55",
          "nomedocampo":"valordocampo"
       },
         { "cliente":"Helio Alves",
          "contrato":"123468",
          "dataVencimento":"26/11/1967",
          "valor":"223.55",
          "nomedocampo":"valordocampo"
       },
      
        { "cliente":"Helio Alves",
          "contrato":"123469",
          "dataVencimento":"26/11/1967",
          "valor":"323.55",
          "nomedocampo":"valordocampo"
       }
      
      ];

       $$("wGrid").parse(vJson);


       
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