let modal = document.querySelector('.modal-gifts');
let findgift = document.querySelectorAll('.btn_popup');
let modalclose = document.querySelector('.modal-close');
let overlay = document.querySelector('.overlay')

findgift.forEach(function(findgift){
    findgift.addEventListener('click', function(evt){
        evt.preventDefault();
        modal.classList.add('modal-show');
        overlay.classList.add('modal-show');
    })

});
modalclose.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.classList.remove('modal-show');
    overlay.classList.remove('modal-show');
})
overlay.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.classList.remove('modal-show');
    overlay.classList.remove('modal-show');
})
window.addEventListener('keydown', function(evt){
    if(evt.keyCode === 27) {
        evt.preventDefault();
        if(modal.classList.contains('modal-show')){
            modal.classList.remove('modal-show');

        }
        if(overlay.classList.contains('modal-show')){
            overlay.classList.remove('modal-show')
        }
    }

})
