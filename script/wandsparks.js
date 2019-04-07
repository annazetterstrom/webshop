//kollad Tengil

$(function(){
    let lasttime = 0;
    let $html = $('html');
    $html.on('mousemove', function(e){
        let nowtime = (new Date).getTime();
        if(nowtime-20 > lasttime){
            lasttime = nowtime;
            sparkmaker(e.clientX, e.clientY);
        }
    })
    function sparkmaker(x, y){
        $html.append(`<div class="spark"></div>`);
        let $spark = $('.spark').last();
        $spark.css({"left" : x + "px", "top" : y + "px"});
        $spark.animate({"width" : "3px", "height" : "3px", "top" : "+=20px"}, 700,  function(){
            $(this).remove();
        });
    }
})