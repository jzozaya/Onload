//Inicializar
jQuery(

  function ($) {
    
  $.Body = $('body');   
	$.Window = $(window); 
  $.Document = $(document); 
  $.Scroll = ($.browser.mozilla || $.browser.msie) ? $('html') : $.Body;
	$.Mobile = ($.Body.hasClass('webkit-mobile') || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i) || (navigator.userAgent.match(/Android/i)))),
	$.Unsupported = $.Body.hasClass('unsupported-browser'); 
	$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());

   if($.browser.mozilla)
    {
     
    }
  
  var widthScreen = $.Window.width();
  var heightScreen = $.Window.height();
     
     //console.log(widthScreen+' '+heightScreen);
     $('.stages').css({'width': widthScreen, 'height': heightScreen});
     $('#stage1').css({'top': 0});
     $('#stage2').css({'top': heightScreen});
     $('#stage3').css({'top': heightScreen*2});

      $('#wrapper').animate({
            opacity: 1
        }, 800, 'easeInOutQuart', function(){
        	$('#flyLogo').animate({
        		opacity: 1
        	},1200, 'easeInOutQuart', function(){
           $('#flyLogo').animate({
             marginLeft: - 310 
           },800, 'easeInOutQuart', function(){

             $('#wrapper').animate({
              top: - heightScreen
             },600, 'easeInOutQuart');
           });

         

          });
        });
    
      










  }
  );