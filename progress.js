document.getElementById('uploadForm').addEventListener('submit', uploadPhoto);

const photos = [];

function uploadPhoto(event) {
    event.preventDefault();

    const photoInput = document.getElementById('photo');
    const file = photoInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoDataUrl = e.target.result;
            photos.push(photoDataUrl);
            updatePhotoGallery();
        };
        reader.readAsDataURL(file);
    }
}

function updatePhotoGallery() {
    const photoGallery = document.getElementById('photos');
    photoGallery.innerHTML = photos.map((photo, index) =>
        `<div class="photo"><img src="${photo}" alt="Progress Photo ${index + 1}"></div>`
    ).join('');
}
