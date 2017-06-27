

/*======set CSS===*/   

         /*$(document).ready(*/
	var resizeIt = function(){
                 
                 $('header').css({
                     height:
                 ($(window).height()),
                    width:
                 ($(window).width())    
                     });        
                 $('article').css({
                     height:
                 $(window).height()*.7
                     });
                 $('#understand').css({
                     top:
                     $(window).height()-175}
                     );               
             
             
	     if ($(window).width()<1460){
		 $('article').css({
                     height:
                 $(window).height()
                     });	     
	     }
              else if ($(window).width()<1000) {
                    $('header').css({
                     height:
                 $(window).height()*1
                     });
                     $('#understand').css({
                     top:
                     $(window).height()*.7}
                     );               
               
		}
           

	};

        /*
        });
	*/
	
	$(document).ready(resizeIt);
	$(window).on('resize',resizeIt);
	
/*=====================================*/
         
         
/*============SCROLL FUNCTION===============================================*/
$(function() {
    $(document).on("scroll", function() {
        if($(document).scrollTop() < 55){                  
		  $('nav').css('background-color','rgba(0,0,0,0)'); 
        }
        else {
       $('nav').css('background-color','rgba(0,0,0,0.65)');
 
        }        
    });
});              
/*=======================================================*/







    $(document).ready(function(){   
  /*scroll function for blog*/
    $(function() {
    $(document).on("scroll", function() {
        if($(document).scrollTop() < 100){                  
		 
                     $('.dabody').css({
                               'filter'         : 'grayscale(0%) blur(0px)',
                               '-webkit-filter' : 'grayscale(0%) blur(0px)',
                               '-moz-filter'    : 'grayscale(0%) blur(0px)',
                               '-o-filter'      : 'grayscale(0%) blur(0px)',
                               '-ms-filter'     : 'grayscale(0%) blur(0px)'
                                                          });
                     
                     $('.dabody').removeClass('grayscale');
                     
                    



        }
        else {
                     $('.dabody').css({
                               'filter'         : 'grayscale(80%) blur(2px)',
                               '-webkit-filter' : 'grayscale(80%) blur(2px)',
                               '-moz-filter'    : 'grayscale(80%) blur(2px)',
                               '-o-filter'      : 'grayscale(80%) blur(2px)',
                               '-ms-filter'     : 'grayscale(80%) blur(2px)'
                                                          });
                     
                                         $('.dabody').addClass('grayscale');

                    


                      
        }        
    });
});

    });  

    /*========end scroll===================*/  
    
    
    $(document).ready(function(){
            $('.dabody').css({'height':$(iframe).height()+25});
            
            $('#blog').css({
                'width':$(window).width()-50
                })
            
            
            $('#blogFrame').css({
                     'height':$(iframe).height()-25
                     });  
     
     $('#others').css({
                     'top':
                 $(window).height()
                     });               
        
        })
    
    
    /*=============signup drop down=========================*/
    
    

    
    
    $(document).ready(function(){
	
	$('.emailsign').click(function(){
			
		$('#mc_embed_signup').slideDown(400);
	
	});    
	
	$('#close').click(function(){
		
		$('#mc_embed_signup').slideUp(400);
		});







	
	
	});
    
    
    