

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

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const popupContent = popup.querySelector(".popup-content");
  const closeBtn = document.getElementById("popup-close");

  // Alle clipped-divs selecteren
  document.querySelectorAll("[class^='clipped-div-']").forEach(div => {
    div.addEventListener("click", () => {
      const templateId = `${div.classList[0]}-template`;
      const template = document.getElementById(templateId);
      if (template) {
        popupContent.innerHTML = "";
        popupContent.appendChild(template.content.cloneNode(true));
        popup.classList.remove("hidden");
      }
    });
  });

  // Close button
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
});
