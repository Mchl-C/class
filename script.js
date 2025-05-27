// <---------- Home page ---------------->
// Horizontal scroll - highlight 
const scrollContainer = document.querySelector('.container');

scrollContainer.addEventListener('wheel', function (e) {
	e.preventDefault(); // prevent vertical scroll
	scrollContainer.scrollLeft += e.deltaY * 3; // scroll horizontally instead
});

// Highlight - show full version of image when clicked
const container = document.getElementById("highlight-container");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

for (let i = 1; i <= 10; i++) {
const img = document.createElement("img");
img.src = `photos/img_${i}.jpg`;
img.addEventListener("click", () => {
  modal.style.display = "block";
  modalImg.src = img.src;
});
container.appendChild(img);
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

// audio - Home
const audio = document.getElementById("bg-audio");
const button = document.querySelector(".audio-button");

function toggleAudio() {
	if (audio.paused) {
		audio.play();
		button.textContent = "🔊";
	} else {
		audio.pause();
		button.textContent = "🔇";
	}
}


