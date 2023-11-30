let currentIndex = 0;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    currentIndex = (index + totalItems) % totalItems;
    const translateValue = -currentIndex * 100 + '%';
    carouselInner.style.transform = `translateX(${translateValue})`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}