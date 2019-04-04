//kollad

$(function(){
    let currentStuff = JSON.parse(localStorage.getItem('items'));
    currentStuff = currentStuff ? currentStuff : [];
    let total = 0;
    for(let i=0;i<currentStuff.length;i++){
        total += currentStuff[i].num;
    }
    $('.badge').text(total);
    load('./json/wands.json', createCards);
    
    //menu stuff
    let $burgerbutton = $('.burgerbutton');
    let $darkness = $('.darkness');
    let $menu = $('.burgermenu');
    let $li = $('.burgermenu li');
    let $label = $('[for=burgerbutton]');

    $burgerbutton.on('click', toggler);
    $darkness.on('click', toggler);
    $li.on('click', loadItems);

    function toggler(){
        if(localStorage.getItem('enter')=='true'){
            $darkness.toggle();
            $menu.fadeToggle(300);
        }
    }
    function loadItems(){
        let $this = $(this);
        $label.text($this.text());
        toggler();
        if($this.text() == "Books"){
            load('./json/books.json', createCards);
        } else if($this.text() == "Wands"){
            load('./json/wands.json', createCards);
        } else if($this.text() == "Train Tickets"){
            load('./json/tickets.json', createCards);

        }
    }


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
    function createCards(xhr){
        let arr = JSON.parse(xhr.responseText).arr;
        $('main').html("");
        for (let i = 0; i < arr.length; i++) {
            let card = `
                <section class="page-section">
                    <div class="card"> 
                        <figure class="card-header">
                            <img src="${
                                arr[i].src
                            }" alt="wand" /> 
                        </figure>   
                        <div class="card-inner">
                            <h2>${arr[i].title}</h2>
                            <p>
                                ${arr[i].description}
                            </p>
                            <p>${arr[i].price} Galleons</p>
                                        
                        </div>
                        <button class="addbutton btn btn-success" data-product-code=${arr[i].code}>Add to Cart</button>
                    </div>
                </section>`;
            $('main').append(card);
        }
        $('.addbutton').on('click', function(){
            let $this = $(this);
            let currentProductsString = localStorage.getItem('items');
            let currentProducts;

            //det vill säga om currentProductsString är tom
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
                for(let i=0;i<arr.length;i++){
                    if(arr[i].code == $this.attr("data-product-code")){
                        addItem = arr[i];
                    }
                }
                currentProducts.push({item: addItem, num: 1});
            } else {
                currentProducts[index].num += 1;
            }
            localStorage.setItem('items', JSON.stringify(currentProducts));
            let tot = 0;
            for(let i=0;i<currentProducts.length;i++){
                tot += currentProducts[i].num;
            }
            $('.badge').text(tot);
            console.log(tot);
        });
    }

}); // ready

