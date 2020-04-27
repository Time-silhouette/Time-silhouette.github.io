var nav_good = document.getElementById("nav-good");
var nav_script = document.getElementById("nav-script");
var good = document.getElementById("good");
var script = document.getElementById("script");

script.style.display = "none";
nav_good.className = "active";

function hideAll(){
	good.style.display = "none";
	script.style.display = "none";
	nav_good.className = "";
	nav_script.className = "";
}

nav_good.onclick = function(){
	hideAll();
	good.style.display = "block";
	nav_good.className = "active";
}
nav_script.onclick = function(){
	hideAll();
	script.style.display = "block";
	nav_script.className = "active";
}