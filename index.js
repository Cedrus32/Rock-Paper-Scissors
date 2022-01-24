// ---------------- //
// BUTTON ANIMATION //
// ---------------- //

function addHover(e) {
    btn.classList.add('add-hover');
}

function removeHover(e) {
    btn.classList.remove('add-hover');
}

function addClick(e) {
    // prevent link from immediately redirecting
    e.preventDefault();
    // move through button animation
    btn.classList.remove('add-hover');
    btn.classList.add('add-click');
    // redirect link upon transition finish
    setTimeout(() => {
        btn.classList.remove('add-click');
        window.location.href = "./game.html";
    }, 100);
}

const btn = document.querySelector('button');
const playLink = document.querySelector('a');
btn.addEventListener('mouseover', addHover);
btn.addEventListener('mouseleave', removeHover);
playLink.addEventListener('click', addClick);

// ------------------- //
// THANK YOU ANIMATION //
// ------------------- //


