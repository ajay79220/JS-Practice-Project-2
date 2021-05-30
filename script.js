'use strict';

const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closeModalSelect = document.querySelector('.close-modal');

function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i=0; i<showModal.length; i++) {
    showModal[i].addEventListener('click', openModal);
}

closeModalSelect.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e){
    if(e.key === 'Escape') {
        closeModal();
    }
})