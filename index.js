const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];
const galleryImages = document.querySelectorAll('.image-card img');
let currentIndex = 0;

function openModal(index) {
    modal.style.display = 'block';
    setTimeout(() => {
        modal.style.opacity = 1;
        modalImg.style.opacity = 1;
        modalImg.style.transform = 'scale(1)';
    }, 50);
    currentIndex = index;
    updateModalImage();
}

function closeModal() {
    modalImg.style.opacity = 0;
    modalImg.style.transform = 'scale(0.8)';
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function updateModalImage() {
    const img = galleryImages[currentIndex];
    modalImg.src = img.src;
    captionText.innerHTML = img.parentElement.querySelector('.caption').innerHTML;
}

function changeImage(n) {
    currentIndex += n;
    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }
    modalImg.style.opacity = 0;
    modalImg.style.transform = 'scale(0.8)';
    setTimeout(() => {
        updateModalImage();
        modalImg.style.opacity = 1;
        modalImg.style.transform = 'scale(1)';
    }, 300);
}

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block') {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});