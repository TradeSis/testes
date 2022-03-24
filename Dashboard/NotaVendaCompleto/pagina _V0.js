var ui= ({
  
    view: "scrollview",
    scroll: "y",
    body: {

    cols:[//PRINCIPAL #A1
          { //A2
                rows: [//B1
        
                          { 
                            rows:[
                              { header:"col 1", body:"content 1", height:150},
                                { body:"Content 2", height: 35},
                                { body:"Content 3", height: 35}
                            ]
                          },
                
          

          {//A3
              cols:[
                { header:"col 1", body:"content 1", width:150 },
                { body:"Content 2"},
                { 
                  header:"col 3",
                  body:"content 3",
                  width:150
                },
                { body:"Content 4" },
                { header:"col 5", body:"content 5", width:150}
              ]
              },//A3,
              { 
                rows:[
                  { header:"col 1", body:"content 1", height:150},
                    { body:"Content 2", height: 35},
                    { body:"Content 3", height: 35}
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

    
        
    
   

