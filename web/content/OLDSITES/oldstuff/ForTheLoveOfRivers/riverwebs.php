<!DOCTYPE html>

<html><head>
           <title>For the love of rivers</title>
      
<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic' rel='stylesheet' type='text/css'>
      <link href="styles.css" rel="stylesheet" type="text/css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
   
        <style>
            .body{
   background-image:url('img/JPEG/FTLOR_Image9.jpg');
   background-size:cover;
   position:fixed; top:0px; left:0px;
   width:100%; min-height:600px; z-index:0;
   transition:all 300ms;
   -webkit-transition: all 300ms;
            }
            
            .contentInner{position:absolute; top: 0px; z-index: 1; width:100%;}
        </style>
   
   
    </head>
    <body>
        <span class="body"></span>
        <div class="contentInner">
            <?php include 'nav.php'?>



	
   <article id="about">
        <h1 id="aboutHead">
            Riverwebs
        </h1>
	
	<img src="img/JPEG/FTLOR_Image8.jpg" width="27%"  id="rwPoster">
   
        <p>
A feature-length film from Freshwaters Illustrated about the life and work of Dr. Shigeru Nakano to understand how streams and
forests depend on each other.  After Nakano&rsquo;s tragic death, Kurt Fausch and colleagues collaborated 
to follow the path forged by Nakano and discover deeper truths about the critical role that streams 

play.        </p>
        
   </article>
   <!--
	<img src="img/JPEG/FTLOR_Image8.jpg" width="27%"  id="rwPoster">
   -->
   
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
            
            $('#about').css({
                     'margin-top':
                 $(window).height()-375
                     });  
     
     /*$('#rwPoster').css({
                     'margin-left':
                 $(window).width()*.35
                     });               */
        
        
        
        
        })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   </script>
    
    
    
    
</body></html>