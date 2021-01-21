let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
    collapse.classList.toggle("hidden");
    collapse.classList.toggle("flex");
};

/*** Gallery LightBox **/

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach((galleryImage) => {
    galleryImage.addEventListener('click', (e) => {
        const imgSrc = e.target.src;
        const imgAlt = e.target.alt;
        modal.style.display = 'block';
        modal.style.visibility = "visible";
        modal.style.opacity = 1;
        modalImg.src = imgSrc;
        captionText.innerHTML = imgAlt;
    })
});

modal.onclick = () => {
    modal.style.display = "none";
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
    captionText.innerHTML = '';
    modalImg.src = '';
}

/* Contact Button */

let contactBtn = document.querySelector("#contact-btn");

if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        window.open('mailto:nirvanamasaza@gmail.com');
    });
}