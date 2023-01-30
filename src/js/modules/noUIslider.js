import noUiSlider from 'nouislider';
import "../libs/wNumb.js";

const uiSliderNo = function (filterSelector, rangeInputMinSelector, rangeInputMaxSelector) {
    try {
        const priceFilter = document.querySelector(filterSelector);
        const rangeInputMin = priceFilter.parentElement.previousElementSibling.querySelector(rangeInputMinSelector),
              rangeInputMax = priceFilter.parentElement.previousElementSibling.querySelector(rangeInputMaxSelector);

       const sliderUI = noUiSlider.create(priceFilter, {
            start: [0, 10000],
            connect: true,
            tooltips:(filterSelector !== ".filter-slide__range") ? false : [wNumb({decimals: 0}), wNumb({decimals: 0})], //подключили библиотеку wNumb

            range: (filterSelector !== ".filter-slide__range") ? {'min': [0],'max': [190]} :{'min': [0],'max': [10000]}
        });
        rangeInputMin.addEventListener('change', function () {
            priceFilter.noUiSlider.set(parseInt(rangeInputMin.value));
        });

        rangeInputMax.addEventListener('change', function () {
            priceFilter.noUiSlider.set([parseInt(rangeInputMin.value), parseInt(rangeInputMax.value)]);
            if (rangeInputMin.value === "") {
                priceFilter.noUiSlider.set([0, parseInt(rangeInputMax.value)]);
            }
        });
        priceFilter.noUiSlider.on('update', function (values, handle) {
            if (handle) {
                rangeInputMax.value = Math.round(values[handle]);
            } else {
                rangeInputMin.value = Math.round(values[handle]);
            }
        });
    } catch (e) {
        console.log(`Ошибка в модуле "noUIslider: ${e.message}`);
    }
};

export default uiSliderNo;