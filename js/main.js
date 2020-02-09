$(function (){

	/* passing class "active" among links */
	$(".navbar-nav li").on("click",function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	
	/* activated navbar links */
	$(".navbar-nav li, .navbar-nav li a").click(function () {
		$("html,body").animate({
			scrollTop: $("#"+$(this).attr("data-value")).offset().top - 50
		},1000);
	});
	
	
	/* close navbar-collapse when a  clicked */
	$(".nav a, .navbar-nav li").on('click', function () {
		$(".navbar-collapse").removeClass("in").addClass("collapse");
	});
	
	
	/* carousel adjusting */
	$(".carousel").css("marginTop",$(".navbar").height());
	
	$(".carousel-caption").css("marginBottom",($(".carousel .item").height()/2)-($(".navbar").height()+65));
	
	/* activated back-to-top button */
	var scrollButton = $(".back-to-top");
	
	$(window).scroll( function (){
		if ($(this).scrollTop() >= 700) {
			scrollButton.fadeIn(800);
		}
		else {scrollButton.fadeOut(800)}
	});
	
	scrollButton.click(function () {
		$("html,body").animate({ scrollTop: 0 }, 1000);
	})

});