<?php
$email=$_POST["email1"]; 
$password=$_POST["password1"]; 
$mysql=mysqli_connect("localhost","root") or die(mysqli_error()); 
mysqli_select_db( $mysql,"test") or die("can't select db"); 
$sql= "select * from gyd_db where email='$email' AND password='$password' ";
$result=mysqli_query($mysql,$sql);
if(mysqli_num_rows($result) == 1){ 
    if($_POST['email1'] == $email && $_POST['password1'] == $password){
        header( "Location: index.html" );
    }
}
else { 
    include("LOGIN.html");
}


?>
    