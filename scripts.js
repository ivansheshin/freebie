let modal = document.querySelector('.modal-gifts');
let findgift = document.querySelectorAll('.btn_popup');
let modalclose = document.querySelector('.modal-close');


findgift.forEach(function(findgift){
    findgift.addEventListener('click', function(evt){
        evt.preventDefault();
        modal.classList.add('modal-show');
    })

});
modalclose.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.classList.remove('modal-show');
})