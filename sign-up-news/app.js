const form = document.querySelector('.--form-content');
const cardContainer = document.querySelector('.card-container');
const emailInput = document.querySelector('.email-input');
const errorMsg = document.querySelector('.alert-msg');
const successCard = document.querySelector('.success-card');
const emailSuccess = document.querySelector('.email-success');

const submitBtn = document.getElementById('btn-submit');
const dismissBtn = document.getElementById('dismiss-btn');



function emailAproved(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    

    const email = emailInput.value.trim();
    if (!email) {
        errorMsg.classList.remove('hidden');
        return;
    }


    if (!emailAproved(email)) {
        errorMsg.classList.remove('hidden');
        emailInput.classList.add('error-state');
        emailInput.style.borderColor = 'var(--prim-red)';
        return;
    } 

    emailSuccess.textContent = email;
    successCard.classList.remove('hidden');

})

dismissBtn.addEventListener('click', function () {
    successCard.classList.add('hidden');
    form.reset();
})

emailInput.addEventListener('input', function () {
    const email = emailInput.value.trim();

    if (email && !emailAproved(email)) {
        errorMsg.classList.remove('hidden');
        emailInput.classList.add('error-state');
        emailInput.style.borderColor = 'var(--prim-red)';
        return;
    } else {
        errorMsg.classList.add('hidden');
        emailInput.classList.remove('error-state');
        emailInput.style.borderColor = 'var(--gray)';
    }
});