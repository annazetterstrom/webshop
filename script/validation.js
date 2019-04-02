//validation of form
$(function(){
    let $form = $('form');
    let $input = $('input');
    $form.on('submit', validate);
    function validate(e){
        e.preventDefault()
        $('.error').remove();
        $('form div').css({"border" : "none"});
        if(checkName()&&checkMail()&&checkAdress()&&checkCity()){
            $('.deliveryoptions').fadeIn();
        }
        
    }
    function checkName(){
        if($input[0].value.length < 2){
            console.log("name error, to short");
            $($input[0]).parent().append('<p class="error">The name must be at least 2 letters long</p>');
            $($input[0]).parent().css({"border" : "red 1px solid"});
            return false;
        } else {
            return true;
        }
    }
    function checkMail(){
        if(!$input[1].value.includes("@") || $input[1].value.length < 3){
            console.log("not an email");
            $($input[1]).parent().append('<p class="error">Please enter a correct email</p>');
            $($input[1]).parent().css({"border" : "red 1px solid"});
            return false;
        } else {
            return true;
        }
    }
    function checkAdress(){
        if(!$input[2].checked){
            if($input[3].value.length < 3){
                console.log("adress error");
                $($input[3]).parent().append('<p class="error">I want to know where you live because reasons :D</p>');
                $($input[3]).parent().css({"border" : "red 1px solid"});
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
    function checkCity(){
        if(!$input[2].checked){
            if($input[4].value.length < 3){
                console.log("city error, pls move");
                $($input[4]).parent().append('<p class="error">Please enter a city to nuke</p>');
                $($input[4]).parent().css({"border" : "red 1px solid"});
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
});