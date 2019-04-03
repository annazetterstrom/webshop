$(function(){
    let currentStuff = JSON.parse(localStorage.getItem('items'));
    currentStuff = currentStuff ? currentStuff : [];
    $('.badge').text(currentStuff.length);
    load('./json/books.json', createBookCards);
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
    function createWandCards(xhr){
        let obj = JSON.parse(xhr.responseText);
        for (let i = 0; i < obj.wands.length; i++) {
            let card = `
                <section class="page-section">
                    <div class="card"> 
                        <figure class="card-header">
                            <img src="${
                                obj.wands[i].src
                            }" alt="wand" /> 
                        </figure>   
                        <div class="card-inner">
                            <h2>${obj.wands[i].owner}</h2>
                            <p><b>Wood:</b> ${obj.wands[i].wood}<br> 
                                <b>Core:</b> ${obj.wands[i].core} <br>
                                <b> Description:</b> <br>
                                ${obj.wands[i].description}
                            </p>
                                        
                        </div>
                        <button class="addbutton" data-product-code=${obj.wands[i].code}>Add to Cart</button>
                    </div>
                </section>`;
            $('main').append(card);
        }
        $('.addbutton').on('click', function(){
            let $this = $(this);
            let currentProductsString = localStorage.getItem('items');
            let currentProducts;

            //det vill säga om currentProductsString är tom (null).
            if(!currentProductsString){
                currentProducts = [];
            } else {
                currentProducts = JSON.parse(currentProductsString);
            }
            let checker = true;
            let index;
            for(let i=0;i<currentProducts.length;i++){
                if(currentProducts[i].item.code == ($this.attr("data-product-code"))){
                    checker = false;
                    index = i;
                }
            }
            if(checker){
                //lägg till {item, num} till currentProducts
                let addItem;
                for(let i=0;i<obj.wands.length;i++){
                    if(obj.wands[i].code == $this.attr("data-product-code")){
                        addItem = obj.wands[i];
                    }
                }
                currentProducts.push({item: addItem, num: "1"});
            }
            localStorage.setItem('items', JSON.stringify(currentProducts));
            $('.badge').text(currentProducts.length);
            console.log(currentProducts.length);
        });
    }

    //books
    function createBookCards(xhr){
        let obj = JSON.parse(xhr.responseText);
        console.log(obj.books);
        for (let i = 0; i < obj.books.length; i++) {
            let bookCard = `
            <section class="page-section">
                <div class="card"> 
                    <figure class="card-header">
                        <img src="${
                            obj.books[i].src
                        }" alt="book" /> 
                    </figure>   
                    <div class="card-inner">
                        <h2>${obj.books[i].title}</h2>
                        <p><b>Author:</b> ${obj.books[i].author}<br> 
                            <b>Price:</b> ${obj.books[i].price} <br>
                            <b> Description:</b> <br>
                            ${obj.books[i].description}
                        </p>
                                    
                    </div>
                    <button class="addbutton" data-product-code=${obj.books[i].code}>Add to Cart</button>
                </div>
            </section>`;
        $('main').append(bookCard);
        }
        $('.addbutton').on('click', function(){
            let $this = $(this);
            let currentProductsString = localStorage.getItem('items');
            let currentProducts;

            //det vill säga om currentProductsString är tom (null).
            if(!currentProductsString){
                currentProducts = [];
            } else {
                currentProducts = JSON.parse(currentProductsString);
            }
            let checker = true;
            let index;
            for(let i=0;i<currentProducts.length;i++){
                if(currentProducts[i].item.code == ($this.attr("data-product-code"))){
                    checker = false;
                    index = i;
                }
            }
            if(checker){
                //lägg till {item, num} till currentProducts
                let addItem;
                for(let i=0;i<obj.wands.length;i++){
                    if(obj.wands[i].code == $this.attr("data-product-code")){
                        addItem = obj.wands[i];
                    }
                }
                currentProducts.push({item: addItem, num: "1"});
            }
            localStorage.setItem('items', JSON.stringify(currentProducts));
            $('.badge').text(currentProducts.length);
            console.log(currentProducts.length);
        });
    }
}); // ready

