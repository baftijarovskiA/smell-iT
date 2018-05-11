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
		$(".prop-window").show();

	});
	$("#btn-done").click(function(){
		$(".single-del").hide();
		$(".multi-del").hide();
		$(".prop-window").hide();
		$(".expand").slideUp();
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


	$("body").on('click', ".multi-del", function(){
		var count = $("#del-count").html();
		count = parseInt(count);
		if ($(this).prop('checked')){
			$("#"+$(this).attr("value")).addClass('selected');
			count++;
			$("#del-count").html(count);
		} else {
			$("#"+$(this).attr("value")).removeClass('selected');
			count--;
			$("#del-count").html(count);
		}
	});

	$("#delete-selected").click(function(){
		$('.selected').hide();
		$("#del-count").html("0");
	});
});