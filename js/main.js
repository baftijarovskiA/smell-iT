function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
var clicked=0;
function sendMail(){
	var name = document.getElementById('form-name');
	var email = document.getElementById('form-email');
	var subject = document.getElementById('form-subject');
	var message = document.getElementById('form-message');

	if(email.value == "" || subject.value == "" || message.value == ""){
			document.getElementById('errMessage').style.display = "block";
			clicked++;
			if(clicked == 2){
				window.alert("Please fill in the required fields!");
				clicked--;
			}
	}else{
		clicked=0;
		document.getElementById('errMessage').style.display = "none";
		var link = document.getElementById('link');
		var linkto="mailto:info@smellit.com?subject="+subject.value+"&body="+message.value;
		link.setAttribute("href",linkto);

		document.getElementById('form-name').value="";
	    document.getElementById('form-email').value="";
	    document.getElementById('form-subject').value="";
	    document.getElementById('form-message').value="";
	}
}

var photoUrl="";
  function readURL(event){
           photoUrl = URL.createObjectURL(event.target.files[0]);
}

function addProduct(x){
	var brand = document.getElementById('input-m-brand');
	var model = document.getElementById('input-m-model');
	var type = document.getElementById('input-m-type');
	var price = document.getElementById('input-m-price');
	var image = photoUrl;

	if(brand.value=="" || model.value=="" || type.value=="" || price.value=="" ){
		window.alert("Cannot add empty product!\nAll fields are required!");
		
	} else {

		var i=parseInt(x-1);
		var item = document.getElementById('articles');
		var items = document.getElementById('ModalC');
		item.innerHTML+="<div class='product-l' id='"+i+"' title='"+model.value+"' ><div class='image' onclick='openModal();currentSlide("+x+")' ><img src='"+image+"'></div>"+
				"<div class='desc'><h1>"+brand.value+"</h1><hr><br><p>"+model.value+"</p><p>"+price.value+" MKD</p><p>"+type.value+"</p><br>"+
				"<i class='fa fa-thumbs-up like' title='Like'>0</i> <i class='fa fa-thumbs-down dislike' title='Dislike'>0</i>"+
				"<button class='single-del' value='"+i+"' title='Delete "+model.value+"' >X</button><input type='checkbox' class='multi-del' value='"+i+"' ></div></div></div>";
		x++;
    	i++;
		items.innerHTML += "<div class='Slides' id='S"+i+"' ><img src='"+image+"'><div class='Desc' >"+
			"<h1>"+brand.value+"</h1><br><hr><br><p><b>Model:</b> "+model.value+"</p><br><p><b>Price:</b> "+price.value+" MKD</p><br></div></div>";

    	document.documentElement.scrollTop = 3000;
		document.getElementById('input-m-brand').value="";
		document.getElementById('input-m-model').value="";
		document.getElementById('input-m-type').value="";
		document.getElementById('input-m-price').value="";
	}
}
function openModal() {
  document.getElementById('myModal').style.display = "block";
  document.getElementById('blr').setAttribute("class","blur");
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  document.getElementById('blr').setAttribute("class","");
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function checkKey(e){
     e = e || window.event;
    if(e.keyCode == '37'){
        plusSlides(-1);
     } else if(e.keyCode == '39'){
        plusSlides(1);
    } else if(e.keyCode == '27'){
        closeModal();
    }
}
