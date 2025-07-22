// --- popup logic ---
document.querySelectorAll('.clipped-div-framebag, .clipped-div-steering, .clipped-div-fork, .clipped-div-front-wheel, .clipped-div-back-wheel, .clipped-div-chain, .clipped-div-seat, .clipped-div-frame, .clipped-div-paddle').forEach(div => {
    div.addEventListener('click', function () {
        const popup = document.getElementById('popup');
        const popupText = document.getElementById('popup-text');

        popupText.textContent = this.dataset.info;
        popup.style.display = 'block';
    });
});

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// --- navbar scroll logic ---
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 60) {
        header.classList.add('hidden'); // Hide navbar on scroll down
    } else {
        header.classList.remove('hidden'); // Show navbar on scroll up
    }

    lastScroll = currentScroll;
});
