

let clearParcelas = () => {
    webix.confirm({
        title:"All data will be lost!",
        text:"Are you sure?"
    }).then(
        () => {
            
            $$("form_parcelas").clear();
            $$("form_parcelas").clearValidation();
        }
)};


let saveParcelas = () => {
    let form = $$( "form_parcelas" );  
    let list = $$( "table_parcelas" );  
    let item_data = $$("form_parcelas").getValues();    
    
   // alert(JSON.stringify(item_data, null, 4));
   
   

    if( form.isDirty() /*&& form.validate()*/  ){
      
        if( item_data.id ) 
            list.updateItem(item_data.id, item_data);
        else 
            list.add( item_data );
    }
   //alert("saveParcelas");
   

}
