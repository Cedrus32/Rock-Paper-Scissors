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

const btn = document.querySelector('button');
// console.log(btn); // BTN LOGS
// console.log(btn.classList) // START classList IS ACCURATE
btn.addEventListener('mouseover', addHover);
btn.addEventListener('mouseleave', removeHover);