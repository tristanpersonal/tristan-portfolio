function showAbout(optionNum){
    const optionTab = document.getElementsByClassName('optionTab');
    const aboutInfo = document.getElementsByClassName('aboutInfo'); 
    const aboutPicture = document.getElementsByClassName('aboutPicture');

    for(let i=0; i<aboutInfo.length; i++){
        if(i === optionNum){
            aboutInfo[i].style.display = 'block';
            aboutPicture[i].style.display = 'block';
            optionTab[i].style.color = 'white';
            optionTab[i].style.fontWeight = '600';
        }else{
            aboutInfo[i].style.display = 'none';
            aboutPicture[i].style.display = 'none';
            optionTab[i].style.color = 'gray';
            optionTab[i].style.fontWeight = 'normal';
        }
    }
}

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

