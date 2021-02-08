
'use strict'

function consoleBG() {
    if ($(window).scrollTop() > window.innerHeight) {
      $('#background').css('background', 'rgba(1,1,1,0.9');
    } else {
      $('#background').css('background', 'rgba(1,1,1,0');
    }
}

window.onscroll = function() {
    consoleBG();
};



let i = 0;
let menuCount = 0
let menuBool = false
function consoleBT(){
    menuCount++
    if($(window).width() < 768){
        i++
        if(i % 2 == 0){
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

    menuBool = false

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

    menuBool = true 

    if(window.scrollY < window.innerHeight){
        $('#background').css('background', 'rgba(1,1,1,0.2');
    }
}

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}
function enableScrolling(){
    window.onscroll=function(){};
}



window.onload = function() {
    if($(window).width() > 768){
        $('#parallax').css('background-attachment','fixed');
    }else{
        $('#parallax').css('background-attachment','local');
    }
};



window.onresize = function() {
    if(($(window).width() > 768) && !menuBool){
        $('#menu').css('opacity','1');
        if(menuCount > 0){
            $('#menu').css('margin-bottom','0');
        }
    }
    else if(($(window).width() > 767) && menuBool){
        close();
        buttonBorder('rgba(255, 255, 255, 0)')
        $('#menu').css('margin-bottom','0');
    }
    else if(($(window).width() < 768) && !menuBool){
        if(menuCount > 0){
            $('#menu').css('margin-bottom','-25%');
        }
        $('#menu').css('opacity','0');

    }
};



