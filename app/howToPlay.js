const buttonShowModal = document.querySelector('#buttonShowModal');
const buttonCloseModal = document.querySelector('#buttonCloseModal');
const modal = document.querySelector('#modal');

buttonShowModal.onclick = () => {
    modal.showModal();
    document.body.classList.add('blur');
};

buttonCloseModal.onclick = () => {
    modal.close();
    document.body.classList.remove('blur');           
};

document.addEventListener('keydown', (event) => {
    if(event.code === 'Escape') {
        document.body.classList.remove('blur');
    };
});