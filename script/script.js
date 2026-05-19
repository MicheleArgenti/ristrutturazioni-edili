// 1. Slider Interattivo Prima/Dopo
const slider = document.getElementById('compare-slider');
const foregroundImg = document.querySelector('.foreground-img');

if (slider && foregroundImg) {
  slider.addEventListener('input', (e) => {
    const sliderValue = e.target.value;
    // Cambia la larghezza dell'immagine in primo piano in base allo slider
    foregroundImg.style.width = `${sliderValue}%`;
  });
}

// 2. Gestione Modulo di Contatto
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina

    // Recupero i dati inseriti (utili se devi inviarli a un server)
    const nome = document.getElementById('nome').value;

    // Simulo un invio andato a buon fine
    alert(`Grazie mille ${nome}! Abbiamo ricevuto la tua richiesta. Ti ricontatteremo via email entro 24 ore.`);

    // Svuoto il modulo
    contactForm.reset();
  });
}