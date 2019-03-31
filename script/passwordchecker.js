$(function(){
    setInterval(animateOwl, 10000);
    if(localStorage.getItem('enter')=='true'){
        $('.darkness').hide();
        animateIn();
    }
    let $input = $('input');
    $input.on('keyup', function(){
        let $this = $(this);
        if($this.val()=="i solemnly swear that i am up to no good"){
            $('.darkness').hide();
            animateIn();
            localStorage.setItem('enter', 'true');
        }
    });
    function animateIn(){
        $('.map').animate({"left" : "10px"}, 1200, "swing", animateOut);
    }
    function animateOut(){
        $('.map').animate({"left" : "-10px"}, 1200, "swing", animateIn);
    }
    function animateOwl(){
        $('.flyingleft').animate({"right" : "30vw"}, 1000).delay(3000).animate({"right" : "100vw"}, 2000, "linear", resetOwl);
    }
    function resetOwl(){
        $('.flyingleft').css({"right" : "-50px", "top" : Math.random()*80 + "vh"});

    }
})