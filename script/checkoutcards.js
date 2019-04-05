//Kollad Tengil

$(function(){
    createCards();

    //rensar localStorage från items och gömmer massa html
    $('.empty').on('click', function(){
        localStorage.removeItem('items');
        $('main > *:not(h4)').hide();
        $('main').append('Your cart is empty!');
    });

    //Skapar "kort" från infon i localStorage och lägger till de i containern
    function createCards(){
        let itemArray = JSON.parse(localStorage.getItem('items'));
        $('.container').html("");
        if(!itemArray){
            $('main > *:not(h4)').hide();
            $('main').append('Your cart is empty!');
        } else {
            for(let i=0;i<itemArray.length;i++){
                let card = `
                <p>
                    <span>${itemArray[i].item.title}  <span class="price">${itemArray[i].item.price}</span> Galleons</span>
                    <button data-product-code=${itemArray[i].item.code} class="sm-btn btn-danger removebutton">X</button>
                    <input data-product-code=${itemArray[i].item.code} class="quantity" type="number" min="1" value="${itemArray[i].num}" />
               </p>
                `;
                $('.container').append(card);
            }
            calculateTotal();
            $('.quantity').on('change', function(){
                let $this = $(this);
                let itemArray = JSON.parse(localStorage.getItem('items'));
                for(let i=0;i<itemArray.length;i++){
                    if(itemArray[i].item.code==$this.attr("data-product-code")){
                        itemArray[i].num = +$this.val();
                        localStorage.setItem('items', JSON.stringify(itemArray));
                    }
                }
                calculateTotal();
                let tot = 0;
                for(let i=0;i<itemArray.length;i++){
                    tot += itemArray[i].num;
                }
                $('.num-item').text(tot);
            });
            let tot = 0;
            for(let i=0;i<itemArray.length;i++){
                tot += itemArray[i].num;
            }
            $('.num-item').text(tot);
            $('.removebutton').on('click', function(){
                let $this = $(this);
                let itemArray = JSON.parse(localStorage.getItem('items'));

                //tar fram itemet i itemArrayen som motsvarar kortet och tar bort det. Sparar sedan arrayen i localstorage. Efter det skapas nya kort utifrån infon i localStorage igen.
                for(let i=0;i<itemArray.length;i++){
                    if($this.attr("data-product-code") == itemArray[i].item.code){
                        itemArray.splice(i, 1);
                        if(itemArray.length === 0){
                            localStorage.removeItem('items');
                            let tot = 0;
                            for(let i=0;i<itemArray.length;i++){
                                tot += itemArray[i].num;
                            }
                            $('.num-item').text(tot);
                        } else {
                            localStorage.setItem('items', JSON.stringify(itemArray));
                        }
                        break;
                    }
                }
                createCards();
            });
        }
    }
    //räknar ut totala kostnaden och uppdaterar en span på sidan
    function calculateTotal(){
        let total = 0;
        let $prices = $('.price');
        let $quantity = $('.quantity');
        for(let i=0;i<$prices.length;i++){
            total += +$prices[i].innerText * $quantity[i].value;
        }
        $('.total').text(total);
    }

});