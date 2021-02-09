
'use strict'



let menuList = {
    menuOpen: 0,
    menuCount: 0,
    menuBool: false
}



function consoleBG() {
    if ($(window).scrollTop() > window.innerHeight) {
      $('#background').css('background', 'rgba(1,1,1,0.9');
    } else {
      $('#background').css('background', 'rgba(1,1,1,0');
    }
}



function buttonBorder(color){
    $('#button').css('border','3px solid ' + color);
}



function close(){
    $('#group').css('margin-top','0');
    $('#group').css('transition-duration','2s');

    $('#background').css('height','10vh');
    $('#background').css('transition-duration','2s');

    $('#menu').css('opacity','0'); 
    
    $('#menu').css('margin-bottom','-25%');
    $('#menu').css('transition-duration','2s');

    menuList.menuBool = false

    if(window.scrollY < window.innerHeight){
        $('#background').css('background', 'rgba(1,1,1,0');
    }
}



function open(){
    $('#group').css('margin-top','-40vh');
    $('#group').css('transition-duration','3s');

    $('#background').css('height','100vh');

    $('#menu').css('opacity','1');
    $('#menu').css('margin-bottom','-50vh');
    $('#menu').css('margin-top','0');

    menuList.menuBool = true 

    if(window.scrollY < window.innerHeight){
        $('#background').css('background', 'rgba(1,1,1,0.2');
    }
}



function disableScrolling(){
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function(){window.scrollTo(x, y);};
}



function enableScrolling(){
    window.onscroll = function(){};
}



$(window).scroll(function() {
    consoleBG();
});



window.onload = function() {
    if($(window).width() > 768){
        $('#parallax').css('background-attachment','fixed');
    }else{
        $('#parallax').css('background-attachment','local');
    }
};



window.onresize = function() {
    if(($(window).width() > 768) && !menuList.menuBool){
        $('#menu').css('opacity','1');
        if(menuList.menuCount > 0){
            $('#menu').css('margin-bottom','0');
        }
    }
    else if(($(window).width() > 767) && menuList.menuBool){
        close();
        buttonBorder('rgba(255, 255, 255, 0)')
        $('#menu').css('margin-bottom','0');
	enableScrolling();
    }
    else if(($(window).width() < 768) && !menuList.menuBool){
        if(menuList.menuCount > 0){
            $('#menu').css('margin-bottom','-25%');
        }
        $('#menu').css('opacity','0');

    }
};



$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});



function consoleBT(){
    menuList.menuCount++
    if($(window).width() < 768){
        menuList.menuOpen++
        if(menuList.menuOpen % 2 == 0){
           close();
           buttonBorder('rgba(255, 255, 255, 0)')
           enableScrolling();
            
        } else {
            open();
            buttonBorder('rgba(255, 255, 255, 1)')
            disableScrolling();
        }
    }
}


