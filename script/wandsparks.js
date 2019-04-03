$(function(){
    let lasttime = 0;
    let $body = $('body');
    $body.on('mousemove', function(e){
        let nowtime = (new Date).getTime();
        if(nowtime-50 > lasttime){
            lasttime = nowtime;
            sparkmaker(e.clientX, e.clientY);
        }
    })
    function sparkmaker(x, y){
        $body.append(`<div class="spark"></div>`);
        let $spark = $body.find('.spark').last();
        $spark.css({"left" : x + "px", "top" : y + "px"});
        $spark.animate({"width" : "5px", "height" : "5px", "top" : "+=10px"}, 1000,  function(){
            $(this).remove();
        });
    }
})