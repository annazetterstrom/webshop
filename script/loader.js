$(function(){
    //skriv ut trädslaget på Dumbledores trollstav i consolen

    function load(url, callback){
        xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', function(){
            if(this.readyState==4 && this.status == 200){
                callback(callback);
            }
        });
        xhr.open('GET', url, true);
        xhr.send();
    }
});