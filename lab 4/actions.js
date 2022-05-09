  //////////////////////////////crearea formei pentru job
      
  $(document).ready(function() {
   var max_fields_1     = 1; 
   var max_1     = 10; 
   var wrapper_1   		= $(".input_fields_wrap_1");    
   var add_button_1      = $(".add_field_button_1"); 
  
   var y = 0;
   var n = 1;

   function build_1(){
      if(n < max_1){
         n++;
      $(wrapper_1).append(`
      <div>
      <div class="myhide">
       <div class="trans" >
        <h3>Adauga datele</h3>
        <div>
          <label >In prezent:</label> 
          <input type="checkbox" class="check" id="dn" >
    </div>
        <div>
          <input type="date" class="sd stdt"  >
          <span class="error_form" id="datepicker_error_message"></span>
          <label>
            
             Start Data
          </label>	
        </div>
        <div class="sfar">
         
          <input type="date" class="end ed"  >
          <span class="error_form datepicker1_error_message"></span>
          <label>
             End Data
          </label>	
      </div>

        <div>
          <input type="text" class="city form_city">
          <span class="error_form city_error_message"></span>
          <label class="ctyjob">Orasul</label>	
        </div>
        </div>
        </div>
   
        <div >
          <input type="text" class="inst form_int1">
          <span class="error_form int1_error_message"></span>
          <label class="edtitle">Denumirea poziției</label>
          </div>
          <div class="myhide">
          <select class="citySelect" name="select">
          <option value="0" selected></option>
          <option value="Chișinău">Chișinău</option>
          <option value="Bălți">Bălți</option>
          <option value="Bender">Bender</option>
          <option value="Orhei">Orhei</option>
          <option value="Tiraspol">Tiraspol</option>
          <option value="Nisporeni">Nisporeni</option>
          <option value="Soroca">Soroca</option>
          </select>
          <select class="companyName"  name="selects">
        </select>

          <button class="btn btn-outline-danger remove_field" type="button">Remove</button><br>
          <button type="button" class="hide">Save</button>
        </div>
        </div>
        </div>
        `);
      }
   }


   ////////////////
   
   $(add_button_1).click(function(e){ 
   e.preventDefault();
       if(y < max_fields_1){ 
           y++; 
      

           $(wrapper_1).append(`
           <div>
         <div class="myhide">
          <div class="trans" >
           <h3>Adauga datele</h3>
           <div>
             <label >In prezent:</label> 
             <input type="checkbox" class="check" id="dn" >
       </div>
           <div>
             <input type="date" class="sd stdt"  >
             <span class="error_form sd_error_message"></span>
             <label>
               
                Start Data
             </label>	
           </div>
           <div class="sfar">
            
             <input type="date" class="end ed"  >
             <span class="error_form end_error_message"></span>
             <label>
                End Data
             </label>	
         </div>

           <div>
             <input type="text" class="city form_city">
             <span class="error_form city_error_message"></span>
             <label class="ctyjob">Orasul</label>	
           </div>
           </div>
           </div>
      
           <div >
             <input type="text" class="inst form_int1">
             <span class="error_form int1_error_message"></span>
             <label class="edtitle">Denumirea poziției</label>
             </div>
             <div class="myhide">
             <select class="citySelect" name="select">
             <option value="0" selected></option>
             <option value="Chișinău">Chișinău</option>
             <option value="Bălți">Bălți</option>
             <option value="Bender">Bender</option>
             <option value="Orhei">Orhei</option>
             <option value="Tiraspol">Tiraspol</option>
             <option value="Nisporeni">Nisporeni</option>
             <option value="Soroca">Soroca</option>
             </select>
             <select class="companyName"  name="selects">
           </select>

             <button class="btn btn-outline-danger remove_field" type="button">Remove</button><br>
             <button type="button" class="hide">Save</button>
           </div>
           </div>
           </div>
           `);
      
         } else if(check_instjob()=== true && check_cityjob()===true && check_Enddate_job() === true ){
            build_1();
         }
         $(".check").on("click",()=> {
          $(".sfar").toggle();
       })

         let stock;

         function loadCity(){
            stock = $(".citySelect").val();
            $.ajax({
               url: `http://localhost:3000/companies/3/city/${stock}`,
               method: 'GET',
               dataType: 'json',
               success: function(response) {
                  response.forEach(title => {
                     $(".companyName").append(
                        `
                        <option value="${title.id}">${title.label}</option>
                        ` 
                     )
                     console.log(response) 
                  });
               },
           });
          };

         $(".citySelect").change(function() {
            loadCity();
         })
        
//validatorul pentru job


$(".int1_error_message").hide();
$(".city_error_message").hide();


$(".form_int1").focusout(function() {
check_instjob();
});
$(".form_city").focusout(function() {
check_cityjob();
});
$(".sd").focusout(function(){
   check_Startdate_job();
});
$(".end").focusout(function(){
   check_Enddate_job();
});

function check_Startdate_job() {
            
   if($(".sd").val() == 0) {  
      $(".sd_error_message").show();
      $(".sd").addClass('invalid');
       return false;
   }else {
      $(".sd_error_message").hide();
      $(".sd").removeClass('invalid');
      $(".sd").addClass('valid');
      return true;
     
   }
         }

         function check_Enddate_job() {
            
            if($(".end").val() == 0) {  
               $(".end_error_message").show();
               $(".end").addClass('invalid');
                return false;
            }else {
               $(".end_error_message").hide();
               $(".end").removeClass('invalid');
               $(".end").addClass('valid');
               return true;
              
            }
                  }


function check_instjob() {
var int1_length = $(".form_int1").val().length;
if(int1_length > 3 && int1_length < 15) {
   $(".int1_error_message").hide();
    $(".form_int1").removeClass('invalid');
    $(".form_int1").addClass('valid');
    $(".edtitle").show();
    return true;
}else {
   $(".int1_error_message").html("Campul data este necesar de indeplinit");
   $(".int1_error_message").show();
   $(".form_int1").addClass('invalid');
   $(".edtitle").hide();
   return false;
 
}
}

function check_cityjob() {
var int1_length = $(".form_city").val().length;
if(int1_length > 3 && int1_length < 15) {
   $(".city_error_message").hide();
    $(".form_city").removeClass('invalid');
    $(".form_city").addClass('valid');
    $(".ctyjob").show();
    return true;
}else {
   $(".city_error_message").html("Campul data este necesar de indeplinit");
   $(".city_error_message").show();
   $(".form_city").addClass('invalid');
   $(".ctyjob").hide();
   return false;
}
      }

$(".hide").click(function() {
check_instjob();
check_cityjob();


});
$(".hide").on("click",function() {
if(check_instjob() && check_cityjob()) {
 $(".myhide").hide();
 console.log("True");
}else {
 console.log("False");
}
})
});  

  //butonul de stergere
   $(wrapper_1).on("click",".remove_field", function(e){ 
       e.preventDefault();
        $(this).parent('div').parent('div').remove(); y--;
       })
     });

///////////////////////////////////////crearea formei pentru studii
 
$(document).ready(function() {
   var max_fields     = 1;
   var max     = 4;  
   var wrapper   		= $(".input_fields_wrap"); 
   var add_button      = $(".add_field_button");
  
  
   var x = 0; 
  
                 function build(){
                  if(z < max){ 
      
                     z++; 
                 $(wrapper).append(`
                 <div>
                 <div>
                 <div class="halep">
                     <h3>Adauga datele</h3>
                     <div >
                     <input type="date" name="end" class="sf"  >
                     <span class="error_form" id="datepicker_error_message"></span>
                     <label>
                        End Data
                     </label>	
                 </div>
                    <div>
                    <input type="text" class="institutia form_int" >
                 <span class="error_form int_error_message"></span>
                 <label class="titlu">Titlul educațional</label>	
                 <div>
                 <select name="tip" class="educationSelect"  id="tip">
                 </select>
                 </div>
                 </div>
                <button class="btn btn-outline-danger remove_field" type="button">Remove</button><br><br>
                <button type="button" class="hdd">Save</button><br><br>
                 <hr>
                 </div>
                 </div>
                 `);
               
               loadEducation();
              
                  }
                 
                }
                
     var z=1;
               
   $(add_button).click(function(e){ 
   e.preventDefault();
       if(x < max_fields){ 

           x++; 
           $(wrapper).append(`
           <div>
           <div class="halep">
               <h3>Adauga datele</h3>
               <div >
               <input type="date" name="end" class="sf"  >
               <span class="error_form sf_error_message"></span>
               <label>
                  End Data
               </label>	
           </div>
              <div>
              <input type="text" class="institutia form_int" >
           <span class="error_form int_error_message"></span>
           <label class="titlu">Titlul educațional</label>	
           <div>
           <select name="tip" class="educationSelect"  id="tip">
           </select>
           </div>
           </div>
          <button class="btn btn-outline-danger remove_field" type="button">Remove</button><br><br>
          <button type="button" class="hdd">Save</button><br><br>
           <hr>
           </div>
           `);
      
           loadEducation();
       }
       else if(check_titluEducation()=== true && check_date() === true){
          build();
       }
    
       
   
         //validatorul pentru studii
         $(".int_error_message").hide();
         // $(".sf_error_message").hide();
  
         $(".institutia").focusout(function() {
          check_titluEducation();
         });
         $(".sf").focusout(function() {
            check_date();
           });

         function check_titluEducation() {
          var int1_length = $(".institutia").val().length;
          if(int1_length > 3 && int1_length < 15) {
             $(".int_error_message").hide();
              $(".institutia").removeClass('invalid');
              $(".institutia").addClass('valid');
              $(".titlu").show();
              return true;
          }else {
             $(".int_error_message").html("Campul data este necesar de indeplinit");
             $(".int_error_message").show();
             $(".institutia").addClass('invalid');
             $(".titlu").hide();
             return false;
          }
                }

                function check_date() {
                  
                  if($(".sf").val() == 0) {  
                     $(".sf_error_message").show();
                     $(".sf").addClass('invalid');
                      return false;
                  }else {
                     $(".int_error_message").hide();
                     $(".sf").removeClass('invalid');
                     $(".sf").addClass('valid');
                     return true;
                    
                  }
                        }
   
       
                $(".hdd").on("click",()=> {
                   if( check_titluEducation() === true && check_date() === true ){
                  $(".halep").hide();}
               })
     
          

        });
        
   $(wrapper).on("click",".remove_field", function(e){ 
       e.preventDefault();
        $(this).parent('div').parent('div').remove(); x--;
       })
     });
///////////////////////pentru linkuri

$(document).ready(function() {
   var max_fields_2     = 1;  
   var wrapper_2   		= $(".input_fields_wrap_2"); 
   var add_button_2     = $(".add_field_button_2");
  
  
   var p = 0; 
                    
   $(add_button_2).click(function(e){ 
   e.preventDefault();
       if(p < max_fields_2){ 

           p++; 
           $(wrapper_2).append(`
           <div>
           <div>
		<input type="url" id="form_links" >
		<span class="error_form" id="links_error_message"></span>
		<label id="lin3">
		   Pinterest
		   <i class="fa fa-pinterest"></i>
		   
		</label>	
	   </div>
	   <br>
	   <div>
		<input type="url" id="form_links_1" >
		<span class="error_form" id="links_1_error_message"></span>
		<label id="lin4">
		   Snapchat
		   <i class="fa fa-snapchat"></i>
		   
		</label>	
	   </div>
	   <br>
	   <div>
		<input type="url" id="form_links_2" >
		<span class="error_form" id="links_2_error_message"></span>
		<label id="lin5">
			twitter
		   <i class="fa fa-twitter"></i>
		   
		</label>	
	   </div>
	   <br>
	   <div>
		<input type="url" id="form_links_3" >
		<span class="error_form" id="links_3_error_message"></span>
		<label id="lin6">
			Youtube
			<i class="gg-youtube"></i>
		   
		</label>	
	   </div>
      <br>
	   <div>
		<input type="url" id="form_links_4" >
		<span class="error_form" id="links_4_error_message"></span>
		<label id="lin7">
			vk
		   <i class="fa fa-vk"></i>
		   
		</label>
      <br>
      <br>
      <button class="btn btn-outline-danger remove_field" type="button">Remove</button><br><br>	
	   </div>
      </div>
           `);
      
       }
       $("#form_links").focusout(function(){
         check_links();
      });
      $("#form_links_1").focusout(function(){
         check_links_1();
      });
      $("#form_links_2").focusout(function(){
         check_links_2();
      });
      $("#form_links_3").focusout(function(){
         check_links_3();
      });
      $("#form_links_4").focusout(function(){
         check_links_4();
      });
     

       function check_links() {
         if($("#form_links").val().search("https://") != -1) {
            check = true;
          } else {
            check = false;
            }
            if($("#form_links").val().search("www.") != -1) {
             sec = true;
          } else {
            sec = false;
            };
            if(check == true || sec == true ) {
               $("#links_error_message").hide();
               $("#forms_links").removeClass('invalid');
               $("#lin3").show(); 
               $("#form_links").addClass('valid');
               error_links = true;
            }else {
               $("#links_error_message").html("Formatul de url este introdus incorect");
             $("#links_error_message").show();
             $("#form_links").addClass('invalid');
             $("#lin3").hide(); 
             
            }
         }

         function check_links_1() {
            if($("#form_links_1").val().search("https://") != -1) {
               check = true;
             } else {
               check = false;
               }
               if($("#form_links_1").val().search("www.") != -1) {
                sec = true;
             } else {
               sec = false;
               };
               if(check == true || sec == true ) {
                  $("#links_1_error_message").hide();
                  $("#forms_links_1").removeClass('invalid');
                  $("#lin4").show(); 
                  $("#form_links_1").addClass('valid');
                  error_links = true;
               }else {
                  $("#links_1_error_message").html("Formatul de url este introdus incorect");
                $("#links_1_error_message").show();
                $("#form_links_1").addClass('invalid');
                $("#lin4").hide(); 
                
               }
            }

            function check_links_2() {
               if($("#form_links_2").val().search("https://") != -1) {
                  check = true;
                } else {
                  check = false;
                  }
                  if($("#form_links_2").val().search("www.") != -1) {
                   sec = true;
                } else {
                  sec = false;
                  };
                  if(check == true || sec == true ) {
                     $("#links_2_error_message").hide();
                     $("#forms_links_2").removeClass('invalid');
                     $("#lin5").show(); 
                     $("#form_links_2").addClass('valid');
                     error_links = true;
                  }else {
                     $("#links_2_error_message").html("Formatul de url este introdus incorect");
                   $("#links_2_error_message").show();
                   $("#form_links_2").addClass('invalid');
                   $("#lin5").hide(); 
                   
                  }
               }

               function check_links_3() {
                  if($("#form_links_3").val().search("https://") != -1) {
                     check = true;
                   } else {
                     check = false;
                     }
                     if($("#form_links_3").val().search("www.") != -1) {
                      sec = true;
                   } else {
                     sec = false;
                     };
                     if(check == true || sec == true ) {
                        $("#links_3_error_message").hide();
                        $("#forms_links_3").removeClass('invalid');
                        $("#lin6").show(); 
                        $("#form_links_3").addClass('valid');
                        error_links = true;
                     }else {
                        $("#links_3_error_message").html("Formatul de url este introdus incorect");
                      $("#links_3_error_message").show();
                      $("#form_links_3").addClass('invalid');
                      $("#lin6").hide(); 
                      
                     }
                  }
                  function check_links_4() {
                     if($("#form_links_4").val().search("https://") != -1) {
                        check = true;
                      } else {
                        check = false;
                        }
                        if($("#form_links_4").val().search("www.") != -1) {
                         sec = true;
                      } else {
                        sec = false;
                        };
                        if(check == true || sec == true ) {
                           $("#links_4_error_message").hide();
                           $("#forms_links_4").removeClass('invalid');
                           $("#lin7").show(); 
                           $("#form_links_4").addClass('valid');
                           error_links = true;
                        }else {
                           $("#links_4_error_message").html("Formatul de url este introdus incorect");
                         $("#links_4_error_message").show();
                         $("#form_links_4").addClass('invalid');
                         $("#lin7").hide(); 
                         
                        }
                     }
        });
        
   $(wrapper_2).on("click",".remove_field", function(e){ 
       e.preventDefault();
        $(this).parent('div').parent('div').remove(); p--;
       })
     });


////////////////////////////

     
    
  
     $(document).ready(function(){
        $("#flip").click(function(){
          $("#panel").slideToggle("slow");
        });
      });

////validatorul pentru campul principal

          $(function() {
   
         //   $("#fname_error_message").hide();
         //   $("#lname_error_message").hide();
         //   $("#email_error_message").hide();
         //   $("#number_error_message").hide();
         //   $("#job_error_message").hide();
         //   $("#link_error_message").hide();
         //   $("#link1_error_message").hide();
         //   $("#adress_error_message").hide();
  
         
  
           var error_fname = false;
           var error_lname = false;
           var error_email = false;
           var error_number = false;
           var error_job = false; 
           var error_link = false;
           var error_link1 = false;
           var error_adress = false;
  
  
           $("#form_fname").focusout(function(){
              check_fname();
           });
           $("#form_lname").focusout(function() {
              check_lname();
           });
           $("#form_email").focusout(function() {
              check_email();
           });
           $("#form_number").focusout(function() {
              check_number();
           });
           $("#form_job").focusout(function() {
              check_job();
           });
           $("#form_link").focusout(function() {
              check_link();
           });
           $("#form_link1").focusout(function() {
             check_link1();
          });
           $("#form_adress").focusout(function() {
             check_adress();
          });
  
  
  
          function check_fname() {
  
           var fname_length = $("#form_fname").val().length;
           if(fname_length > 5 && fname_length < 15) {
            $("#fname_error_message").hide();
            $("#nume").show();
               $("#form_fname").removeClass('invalid');
               $("#form_fname").addClass('valid');
               error_fname = true;
               
            } else {
              $("#fname_error_message").show();
              $("#nume").hide();
               $("#form_fname").addClass('invalid');
               $("#fname_error_message").html("Acest camp este necesar de indeplinit");
            }
  }
  
  function check_lname() {
  
     var lname_length = $("#form_lname").val().length;
     if(lname_length > 5 && lname_length < 15) {
      $("#lname_error_message").hide();
      $("#lname").show();
         $("#form_lname").removeClass('invalid');
         $("#form_lname").addClass('valid');
         error_lname = true;
         
      } else {
        $("#lname_error_message").show();
        $("#lname").hide();
         $("#form_lname").addClass('invalid');
         $("#lname_error_message").html("Acest camp este necesar de indeplinit");
      }
  }
  
           function check_email() {
             if($("#form_email").val().search("@") != -1) {
               check = true;
             } else {
                check = false;
               }
               if(check == true) {
                $("#email_error_message").hide();
                $("#form_email").removeClass('invalid');
                $("#email").show();
                $("#form_email").addClass('valid');
                error_email = true;
               }else {
                $("#email_error_message").html("Email-ul este formatat gresit");
                 $("#email_error_message").show();
                 $("#email").hide();
                 $("#form_email").addClass('invalid');
               }
           }
  
           function check_number() {
           
              if($("#form_number").val().search(+373) != -1) {
                check = true;
              } else {
                check = false;
                }
                if($("#form_number").val().search(0) != -1) {
                 sec = true;
              } else {
                sec = false;
                };
                if(check == true || sec == true ) {
                   $("#number_error_message").hide();
                   $("#form_number").removeClass('invalid');
                   $("#form_number").addClass('valid');
                   $("#tel").show();
                   error_number = true;
                 }else {
                   $("#number_error_message").html("Numarul de telefon este formata gresit sau apartine altei tari(+373)");
                 $("#number_error_message").show();
                 $("#tel").hide();
                 $("#form_number").addClass('invalid');
                }
           }
  
           function check_adress() {
  
              var adress_length = $("#form_adress").val().length;
              if(adress_length > 5 && adress_length < 15) {
               $("#adress_error_message").hide();
                  $("#form_adress").removeClass('invalid');
                  $("#adresss").show();
                  $("#form_adress").addClass('valid');
                  error_adress = true;
                  
               } else {
                 $("#adress_error_message").show();
                  $("#form_adress").addClass('invalid');
                  $("#adress_error_message").html("Acest camp este necesar de indeplinit");
                  $("#adresss").hide();
                 }
           }
  
           function check_job() {
  
              var job_length = $("#form_job").val().length;
              if(job_length > 5 && job_length < 15) {
               $("#job_error_message").hide();
                  $("#form_job").removeClass('invalid');
                  $("#jobs").show();
                  $("#form_job").addClass('valid');
                  error_job = true;
                  
               } else {
                 $("#job_error_message").show();
                  $("#form_job").addClass('invalid');
                  $("#job_error_message").html("Acest camp este necesar de indeplinit");
                  $("#jobs").hide();             
                 }
           }
  
           
           function check_link() {
             if($("#form_link").val().search("https://") != -1) {
                check = true;
              } else {
                check = false;
                }
                if($("#form_link").val().search("www.") != -1) {
                 sec = true;
              } else {
                sec = false;
                };
                if(check == true || sec == true ) {
                   $("#link_error_message").hide();
                   $("#form_link").removeClass('invalid');
                   $("#lin1").show(); 
                   $("#form_link").addClass('valid');
                   error_link = true;
                }else {
                   $("#link_error_message").html("Formatul de url este introdus incorect");
                 $("#link_error_message").show();
                 $("#form_link").addClass('invalid');
                 $("#lin1").hide(); 
                 
                }
           }
           function check_link1() {
             if($("#form_link1").val().search("https://") != -1) {
                check = true;
              } else {
                check = false;
                }
                if($("#form_link1").val().search("www.") != -1) {
                 sec = true;
              } else {
                sec = false;
                };
                if(check == true || sec == true ) {
                   $("#link1_error_message").hide();
                   $("#form_link1").removeClass('invalid');
                   $("#form_link1").show(); 
                   $("#form_link1").addClass('valid');
                   error_link1 = true;
                }else {
                   $("#link1_error_message").html("Formatul de url este introdus incorect");
                 $("#link1_error_message").show();
                 $("#form_link1").addClass('invalid');
                 $("#lin2").hide(); 
                }
           }

           $('.sub').on('click', () => {

              error_fname = false;
              error_lname = false;
              error_email = false;
              error_number = false; 
              error_job = false;
              error_link = false;
              error_link1 = false;
              error_adress = false;

   
  
              check_fname();
              check_lname();
              check_email();
              check_number();
              check_job();
              check_adress();
              check_link();
              check_link1();
   

     
              if (error_fname === true && error_lname === true && error_email === true && error_adress === true && error_number === true && error_job === true && error_link === true  && error_link1 === true  ) {
             
               makeRequest(++count);
               navigate();  
           alert("Forma este validata");  
                 return true;
              } else {
               alert("Forma nu este validata");
                 
               return false;
              } 
        });
      });
   //   });

   /////////////////////////////////////////////////////////////


      const container = $('#container');
   var count = 0;
   
   function makeRequest(index) {
       container.append(`<div>Sending request ${index}</div>`);
  
  ///pentru trimiterea datelor la server
  
   ///job
  ////start data pentru job
     let articles = [];
  
     $('.sd').each(function() {
      articles.push($(this).val());
     });
  
  ////end data
     let articles_1 = [];
  
     $('.ed').each(function() {
        articles_1.push($(this).val());
       });
  
       ///companinames
     let articles_9 = [];
  
     $('citySelect').each(function() {
        articles_9.push($(this).val());
       });
  
       //////city
       let articles_2 = [];
  
     $('.city').each(function() {
        articles_2.push($(this).val());
       });
  
     /////institutia
  
     let articles_3 = [];
  
     $('.inst').each(function() {
        articles_3.push($(this).val());
       });
  
       /////tipul
  
     let articles_8 = [];
  
     $('.citySelect').each(function() {
        articles_8.push($(this).val());
       }); 
       ///////////
       let prezent = [];
  
  $('.check').each(function() {
     prezent.push($(this).val());
    });
  
  
  ////studii
  /////end data
  let articles_6 = [];
  
  $('.sf').each(function() {
     articles_6.push($(this).val());
    });
  
  
  
  /////institutia
  
  let articles_5 = [];
  
  $('.institutia').each(function() {
     articles_5.push($(this).val());
    });
    /////selectorul
  
  let articles_7 = [];
  
  $('.educationSelect').each(function() {
     articles_7.push($(this).val());
    });
  
 
  
  
       $.ajax({
           url: 'http://localhost:3000/form-data',
           method: 'POST',
           datatype: 'json',
           headers: {
               'Content-Type': 'application/json',
           },
           data: JSON.stringify({
              ///info general
               nume: $('#form_fname').val(),
               prenume: $('#form_lname').val(),
               email: $('#form_email').val(),
               phone: $('#form_number').val(),
               addres: $('#form_adress').val(),        
               Profesion: $('#form_job').val(),
               //////linkurile
               Link: $('#form_link').val(),
               Link1: $('#form_link1').val(),
               Link2:$('#form_links').val(),
               Link3: $('#form_links_1').val(),
               Link4: $('#form_links_2').val(),
               Link5: $('#form_links_3').val(),
               Link6: $('#form_links_4').val(),
              
    /////////////////////////////jobul
                prezent,
                articles,
                articles_1,
                articles_2,
                articles_3,
                articles_8,
        //////////////studii      
               articles_5,
               articles_6,
               articles_7,
  
           }),

           success: function(response) {
               console.log('ture');
               container.append(`<div>${JSON.stringify(response)}</div>`);
           },
       });
   }

   function navigate() {
      timer = setTimeout(() => {
          window.location.href = 'output.html';
      }, 1); 
  }
   
   function loadEducation(){
     $.ajax({
        url: 'http://localhost:3000/education-type/3',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
           response.forEach(title => {
              $(".educationSelect").append(
                 `
  
                 <option value="${title.education}">${title.education}</option>
                 ` 
              ) 
           });
        },
    });
   };


