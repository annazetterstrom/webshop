$(function(){
    let $form = $('form');
    let $input = $('input');
    $form.on('submit', validate);
    function validate(e){
        e.preventDefault()
        $('.error').remove();
        $('form div').css({"border" : "none"});
        checkName();
        checkMail();
        checkAdress();
        checkCity();
    }
    function checkName(){
        if($input[0].value.length < 2){
            console.log("name error, to short");
            $($input[0]).parent().append('<p class="error">The name must be at least 2 letters long</p>');
            $($input[0]).parent().css({"border" : "red 1px solid"});
        }
    }
    function checkMail(){
        if(!$input[1].value.includes("@") || $input[1].value.length < 3){
            console.log("not an email");
            $($input[1]).parent().append('<p class="error">Please enter a correct email</p>');
            $($input[1]).parent().css({"border" : "red 1px solid"});
        }
    }
    function checkAdress(){
        if(!$input[2].checked){
            if($input[3].value.length < 3){
                console.log("adress error");
                $($input[3]).parent().append('<p class="error">I want to know where you live because reasons :D</p>');
                $($input[3]).parent().css({"border" : "red 1px solid"});
            }
        }
    }
    function checkCity(){
        if(!$input[2].checked){
            if($input[4].value.length < 3){
                console.log("city error, pls move");
                $($input[4]).parent().append('<p class="error">Please enter a city to nuke</p>');
                $($input[4]).parent().css({"border" : "red 1px solid"});
            }
        }
    }
});