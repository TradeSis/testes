var wTitulo = {
    "view": "label",
    "label": "Export Excel e PDF",
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
         wTitulo // #A2

    ]

  };

var big_film_set = [
{"id":1,"title":"The Shawshank Redemption","year":"1994","votes":"678,79","rating":"9,2","rank":"1"},
{"id":2,"title":"The Godfather","year":"1972","votes":"511,495","rating":"9,2","rank":"2"},
{"id":3,"title":"The Godfather: Part II","year":"1974","votes":"319,352","rating":"9","rank":"3"},
{"id":4,"title":"The Good, the Bad and the Ugly","year":"1966","votes":"213,03","rating":"8,9","rank":"4"},
{"id":5,"title":"My Fair Lady","year":"1964","votes":"533,848","rating":"8,9","rank":"5"},
{"id":6,"title":"12 Angry Men","year":"1957","votes":"164,558","rating":"8,9","rank":"6"},
{"id":7,"title":"Schindler's List","year":"1993","votes":"355,638","rating":"8,9","rank":"7"},
{"id":8,"title":"One Flew Over the Cuckoo's Nest","year":"1975","votes":"283,176","rating":"8,8","rank":"8"},
{"id":9,"title":"The Dark Knight","year":"2008","votes":"612,37","rating":"8,8","rank":"9"},
{"id":10,"title":"The Lord of the Rings: The Return of the King","year":"2003","votes":"472,843","rating":"8,8","rank":"10"}];



/*
  This sample shows how you can filter data before export. 

  Check or select rows you want to export and 
  then click on the corresponding button above.
*/
var wexport =
 ({
    margin:5,
    rows:[
      {
        cols: [
          { view:"button", width: 280, value:"Exportar para Excel", click:function(){
            webix.toExcel($$("data"), {
              ignore:{ checked:true },
              filter:function(obj){
                return obj.checked;
              }
            });
          }},
          { view:"button", width: 280, value:"Exportar para PDF", click:function(){
            var sel = $$("data").getSelectedId(true);// array of selected records
  
            webix.toPDF($$("data"), {
              ignore:{ checked:true },
              filter:function(obj){
                var found = sel.find(function(item){
                  return item.id == obj.id;
                });
                return found;
              }
            });
          }},
        ]
      },
      { 	
        view:"datatable", 
        id:"data", 
        select:true,
        blockselect:true, 
        multiselect:"touch",
        scrollX:false,
        columns:[
          { id:"checked", header:[{content:"masterCheckbox"}], template:"{common.checkbox()}", width:50 },
          { id:"id", header:"id", width:50 },
          { id:"title", header:"Film title",fillspace:true },
          { id:"year",  header:"Released" , width:80 },
          { id:"votes", header:"Votes",   width:80}
        ],
        scheme:{
          $init:function(obj){
            obj.checked = obj.id%2?1:0;
          }
        },
        ready:function(){
          for(var i = 1; i<11; i++)
            this.select(i, true);
        },
        data:big_film_set
      }
    ]
  });  
//*********************** */
  

  var ui = {
    rows:[  
        wToolbar,
          wexport
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