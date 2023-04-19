
	function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
	
	

function showResults() {
	let score = 0;
	let color = document.getElementById("txt-color").value; 
	let grade = document.getElementById("txt-grade").value; 
	let major = document.getElementById("txt-major").value; 
	let future = document.getElementById("txt-future").value; 
	let resultP = document.getElementById("result"); 
	 
	if( color == "Blue"){
		score++; 
		resultP.innerHTML += "<p> Question 1 - Correct </p>"; } 
	
	else {
		resultsP.innerHTML += "<p> Question 1 - Incorrect </p>"; } 
	
	if( grade == "Senior"){
		score++; 
		resultP.innerHTML += "<p> Question 2 - Correct </p>"; } 
	
	else {
		resultsP.innerHTML += "<p> Question 2 - Incorrect </p>"; } 
		
	if( major == "Psychology"){
		score++; 
		resultP.innerHTML += "<p> Question 3 - Correct </p>"; } 
	
	else {
		resultsP.innerHTML += "<p> Question 3 - Incorrect </p>"; } 
		
	if( future == "Nurse Practitioner"){
		score++; 
		resultP.innerHTML += "<p> Question 4 - Correct </p>"; } 
	
	else {
		resultsP.innerHTML += "<p> Question 4 - Incorrect </p>"; } 
} 

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}