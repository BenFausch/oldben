
                  
                  
  /*=================Styles=========================
 *==========================================================*/                
                  
 var loadCSS = function(){
        
        
                 $('#title').css({
                     height:
                 ($(window).height()),
                    width:
                 ($(window).width())/2    
                     });        

                 $('#profile').css({
                     height:
                 ($(window).height()),
                    width:
                 ($(window).width())/2,
                    left:
                 ($(window).width())/2
                 
                     });        
    
                
                
                $('nav').css({
                     height:($(window).height())
                });
                
            
    
    
    };
    
   /*=================Nav Bar Show/Hide Function=========================
 *==========================================================*/ 
  var openMenu = function(){
            $('nav').css({
                left:'0px',
                'background-color': 'rgba(0,0,0,1)'
                });
             $('#navClick').fadeOut(0);
             $('#navClick2').fadeIn(1050);
        };
  
   var closeMenu =  function(){
            $('nav').css({
                left:'-2000px',
                'background-color': 'rgba(0,0,0,0)'
                });
           
             $('#navClick').fadeIn(1050);
             $('#navClick2').fadeOut(0);

        };
   
   
   
   
   
   
   $(document).ready(function(){
    
    $('#navClick').click(openMenu);
    
    $('#navClick2').click(closeMenu);
    
    });
   
   
   
   
  /*==========================Nav Links AJAX==========================*/
  
  var clickAdd = function(e){
        e.preventDefault();
        $('#content').fadeOut(0);  
        $('#content').empty;

              
        $('#content').load(this.href);        
        $('#content').fadeIn(650);  
                
                $('#content').css({
                        //'display' :'block',
                        'min-height': ($(window).height()),
                        'position' :'absolute',
                        'top': ($(window).height())
                                            
                                });
                $('#content > div').css({

                                        'height' :'100%',
                                        'background-size' :'cover'
                })

 $('html, body').animate({
                    scrollTop: $('#content').offset().top
                }, 1000);
        
               $('#navClick').css('color','white');
               

               
               
               
               
  }
  


  
  $(document).ready(function(){

  $('#navLink > li > a').on('click', clickAdd); 
  $('#navLink > li > a').click(closeMenu);
  

  
});




 
 /******************************/ 

  /*========================scrolling menu function===========================================================*/




$(document).ready(function() {
    $(document).on("scroll", function() {
        if($(document).scrollTop() < 50){                  
		  $('#navClick > p').css('opacity','1'); 
        }
        else {
$('#navClick > p').css('opacity','0');  

        
        
        }        
    });
});






  /*===================================================================================*/  
  
  /*====================resize content function=============================================*/
   
 var contentResize = function(){  $('#content').css({
                        //'display' :'block',
                        'height': ($(window).height()*2),
                        'position' :'absolute',
                        'top': ($(window).height())
                                            
                                });
                $('#content > div').css(
                                        'height' , '100%'
                                        );
            
            
                
 };
   
    
/*=================Load Functions=========================
 *==========================================================*/

$(window).on('load',function(){
$('#profile, #title').click(closeMenu);
});
 
 $(document).ready(loadCSS);
 $(window).resize(function(){location.reload();});

var dp = window.devicePixelRatio
if (dp<=1) {
$(window).on('resize', loadCSS);
//$(window).on('resize', contentResize);    
};

