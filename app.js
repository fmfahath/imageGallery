const scrollContEl = document.querySelector('.gallery');
const backBtnEl = document.getElementById('backBtn');
const nextBtnEl = document.getElementById('nextBtn');

//scroll horizontally
scrollContEl.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContEl.scrollLeft += e.deltaY;
    scrollContEl.style.scrollBehavior = 'auto';
});

//back button
backBtnEl.addEventListener('click', () => {
    // console.log('back btn clicked');
    scrollContEl.style.scrollBehavior = 'smooth';
    scrollContEl.scrollLeft -= 900;
});

//next button
nextBtnEl.addEventListener('click', () => {
    // console.log('nxt btn clicked');
    scrollContEl.style.scrollBehavior = 'smooth';
    scrollContEl.scrollLeft += 900;
});