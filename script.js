
/* Loader */
var load;
function myLoader(){
  
    load = setTimeout(showPage, 2000);


function showPage() {
  document.getElementById("center").style.display = "none";
  document.getElementById("header").style.display = "block";
}
}



/* small devices menu */

let navLinks= document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right="0"
}
function hideMenu(){
    navLinks.style.right="-200px"
}


/*Back to top Button*/ 

$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});



