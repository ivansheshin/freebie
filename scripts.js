function initListeners() {
    const findgift = document.querySelectorAll('.btn_popup');
    const modal = document.querySelector('.modal-gifts');
    const overlay = document.querySelector('.overlay');

    findgift.forEach(function (findgift) {
        findgift.addEventListener('click', function () {
            openModal(modal, overlay)
        })

    });
    const modalСloseBtn = document.querySelector('.modal-close');

    modalСloseBtn.addEventListener('click', function () {
        closeModal(modal, overlay)
    })
    window.addEventListener('keydown', function (evt) {
        if (modal.classList.contains('modal_display-block') && evt.key === "Escape") {
            evt.preventDefault();
            closeModal(modal, overlay)

        }

    })
}

function openModal(mainModal, mainOverlay) {
    mainModal.classList.add('modal-animation-opening', 'modal_display-block');
    mainOverlay.classList.add('modal-animation-opening', 'modal_display-block');
}

function closeModal(mainModal, mainOverlay) {
    mainModal.classList.remove('modal-animation-opening');
    mainModal.classList.add('modal-animation-closing');
    setTimeout(() => {
        mainModal.classList.remove('modal-animation-closing', 'modal_display-block')

    }, 100);
    mainOverlay.classList.remove('modal_display-block');
};

initListeners()