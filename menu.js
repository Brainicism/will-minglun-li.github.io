$(document).ready(function(){
	
	//Fade in on scroll portion	
	$(window).scroll( function(){
		$(".fadeIntro").each( function(i){ 
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window + 100;  
          
            if( bottom_of_window > bottom_of_object ){  
                $(this).animate({"opacity" : "1"}, 1200);       
            }
        }); 
    });
	
	//Dropdown Menu Portion
	$(".smallnav > ul").toggleClass("dropdown js");
	$(".smallnav .js ul").hide();
	
	$(".smallnav .js").click(function(e){
		$(".smallnav .js ul").slideToggle(200);
		$(".clicker").toggleClass("active");
		e.stopPropagation();
	});
	
	$(document).click(function(){
		if ($(".smallnav .js ul").is(":visible")){
		$(".smallnav .js ul", this).slideUp();
		$(".clicker").removeClass("active");
		}
	});
});