// Функция для создания сердечка
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = ['❤️', '💖', '💗', '💓', '💕', '💞', '🌸', '🌹'][Math.floor(Math.random() * 8)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 30 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.getElementById('heartsContainer').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Дождь из сердец при клике на кнопку
document.getElementById('rainBtn').addEventListener('click', () => {
    for(let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 80);
    }
});

// Анимация большого сердца при клике
document.getElementById('heartBtn').addEventListener('click', () => {
    for(let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 50);
    }
});
