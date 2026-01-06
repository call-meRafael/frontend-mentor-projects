const shareBtn = document.querySelector('.share-btn');
const modalShareLinks = document.querySelector('.share-popup');

const clickedOutside = function (e) {
    if (!modalShareLinks.contains(e.target)) {
        closeModal();
    }
};

const toggleModal = function () {
    const hiddenModal = modalShareLinks.classList.contains('hidden');
    modalShareLinks.classList.toggle('hidden');
    
    if (hiddenModal) {
        shareBtn.style.backgroundColor = 'var(--light-grayish-blue)';
        shareBtn.style.color = 'var(--dark-gray-blue)';

        setTimeout(function () {
            document.addEventListener('click', clickedOutside);
        }, 0);

    } else {
        shareBtn.style.backgroundColor = '';
        shareBtn.style.color = '';
        document.removeEventListener('click', clickedOutside);
    }
}

const closeModal = function () {
    modalShareLinks.classList.add('hidden');
    shareBtn.style.backgroundColor = '';
    shareBtn.style.color = '';
    document.removeEventListener('click', clickedOutside);
}

shareBtn.addEventListener('click', toggleModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modalShareLinks.classList.contains('hidden')) {
        closeModal();
    }
});



