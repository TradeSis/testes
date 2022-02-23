<?php

if(isset($_COOKIE["user_email"]))
{
 header("location:index.php");
}
?>

<!DOCTYPE html>
<html>
	<head>
		<script src="/ts/js/jquery/jquery.min.js" type="text/javascript"></script>	

	<script type="text/javascript"          src="/ts/js/webix/codebase/webix.min.js"></script>
	<link rel="stylesheet" type="text/css" href="/ts/js/webix/codebase/skins/flat.min.css">

		<title>Windows: Form inside</title>
	</head>
	<body>
		<div class='header_comment'>Window with form inside</div>

		<div id="container">
        <span><?php echo $message; ?></span>
        </div>    

		<script type="text/javascript" charset="utf-8">

		var form = {
			view:"form",
			borderless:true,
			elements: [
				{ view:"text", label:'Login', name:"login", id:"user" },
				{ view:"text", label:'Senha', name:"pass" , id:"pass"},
				{ view:"button", value: "Validacao", click:function(){
					if (this.getParentView().validate()){ //validate form
                      //  webix.message("All is correct");
						var wuser = $$("user").getValue();
						var wpass = $$("pass").getValue();
						
						
						var wURL = "authentication.php?user=" +
										wuser + "&pass=" + wpass;
					//	alert(wURL);

						var wretorno = chamaAJAX (wURL);
                        
                        
						alert(wretorno);

						document.getElementById("container").innerHTML = wretorno;

						


                        this.getTopParentView().hide(); //hide window
                    }
					else
						webix.message({ type:"error", text:"Form data is invalid" });
				}}
			],
			rules:{
				
				"login":webix.rules.isNotEmpty
			},
			elementsConfig:{
				labelPosition:"top",
			}
		};

        webix.ui({
            view:"window",
            id:"win2",
            width:300,
            position:"center",
            modal:true,
            head:"User's data",
            body:webix.copy(form)
        }).show();


		var wURL = '';

function chamaAJAX(wURL) {

	var res = "";
	
	 $.ajax({
			url: wURL,
			type: "get",
			async: false,

			dataType: "text",
		  
			success: function (text_get) {

				alert("DENTRO DO AJAX= "+text_get);
				res = text_get;	
				
			},
			error: function (xhr, status, errorThrown) {

				alert("errorThrown=" + errorThrown);
			}
		})
		return res;
	}
	
	



		</script>
	</body>
</html>



		