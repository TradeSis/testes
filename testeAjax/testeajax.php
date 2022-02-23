<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<script src="/ts/js/jquery/jquery.min.js" type="text/javascript"></script>	
</head>
<body>
    <div id="container"></div>    
</body>    
    

<script type="text/javascript" charset="utf-8">
    

    var wURL = '';

	function chamaAJAX(wURL) {
        var res = [];
        
         $.ajax({
                url: wURL,
                type: "get",
                async: false,

                dataType: "json",
              
                success: function (json_get) {

					//alert(JSON.stringify(json_get, null, 4));
                    
                    var obj = json_get.notasServico[0];
                   // alert(JSON.stringify(obj, null, 4));

                   
                    for(var i in obj) {
                         //  alert(JSON.stringify(obj[i], null, 4));
                         //   alert(obj[i].numeroNFSe);
                            res.push(obj[i]);
                    }

                  //  alert(JSON.stringify(res, null, 4));

					
                },
                error: function (xhr, status, errorThrown) {

                    alert("errorThrown=" + errorThrown);
                }
            })
            return res;
        }
        
    var wURL = "/ts/api/tsbling/buscaServicos?filters=dataEmissao[01/11/2021 TO 30/11/2021]; situacao[2]";

    var wjsonRetorno = chamaAJAX (wURL);
    alert("RETORNO AJAX= "+JSON.stringify(wjsonRetorno, null, 4));

    var mytable = "<table border='1px' >";
    mytable += "<th>NumeroNFSe</th>" +
                  "<th>cliente</th>" +
                  "<th>clienteCNPJ</th>" +
                  "<th>dataEmissao</th>" +
                  "<th>valorNota</th>";
    for(var i in wjsonRetorno) {
       
        mytable += "<tr>";

            mytable += "<td>" + wjsonRetorno[i].numeroNFSe + "</td>";
            mytable += "<td>" + wjsonRetorno[i].cliente + "</td>";
            mytable += "<td>" + wjsonRetorno[i].clienteCNPJ + "</td>";
            mytable += "<td>" + wjsonRetorno[i].dataEmissao + "</td>";
            mytable += "<td>" + wjsonRetorno[i].valorNota + "</td>";                                                

            mytable += "</tr>";
   
    };

    mytable += "</table>";

    document.getElementById("container").innerHTML = mytable;
    
  
   

</script>




</html>
