var data = '['+

 	'{ "brand":"Armani", "type":"Men", "model":"Acqua Di Gio", "price": 22, "image":"img/MenPerfume/Armani/AcquaDiGio.jpg" },'+
 	'{ "brand":"Armani", "type":"Men", "model":"Armani Code", "price": 2222, "image":"img/MenPerfume/Armani/ArmaniCode.jpg" },'+
 	'{ "brand":"Armani", "type":"Men", "model":"Attitude Extreme", "price": 22, "image":"img/MenPerfume/Armani/attitudeExtreme.jpg" },'+
 	'{ "brand":"Armani", "type":"Men", "model":"Stronger With You", "price": 22, "image":"img/MenPerfume/Armani/StrongerWithYou.jpg" },'+

 	'{ "brand":"Boss", "type":"Men", "model":"Bottled", "price": 22, "image":"img/MenPerfume/Boss/Bottled.jpg" },'+
 	'{ "brand":"Boss", "type":"Men", "model":"Bottled Tonic", "price": 22, "image":"img/MenPerfume/Boss/BottledTonic.jpg" },'+
 	'{ "brand":"Boss", "type":"Men", "model":"Element", "price": 22, "image":"img/MenPerfume/Boss/Element.jpg" },'+
 	'{ "brand":"Boss", "type":"Men", "model":"Night", "price": 22, "image":"img/MenPerfume/Boss/Night.jpg" },'+

 	'{ "brand":"Michael Kors", "type":"Men", "model":"Extreme Blue", "price": 22, "image":"img/MenPerfume/MichaelKors/ExtremeBlue.jpg" },'+
 	'{ "brand":"Michael Kors", "type":"Men", "model":"For Men", "price": 22, "image":"img/MenPerfume/MichaelKors/forMen.jpg" },'+
 	'{ "brand":"Michael Kors", "type":"Men", "model":"Fragrance", "price": 22, "image":"img/MenPerfume/MichaelKors/Fragrance.jpg" },'+
 	'{ "brand":"Michael Kors", "type":"Men", "model":"Sporty Citrus", "price": 22, "image":"img/MenPerfume/MichaelKors/SportyCitrus.jpg" },'+

 	'{ "brand":"Paco Rabanne", "type":"Women", "model":"Black XS", "price": 22, "image":"img/WomenPerfume/PacoRabanne/BlackXS.jpg" },'+
 	'{ "brand":"Paco Rabanne", "type":"Women", "model":"Lady Million", "price": 22, "image":"img/WomenPerfume/PacoRabanne/LadyMillion.jpg" },'+
 	'{ "brand":"Paco Rabanne", "type":"Women", "model":"Olympea", "price": 22, "image":"img/WomenPerfume/PacoRabanne/Olympea.jpg" },'+
 	'{ "brand":"Paco Rabanne", "type":"Women", "model":"Ultra Violet", "price": 22, "image":"img/WomenPerfume/PacoRabanne/ultraViolet.jpg" },'+

 	'{ "brand":"Michael Kors", "type":"Women", "model":"Gold - Rose Edition", "price": 22, "image":"img/WomenPerfume/MichaelKors/Gold-RoseEdition.jpg" },'+
 	'{ "brand":"Michael Kors", "type":"Women", "model":"Sexy Ruby", "price": 22, "image":"img/WomenPerfume/MichaelKors/SexyRuby.jpg" },'+
 	'{ "brand":"Michael Kors", "type":"Women", "model":"Very Hollywood", "price": 22, "image":"img/WomenPerfume/MichaelKors/VeryHollywood.jpg" },'+
 	'{ "brand":"Michael Kors", "type":"Women", "model":"Wonderlust", "price": 22, "image":"img/WomenPerfume/MichaelKors/Wonderlust.jpg" },'+

 	'{ "brand":"Gucci", "type":"Women", "model":"Flora", "price": 22, "image":"img/WomenPerfume/Gucci/Flora.jpg" },'+
 	'{ "brand":"Gucci", "type":"Women", "model":"Rush", "price": 22, "image":"img/WomenPerfume/Gucci/Rush.jpg" },'+
 	'{ "brand":"Gucci", "type":"Women", "model":"Premiere", "price": 22, "image":"img/WomenPerfume/Gucci/Premiere.jpg" },'+
 	'{ "brand":"Gucci", "type":"Women", "model":"Guility Black", "price": 22, "image":"img/WomenPerfume/Gucci/Guilty-Black-Pour-Femme.jpg" }'+
 			
 			']';

var Data = JSON.parse(data);

function getData(sex) {
	var item = document.getElementById('articles');
	var items = document.getElementById('ModalC');
	var x=0;
	for (var i = 0; i < Data.length; i++) {
		if(Data[i].type == sex){
			item.innerHTML+="<div class='product-l' id='"+i+"' title='"+Data[i].model+"' ><div class='image' onclick='openModal();currentSlide("+x+")'><img src='"+Data[i].image+"'></div>"+
				"<div class='desc'><h1>"+Data[i].brand+"</h1><hr><br><p>"+Data[i].model+"</p><p>"+Data[i].price+" MKD</p><p>"+Data[i].type+"</p><br>"+
				"<i class='fa fa-thumbs-up like'>0</i> <i class='fa fa-thumbs-down dislike'>0</i>"+
				"<button class='single-del' value='"+i+"' >X</button><input type='checkbox' class='multi-del' value='"+i+"' ></div></div></div>";
				
			items.innerHTML += "<div class='Slides' id='S"+i+"' ><img src='"+Data[i].image+"'><div class='specs'>"+
				"<p><b>Brand: </b>"+Data[i].brand+"</p><p><b>Model: </b>"+Data[i].model+"</p><p><b>Color: </b></p>"+
        		"<p><b>Type: </b>"+Data[i].type+"</p><p><b>Price: </b> "+Data[i].price+" $</p><p><b>Details: </b></p></div></div>";
        	x++;
		}
		
	}
}