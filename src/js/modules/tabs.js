const tabs = function (headerSelector, tabsSelector, contentWrapperSelector, classActive, display = "block") {
    let header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabsSelector),
        contents = document.querySelectorAll(contentWrapperSelector);
          
    function hideTabsContent (i) {
        contents[i].style.display = "none";
        console.log(i);
        
        tabs[i].classList.remove(classActive);
        // contents.forEach(item => {
        //     item.style.display = "none";            
        // });
        
        // tabs.forEach(tab => {
        //     tab.classList.remove(classActive);
        // });
    }

    function showTabsContent (tabElem, index) {
        tabElem.classList.add(classActive);

        if (contents[index]) {
            contents[index].style.display = display;
        } else {
            try {
                let manualContent = document.createElement("div");
                manualContent.classList.add(contentWrapperSelector.replace(/\./, ""));
                manualContent.textContent = `Контент не был создан, попытайтесь позже!`;
                manualContent.style.cssText = `
                line-height: 300px;
                text-align: center;
           `;

           tabElem.closest(".header__content_tabs").append(manualContent);
           contents = document.querySelectorAll(contentWrapperSelector);

           contents[index].style.display = display;
            } catch(e) {}
        }
        
    }

    function checkInput(item) {
        item.classList.toggle("_active");

        
    }
    
    header.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target;

        if (target.classList.contains(tabsSelector.replace(/\./, ""))) {

            tabs.forEach( (tab , i) => {                  
                if (e.target == tab) {
                      
                    if (tab.classList.contains(classActive)) {
                        hideTabsContent(i);
                    } else {
                        hideTabsContent(i);
                        showTabsContent(tab, i);
                    }
                    
                }
            });
        }

        try {
            target.closest(".header__tabs-container").nextElementSibling.addEventListener("click", (e) => {
                e.preventDefault();
                
                
                if (e.target.classList.contains(contentWrapperSelector.replace(/\./, ""))) {
                    hideTabsContent();
                }
            });
        } catch(e) {}

 
        if (target.closest(".floor-item__input")) {
            checkInput(target);
        } 
    });
};

export default tabs;