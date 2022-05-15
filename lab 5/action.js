//validatorul pentru job


$(".int1_error_message").hide();
$(".city_error_message").hide();
$(".comp_error_message").hide();


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
$(".companyname").focusout(function(){
   check_den();
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

function check_den() {
   var int1_length = $(".companyname").val().length;
   if(int1_length > 3 && int1_length < 15) {
      $(".comp_error_message").hide();
       $(".companyname").removeClass('invalid');
       $(".companyname").addClass('valid');
       $(".edtit").show();
       return true;
   }else {
      $(".comp_error_message").html("Campul data este necesar de indeplinit");
      $(".comp_error_message").show();
      $(".companyname").addClass('invalid');
      $(".edtit").hide();
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


      $(".check").on("click",()=> {
         $(".sfar").toggle();
      })


///////////////////////////////////////crearea formei pentru studii
 

       
   
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



////validatorul pentru campul principal

          $(function() {
   
           $("#fname_error_message").hide();
           $("#lname_error_message").hide();
           $("#email_error_message").hide();
           $("#number_error_message").hide();
           $("#job_error_message").hide();
           $("#link_error_message").hide();
           $("#link1_error_message").hide();
           $("#adress_error_message").hide();
  
         
  
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
           if(fname_length > 2 && fname_length < 15) {
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
     if(lname_length > 2 && lname_length < 15) {
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
              if(adress_length > 3 && adress_length < 15) {
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
              if(job_length > 3 && job_length < 15) {
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

           $('.submit').on('click', () => {

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
   

           
              if (error_fname === true && error_lname === true && error_email === true && error_adress === true && error_number === true && error_job === true  ) {
             
                 return true;
              } else {
               alert("Forma nu este validata");
                 
               return false;
              } 
        });
      });
 

      function navigate() {
         timer = setTimeout(() => {
             window.location.href = 'output.php';
         }, 1); 
     }
 
     $(".out").click(function() {
      navigate()
      });