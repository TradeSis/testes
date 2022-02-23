<?php
  // parametros de conexao
  $hostname="sql486.main-hosting.eu";
  $username="u384787522_helio";
  $password="2Et*MNY1oJul";
  $dbname="u384787522_tswebdev";
  
  $dbmy=mysqli_connect($hostname,$username, $password,$dbname);

  if (mysqli_connect_errno())
  {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
      die ("html>script language='JavaScript'>alert('Unable to connect to database! Please try again later.'),history.go(-1)/script>/html>");
  }


function pegaparam($varname) {
    $v=(isset($_GET[$varname]))?$_GET[$varname]:((isset($_POST[$varname]))?$_POST[$varname]:'');
    //if(!$v) $v = $_SESSION[$varname];
    //else $_SESSION[$varname] = $v;
    return($v);
}


    echo "ESTOU AQUI";

    $fp = fopen('c:\tradesis\data.txt', 'w');

foreach($_POST as $key => $value)
{
    fwrite($fp, $key . ' = ' . $value .'\n');
  
 
}



$webix_operation = pegaparam("webix_operation");

	if($webix_operation=="update"){
      
		$codigoCliente=$_POST['codigoCliente'];
		$numContrato=$_POST['numContrato'];
		$numParcela=$_POST['numParcela'];
		$dtven=$_POST['dtven'];
		$valor=$_POST['valor'];
        $dtpag=$_POST['dtpag'];
        if ($dtpag=='0000-00-00'||$dtpag=='') { $dtpag=NULL;};
        fwrite($fp,  ' dtpag =  ' . $dtpag .'\n');

		$sql = "UPDATE `parcelas` SET `dtven`='$dtven',`valor`=$valor,`dtpag`=$dtpag WHERE codigoCliente=$codigoCliente and 
                                                        numContrato = $numContrato and
                                                        numParcela = $numParcela";
		fwrite($fp,  ' SQL ' . $sql .'\n');

        if (mysqli_query($dbmy, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
			echo "Error: " . $sql . "<br>" . mysqli_error($dbmy);
		}
		mysqli_close($dbmy);
	}

    fclose($fp);

?>