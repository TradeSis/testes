
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

webix.ajax("/ts/api/dbmy/consultaParcelas", function(text,data){
         //text = data.parcelas;
         var wJson = data.json();
         
          $$("table_parcelas").parse(wJson.parcelas);
      });

// $$("mylist").select("users");


