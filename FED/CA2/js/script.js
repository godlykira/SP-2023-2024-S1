// Parallax scrolling image
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * '2.5' + 'px';
    text.style.opacity = 50 / value;
    leaf.style.top = value * '-1.5' + 'px';
    leaf.style.left = value * '1.5' + 'px';
    hill5.style.left = value * '1.5' + 'px';
    hill4.style.left = value * '-1.5' + 'px';
    hill1.style.top = value * '1' + 'px';
});

// Leading page heading with typing effect
const title = "Welcome To Greenfiy";
const description =
  "Let's embark on this journey together! Join me as we learn,  explore, and take action to save the earth. Together, we can make a difference and create a brighter, greener future for all.";
const titlespeed = 100;
const speed = 20;
const titleElement = document.getElementById("title");
const descElement = document.getElementById("description");
const sec2Element = document.getElementById("sec-2header");
for (let i = 0; i < title.length; i++) {
  setTimeout(() => {
    titleElement.textContent += title.charAt(i);
  }, titlespeed * i);
}
for (let i = 0; i < description.length; i++) {
  setTimeout(() => {
    descElement.textContent += description.charAt(i);
    if (i === description.length - 1) {
      setTimeout(() => {
        sec2Element.scrollIntoView({ block: "start", behavior: "smooth", inline: "nearest" });
        sec2Element.scrollTop -= 100;
      }, 1000);
    }
  }, speed * i);
}

// Landing page card animation
const cards = document.querySelectorAll(".Card");
const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            if (entry.isIntersecting) observer.unobserve(entry.target);
        })
    }, {
        threshold: 1,
    })
cards.forEach(card => {
    observer.observe(card);
})

