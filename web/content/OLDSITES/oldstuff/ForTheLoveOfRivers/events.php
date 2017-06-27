<!DOCTYPE html>

<html>
    
    <head>
           <title>For the love of rivers</title>
      
     
     
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
   
        <style>
            .body{
   background-image:url('img/JPEG/FTLOR_Image5.jpg');
   background-size:cover;
   position:fixed; top:0px; left:0px;
   width:100%; min-height:600px; z-index:0;
   transition:all 300ms;
   -webkit-transition: all 300ms;
            }
            
            .contentInner{position:absolute; top: 0px; z-index: 1;}
        </style>
<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic' rel='stylesheet' type='text/css'>
 
     <link rel="stylesheet" type="text/css" href="styles.css">
    </head>
    <body>
        <span class="body"></span>
        <div class="contentInner">
            <?php include 'nav.php'?>
   <article id="events">
        <h1 id="eventsHead">
            Events
        </h1>
        <p>
Attend events to hear author Kurt Fausch speak about <em>For the Love of Rivers</em>
        </p>
        <p>
               <em>Like trees and music and good health, streams and rivers are a gift to us as humans.  In the end, I believe 
we will need to understand how and why we love rivers, if we hope to conserve them.
        </em></p>
	
   </article>
   
   <article id="others">
        <h1></h1>
    <p>
	Speaking engagements: For information about Kurt’s availability for speaking engagements, please write 
him at: <a href="mailto:fortheloveofrivers@gmail.com" target="_blank">fortheloveofrivers@gmail.com</a>
    </p>
    <p id="quote">

    </p>
    <p style="text-align:center; font-size:.5em;">
    </p>
    
    
    
   </article>
   </div>
       <span class="grayscale" style="width:0px; height:0px;"></span>      
   
        
   <script>
    $(document).ready(function(){   
 /*scroll function*/
    $(function() {
    $(document).on("scroll", function() {
        if($(document).scrollTop() < 100){                  
		 
                     $('.body').css({
                               'filter'         : 'grayscale(0%) blur(0px)',
                               '-webkit-filter' : 'grayscale(0%) blur(0px)',
                               '-moz-filter'    : 'grayscale(0%) blur(0px)',
                               '-o-filter'      : 'grayscale(0%) blur(0px)',
                               '-ms-filter'     : 'grayscale(0%) blur(0px)'
                                                          });
                     
                     $('.body').removeClass('grayscale');
                     
                    $('nav').css(
                        'background-color','rgba(0,0,0,0.4)'  
                    );




        }
        else {
                     $('.body').css({
                               'filter'         : 'grayscale(80%) blur(2px)',
                               '-webkit-filter' : 'grayscale(80%) blur(2px)',
                               '-moz-filter'    : 'grayscale(80%) blur(2px)',
                               '-o-filter'      : 'grayscale(80%) blur(2px)',
                               '-ms-filter'     : 'grayscale(80%) blur(2px)'
                                                          });
                     
                                         $('.body').addClass('grayscale');

                    $('nav').css(
                        'background-color','rgba(0,0,0,.6)'  
                    );



                      
        }        
    });
});

    });  

    /*========end scroll===================*/ 
    
    
    $(document).ready(function(){
            $('.body').css({'height':$(window).height()});
            
            $('#events').css({
                     'margin-top':
                 $(window).height()-425
                     });  
     
     $('#others').css({
                     'top':
                 $(window).height()
                     });               
        
        
        
        
        })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   </script>
    
    
    
    
</body></html>