<?php


  // parametros de conexao
  $hostname="sql486.main-hosting.eu";
  $username="u384787522_helio";
  $password="2Et*MNY1oJul";
  $dbname="u384787522_tswebdev";


  
  $dbmy=mysqli_connect($hostname,$username, $password,$dbname);

  $fp = fopen('D:Programas\XAMPP\htdocs\ts\erp\testes\testesLucas\CRUD_V3\save.txt', 'w'); //********** */      //# 1- Modificação!

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
    echo "ESTOU AQUI V2";

  

foreach($_POST as $key => $value)
{
    fwrite($fp, $key . " = " . $value ."\n");
  
 
}



$webix_operation = pegaparam("webix_operation");
fwrite($fp, $webix_operation."\n");

	if($webix_operation=="update"){
      
		$ID=$_POST['ID'];                                                    //# 2- Modificação!
		$username=$_POST['username'];                                          //MODIFICAR METODO POST PARA GET!
		$password=$_POST['password'];
		

        $sql = "UPDATE tslogin SET username='$username', 'password'='$password'";
      /*   if ($tempoPrevisto=='0000-00-00'||$tempoPrevisto=='')
            { $sql .= " NULL ";} 
        else {
            { $sql .= " '$tempoPrevisto' ";} 
        } */
        
      
        
        $sql .=" WHERE ID=$ID and username=$username"; //CHAVE PRIMARIA - NUNCA VAI SER ALTERADO!!!! 

        fwrite($fp,  " tempoPrevisto =  " . $tempoPrevisto ."\n");                   //OBSERVAÇÂO! MOSTRAR PARA HELIO

		fwrite($fp,  " SQL " . $sql ."\n");

        if (mysqli_query($dbmy, $sql)) {
			echo json_encode(array("statusCode"=>200));
		} 
		else {
            fwrite($fp,  "Error: " . $sql . "<br>" . mysqli_error($dbmy) ."\n");
			echo "Error: " . $sql . "<br>" . mysqli_error($dbmy);
		}
		
	}

    if($webix_operation=="insert"){                                          //# 3- Modificação!
      
		
		$username=$_POST['username'];
		$password=$_POST['password'];
              

        $sql  = "INSERT INTO `tslogin` (`username`, `password`)" ;
        $sql .= " VALUES ('$username', '$password')";
        

       
   
        
      
        
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