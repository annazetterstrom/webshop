$(function(){
    //skriv ut trädslaget på Dumbledores trollstav i consolen

    load('/json/wands.json', createCards);
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

    function createCards(xhr){
        let obj = JSON.parse(xhr.responseText);
        console.log(obj.wands[0]);
        for (let i = 0; i < obj.wands.length; i++) {
            let card = ` <div class="container flex-cards"> 
                            <div class="card"> 
                                <figure class="card-header">
                                    <img src="${
                                        obj.wands[i].src
                                    }" alt="wand" /> 
                                    </figure>   
                                    <div class="card-inner">
                                        <h2>${obj.wands[i].owner}</h2>
                                        <p>Wood: ${obj.wands[i].wood}<br> 
                                            Core: ${obj.wands[i].core}</p>
                                        
                                    </div>
                                    <button>Add to Cart</button>
                            </div>
                        </div> `;
            $('main').append(card);  
        }
            

    } 
}); // ready

