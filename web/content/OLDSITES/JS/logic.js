  
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
	
	$('#musicFilter').bind('click',function(e){
		$('button').removeClass('Active');
		$('#musicFilter').addClass('Active');
		$('.tile').filter('#video, #web').fadeOut(0);
		$('#about').fadeOut(0);
		$('.tile').filter('#music').delay(100).fadeIn(500);
		$('.comments').filter('#video, #web').addClass('ng-hide');	
		$('.comments').filter('#music').css('display','block');			
			
				$('.tile').click(function(){
				$('.comments').addClass('ng-hide');
				$(this).next('.comments').toggleClass('ng-hide');
				});
							
								$('.comments').click(function(){
									$(this).addClass('ng-hide');		
								});

	});
	
	$('#webFilter').bind('click',function(e){
		$('button').removeClass('Active');
		$('#webFilter').addClass('Active');
		$('.tile').filter('#music, #video').fadeOut(0);
		$('#about').fadeOut(0);
		$('.tile').filter('#web').delay(100).fadeIn(500);
		$('.comments').filter('#music, #video').addClass('ng-hide');
		$('.comments').filter('#web').css('display','block');			
		
	
					$('.tile').click(function(){
					$('.comments').addClass('ng-hide');
					$(this).next('.comments').toggleClass('ng-hide');
					});
					
								$('.comments').click(function(){
									$(this).addClass('ng-hide');		
								});

	});
	
	$('#videoFilter').bind('click',function(e){
		$('button').removeClass('Active');
		$('#videoFilter').addClass('Active');
		$('.tile').filter('#music, #web').fadeOut(0);
		$('#about').fadeOut(0);
		$('.tile').filter('#video').delay(100).fadeIn(500);		
		$('.comments').filter('#music, #web').addClass('ng-hide');
		$('.comments').filter('#video').css('display','block');

					$('.tile').click(function(){
				$('.comments').addClass('ng-hide');
				$(this).next('.comments').toggleClass('ng-hide');
				});

								$('.comments').click(function(){
									$(this).addClass('ng-hide');		
								});
	


	
	});
	
	
	
  
  
