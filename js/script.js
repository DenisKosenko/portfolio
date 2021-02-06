function consoleBG() {
    if ($(window).scrollTop() > window.innerHeight) {
      $('#background').css('background', 'rgba(1,1,1,0.9');
    } else {
      $('#background').css('background', 'rgba(1,1,1,0');
    }
}

$(window).scroll(function() {
    consoleBG();
});



let i = 0;
function consoleBT(){
    if($(window).width() < 768){
        i++
        if(i % 2 == 0){
            $('#menu').css('opacity','0');
            $('#background').css('height','10vh');
            $('#group').css('margin-top','0');
            $('#menu').css('margin-bottom','-15vh');
            $('#menu').css('transition-duration','2s');
            $('#background').css('transition-duration','2s');
            $('#group').css('transition-duration','2s');

            if(window.scrollY < window.innerHeight){
                $('#background').css('background', 'rgba(1,1,1,0');
            }
            enableScrolling();
            
        } else {
            $('#menu').css('opacity','1');
            $('#background').css('height','100vh');
            $('#group').css('margin-top','-40vh');
            $('#menu').css('margin-bottom','-50vh');
            $('#group').css('transition-duration','3s');

            if(window.scrollY < window.innerHeight){
                $('#background').css('background', 'rgba(1,1,1,0.2');
            }
            disableScrolling();
        }
    }
}



$(window).resize(function() {
    if($(window).width() > 768){
        $('#menu').css('opacity','1');
        $('#menu').css('margin-top','-15vh');
    }else{
        $('#menu').css('opacity','0');
        $('#menu').css('margin-top','0');
    }
});



function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}
function enableScrolling(){
    window.onscroll=function(){};
}



window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });


