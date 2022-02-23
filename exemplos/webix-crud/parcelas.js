
const table_parcelas = {
    view:"datatable", 
    id:"table_parcelas",
    scroll:"y",
    select:true,
   // url:"data/data.js",
    hover:"myhover",
    save:"/ts/erp/webix-crud/save.php",
    columns:
        [
            {
              "id": "codigoCliente",         
              "header": "Codigo Cliente",
              "sort": "string"
            },
            {
              "id": "numContrato",
              "header": "Contrato",
              "sort": "string"
            },
            {
              "id": "numParcela",
              "header": "Parcela",
              "sort": "string"
            },
            {
              "id": "dtemi",
              "header": "Dt Emissão",
              "sort": "string"
            },
            {
              "id": "dtven",
              "header": "Dt Venc",
              "sort": "string"
            },
            {
              "id": "valor",
              "header": "Valor",
              "sort": "string"
            },
            {
              "id": "dtpag",
              "header": "Dt Pag",
              "sort": "string"
            }
          ,       
        { header:"", template:"<span class='webix_icon wxi-close delete_icon'></span>", width:35}
    ],
    onClick:{
        delete_icon(e, id){
        this.remove(id);
        return false;
        }
    },
    on:{
        onAfterSelect(id){
            let values = $$("table_parcelas").getItem(id);
            $$("form_parcelas").setValues(values);
        }
    }
}



