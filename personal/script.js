const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const extra = document.querySelector('.extra');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', ()=>{
    question.innerHTML = "<span style='font-size:60px'>I love you too!</span>"
    extra.innerHTML = "<span style='font-weight:bold'>I told you, you cant say no :)</span>"
    gif.src="love.gif"
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

