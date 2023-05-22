document.addEventListener('DOMContentLoaded', ()=>{
    const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll(".review_item")[0];
    arrowIcons = document.querySelectorAll(".carousel_wrapper i"); // кнопки
    
    var isDragStart = false, prevPageX, prevScrollLeft;
    var firstImgWidth = firstImg.clientWidth; // ширина изображения
    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            // "перелистываем", сдвигая контент слайдера влево, либо вправо
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth; 
        })
    });
    
    const dragStart = (e) => {
        isDragStart = true; // совершает прокручивание
        // координаты курсора при клике
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft; 
    }
    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault();
        carousel.classList.add("dragging");
        // высчитываем изменение положения курсора при прокрутке
        let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft -  positionDiff;
    }
    const dragStop = () => {
        isDragStart = false; // остановка прокрутки
        carousel.classList.remove("dragging");
    }

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragStop);  
    carousel.addEventListener("touchstart", dragStart)  
    carousel.addEventListener("touchmove", dragging)  
})
