
////////////////////////////////////////studii
 
$(document).ready(function() {
   var max_fields     = 10; 
   var wrapper   		= $(".input_fields_wrap"); 
   var add_button      = $(".add_field_button");
  
   
   var x = 1; 
  
   
   $(add_button).click(function(e){ 
   e.preventDefault();
       if(x < max_fields){ 
           x++; 
   
           $(wrapper).append(`
           <div>
               <h3>Adauga datele</h3>
               <div id="myhide" class="halep">

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
          <button type="button" id="hdd">Save</button><br><br>

           <hr>
           `);
           loadEducation();
           $("#hdd").on("click",()=> {
              $(".halep").hide();
           })
         }
         $(".int_error_message").hide();
  
  
         $(".institutia").focusout(function() {
          check_titluEducation();
         });

         function check_titluEducation() {
          var int1_length = $(".institutia").val().length;
          if(int1_length > 5 && int1_length < 15) {
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
        });
  
  
  
   $(wrapper).on("click",".remove_field", function(e){ 
       e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
       })
     });
    
  
     $(document).ready(function(){
        $("#flip").click(function(){
          $("#panel").slideToggle("slow");
        });
      });
  
  //////////////////////////////job
      
     $(document).ready(function() {
        var max_fields_1     = 10; 
        var wrapper_1   		= $(".input_fields_wrap_1");    
        var add_button_1      = $(".add_field_button_1"); 
       
        var y = 1;
        
        $(add_button_1).click(function(e){ 
        e.preventDefault();
            if(y < max_fields_1){ 
                y++; 
           
  
                $(wrapper_1).append(`
  
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
                <div>
                  <input type="text" class="inst form_int1">
                  <span class="error_form int1_error_message"></span>
                  <label class="edtitle">Denumirea poziției</label>
  
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
                `);
              } 
              $(".check").on("click",()=> {
               $(".sfar").hide();
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
             
  ///////////////////////////////////////////////////////////////////////


  $(".int1_error_message").hide();
  $(".city_error_message").hide();


 $(".form_int1").focusout(function() {
  check_instjob();
 });
 $(".form_city").focusout(function() {
  check_cityjob();
 });

  function check_instjob() {
     var int1_length = $(".form_int1").val().length;
     if(int1_length > 5 && int1_length < 15) {
        $(".int1_error_message").hide();
         $(".form_int1").removeClass('invalid');
         $(".form_int1").addClass('valid');
         $(".edtitle").show();
         return false;
     }else {
        $(".int1_error_message").html("Campul data este necesar de indeplinit");
        $(".int1_error_message").show();
        $(".form_int1").addClass('invalid');
        $(".edtitle").hide();
        return true;
      
     }
   }

  function check_cityjob() {
     var int1_length = $(".form_city").val().length;
     if(int1_length > 5 && int1_length < 15) {
        $(".city_error_message").hide();
         $(".form_city").removeClass('invalid');
         $(".form_city").addClass('valid');
         $(".ctyjob").show();
         return false;
     }else {
        $(".city_error_message").html("Campul data este necesar de indeplinit");
        $(".city_error_message").show();
        $(".form_city").addClass('invalid');
        $(".ctyjob").hide();
        return true;
     }
           }

 $(".myhide").click(function() {
   check_instjob();
   check_cityjob();

      $(".hide").on("click",()=> {
         $(".myhide").hide();  })
     
  });
});  



   $(".hide").on("click",function() {
         if(check_instjob() && check_cityjob()) {
            $(".myhide").hide();
            console.log("True");
         }else {
            console.log("False");
         }
   })



            // $(".hide").on("click",()=> {
            //    $(".myhide").hide();  })
               /////////////////////////////////////////////

             

       
       ////////////////////////////
        $(wrapper_1).on("click",".remove_field", function(e){ 
            e.preventDefault();
             $(this).parent('div').parent('div').remove(); y--;
            })
          });
  
   
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
               if($("#form_email").val().search(".") != -1) {
                sec = true;     
             } else {
                sec = false;
               };
               if(check == true && sec == true) {
                $("#email_error_message").hide();
                $("#form_email").removeClass('invalid');
                $("#mail").show();
                $("#form_email").removeClass('valid');
                error_email = true;
               }else {
                $("#email_error_message").html("Email-ul este formatat gresit");
                 $("#email_error_message").show();
                 $("#mail").hide();
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
                 }else {
                   $("#number_error_message").html("Numarul de telefon este formata gresit sau apartine altei tari(+373)");
                 $("#number_error_message").show();
                 $("#tel").hide();
                 $("#form_number").addClass('invalid');
                 error_number = true;
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
                   $("#lin2").show(); 
                   $("#form_link1").addClass('valid');
                   error_link = true;
                }else {
                   $("#link1_error_message").html("Formatul de url este introdus incorect");
                 $("#link1_error_message").show();
                 $("#form_link1").addClass('invalid');
                 $("#lin2").hide(); 
                }
           }
           function check_instjob() {
              console.log("test");
              var int1_length = $("#form_int1").val().length;
              if(int1_length > 5 && int1_length < 15) {
                 $("#int1_error_message").hide();
                  $("#form_int1").removeClass('invalid');
                  error_instjob = true;
              }else {
                 $("#int1_error_message").html("Campul data este necesar de indeplinit");
                 $("#int1_error_message").show();
                 $("#form_int1").addClass('invalid');
              }
            }
        
    
  
           $("#registration_form").submit(function() {
              error_fname = false;
              error_lname = false;
              error_email = false;
              error_number = false; 
              error_job = false;
              error_link = false;
              error_link1 = false;
              error_adress = false;
              error_instjob = false;
   
  
              check_fname();
              check_lname();
              check_email();
              check_number();
              check_job();
              check_adress();
              check_link();
              check_link1();
   
  
              
  
              if (error_fname === false && error_lname === false && error_email === false && error_adress === false && error_number === false && error_job === false && error_link === false  && error_link1 === false  ) {
                
                 return true;
              } else {
                 
                 return false;
              } 
        });
     });
   
      const container = $('#container');
   var count = 0;
   
   function makeRequest(index) {
       container.append(`<div>Sending request ${index}</div>`);
  
  
  
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
               Link2: $('#form_link2').val(),
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
   
   $('#ab').on('click', () => {
       makeRequest(++count);
       navigate();
   });

   function navigate() {
      timer = setTimeout(() => {
          window.location.href = 'output.html';
      }, 2500); 
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