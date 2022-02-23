
const table = {
    view:"datatable", 
    id:"film_list",
    scroll:"y",
    select:true,
    url:"data/data.js",
    hover:"myhover",
    save:"/ts/erp/webix-crud/save.php",
    columns:[
        { id:"rank", header:"", width:50, css:"rank"},
        { id:"title", header:"Film title", fillspace:true},
        { id:"year",  header:"Released", width:100},
        { id:"votes", header:"Votes", width:100},
        { id:"rating", header:"Rating", width:100},
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
            let values = $$("film_list").getItem(id);
            $$("film_form").setValues(values)
        }
    }
}



