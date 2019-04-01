$(function(){
    let $form = $('form');
    let $input = $('input');
    $form.on('submit', validate);
    function validate(e){
        e.preventDefault()
        if($input[0].value.length < 2){
            console.log("name error, to short");
        }
        if(!$input[1].value.includes("@") || $input[1].value.length < 3){
            console.log("not an email");
        }
        if(!$input[2].checked){
            if($input[3].value.length < 3){
                console.log("adress error");
            }
            if($input[4].value.length < 3){
                console.log("city error, pls move");
            }
        }
    }
});