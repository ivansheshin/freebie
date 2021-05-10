let modal = document.querySelector('.modal-gifts');
let findgift = document.querySelectorAll('.btn_popup');
let modalСlose = document.querySelector('.modal-close');
let overlay = document.querySelector('.overlay')

findgift.forEach(function(findgift){
    findgift.addEventListener('click', function(evt){
        evt.preventDefault();
        modal.classList.add('modal-animation-opening');
        modal.classList.add('modal_display-block');
        overlay.classList.add('modal-animation-opening');
        overlay.classList.add('modal_display-block');

    })

});
modalСlose.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.classList.remove('modal-animation-opening');
    modal.classList.add('modal-animation-closing');
    setTimeout(() => {modal.classList.remove('modal-animation-closing')
        
    }, 100);
    setTimeout(() => {modal.classList.remove('modal_display-block')
        
    }, 100);
    overlay.classList.remove('modal_display-block');
})
overlay.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.classList.remove('modal-animation-opening');
    modal.classList.add('modal-animation-closing');
    setTimeout(() => {modal.classList.remove('modal-animation-closing')
        
    }, 100);
    setTimeout(() => {modal.classList.remove('modal_display-block')
        
    }, 100);
    overlay.classList.remove('modal_display-block');
})

window.addEventListener('keydown', function(evt){
    if(evt.keyCode === 27) {
        if(modal.classList.contains('modal_display-block')){
            evt.preventDefault();
            modal.classList.remove('modal-animation-opening');
            modal.classList.add('modal-animation-closing');
            setTimeout(() => {modal.classList.remove('modal-animation-closing')
                
            }, 100);
            setTimeout(() => {modal.classList.remove('modal_display-block')
                
            }, 100);
            overlay.classList.remove('modal_display-block');

        }
    }

})


