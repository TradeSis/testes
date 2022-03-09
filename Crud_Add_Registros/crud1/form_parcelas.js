const form_parcelas = {
    view:"form", 
    id:"form_parcelas", 
    width: 350,
    elements:[
        { type:"section", template:"EDIT FILMS"},
        { view:"text", name:"dtven", label:"Dt Venc", invalidMessage:"Should be between 1970 and current" },
        { view:"text", name:"valor", label:"Valor", invalidMessage:"Cannot be empty or 0" },
        { view:"text", name:"dtpag", label:"Dt Pag", invalidMessage:"Must be less than 100000" }, 
        {
            margin:10, cols:[
                { view:"button", id:"btn_save", value:"Save",click:saveParcelas},
                { view:"button", id:"btn_clear", value:"Clear", click:clearParcelas}
                
            ]
        },
        {}
    ]
    /*,
    rules:{
        title: webix.rules.isNotEmpty,
        rating(value){
            if(webix.rules.isNumber(value)){
                return true;
            }
        },
        votes(value){
            return value < 1000000 && value >= 1;
        },
        year(value){
            return value>=1970 && value <= new Date().getFullYear();
        }
    }*/
}

