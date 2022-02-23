<?php
  // parametros de conexao
  $hostname="sql486.main-hosting.eu";
  $username="u384787522_helio";
  $password="2Et*MNY1oJul";
  $dbname="u384787522_tswebdev";
  
  $dbmy=mysqli_connect($hostname,$username, $password,$dbname);

  $fp = fopen('D:Programas\XAMPP\htdocs\ts\erp\testes\testesLucas\CRUD_V1\save.txt', 'w'); //********** */

  fwrite($fp, "conectando mysql=".$dbname."\n");

  if (mysqli_connect_errno())
  {
    fwrite($fp, "Failed to connect to MySQL: " . mysqli_connect_error()."\n");
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
      die ("html>script language='JavaScript'>alert('Unable to connect to database! Please try again later.'),history.go(-1)/script>/html>");
  }


function pegaparam($varname) {
    $v=(isset($_GET[$varname]))?$_GET[$varname]:((isset($_POST[$varname]))?$_POST[$varname]:'');
    //if(!$v) $v = $_SESSION[$varname];
    //else $_SESSION[$varname] = $v;
    return($v);
}

fwrite($fp, "ESTOU AQUI"."\n");
    echo "ESTOU AQUI";

  

foreach($_POST as $key => $value)
{
    fwrite($fp, $key . " = " . $value ."\n");
  
 
}



$webix_operation = pegaparam("webix_operation");
fwrite($fp, $webix_operation."\n");

	if($webix_operation=="update"){
      
		$codigoCliente=$_POST['codigoCliente'];
		$numContrato=$_POST['numContrato'];
		$numParcela=$_POST['numParcela'];
		$dtven=$_POST['dtven'];
		$valor=$_POST['valor'];
        $dtpag=$_POST['dtpag'];

        $sql = "UPDATE parcelas SET dtven='$dtven', valor=$valor, dtpag=";
        if ($dtpag=='0000-00-00'||$dtpag=='')
            { $sql .= " NULL ";} 
        else {
            { $sql .= " '$dtpag' ";} 
        }
        
      
        
        $sql .=" WHERE codigoCliente=$codigoCliente and 
        numContrato = $numContrato and
        numParcela = $numParcela";

        fwrite($fp,  " dtpag =  " . $dtpag ."\n");

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
      
		$codigoCliente=$_POST['codigoCliente'];
		$numContrato=$_POST['numContrato'];
		$numParcela=$_POST['numParcela'];
        $dtemi=$_POST['dtemi'];
		$dtven=$_POST['dtven'];
		$valor=$_POST['valor'];
        $dtpag=$_POST['dtpag'];

        $sql  = "INSERT INTO `parcelas` (`codigoCliente`, `numContrato`, `numParcela`, `dtemi`, `dtven`, `valor`, `dtpag`)" ;
        $sql .= " VALUES ($codigoCliente, $numContrato, $numParcela, '$dtemi', '$dtven', $valor ";
        

       
        if ($dtpag=='0000-00-00'||$dtpag=='')
            { $sql .= ", NULL ";} 
        else {
            { $sql .= " , '$dtpag' ";} 
        }
        
        $sql .= ")";
        
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