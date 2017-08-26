$(function(){
//	导航左边另一个首页的效果
	$(".ico").mouseover(function(){
		$(this).find("span").css({"color":"#FCB9FA"});
		$(this).find(".icoH").css({"background-position":"100% 0"});
	}).mouseout(function(){
		$(this).find("span").css({"color":"#C9C9C9"});
		$(this).find(".icoH").css({"background-position":"0 0"});
	});
//	开启导航
	$("#nav").click(function(){
		$("#bigNav").slideDown();
	})
//	关闭大导航
	$(".closeNav").click(function(){
		$("#bigNav").slideUp("fast");
	})
	//
})