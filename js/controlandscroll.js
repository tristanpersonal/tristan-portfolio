const createObserver = (hiddenClass, showClass) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add(showClass);
            } else {
                entry.target.classList.remove(showClass);
            }
        });
    });

    const hiddenElements = document.querySelectorAll(`.${hiddenClass}`);
    hiddenElements.forEach((el) => observer.observe(el));
}

createObserver('educationHidden', 'educationShow');
createObserver('percentHidden', 'percentShow');
createObserver('serviceHidden', 'serviceShow');
createObserver('rightHidden', 'rightShow');
createObserver('figureHidden', 'figureShow');

