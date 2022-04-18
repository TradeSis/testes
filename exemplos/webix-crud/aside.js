var small_film_set = [
	{ id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank:1, category:"Thriller"},
	{ id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2, category:"Crime"},
	{ id:3, title:"The Godfather: Part II", year:1974, votes:319352, rating:9.0, rank:3, category:"Crime"},
	{ id:4, title:"The Good, the Bad and the Ugly", year:1966, votes:213030, rating:8.9, rank:4, category:"Western"},
	{ id:5, title:"Pulp fiction", year:1994, votes:533848, rating:8.9, rank:5, category:"Crime"},
	{ id:6, title:"12 Angry Men", year:1957, votes:164558, rating:8.9, rank:6, category:"Western"}
];

const xxx = { view:"panel", type:"space", header:"Widget with header",css:"webix_shadow_big",
                x:1, y:1, dx:3, dy:2, resize:true, body:{
                    view:"datatable", autoConfig:true, data: small_film_set, scroll:false, tooltip:true
                }
            };

const aside = {
    
    view: "list",
    id:"mylist",
    scroll:false,
    select:true,
    width:200,
    css:"list_color",
    data:[
        {value:"Dashboard", id:"dashboard"},
        {value:"Users", id:"users"},
        {value:"Products", id:"products"},
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
        { id:"dashboard", cols:[table, xxx ] },
        { id:"users", rows:[users] },
        { id:"products", rows:[products] },
        { id:"parcelas", cols:[table_parcelas, form_parcelas ] },
    ]   
}

