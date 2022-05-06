

const container = $('#container');
function ajaxGetRequest(){
  let prezent = "";
  let final = "";
  let final_1 = "";
  let final_2 = "";
  let final_3 = "";
  let final_8 = "";
  let final_5 = "";
  let final_6 = "";
  let final_7 = "";
  $.ajax({
    url: 'http://localhost:3000/form-data',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
      response.prezent.forEach(title => {
        prezent+=(`<div>${title}</div>`)  
     });
     response.articles.forEach(title => {
     final+=(`<div>${title}</div>`)  
  });
  response.articles_1.forEach(title => {
    final_1+=(`<div>${title}</div>`)  
 });
 response.articles_2.forEach(title => {
  final_2+=(`<div>${title}</div>`)  
});
 response.articles_3.forEach(title => {
  final_3+=(`<div>${title}</div>`)  
});
response.articles_8.forEach(title => {
  final_8+=(`<div>${title}</div>`)  
});

response.articles_5.forEach(title => {
  final_5+=(`<div>${title}</div>`)  
});
response.articles_6.forEach(title => {
  final_6+=(`<div>${title}</div>`)  
});
response.articles_7.forEach(title => {
  final_7+=(`<div>${title}</div>`)  
});


      console.log(response.articles);
container. append(`
      <center>
      <div class="info">
      <h1>Informatia introdusa <i class="gg-profile"></i></h2>
      <p>Nume: ${response.nume}</p>
      <p>Prenume: ${response.prenume}</p>
      <p><i class="gg-mail"></i>Email: ${response.email}</p>
      <p><i class="gg-work-alt"></i>Profesia: ${response.Profesion}</p>
      <p><i class="gg-phone"></i>Numarul de telefon: ${response.phone}</p>
      <p><i class="gg-home"></i>Adresa: ${response.addres}</p>
      </div>
        <hr>
        <div class="info">
        <h1>Retele de socializare<i class="gg-globe-alt"></i></h1>
      <p><a href="${response.Link}" target="_blank"><i class="gg-facebook"></i>Facebook</a></p>
      <p><a href="${response.Link1}" target="_blank"><i class="gg-instagram"></i>Instagram</a></p>
      <p><a href="${response.Link2}" target="_blank"><i class="gg-globe-alt"></i>Link suplimentar</a></p>
      </div>
      <hr>
      <div class="info">
        <h1>Datele despre Job<i class="gg-toolbox"></i></h1>
          <p><i class="gg-sand-clock"></i>Aveti un job in desfasurare: ${prezent}</p>
          <div>
          <p><i class="gg-calendar-dates"></i>Start Data: ${final}<br></p><br>
          </div>
          <p><i class="gg-calendar-dates"></i>End Data: ${final_1}</p>
          <p>Orasul: ${final_2}</p>
          <p>Institutia: ${final_3}</p>
          <p>Orasul: ${final_8}</p>
          </div>
          <hr>
          <div class="info">
        <h1>Studii<i class="gg-list"></i></i></h1>
        <p>End data: ${final_6}</p>
          <p>Titlul Educațional:: ${final_5}</p>
          <p>Titlul Educațional: ${final_7}</p>
          </div>
       </center>
       `);
      },
    });
  }

$('#collect-button').on('click', () => {
  ajaxGetRequest()
});