
    const linkToggle = document.querySelector('.link-toggle');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click',() => {
        if(linkToggle.classList.contains('h-0')){
            linkToggle.classList.remove('h-0');
            linkToggle.classList.add('h-24');
        }
        else {
            linkToggle.classList.remove('h-24')
            linkToggle.classList.add('h-0');
        };
        
    });
    console.log(linkToggle.classList);