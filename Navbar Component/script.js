$(document).ready(function(){
	$('.dropdown .dropbtn').click(function(){
  	$('.dropdown-content').toggle();
});
});

function showdrop() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}