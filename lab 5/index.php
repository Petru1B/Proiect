<!DOCTYPE html>
<html >
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Bun venit</title>
	<link rel="stylesheet" type="text/css" href="body.css">
   <link href='https://css.gg/add.css' rel='stylesheet'>
   <link href='https://css.gg/calendar-dates.css' rel='stylesheet'>
   <link href='https://css.gg/facebook.css' rel='stylesheet'>
   <link href='https://css.gg/instagram.css' rel='stylesheet'>
   <link href='https://css.gg/add-r.css' rel='stylesheet'>
   <link href='https://css.gg/user-add.css' rel='stylesheet'>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
   <link href='https://css.gg/youtube.css' rel='stylesheet'>
</head>
<body>
	<div class="container">
		<h1>Inregistrarea Profilului</h1>
		<form id="registration_form" action="connect.php" method="post" >
         <div class="info">
			<div>
				<input type="text" class="form_text" id="form_fname" name="fname" >
				<span class="error_form" id="fname_error_message"></span>
				<label id="nume">
					Numele
				</label>	
			</div><br>
			<div>
				<input type="text" class="form_text" id="form_lname"  name="lname">
				<span class="error_form" id="lname_error_message"></span>
				<label id="lname">
					Prenumele
				</label>	
			</div><br>
			<div>
				<input type="email" class="form_text" id="form_email"  name="email">
				<span class="error_form" id="email_error_message"></span>
				<label id="email" >
					Email 
				</label>	
			</div><br>
			<div>
				<input type="text" class="form_text" id="form_number" name="number" >
				<span class="error_form" id="number_error_message"  ></span>
				<label id="tel">
					Numarul
				</label>	
			</div><br>
            <div>
				<input type="text" class="form_text" id="form_adress" name="adress">
				<span class="error_form" id="adress_error_message"></span>
				<label id="adresss">Adresa</label>	
			</div><br>
            <div>
				<input type="text" class="form_text" id="form_job" name="job" >
				<span class="error_form" id="job_error_message"></span>
				<label id="jobs">Profesia</label>	
			</div>
      </div>
         

         <hr>
         <div >
         <h1>Adauga link-urile la retele sociale</h1>
		
		</div>
         <div >
         <h3>Adauga link</h3>
         <div>
				<input type="url"  id="form_link" name="facebook" >
				<span class="error_form" id="link_error_message"></span><td></td>
				<label id="lin1">
               facebook
               <i class="gg-facebook"></i>
				</label>
			</div>	
            <div>
               <input type="url" id="form_link1" name="instagram" >
               <span class="error_form" id="link1_error_message"></span>
               <label id="lin2">
                  instagram
                  <i class="gg-instagram"></i>
                  
               </label>	
     
       </div>
	   <div>
		 
	   </div>
	
      </div>

         <hr>
              <div>
			
                     
                              <h1>Adaugare date despre Job</h1>
							 
							
					
								  <h3>Adauga datele</h3>
								  <div>
									<label >In prezent:</label> 
									<input type="checkbox" class="check" id="dn" >
							  </div>
								  <div>
									<input type="date" class="sd stdt" name="startdatajob"  >
									<span class="error_form sd_error_message"></span>
									<label>
									  
									   Start Data
									</label>	
								  </div>
								  <div class="sfar">
								   
									<input type="date" class="end ed" name="enddatajob"  >
									<span class="error_form end_error_message"></span>
									<label>
									   End Data
									</label>	
								</div>
					   
								  <div>
									<input type="text" class="city form_city" name="cityJob">
									<span class="error_form city_error_message"></span>
									<label class="ctyjob">Orasul</label>	
								  </div>
								 
							 
								  <div >
									<input type="text" class="inst form_int1" name="denPoz">
									<span class="error_form int1_error_message"></span>
									<label class="edtitle">Denumirea poziției</label>
									</div>
									<div>
									<input class="companyname"  name="compName">
									<span class="error_form comp_error_message"></span>
									<label class="edtit">Denumirea companiei</label>
									</div>
									<div class="myhide">
									<select class="citySelect" name="cityComp">
									<option  value="Chișinău">Chișinău</option>
									<option  value="Bălți">Bălți</option>
									<option  value="Bender">Bender</option>
									<option  value="Orhei">Orhei</option>
									<option  value="Tiraspol">Tiraspol</option>
									<option  value="Nisporeni">Nisporeni</option>
									<option  value="Soroca">Soroca</option>
									</select>

					</div>
        
         <hr>
 
<div>
   <h1>Adaugare date despre Studii</h1>
  
   <div>
	<div class="halep">
		<h3>Adauga datele</h3>
		<div >
		<input type="date" class="sf" name="enddatastud"  >
		<span class="error_form sf_error_message"></span>
		<label>
		   End Data
		</label>	
	</div>
	   <div>
	   <input type="text" class="institutia form_int" name="titedu" >
	<span class="error_form int_error_message"></span>
	<label class="titlu">Titlul educațional</label>	
	<div>
	<select class="educationSelect"  id="tip" name="tipstud">
	<option  value="Lower secondary education">Lower secondary education</option>
	<option  value="Post-secondary non-tertiary education">Post-secondary non-tertiary education</option>
	<option  value="Bachelor's or equivalent">Bachelor's or equivalent</option>
	<option  value="Doctorate or equivalent">Doctorate or equivalent</option>
	<option  value="Primary education">Primary education</option>
	<option  value="Upper secondary education">Upper secondary education</option>
	<option  value="Short-cycle tertiary education">Short-cycle tertiary education</option>

    </select>
	</div>
	</div>
	</div>
         
       
              
</div>
                  <hr>
             <center>
				
			<input type="submit" class="submit" value="submit" >
			<input type="button" class="out" value="Output" >
      </center>
	
		</form>
		
	  </div>
	</div>
</div>
</div>
	
<script src="https://code.jquery.com/jquery-3.6.0.min.js" ></script>
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js" ></script>
<script src="action.js"></script>
</body>
</html>