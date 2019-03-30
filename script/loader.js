$(function(){
    //skriv ut trädslaget på Dumbledores trollstav i consolen

    load('/json/wands.json', dumbledore);
    function load(url, callback){
        xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', function(){
            if(this.readyState==4 && this.status == 200){
                callback(this);
            }
        });
        xhr.open('GET', url, true);
        xhr.send();
    }

    function dumbledore(xhr){
        let json = JSON.parse(xhr.responseText)
        let wands = json.wands;
        for(let i=0;i<wands.length;i++){
            //if(wands[i].owner.includes("Dumbledore")){
                //skriva ut trädslaget på dumbledores trollstav
                console.log(wands[i].wood);
            //}
        }
    }
});