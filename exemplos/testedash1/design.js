
webix.ready(function(){
	if (webix.CustomScroll)
		webix.CustomScroll.init();
	webix.ui({
	"id": 1640193021313,
	"cols": [
		{
			"width": 197,
			"rows": [
				{
					"label": "DASH BOARD",
					"view": "label",
					"height": 0,
					"labelPosition": "top",
					"align": "center"
				},
				{
					"label": "Combo",
					"value": "1",
					"options": "demo->61b7631ab72b5e00183b1aa8",
					"view": "combo",
					"align": "center",
					"labelAlign": "center",
					"labelPosition": "top"
				},
				{
					"label": "Combo",
					"value": "1",
					"options": "demo->61b7631ab72b5e00183b1aa8",
					"view": "combo",
					"labelAlign": "center",
					"labelPosition": "top"
				},
				{
					"label": "Combo",
					"value": "1",
					"options": "demo->61b7631ab72b5e00183b1aa8",
					"view": "combo",
					"height": 63,
					"labelAlign": "center",
					"labelPosition": "top"
				},
				{
					"view": "template",
					"template": "You can place any widget here..",
					"role": "placeholder"
				}
			],
			"type": "wide",
			"padding": {
				"top": 10,
				"bottom": 10,
				"left": 10,
				"right": 10
			}
		},
		{
			"rows": [
				{
					"cols": [
						{
							"autoheight": false,
							"view": "form",
							"rows": [
								{
									"label": "Quantidade de Vendas",
									"view": "label",
									"height": 25,
									"borderless": true,
									"align": "center"
								},
								{
									"height": 57,
									"cols": [
										{
											"view": "text",
											"name": "email",
											"height": 0,
											"disabled": true,
											"value": "10000"
										},
										{
											"view": "text",
											"height": 0,
											"disabled": true,
											"value": "15000,00"
										},
										{
											"view": "text",
											"height": 0,
											"labelAlign": "center",
											"value": "582200",
											"disabled": true
										}
									]
								},
								{
									"url": "demo->61b7631ab72b5e00183b1aa6",
									"type": "line",
									"xAxis": "#value#",
									"yAxis": {},
									"view": "chart",
									"height": 156,
									"borderless": true,
									"shadow": false
								}
							],
							"type": "clean",
							"margin": 5
						},
						{
							"autoheight": false,
							"view": "form",
							"rows": [
								{
									"label": "Faturamento",
									"view": "label",
									"height": 25,
									"borderless": true,
									"align": "center"
								},
								{
									"height": 31,
									"cols": [
										{
											"view": "text",
											"name": "email",
											"height": 0,
											"disabled": true,
											"value": "10000"
										},
										{
											"view": "text",
											"height": 0,
											"disabled": true,
											"value": "15000,00"
										},
										{
											"view": "text",
											"height": 0,
											"labelAlign": "center",
											"value": "582200",
											"disabled": true
										}
									]
								},
								{
									"url": "demo->61b7631ab72b5e00183b1aa6",
									"type": "pie",
									"xAxis": "#value#",
									"yAxis": {},
									"view": "chart",
									"height": 167
								}
							],
							"borderless": true
						},
						{
							"autoheight": false,
							"view": "form",
							"rows": [
								{
									"label": "Ticket Médio",
									"view": "label",
									"height": 25,
									"borderless": true,
									"align": "center"
								},
								{
									"height": 57,
									"cols": [
										{
											"view": "text",
											"name": "email",
											"height": 0,
											"disabled": true,
											"value": "10000"
										},
										{
											"view": "text",
											"height": 0,
											"disabled": true,
											"value": "15000,00"
										},
										{
											"view": "text",
											"height": 0,
											"labelAlign": "center",
											"value": "582200",
											"disabled": true
										}
									],
									"borderless": true
								},
								{
									"url": "demo->61b7631ab72b5e00183b1aa6",
									"type": "bar",
									"xAxis": "#value#",
									"yAxis": {},
									"view": "chart",
									"height": 0,
									"borderless": true
								}
							],
							"borderless": true
						}
					],
					"borderless": true
				},
				{
					"cols": [
						{
							"url": "demo->61b7631ab72b5e00183b1aa5",
							"columns": [
								{
									"id": "title",
									"header": "Title",
									"fillspace": true,
									"sort": "string"
								},
								{
									"id": "year",
									"header": "Year",
									"sort": "string"
								},
								{
									"id": "votes",
									"header": "Votes",
									"sort": "string"
								},
								{
									"id": "rating",
									"header": "Rating",
									"sort": "string"
								},
								{
									"id": "rank",
									"header": "Rank",
									"sort": "string"
								},
								{
									"id": "category",
									"header": "Category",
									"sort": "string"
								}
							],
							"view": "datatable"
						},
						{
							"view": "template",
							"template": "You can place any widget here..",
							"role": "placeholder",
							"width": 18
						},
						{
							"rows": [
								{
									"label": "Text",
									"view": "text"
								},
								{
									"label": "Highlight",
									"view": "texthighlight",
									"height": 43,
									"borderless": true,
									"align": "center"
								},
								{
									"url": "demo->61b7631ab72b5e00183b1aa6",
									"type": "area",
									"xAxis": "#value#",
									"yAxis": {},
									"view": "chart"
								}
							],
							"width": 301
						}
					],
					"borderless": true
				}
			],
			"width": 0,
			"borderless": true,
			"padding": {
				"top": 10,
				"bottom": 10,
				"left": 10,
				"right": 10
			},
			"type": "wide"
		}
	],
	"borderless": true,
	css:"diff",
	type:"space"
});
});