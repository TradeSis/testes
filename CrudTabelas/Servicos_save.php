<?php


  $hostname="sql486.main-hosting.eu";
  $username="u384787522_helio";
  $password="2Et*MNY1oJul";
  $dbname="u384787522_tswebdev";


  
  $dbmy=mysqli_connect($hostname,$username, $password,$dbname);

  $fp = fopen('D:TRADESIS\ts\testes\CrudTabelas\Servicos_save.txt', 'w'); 

  fwrite($fp, "conectando mysql=".$dbname."\n");

  if (mysqli_connect_errno())
  {
    fwrite($fp, "Failed to connect to MySQL: " . mysqli_connect_error()."\n");
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
      die ("html>script language='JavaScript'>alert('Unable to connect to database! Please try again later.'),history.go(-1)/script>/html>");
  }


function pegaparam($varname) {
    $v=(isset($_GET[$varname]))?$_GET[$varname]:((isset($_POST[$varname]))?$_POST[$varname]:'');

    return($v);
}

fwrite($fp, "ESTOU AQUI"."\n");
    echo "ESTOU AQUI V2";

  

foreach($_POST as $key => $value)
{
    fwrite($fp, $key . " = " . $value ."\n");
  
 
}


$webix_operation = pegaparam("webix_operation");
fwrite($fp, $webix_operation."\n");

	if($webix_operation=="update"){
      
		$ID=$_POST['ID'];                                                    
		$empresa=$_POST['empresa'];                                          
		$clienteCodigo=$_POST['clienteCodigo'];
		$titulo=$_POST['titulo'];
		$descricao=$_POST['descricao'];
        $dataInclusao=$_POST['dataInclusao'];
        $dataAprovacao=$_POST['dataAprovacao'];
        $dataEntrega=$_POST['dataEntrega'];
        $dataEncerramento=$_POST['dataEncerramento'];
        $valor=$_POST['valor'];
        $horas=$_POST['horas'];
        $vlrHora=$_POST['vlrHora'];
        $statusSer=$_POST['statusSer'];

        $sql = "UPDATE servicos SET ID='$ID', empresa='$empresa', clienteCodigo='$clienteCodigo', titulo=$titulo, descricao='$descricao', dataInclusao='$dataInclusao'
        , dataAprovacao='$dataAprovacao', dataEntrega='$dataEntrega', dataEncerramento='$dataEncerramento', valor='$valor', horas='$horas'
        , vlrHora='$vlrHora', statusSer='$statusSer'";

   
        
        $sql .=" WHERE ID=$ID"; 


		fwrite($fp,  " SQL " . $sql ."\n");

        if (mysqli_query($dbmy, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
            fwrite($fp,  "Error: " . $sql . "<br>" . mysqli_error($dbmy) ."\n");
			echo "Error: " . $sql . "<br>" . mysqli_error($dbmy);
		}
		
	}

    if($webix_operation=="insert"){                                          
      
		
		                                                    
		$empresa=$_POST['empresa'];                                          
		$clienteCodigo=$_POST['clienteCodigo'];
		$titulo=$_POST['titulo'];
		$descricao=$_POST['descricao'];
        $dataInclusao=$_POST['dataInclusao'];
        $dataAprovacao=$_POST['dataAprovacao'];
        $dataEntrega=$_POST['dataEntrega'];
        $dataEncerramento=$_POST['dataEncerramento'];
        $valor=$_POST['valor'];
        $horas=$_POST['horas'];
        $vlrHora=$_POST['vlrHora'];
        $statusSer=$_POST['statusSer'];        

        $sql  = "INSERT INTO `servicos` (`empresa`, `clienteCodigo`, `titulo`, `descricao`, `dataInclusao`, 
        `dataAprovacao`, `dataEntrega`, `dataEncerramento`, `valor`, `horas`, `vlrHora`, `statusSer`)" ;

        $sql .= " VALUES ('$empresa', '$clienteCodigo', '$titulo', '$descricao', '$dataInclusao',
        '$dataAprovacao', '$dataEntrega', '$dataEncerramento', '$valor', '$horas', '$vlrHora', '$statusSer' )";
        
        
		fwrite($fp,  " SQL " . $sql ."\n");

        if (mysqli_query($dbmy, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
            fwrite($fp,  "Error: " . $sql . "<br>" . mysqli_error($dbmy) ."\n");
			echo "Error: " . $sql . "<br>" . mysqli_error($dbmy);
		}
	
	}
	mysqli_close($dbmy);
    fclose($fp);

?>