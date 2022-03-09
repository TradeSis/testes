const aside = {
    
    view: "list",
    id:"mylist",
    scroll:false,
    select:true,
    width:200,
    css:"list_color",
    data:[
     
        {value:"Parcelas", id:"parcelas"},
    ],
    on:{
        onAfterSelect(id){ 
            $$(id).show();
        }
    }
}

const multi = {
    cells:[
      
        { id:"parcelas", cols:[table_parcelas, form_parcelas ] },
    ]   
}

