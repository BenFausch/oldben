<!DOCTYPE html>
<html>
   <head>
      <title>For the love of rivers</title>
      
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic' rel='stylesheet' type='text/css'>
      <link href="styles.css" rel='stylesheet' type='text/css'>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
   </head>
   <body>
      
      <?php include 'nav.php'?>
      <header>
         <h1>For the Love of Rivers</h1>
         <h2>
            A scientist's journey
         </h2>
         <h3>
            by Dr. Kurt Fausch
         </h3>
         <h2 id="understand">
            Understand... Love... Conserve
         </h2>
      </header>
      <article>
      <div id="content">
            <p id="left" style="background-color:rgba(0,0,0,0.6); padding:2% 2% 4% 2%;">
               &ldquo;With deft storytelling and poetic prose, Kurt Fausch conveys the mystery and magic of
               flowing waters &mdash; and why we need to protect them. For the Love of Rivers is a must-read 
               for anyone who loves rivers and the natural world, which Fausch argues is all of us
               &mdash;whether we consciously know that or not.&rdquo;<br>
               <span style="font-size:.7em; float:right; text-align:right">&mdash;Sandra Postel, Freshwater
               Fellow, National Geographic Society, <br>and co-author of Rivers for Life</span>
            </p>
            <div id="order" style="background-color:rgba(0,0,0,0.6); ">
               <h2>ORDER NOW!
               </h2>
               <p style="float: right; margin-right: 65px;">
                  Watch the 2-minute book trailer now!<br>
                  From Freshwaters Illustrated
               </p>
               <img src="img/JPEG/FTLOR_Image8.jpg" width="200">
            </div>
            <div id="copyright">
               All images &copy; Freshwaters Illustrated &vert;  All rights reserved
            </div>
         </div>
      </article>
       <span class="grayscale" style="width:0px; height:0px;"></span>      
      <script>
        
                  

         $(document).ready(function(){
                 
                 $('header').css({
                     height:
                 $(window).height()-50
                     });        
                 $('#content').css({
                     height:
                 $(window).height()-50
                     });
                 $('#understand').css({
                     top:
                     $(window).height()/2
         
                     })
                 
                 if (($(window).width())>1400) {
                  $('#content').css({
                     height:
                 $(window).height()-150
                     });
                 }
                 
                 
                 
                 
             });
         
         
         
         
      </script>
   </body>
</html>