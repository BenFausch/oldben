<!DOCTYPE html>

<html><head>
           <title>For the love of rivers</title>
      
<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic' rel='stylesheet' type='text/css'>
      <link href="styles.css" rel="stylesheet" type="text/css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
   
        <style>
            .body{
   background-image:url('img/JPEG/FTLOR_Image7.jpg');
   background-size:cover;
   position:fixed; top:0px; left:0px;
   width:100%; min-height:600px; z-index:0;
   transition:all 300ms;
   -webkit-transition: all 300ms;
            }
            
            .contentInner{position:absolute; top: 0px; z-index: 1;}
            #blog{
                margin-top:10%;
                margin-left:.5%;
            }
            #blogFrame{width:100%}
        </style>
   
   
    </head>
    <body>
        <span class="body"></span>
        <div class="contentInner">
            <?php include 'nav.php'?>
   <article id="blog">
        
            <div id="blogFrame">
            <iframe src="http://fortheloveofrivers.blogspot.com" width="100%" height="100%"></iframe>
        </div>
        
        
   </article>
   
   <!--<article id="others">
        <h1></h1>
    <p>
    </p>
    <p id="quote">

    </p>
    <p style="text-align:center; font-size:.5em;">
    </p>
    
    
    
   </article>
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
            
            $('article').css({
                'width':$(window).width()-50
                })
            
            
            $('#blogFrame').css({
                     'height':$(window).height()-25
                     });  
     
     $('#others').css({
                     'top':
                 $(window).height()
                     });               
        
        
        
        
        })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   </script>
    
    
    
    
</body></html>