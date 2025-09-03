

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

  // Pak alle divs die beginnen met "clipped-div"
  document.querySelectorAll("[class^='clipped-div']").forEach(div => {
    div.addEventListener("click", () => {
      const className = div.classList[0]; // bv. "clipped-div-steering"
      const templateId = className + "-template"; // → "clipped-div-steering-template"
      const template = document.getElementById(templateId);

      if (template) {
        // Reset content en voeg nieuwe in
        popupContent.innerHTML = '<span id="popup-close">&times;</span>';
        popupContent.appendChild(template.content.cloneNode(true));
        popup.classList.remove("hidden");

        // Close button (in content) opnieuw binden
        popupContent.querySelector("#popup-close").addEventListener("click", () => {
          popup.classList.add("hidden");
        });
      }
    });
  });

  // Sluiten via originele close button (fallback)
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
});