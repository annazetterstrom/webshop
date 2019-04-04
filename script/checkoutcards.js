$(function(){
    createCards();
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
                    <input data-product-code=${itemArray[i].item.code} class="quantity" type="number" max="5" min="1" value="${itemArray[i].num}" />
               </p>
                `;
                $('.container').append(card);
            }
            $('.quantity').on('change', function(){
                let $this = $(this);
                let itemArray = JSON.parse(localStorage.getItem('items'));
                for(let i=0;i<itemArray.length;i++){
                    if(itemArray[i].item.code==$this.attr("data-product-code")){
                        itemArray[i].num = $this.val();
                        localStorage.setItem('items', JSON.stringify(itemArray));
                    }
                }
                calculateTotal();
            });
            calculateTotal();
            $('.num-item').text(itemArray.length)
            $('.addbutton').on('click', function(){
                let $this = $(this);
                let itemArray = JSON.parse(localStorage.getItem('items'));
                for(let i=0;i<itemArray.length;i++){
                    if($this.attr("data-product-code") == itemArray[i].item.code){
                        let selectvalue = $this.siblings("select").val();
                        itemArray[i].num = selectvalue;
                        $this.siblings('div').find('.num').text(selectvalue);
                        break;
                    }
                }
                localStorage.setItem('items', JSON.stringify(itemArray));
            });
            $('.removebutton').on('click', function(){
                let $this = $(this);
                let itemArray = JSON.parse(localStorage.getItem('items'));
                for(let i=0;i<itemArray.length;i++){
                    if($this.attr("data-product-code") == itemArray[i].item.code){
                        itemArray.splice(i, 1);
                        if(itemArray.length === 0){
                            localStorage.removeItem('items');
                            $('.num-item').text(itemArray.length);
                        } else {
                            localStorage.setItem('items', JSON.stringify(itemArray));
                         
                        }
                        break;
                    }
                }
                createCards();
            })
        }
    }
    function calculateTotal(){
        let total = 0;
        let $prices = $('.price');
        let $quantity = $('.quantity');
        for(let i=0;i<$prices.length;i++){
            total += +$prices[i].innerText * $quantity[i].value;
        }
        $('.total').text(total);
    }
    $('.empty').on('click', function(){
        localStorage.removeItem('items');
        $('main > *:not(h4)').hide();
        $('main').append('Your cart is empty!');
    });
});