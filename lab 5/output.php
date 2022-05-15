<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="">
    <link href='https://css.gg/eye.css' rel='stylesheet'>
    <link href='https://css.gg/arrow-left.css' rel='stylesheet'>

    <title>Output</title>
</head>
<body>
    
</nav>
  <form action="" method="GET">
  <div class="container">
<nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <a class="navbar-brand border-1" href="index.php"><i class="gg-arrow-left"></i> Intoarcere</a>
    </div>
  <div class="container">
		  <?php
		  $conn = new mysqli('localhost','root','','candidat');
		  if($conn->connect_error){
			  die("Error: " . $conn->connect_error);
		  }
	  $sql = "SELECT * FROM candidat";
	  echo "<table class='table'><tr>
	  <th scope='col'>#id</th><th scope='col'>Numele</th><th scope='col'>Prenumele</th>
	  <th scope='col'>Telefonul</th><th scope='col'>Adresa</th>
	  <th scope='col'>Email</th> <th scope='col'>Profesia</th>
	  </tr>";
	  
	  
if($result = $conn->query($sql)){
    foreach($result as $row){
		echo "<tr>";
        echo "<th scope='col'>". $row["id"] . "</td>";
        echo "<th scope='col'>" . $row["fname"] . "</td>";
        echo "<th scope='col'>" . $row["lname"]  . "</td>";
		echo "<th scope='col'>" . $row["email"] . "</td>";
		echo "<th scope='col'>" . $row["number"] . "</td>";
		echo "<th scope='col'>" . $row["adress"] . "</td>";
		echo "<th scope='col'>" . $row["job"] . "</td>";
    echo "<th scope='col'><a href='candidat.php?id=${row['id']}' target='_blank'><i class='gg-eye'></i></a></td>";
		echo "</tr>";
	
    }
	echo "</table>";
	

}else{
	echo "error: " . $conn->error;
}
	

$conn->close();
$result->close();
?>
    <div class="container">
    <div class="row">
        <div class="col-md-8">
            <input type="text" name="id" value="<?php if(isset($_GET['id'])){echo $_GET['id'];} ?>" class="form-control">
        </div>
        <h2>Căutați candidatul după id-ul personal</h2>
        <div class="col-md-4">
            <button type="submit" class="btn btn-primary">Search</button>
        </div>
    </div>

    <div>
<div>
  <?php
$conn = new mysqli('localhost','root','','candidat');;

if(isset($_GET['id']))
{
    $id = $_GET['id'];

    $query = "SELECT * FROM candidat WHERE id='$id' ";
    $query_run = mysqli_query($conn, $query);

    if(mysqli_num_rows($query_run) > 0)
    {
        foreach($query_run as $row)
        {
            ?>
             <div class="form-group mb-3">
             <table class='table'><tr>
	  <th scope='col'>#id</th><th scope='col'>Numele</th><th scope='col'>Prenumele</th>
	  <th scope='col'>Telefonul</th><th scope='col'>Adresa</th>
	  <th scope='col'>Email</th> <th scope='col'>Profesia</th>
	  </tr>
                        <th scope='col'><?= $row['id']; ?></td>   
                        <th scope='col'><?= $row['fname']; ?></td>   
                        <th scope='col'><?= $row['lname']; ?></td>
                        <th scope='col'><?= $row['email']; ?></td>  
                        <th scope='col'><?= $row['number']; ?></td>  
                        <th scope='col'><?= $row['adress']; ?></td>
                        <th scope='col'><?= $row['job']; ?></td>
                      <?php  echo "<th scope='col'><a href='candidat.php?id=${row['id']}' target='_blank'><i class='gg-eye'></i></a></td>";?>    
        </table>
                      </div>
                    
                       <?php
                   }
                  }
             else
                  {
                     echo "No Record Found";
                  }
                     }
                                   
                                ?>
</div>
    </div>
    </div>
    </form>
   
</body>
</html>