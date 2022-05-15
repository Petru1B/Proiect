<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="">
    <link href='https://css.gg/arrow-left.css' rel='stylesheet'>
    <link href='https://css.gg/eye.css' rel='stylesheet'>
    <title>Candidat</title>
</head>
<body>
  <form action="" method="GET">
  <div class="container">
 
  <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <a class="navbar-brand border-1" href="output.php"><i class="gg-arrow-left"></i> Intoarcere</a>
</nav>
 
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
                            <label for="">Nume</label>
                        <input type="text" value="<?= $row['fname']; ?>" class="form-control" disabled>
                            </div>
                     <div class="form-group mb-3">
                     <label for="">Prenume</label>
                <input type="text" value="<?= $row['lname']; ?>" class="form-control" disabled>
                        </div>
                  <div class="form-group mb-3">
                         <label for="">Telefonul </label>
                           <input type="text" value="<?= $row['number']; ?>" class="form-control" disabled>
                       </div>
                       <div class="form-group mb-3">
                         <label for="">Email </label>
                           <input type="text" value="<?= $row['email']; ?>" class="form-control" disabled>
                       </div>
                       <div class="form-group mb-3">
                         <label for="">Adresa </label>
                           <input type="text" value="<?= $row['adress']; ?>" class="form-control" disabled>
                       </div>
                       <div class="form-group mb-3">
                         <label for="">Adresa </label>
                           <input type="text" value="<?= $row['adress']; ?>" class="form-control" disabled>
                       </div>
                       <div class="form-group mb-3">
                         <label for="">Profesia </label>
                           <input type="text" value="<?= $row['job']; ?>" class="form-control" disabled>
                       </div>
                       <hr>
                       <h1>Job</h1>
                       <div class="form-group mb-3">
                         <label for="">Start Data </label>
                           <input type="text" value="<?= $row['startdatajob']; ?>" class="form-control" disabled>
                       </div>
                       <div class="form-group mb-3">
                         <label for="">End Data </label>
                           <input type="text" value="<?= $row['enddatajob']; ?>" class="form-control" disabled>
                       </div>
                       <div class="form-group mb-3">
                         <label for="">Orasul </label>
                           <input type="text" value="<?= $row['cityJob']; ?>" class="form-control" disabled>
                       </div>
                       <div class="form-group mb-3">
                         <label for="">Denumirea Poziției </label>
                           <input type="text" value="<?= $row['denPoz']; ?>" class="form-control" disabled>
                       </div>
                       <div class="form-group mb-3">
                         <label for="">Orasul</label>
                           <input type="text" value="<?= $row['cityComp']; ?>" class="form-control" disabled>
                       </div>
                       <div class="form-group mb-3">
                         <label for="">Companie</label>
                           <input type="text" value="<?= $row['cityComp']; ?>" class="form-control" disabled>
                       </div>
                       <hr>
                       <h1>Studii</h1>
                       <div class="form-group mb-3">
                         <label for="">End Data</label>
                           <input type="text" value="<?= $row['enddatastud']; ?>" class="form-control" disabled>
                       </div>
                       <div class="form-group mb-3">
                         <label for="">Titlu educațional</label>
                           <input type="text" value="<?= $row['titedu']; ?>" class="form-control" disabled>
                       </div>
                       <div class="form-group mb-3">
                         <label for="">Tipul</label>
                           <input type="text" value="<?= $row['tipstud']; ?>" class="form-control" disabled>
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
    </div>
    </form>
   
</body>
</html>