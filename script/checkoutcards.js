$(function(){
    createCards();
    function createCards(){
        let itemArray = JSON.parse(localStorage.getItem('items'));
        $('main').html("");
        if(!itemArray){
            $('main').append('Din varukorg är tom!');
        } else {
            for(let i=0;i<itemArray.length;i++){
                let card = `
                    <div class="card"> 
                        <figure class="card-header">
                            <img src="${itemArray[i].item.src}" alt="wand" /> 
                        </figure>   
                        <div class="card-inner">
                            <h2>${itemArray[i].item.owner}</h2>
                            <p>
                                Wood: ${itemArray[i].item.wood}<br> 
                                Core: ${itemArray[i].item.core}<br>
                                Currently ordering: <span class="num">${itemArray[i].num}</span>
                            </p>
                        </div>
                        <select class="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button class="addbutton" data-product-code="${itemArray[i].item.code}">Add</button>
                        <button class="removebutton" data-product-code="${itemArray[i].item.code}">x</button>
                    </div>`;
                $('main').append(card);
            }
            $('.addbutton').on('click', function(){
                let $this = $(this);
                let itemArray = JSON.parse(localStorage.getItem('items'));
                for(let i=0;i<itemArray.length;i++){
                    if($this.attr("data-product-code") == itemArray[i].item.code){
                        let selectvalue = $this.siblings("select").val();
                        itemArray[i].num = selectvalue;
                        $this.siblings('div').children().children().filter('.num').text(selectvalue);
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
});