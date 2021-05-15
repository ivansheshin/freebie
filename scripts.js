 // анимация открытия модалки при клике на кнопку
 const findgift = document.querySelectorAll('.btn_popup');
 const modal = document.querySelector('.modal-gifts');
 const overlay = document.querySelector('.overlay');

 findgift.forEach(function (findgift) {
     findgift.addEventListener('click', function (evt) {
         evt.preventDefault();
         modal.classList.add('modal-animation-opening', 'modal_display-block');
         overlay.classList.add('modal-animation-opening', 'modal_display-block');

     })

 });

 // анимация закрытия модалки
 const modalСlose = document.querySelector('.modal-close');

 function animationModal(closingElement, mainModal, mainOverlay) {
     closingElement.addEventListener('click', function (evt) {
         mainModal.classList.remove('modal-animation-opening');
         mainModal.classList.add('modal-animation-closing');
         setTimeout(() => {
             mainModal.classList.remove('modal-animation-closing', 'modal_display-block')

         }, 100);
         mainOverlay.classList.remove('modal_display-block');
     })
 };

 animationModal(modalСlose, modal, overlay);
 animationModal(overlay, modal, overlay);



 window.addEventListener('keydown', function (evt) {
     if (modal.classList.contains('modal_display-block') && evt.key === "Escape") {
         evt.preventDefault();
         modal.classList.remove('modal-animation-opening');
         modal.classList.add('modal-animation-closing');
         setTimeout(() => {
             modal.classList.remove('modal-animation-closing', 'modal_display-block')

         }, 100);
         overlay.classList.remove('modal_display-block');

     }


 })
 // let promtmodal = prompt('Write your name', 'Your name');
 // alert(`Welcome, ${promtmodal}! How are you?`);