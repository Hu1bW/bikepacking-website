const popupContent = {
    "clipped-div-steering": `
        <h2>Steering wheel and accessories</h2>
        <img src="../assets/images/steering.jpg" alt="Steering" style="max-width:100%;">
        <p>This is the steering. <a href="https://example.com/steering" target="_blank">See product</a></p>
    `,
    "clipped-div-framebag": `
        <h2>Frame Bag</h2>
        <img src="../assets/images/framebag.jpg" alt="Frame Bag" style="max-width:100%;">
        <p>Perfect for carrying essentials. <a href="https://example.com/framebag" target="_blank">Buy here</a></p>
    `,
        "clipped-div-fork": `
        <h2>Front wheel fork and accessories</h2>
        <img src="../assets/images/framebag.jpg" alt="Frame Bag" style="max-width:100%;">
        <p>Perfect for carrying essentials. <a href="https://example.com/framebag" target="_blank">Buy here</a></p>
    `,
        "clipped-div-frame": `
        <h2>Bike frame and accessories</h2>
        <img src="../assets/images/framebag.jpg" alt="Frame Bag" style="max-width:100%;">
        <p>Perfect for carrying essentials. <a href="https://example.com/framebag" target="_blank">Buy here</a></p>
    `,
        "clipped-div-seat": `
        <h2>Bike Seat and accessories</h2>
        <img src="../assets/images/framebag.jpg" alt="Frame Bag" style="max-width:100%;">
        <p>Perfect for carrying essentials. <a href="https://example.com/framebag" target="_blank">Buy here</a></p>
    `,
        "clipped-div-chain": `
        <h2>Mechanisms</h2>
        <img src="../assets/images/framebag.jpg" alt="Frame Bag" style="max-width:100%;">
        <p>Perfect for carrying essentials. <a href="https://example.com/framebag" target="_blank">Buy here</a></p>
    `,
        "clipped-div-paddle": `
        <h2>Bike paddles</h2>
        <img src="../assets/images/framebag.jpg" alt="Frame Bag" style="max-width:100%;">
        <p>Perfect for carrying essentials. <a href="https://example.com/framebag" target="_blank">Buy here</a></p>
    `,
        "clipped-div-front-wheel": `
        <h2>Front wheel</h2>
        <img src="../assets/images/framebag.jpg" alt="Frame Bag" style="max-width:100%;">
        <p>Perfect for carrying essentials. <a href="https://example.com/framebag" target="_blank">Buy here</a></p>
    `,
        "clipped-div-back-wheel": `
        <h2>Back wheel</h2>
        <img src="../assets/images/framebag.jpg" alt="Frame Bag" style="max-width:100%;">
        <p>Perfect for carrying essentials. <a href="https://example.com/framebag" target="_blank">Buy here</a></p>
    `,
    // ...add more for each clipped div
};

// --- popup logic ---
document.querySelectorAll('[class^="clipped-div-"]').forEach(div => {
    div.addEventListener('click', function() {
        const popup = document.getElementById('popup');
        const popupText = document.getElementById('popup-text');
        const key = Array.from(this.classList).find(cls => cls.startsWith('clipped-div-'));
        popupText.innerHTML = popupContent[key] || '<p>No info available.</p>';
        popup.style.display = 'block';
    });
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
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
