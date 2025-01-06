function toggleMusica() {
    const audio = document.getElementById('birthday-song');
    const button = document.querySelector('button:last-child');
    
    if (audio.paused) {
        audio.play();
        button.textContent = '🔇 Pausar Música';
    } else {
        audio.pause();
        button.textContent = '🎵 Reproducir Música';
    }
}

function celebrar() {
    for (let i = 0; i < 50; i++) {
        createConfetti();
    }
    
    const mensajes = [
        "¡Te quiero mamá!",
        "¡Eres la mejor!",
        "¡Feliz día!",
        "¡Gracias por todo!"
    ];
    
    setTimeout(() => {
        alert(mensajes[Math.floor(Math.random() * mensajes.length)]);
    }, 100);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
}

window.onload = celebrar;