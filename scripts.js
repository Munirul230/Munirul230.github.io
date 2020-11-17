//function expresion to select element
const selectElement = (s) => document.querySelector(s);
selectElement('.open').addEventListener('click', () => {
	selectElement('.nav-list').classList.add('active');
});
selectElement('.close').addEventListener('click', () => {
	selectElement('.nav-list').classList.remove('active');
});

//function for FAQ
const items = document.querySelectorAll(".accordion a");
 
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));