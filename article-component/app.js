const shareBtn = document.querySelector('.share-btn');
const modalShareLinks = document.querySelector('.share-popup');

const openModal = function () {
    modalShareLinks.classList.remove('hidden');
    shareBtn.style.backgroundColor = 'var(--light-grayish-blue)';
    shareBtn.style.color = 'var(--dark-gray-blue)';
}

const closeModal = function () {
    modalShareLinks.classList.add('hidden');
}

shareBtn.addEventListener('click', openModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalShareLinks.classList.contains('hidden')) {
        closeModal();
    }
});