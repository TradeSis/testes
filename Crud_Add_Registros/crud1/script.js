
webix.ui({
    rows:[
        header,
        {
            cols:[
            aside, {view: "resizer"}, multi
            ]
        },
        footer
    ]
});

var wJson = chamaAJAX("/ts/api/dbmy/consultaParcelas");
		
//alert(JSON.stringify(wJson, null, 4));

$$("table_parcelas").clearAll();
$$("table_parcelas").parse(wJson.parcelas);

/** 
webix.ajax("/ts/api/dbmy/consultaParcelas", function(text,data){
         //text = data.parcelas;
         var wJson = data.json();
         
          $$("table_parcelas").parse(wJson.parcelas);
      });
**/
// $$("mylist").select("users");


