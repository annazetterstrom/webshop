$(function(){
    if(localStorage.getItem('enter')=='true'){
        $('.darkness').hide();
        animateIn();
        audio.volume = 1;
    }
    let $input = $('input');
    $input.on('keyup', function(){
        let $this = $(this);
        if($this.val()=="i solemnly swear that i am up to no good"){
            $('.darkness').hide();
            animateIn();
            audio.volume = 1;
            localStorage.setItem('enter', 'true');
        }
    });
    function animateIn(){
        $('img').animate({"left" : "10px"}, 1200, "swing", animateOut)
    }
    function animateOut(){
        $('img').animate({"left" : "-10px"}, 1200, "swing", animateIn)
    }
})