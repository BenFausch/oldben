 
  $(document).ready(function(){
  	$('#about').slideDown(2000);
  });
  	
	

	
$('#homeFilter').bind('click',function(e){
		$('button').removeClass('Active');
		$('#homeFilter').addClass('Active');
		$('.tile').filter('#video, #web, #music').fadeOut(10);
		$('#about').delay(200).fadeIn(1000);
		$('.comments').addClass('ng-hide')
	});	
	
		$('#musicFilter').bind('click',function(){
			showHide('musicFilter','music','video','web')
		});
		
		$('#videoFilter').bind('click',function(){
			showHide('videoFilter','video','music','web')
		});
		
		$('#webFilter').bind('click',function(){
			showHide('webFilter','web','music','video')
		});


 function showHide(w,x,y,z){
 	var w = '#' + w;
 	var x = '#' + x;
 	var y = '#' + y;
 	var z = '#' + z;
 	
 	
	$('button').removeClass('Active');
		$(w).addClass('Active');
		$('.tile').filter(y).fadeOut(0);
		$('.tile').filter(z).fadeOut(0);
		$('#about').fadeOut(0);
		$('.tile').filter(x).delay(100).fadeIn(500);
		$('.comments').filter(y).addClass('ng-hide');
		$('.comments').filter(z).addClass('ng-hide');	
		$('.comments').filter(x).css('display','block');			
			
				$('.tile').click(function(){
				$('.comments').addClass('ng-hide');
				$(this).next('.comments').toggleClass('ng-hide');
				});
								
								$('.comments').click(function(){
									$(this).addClass('ng-hide');		
								});
	};
	
		



	