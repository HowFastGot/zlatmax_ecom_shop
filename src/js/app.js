import tabs from "./modules/tabs.js";
import mainSlider from "./modules/main-slider.js";
import uiSliderNo from "./modules/noUIslider.js";

window.addEventListener("DOMContentLoaded", () => {
    tabs(".tabs-triggers", ".tabs-triggers__trigger", ".tabs-content", "active");
    tabs(".tab-price", ".tab-price__tab-button", ".tab-price__body", "_active");
    tabs(".floor-item", ".floor-item__title", ".floor-item__body", "_active");

    mainSlider(".main-slider", ".main-slider__item", ".slider-controllers__line");
    mainSlider(".slider-fox", ".slider-fox__slide", ".slider-fox__line");
    mainSlider(".slider-new-knives", ".slider-new-knives__slide", ".slider-new-knives__line");
    mainSlider(".slider-hight-sale", ".slider-hight-sale__slide", ".hight-sale__line");
    mainSlider(".slider-new-knives-second", ".slider-new-knives-second__slide", ".slider-new-knives-second__line");
    mainSlider(".slider-hight-sale-third", ".slider-hight-sale-third__slide", ".slider-hight-sale-third__line");
    mainSlider(".slider-hight-sale-fouth", ".slider-hight-sale-fouth__slide", ".slider-hight-sale-fouth__line");
    
    uiSliderNo(".filter-slide__range", ".tab-price__col-price_1", ".tab-price__col-price_2");
    uiSliderNo(".slider-range__slider-sizing_total-length", ".floor-item__size-range_1", ".floor-item__size-range_2");
    uiSliderNo(".slider-range__slider-sizing_length", ".floor-item__size-range_1", ".floor-item__size-range_2");
    uiSliderNo(".slider-range__slider-sizing_width", ".floor-item__size-range_1", ".floor-item__size-range_2");
    
});