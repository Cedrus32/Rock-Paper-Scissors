function addHover(e) {
    // console.log(e); // MOUSEOVER LOGS
    btn.classList.add('add-hover');
    // console.log(btn.classList); // MOUSEOVER ADDS .add-hover
}

function removeHover(e) {
    // console.log(e); // MOUSELEAVE LOGS
    btn.classList.remove('add-hover');
    // console.log(btn.classList); // MOUSELEAVE REMOVES .add-hover
}

function addClick(e) {
    // prevent link from immediately redirecting
    e.preventDefault();
    console.log(e);
    // move through button animation
    btn.classList.remove('add-hover');
    btn.classList.add('add-click');
    // redirect link upon transition finish
    btn.addEventListener('transitionend', () => {
        window.location.href = "./rps_game.html";
    });
}



const btn = document.querySelector('button');
const playLink = document.querySelector('a');
// console.log(btn); // BTN LOGS
// console.log(btn.classList) // START classList IS ACCURATE
btn.addEventListener('mouseover', addHover);
btn.addEventListener('mouseleave', removeHover);
playLink.addEventListener('click', addClick);

// btn.addEventListener('click', addClick);