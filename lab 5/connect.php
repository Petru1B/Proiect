<?php 

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$number = $_POST['number'];
$adress = $_POST['adress'];
$job = $_POST['job'];
$instagram = $_POST['instagram'];
$facebook = $_POST['facebook'];
$startdatajob = $_POST['startdatajob'];
$enddatajob = $_POST['enddatajob'];
$cityJob = $_POST['cityJob'];
$denPoz = $_POST['denPoz'];
$cityComp = $_POST['cityComp'];
$compName = $_POST['compName'];
$enddatastud = $_POST['enddatastud'];
$titedu = $_POST['titedu'];
$tipstud = $_POST['tipstud'];


 $host ="localhost";
 $dbUsername ="root";
 $dbPassword ="";
 $dbname ="candidat";

$conn = new mysqli('localhost','root','','candidat');
if($conn->connect_error){
    die('Conectarea esuata : '.$conn->connect_error);
}else{
  
 $stmt = $conn->prepare("insert into candidat (fname, lname, email, adress, job, number, instagram, facebook, startdatajob, enddatajob, cityJob, denPoz,  compName, titedu, cityComp, enddatastud, tipstud )
             values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
 $stmt->bind_param("sssssisssssssssss", $fname, $lname, $email, $adress, $job, $number,$instagram, $facebook, $startdatajob, $enddatajob, $cityJob, $denPoz,  $compName, $titedu ,$cityComp,$enddatastud, $tipstud);
 $stmt->execute();
 $stmt->close();
 $conn->close();
 clearstatcache();
}

include("index.php");
 ?>