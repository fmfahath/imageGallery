const scrollContEl = document.querySelector('.gallery');
const backBtnEl = document.getElementById('backBtn');
const nextBtnEl = document.getElementById('nextBtn');

//scroll horizontally
scrollContEl.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContEl.scrollLeft += e.deltaY;
});

