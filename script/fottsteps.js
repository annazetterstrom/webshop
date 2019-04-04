$(function(){
    let switcher = true;
    let i = 0;
    let right = 100;
    setInterval(step, 500);
    function step(){
        if(switcher){
            switcher = false;
            $('body').append(`<img class="step" src="images/footright.png">`);
            $('.step').last().css({"bottom" : i + "vh", "right" : right + "px"});
        } else {
            $('body').append(`<img class="step" src="images/footleft.png">`);
            $('.step').last().css({"bottom" : i + "vh", "right" : (right+20) +"px"});
            switcher = true;
        }
        $('.step').last().animate({"opacity" : 0}, 2000, "linear", function(){
            $(this).remove();
        });
        i += 10;
        if(i==100){
            i=0;
        }
    }
});