$(function(){
//	照片那部分
	$(".photo").mouseover(function(){
		$(this).find(".explain").stop().fadeIn();
	}).mouseout(function(){
		$(this).find(".explain").stop().fadeOut();
	})
	
//	食谱部分

	$("#switch").click(function(){
		var $close=$(this).find("#close");
		if ($close.is(":hidden")) {
			$("#one").animate({left:"0","top":"20%"}).addClass("oneh");
			$("#two").animate({left:"0","top":"5%"}).addClass("twoh");
			$("#four").animate({left:"0","top":"5%"}).addClass("fourh");
			$("#five").animate({left:"0","top":"20%"}).addClass("fiveh");
			
			$("#close").show();
			$("#open").hide();
			
		} else{
			$("#one").animate({left:"40%","top":"0"}).removeClass("oneh");
			$("#two").animate({left:"20%","top":"0"}).removeClass("twoh");
			$("#four").animate({left:"-20%","top":"0"}).removeClass("fourh");
			$("#five").animate({left:"-40%","top":"0"}).removeClass("fiveh");
			
			
			$("#close").hide();
			$("#open").show();
			
		}
	})
	
//	笔记部分
	$("#left a").mouseover(function(){
		$(this).stop().animate({left:"0"});
	}).mouseout(function(){
		$(this).stop().animate({left:"-23%"});
	})
	$("#right a").mouseover(function(){
		$(this).stop().animate({left:"0"});
	}).mouseout(function(){
		$(this).stop().animate({left:"25%"});
	})
	
	
	
	$("#git").mouseover(function(){
		$(".git").show();
	}).mouseout(function(){
		$(".git").hide();
	})
	
	$("#me").mouseover(function(){
		$(".me").show();
	}).mouseout(function(){
		$(".me").hide();
	})
})