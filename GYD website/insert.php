<?php
$email=$_POST["email"]; 
$password=$_POST["password"]; 
$conpass=$_POST["confirm"];  
$mysql = mysqli_connect("localhost", "root")  
or die("Can't connect to DB"); 
mysqli_select_db($mysql, "test")  
or die("Can't select DB"); 
mysqli_query($mysql, "insert into gyd_db values('$email',' $password',' $conpass')") 
or die("Query failed to insert"); 
include("LOGIN.html");
echo '<script>alert("Account created!")</script>';
exit()
?>
