let modal = document.querySelector('.modal-gifts');
let findgift = document.querySelectorAll('.btn_popup');
let modalСlose = document.querySelector('.modal-close');
let overlay = document.querySelector('.overlay')

findgift.forEach(function(findgift){
    findgift.addEventListener('click', function(evt){
        evt.preventDefault();
        modal.classList.add('modal-show');
        overlay.classList.add('modal-show');
    })

});
modalСlose.addEventListener('click', function(evt){
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
        if(modal.classList.contains('modal-show')){
            modal.classList.remove('modal-show');
            evt.preventDefault();

        }
        if(overlay.classList.contains('modal-show')){
            overlay.classList.remove('modal-show');
            evt.preventDefault();
        }
    }

})
