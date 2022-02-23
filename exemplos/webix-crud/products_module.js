
const products = {
    editable:true,
    view:"treetable",
    scrollX:false,
    columns:[
        { id:"id", header:"", width:50 },
        { id:"title", header:"Title", fillspace:true, template:"{common.treetable()} #title#", editor:"text" },
        { id:"price", header:"Price", width:200, editor:"text" }
    ],
    select:"row",
    url:"data/products.js",
    rules:{
        "price":webix.rules.isNotEmpty,
        "title":webix.rules.isNotEmpty
    }
}

