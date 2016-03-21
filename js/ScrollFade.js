$(document).ready(function(){
	
	//Fade in on scroll 
	$(window).scroll( function(){
		$(".fadeIntro").each( function(i){ 
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            bottom_of_window = bottom_of_window + 350;  
          
            if( bottom_of_window > bottom_of_object ){  
                $(this).animate({"opacity" : "1"}, 1500);       
            }
        }); 
    });
	
} );