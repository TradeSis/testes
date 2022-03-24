var ui= ({
  
    view: "scrollview",
    scroll: "y",
    body: {

    cols:[//PRINCIPAL #A1
          { //A2
                rows: [//B1
        
                          { height:50,
                            rows:[
                              { 
                                  "view": "label",
                                  "label": "Dashboard",
                                  id: "wTitulo",
                                  "height": 0
                                
                              },
                              {
                                "id": "wToolbar",
                                "height": 34,
                                "view": "toolbar",
                                "css": "webix_dark",
                                      "padding": {
                                        "right": 20,
                                        "left": 20
                                      },
                                      "elements": [
                                      ]
                              }
                            ]
                          },

                          {
                            
                              "rows":[
                                {
                                
                                 "view": "toolbar",
                                 "cols": [
                                   { "view": "label", "label": "Nota Venda Completo" },
                           
                                   { view:"combo", width:300, id:"wcombo",
                                 label: 'Ano',  name:"ano"
                           
                                 
                                },
                           
                                 { view:"button", width: 120, align: "center", value:"Seleciona", click:function(){
                                   //JSON.stringify( this.getParentView().getValues()); - Olhar a variavel transformada em Json
                                   var wpar = this.getParentView().getValues();
                                   wpar = wpar.ano;
                           
                                   carregaGraficoVendasPorMes(wpar, JsonEntrada);
                                  
                               }},
                               
                                  ] 
                            }]
                           
                          },

                          {
                            "rows": [
                              { "label": "Faturamento", "view": "label", "align": "center" },
                              {
                                "cols": [
                                  { "view": "label"},
                                  { "label": "Ano", "view": "label", "align": "center"},
                                  { "label": "Média  Mês", "view": "label", "align": "center" }
                                ]
                              },
                              {
                                "cols": [
                                  { "label": "Realizado", "view": "label" },
                                  {
                                    "label": "R$ 999.999.99,99",
                                    "view": "label",
                                  
                                    "align": "right"
                                    
                                  },
                                  { "label": "R$ 99.999.99,99", "view": "label","align": "right" }
                                ]
                              },
                              {
                                "cols": [
                                  { "label": "Meta", "view": "label" },
                                  {
                                    "label": "R$ 999.999.99,99",
                                    "view": "label",
                                    
                                  
                                    "align": "right"
                                  },
                                  { "label": "R$ 9.999.99,99", "view": "label", "align": "right" }
                                ]
                              }
                            ]
                          },
                          
                
          {//A3
            height:150,
              cols:[
                { "cols": [{
                  view: "template",
                  template: "Mais oi"
                }] },
                { "cols": [{
                  view: "template",
                  template: "Mais oi oi"
                }] },
              ]
              },//A3,
              
              { 
                rows:[
                  { header:"col 10", body:"content 1", height:150},
                    { body:"Content 20", height: 350},
                    { body:"Content 30", height: 350}
                ]
              },
              { 
                rows:[
                  { header:"col 100", body:"content 1", height:150},
                    { body:"Content 200", height: 350},
                    { body:"Content 300", height: 350}
                ]
              }

                      ]//B1

            },//A2
          
    ]//PRINCIPAL #A1


    }
     
  });


    // CHAMA WEBIX
    webix.ready(function(){

      if (webix.CustomScroll)
    		webix.CustomScroll.init();

      // SETA WEBIX PARA BR
      webix.i18n.setLocale("pt-BR");
      // ATIVA UI
      webix.ui.fullScreen();
      webix.ui(ui);
      
  

    });

    
        
    
   

