// $(".card").hover(function(){
//         $(this).find("button").css( {"background-color":"rgb(180, 33, 8)"} );
//         $(this).find("label").css( {"background-color":"rgb(180, 33, 8)"} );
//     },function(){
//         $(this).find("label").css( {"background-color":"rgb(70, 70, 70)"} );
//         $(this).find("button").css( {"background-color":"rgb(70, 70, 70)"} );
//     }
// );

$("#top-button").click(
    function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    }
);

// This is for AOS
AOS.init();

//script for Google Sheet
var scriptURL = "https://script.google.com/macros/s/AKfycbxYopPutnCYTcs54ifExKsaz6xuuAUiQT1-ZQ7oOl0_bZwarQeeUuxubu2mb3PTm_oL/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
});