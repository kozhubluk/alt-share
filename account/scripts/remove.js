document.addEventListener('DOMContentLoaded', () => {
    const cross = document.getElementsByClassName('remove');

    for (let i = 0; i < cross.length; i++) {
        cross[i].addEventListener('click', function (event) {
            var crossClicked = event.target;
            while (crossClicked.className != "product-item") { 
                crossClicked = crossClicked.parentElement;
            }
            crossClicked.remove();
        
        })
    }
})
