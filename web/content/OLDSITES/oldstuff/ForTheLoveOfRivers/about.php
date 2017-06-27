<!DOCTYPE html>

<html><head>
           <title>For the love of rivers</title>
      
<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic' rel='stylesheet' type='text/css'>
      <link href="styles.css" rel="stylesheet" type="text/css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
   
        <style>
            .body{
   background-image:url('img/JPEG/FTLOR_Image2.jpg');
   background-size:cover;
   position:fixed; top:0px;
   width:100%; min-height:600px; z-index:0;
   transition:all 1300ms;
   -webkit-transition: all 1300ms;
/*filter:url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale"); /* Firefox 10+, Firefox on Android */*/
           
            }
            .contentInner{position:absolute; top: 0px; z-index: 1;}
        </style>
   
   
    </head>
    <body>
        <span class="body"></span>
        <div class="contentInner">
            <?php include 'nav.php'?>
   <article id="about">
        <h1 id="aboutHead">
            About the Book
        </h1>
        <p>
            In <em>For the Love of Rivers</em>, Kurt Fausch draws readers into an international collaboration among stream 
ecologists to discover the strong hidden connections between rivers and their surrounding forests.
        </p>
        <p>
            But the tragic loss of one of his closest Japanese colleagues, and the decline of rivers and fishes that
        Fausch and his colleagues study, forced him to look deeper and ask what is essential about rivers that 
        would lead humans to conserve them.
    </p>
   </article>
   
   <article id="others">
        <h1>What others are saying</h1>
    <p>
        &ldquo;In this beautifully written and soulful book, Kurt Fausch exposes the raw nerve of conservation:&nbsp;do we 
care enough about the natural world to save some of it?&nbsp;He concludes that the urge must come not from 
monetary justification or scientific warnings, but from a realm &lsquo;beyond the reach of language,&rsquo; from the 
place in our hearts where love resides.&rdquo;
    </p>
    <p id="quote">
        &mdash;Brian Richter, Chief Scientist of the Nature Conservancy's Global Water Program, and author of 

<em>Chasing Water: A Guide for Moving from Scarcity to Sustainability</em>
    </p>
    
    <p>
        &ldquo;This open window to the mind, heart, and adventures of an accomplished ecologist offers a rare and 
insightful view for any of us who care about streams, fish, and nature.&rdquo;
    </p>
    <p id="quote">
        &mdash;Tim Palmer, author of <em>Field Guide to Oregon Rivers, Rivers of America,&nbsp;and Lifelines: The Case for 
River Conservation</em>
    </p>
    <p>
        &ldquo;For the <em>Love of Rivers</em> is a book that will inspire and enlighten anyone with a personal or professional 

connection to rivers, water, and conservation.&rdquo;
    </p>
    <p id="quote">
        &mdash;Jeremy Monroe, Freshwaters Illustrated
    </p>
    <p></p>
    <p style="text-align:center; font-size:.5em;">
        This book was produced with support from the National Science Foundation, the Sitka Center for Art 
and Ecology, the H. J. Andrews Experimental Forest, Colorado State University, and Freshwaters 
Illustrated.  It is published by Oregon State University Press.
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
            
            $('#about').css({
                     'margin-top':
                 $(window).height()-300
                     });  
     
     $('#others').css({
                     'top':
                 $(window).height()
                     });               
        
        
        
        
        })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   </script>
    
    
    
    
</body></html>