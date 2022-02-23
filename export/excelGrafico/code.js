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

/* var big_film_set = [
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
 */
var vJsonCliente = [
  {"idx":1,"cliente":"Kalita Raquel","cpf":"00000000","precoProduto":678,"rating":"9,2","rank":"1"},
  {"idx":2,"cliente":"Lucas Rosa","cpf":"000000011","precoProduto":11,"rating":"9,2","rank":"2"},
  {"idx":3,"cliente":"Hélio","cpf":"197401010","precoProduto":119,"rating":"9","rank":"3"},
  {"idx":4,"cliente":"João","cpf":"19661010","precoProduto":213,"rating":"8,9","rank":"4"},
  {"idx":5,"cliente":"Marta","cpf":"101011104","precoProduto":533,"rating":"8,9","rank":"5"}
];

 var wGridCli = {
  "view": "datatable",
  "columns": [
    {
      "id": "cliente",
      "header": "Cliente",
      "sort": "string"
    },
    {
      "id": "cpf",
      "header": "CPF",
      "sort": "string"
    },
    {
      "id":"precoProduto",
      "header":"Preço Produto un.",
      "sort":"string"
    },
    {
      "id":"quantidadeproduto",
      "header":"Quantidade",
      "sort":"string"
    },
    {
      "id":"totalComprado",
      "header":"Total Comprado",
      "sort":"string"
    },
   
    
  ],
  "select": true,
  "scrollX": false,
  
  
  "id": "wGridCli",
  "height": 0
}; 

var tgrafico2 = {
  "id": "tgrafico2",
  "type": "pie",
  "value": "#totalComprado#", //Json da tabela Clientes         
  "label": "#totalComprado#",
  "view": "chart",

  yAxis:{},
  xAxis:{
    lines:true,
    title:"Vendas por Clientes",
    template:"#cliente#"                       
  }
};

var tgrafico = {
  "id": "tgrafico",
  "type": "bar",
  "value": "#precoProduto#", //Json da tabela Clientes         
  "label": "#precoProduto#",
  "view": "chart",

  yAxis:{},
  xAxis:{
    lines:true,
    title:"Vendas por Clientes",
    template:"#cliente#"                       
  }
};

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
            var sel = $$("wGridCli").getSelectedId(true);// array of selected records
  
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
          { id:"idx", header:"id", width:50 },
          { id:"cliente", header:"cliente", width:100 },
          { id:"cpf",  header:"cpf" , width:100 },
          { id:"precoProduto", header:"precoProduto", width:100},
          { id:"quantidadeproduto",  header:"quantidadeproduto" , width:100 },
          { id:"totalComprado", header:"totalComprado", width:100}
 
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
        data:vJsonCliente
      }
    ]
  });  
//*********************** */
var wPrincipal =
{ "id": "wPrincipal",
  "rows": [  
            {cols: 
              [wexport]
            },
            {cols: 
              [tgrafico]
            }         
  ]

};

  var ui = {
    rows:[  
        wToolbar,
          //wexport,
          wPrincipal
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

    //$$("wGridCli").parse(vJsonCliente);
    //$$("tgrafico").parse(vJsonCliente);
  });

  