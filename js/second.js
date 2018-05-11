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

	$('#del-btn').click(function(){
		$(".single-del").show();
		$(".multi-del").show();

	});

	$("body").on('click', ".fa", function(){
		var count = $(this).html();
		count = parseInt(count);
		count++;
	 	$(this).html(count);
	});

	$("body").on('click', ".single-del", function(){
		$("#"+$(this).attr("value")).hide();
		$("#S"+$(this).attr("value")).hide();
	});
});