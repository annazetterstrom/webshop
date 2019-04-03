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
                            <p><b>Author:</b> ${obj.wands[i].author}<br> 
                                <b>Price:</b> ${obj.wands[i].price} <br>
                                <b> Description:</b> <br>
                                ${obj.books[i].description}
                            </p>
                                        
                        </div>
                        <button class="addbutton" data-product-code=${obj.books[i].code}>Add to Cart</button>
                    </div>
                </section>`;
            $('main').append(bookCard);