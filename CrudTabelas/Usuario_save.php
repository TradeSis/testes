<?php

  $hostname="sql486.main-hosting.eu";
  $username="u384787522_helio";
  $password="2Et*MNY1oJul";
  $dbname="u384787522_tswebdev";



  $dbmy=mysqli_connect($hostname,$username, $password,$dbname);

  $fp = fopen('D:TRADESIS\ts\testes\CrudTabelas\Usuario_save.txt', 'w'); 

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
      
		$email=$_POST['email'];                                                    
		$empresa=$_POST['empresa'];                                        
		$nome=$_POST['nome'];
		$senha=$_POST['senha'];
		

        $sql = "UPDATE usuario SET nome='$nome', senha='$senha'";
     
        $sql .=" WHERE email='$email'"; 

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
      
		
		$email=$_POST['email'];                                                   
		$empresa=$_POST['empresa'];                                          
		$nome=$_POST['nome'];
		$senha=$_POST['senha'];       

        $sql  = "INSERT INTO `usuario` (`email`, `empresa`, `nome`, `senha`)" ;
        $sql .= " VALUES ('$email', '$empresa', '$nome', '$senha')";
       
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