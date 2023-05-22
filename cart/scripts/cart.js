document.addEventListener('DOMContentLoaded', () => {
    const cross = document.getElementsByClassName('remove');
 
    updateTotal();

    for (let i = 0; i < cross.length; i++) {
        cross[i].addEventListener('click', function (event) {
            var crossClicked = event.target;
            console.log(crossClicked.className);
            while (crossClicked.className != "catalog_item") { 
                crossClicked = crossClicked.parentElement;
            }
            crossClicked.remove();
            updateTotal();
        })
    }
     
    function updateTotal() {
        var cartItemsContainer = document.getElementsByClassName("cards_container")[0];
        var cartRows = cartItemsContainer.getElementsByClassName("catalog_item");
        var total = 0;
        for (let i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i];
            var priceElement = cartRow.getElementsByClassName("price")[0];
         
            var price = parseFloat(priceElement.innerText);
          
            total = total + price;
        }
        document.getElementsByClassName("total_price")[0].innerText = total + 'руб';
    }

})
