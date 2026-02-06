document.body.classList.add('dark');

const toggleBtn = document.getElementById('light-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
});