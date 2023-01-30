const mainSlider = function(sliderSelector, slidesSelector, sectionsSelector) {
    let slideIndex = 1,
        slider = document.querySelector(sliderSelector),
        slides = document.querySelectorAll(slidesSelector),
        slideContainer,
        sections = document.querySelectorAll(sectionsSelector),
        width;
        
        try {
            slideContainer = slider.querySelector("._slides");
            width = window.getComputedStyle(slider.querySelector("._wrapper")).width;
        } catch (e) {
            console.log(`Ошибка при в файле "main-slider" : ${e.message}`);
            
        }
    function showSlide(index) {

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        
        try {
            switch(index) {
                case 1 : 
                    slideContainer.style.transform = "translateX(0)";               
                    break;
                case 2:
                    slideContainer.style.transform = `translateX(-${window.getComputedStyle(slides[0]).width})`;
                    break;
                case 3:
                    slideContainer.style.transform = `translateX(-${parseInt(window.getComputedStyle(slides[0]).width) * 2 + "px"})`;                
                    break;
           }
        } catch(e) {
            console.log(`Ошибка при в файле "main-slider" : ${e.message}`);
        }
       
       
    }

    showSlide(slideIndex);
    
    function plusSlide(elem) {

        if (!elem.getAttribute("data-slide")) {
            slideIndex = 1;
        } else {
            slideIndex = +elem.getAttribute("data-slide");
            changeNumberSlide(elem); 
        }
        removeActiveClass(elem);
        showSlide(slideIndex);
    }

    function removeActiveClass(elem) {
        sections.forEach(item => {
            item.querySelector("span").classList.remove("active");
        }); 
        
        elem.querySelector("span").classList.add("active");
    }

    function changeNumberSlide(elem) {
        try {
            const span = elem.parentElement.nextElementSibling.querySelector("span");
            span.textContent = "0" + elem.getAttribute("data-slide");
        } catch(e) {
            console.log(e.message + "edit number");
        }
        
        
    }   

    try {
        slideContainer.style.width = 100 * slides.length + "%";
        slideContainer.classList.add("slider-sky");
    } catch (e) {
        console.log(`Ошибка при в файле "main-slider" : ${e.message}`);
    }

    slides.forEach(slide => {
        slide.style.width = width;
    });

    sections.forEach(item => {
        item.addEventListener("click", (e) => {

            e.preventDefault();
            
            if (e.target.classList.contains(sectionsSelector.replace(/\./, "")) ||
                 e.target.parentElement.classList.contains(sectionsSelector.replace(/\./, ""))) {
                plusSlide(e.target.parentElement);

            }
        });
    });
};  

export default mainSlider;