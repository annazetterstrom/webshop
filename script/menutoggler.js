$(function(){
    let $button = $('#burgerbutton');
    let $darkness = $('#darkness');
    let $menu = $('#burgermenu');
    $button.on('click', function(){
        $darkness.toggle();
        $menu.fadeToggle(300);
    })

});