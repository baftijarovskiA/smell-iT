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

$(document).ready(function(){
	var sym=0;
	$(".toggle").click(function(){
		sym++;
		$(".expand").slideToggle();
		if(sym == 1){
			$("#symbol").removeClass('fa fa-angle-down');
			$("#symbol").addClass('fa fa-angle-up');
		}else if(sym == 2){
			$("#symbol").removeClass('fa fa-angle-up');
			$("#symbol").addClass('fa fa-angle-down');
			sym=0;
		}
		
	});
});