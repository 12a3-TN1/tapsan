
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     
     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     
    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });


    //  Counter Js 

    $('.counter').counterUp({
        delay: 50,
        time: 10000
    });


    // Add smooth scrolling to Menu links

    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });      

    

    $("#slideshow > div:gt(0)").hide();

    setInterval(function() { 
        $('#slideshow > div:first')
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('#slideshow');
        },  6000);


    $(function(){
    $('.image-link').venobox({
         framewidth: '800px',        // default: ''
        frameheight: '530px',       // default: ''
                 
        bgcolor: '#5dff5e',         // default: '#fff'
            // default: 'title'
                   // default: false
        infinigall: true            // default: false
       


    });

});
    


 });
