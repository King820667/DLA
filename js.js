// Выбери все изображения внутри контейнера и для каждого из них задай функцию при клике
document.querySelectorAll('.img-container img').forEach(img => {
    // При клике на изображение отобрази всплывающее окно и установи src изображения внутри всплывающего окна
    img.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.pop-up img').src = img.getAttribute('src');
    }
});
// При клике на крестик внутри всплывающего окна скрой всплывающее окно
document.querySelector('.pop-up span').onclick = () => {
    document.querySelector('.pop-up').style.display = 'none';
}