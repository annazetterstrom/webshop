$(function(){
    let $button = $('.burgerbutton');
    let $darkness = $('.darkness');
    let $menu = $('.burgermenu');
    let $li = $('.burgermenu li')
    let $label = $('[for=burgerbutton]');
    let $domadress = $('main');

    $button.on('click', toggler);
    $darkness.on('click', toggler);
    $li.on('click', loadItems);

    function toggler(){
        $darkness.toggle();
        $menu.fadeToggle(300);
    }
    function loadItems(){
        let $this = $(this);
        $label.text($this.text());
        toggler();
        //let obj = JSON.parse(getJson('json/' + $this.text().toLowerCase() + '.json'));
        //createItems(obj)
    }
    function getJson(url){
        //returns the json from the file with the 'url' adress
    }
    function createItems(obj){
        //creates and appends items to main-tag in the DOM
    }

});