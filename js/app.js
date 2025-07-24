const popupContent = {
    "clipped-div-steering": `
      
  <h2>Het stuur</h2>
  <h4>En de mogelijke bagage opties</h4>

  <div style="margin-top: 30px;">
    <div style="display: flex; gap: 20px; align-items: flex-start;">
      <div style="width: 200px; height: 200px; background-color: #ddd; display: flex; justify-content: center; align-items: center;"></div>
      <div style="flex: 1;">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Curabitur vel turpis nec libero gravida interdum.</p>
        <p>Nam tincidunt libero sed justo aliquet, at tincidunt lorem.</p>
      </div>
    </div>
  </div>

  <div style="margin-top: 30px;">
    <h3>Wat heb ik aan mijn stuur</h3>
    <div style="display: flex; gap: 20px; margin-top: 15px;">
      <div style="width: 150px; height: 150px; background-color: #ddd; display: flex; justify-content: center; align-items: center;"></div>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="width: 70px; height: 70px; background-color: #ddd;"></div>
        <div style="width: 70px; height: 70px; background-color: #ddd;"></div>
      </div>
      <ul style="list-style: disc; padding-left: 20px; margin: 0; flex-shrink: 0;">
        <li>Item één</li>
        <li>Item twee</li>
        <li>Item drie</li>
      </ul>
    </div>
  </div>

  <div style="margin-top: 30px;">
    <h3>Mijn tassen</h3>
    <div>
      <p>Dit is een beschrijving van de tassen die ik meeneem.</p>
      <p>Ze variëren per reis en weersomstandigheden.</p>
    </div>
    <div style="display: flex; gap: 20px; margin-top: 15px;">
      <div style="width: 150px; height: 150px; background-color: #ddd; display: flex; justify-content: center; align-items: center;"></div>
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="width: 70px; height: 70px; background-color: #ddd;"></div>
        <div style="width: 70px; height: 70px; background-color: #ddd;"></div>
      </div>
      <ul style="list-style: disc; padding-left: 20px; margin: 0; flex-shrink: 0;">
        <li>Tas 1</li>
        <li>Tas 2</li>
        <li>Tas 3</li>
      </ul>
    </div>
  </div>    `,
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
