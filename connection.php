<?php      
    $host = "sql486.main-hosting.eu";  
    $user = "u384787522_helio";  
    $password = "2Et*MNY1oJul";  
    $db_name = "u384787522_tswebdev";  

      
    $con = mysqli_connect($host, $user, $password, $db_name);  
    if(mysqli_connect_errno()) {  
        die("Failed to connect with MySQL: ". mysqli_connect_error());  
    }  

    


   /*  $host = "localhost";  
    $user = "root";  
    $password = '';  
    $db_name = "bdlogin";   */
?>  