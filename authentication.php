<?php      

    include('connection.php');  

    $username = $_GET['user'];  
    $password = $_GET['pass'];  

   

        //to prevent from mysqli injection  
        $username = stripcslashes($username);  
        $password = stripcslashes($password);  

      //  echo "username=".$username."\n";
      //  echo "password=".$password."\n";

        $query = "select * from tslogin where username = '$username' and password = '$password'";  

        $result = mysqli_query($con,$query);
     //   $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  
        
        $retorno['tslogin'] = [];

        if($result){
          
            /*while($row = mysqli_fetch_array($result)){
                
                $rows[] = $row;
                
          
                
            }*/
            while($row = mysqli_fetch_assoc($result)){
                //    while($row = mysqli_fetch_array($result)){
                          $retorno['tslogin'][] = $row;
                }
                print json_encode($retorno);
        }
        mysqli_close($con);


          
        if($count == 1){  
          echo "<h1><center> Login successful!!! </center></h1>"; 
 
        }  
        else{  
            echo "<h1><center> Login failed. Invalid username or password.</center></h1>";  
        }     
?> 