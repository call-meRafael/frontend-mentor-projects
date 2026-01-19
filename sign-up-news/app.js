const form = document.querySelector('.--form-content');
const cardContainer = document.querySelector('.card-container');
const emailInput = document.querySelector('.email-input');
const errorMsg = document.querySelector('.alert-msg');



function emailAproved(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email) {
        errorMsg.classList.remove('hidden');
    }


    if (!emailAproved(email)) {
        errorMsg.classList.remove('hidden');
        emailInput.classList.add('error-state');
        emailInput.style.borderColor = 'var(--prim-red)';
    }

})