// burger menu

let btnSpan = document.querySelector('.span')
let menu = document.querySelector('.menu_1')

btnSpan.addEventListener('click', function(){
    menu.classList.add('active')
})

// burger menu spans

let btnSpan2 = document.querySelector('.span2')

function sp(sp1, sp2) {
    sp1.classList.toggle("span_none")
    sp2.classList.toggle("span_none")
}
btnSpan.onclick = () => {
    sp(btnSpan2, btnSpan)
}
btnSpan2.onclick = () => {
    sp(btnSpan, btnSpan2)
    menu.classList.remove('active')
}

// Scroll top

const goTopBtn = document.querySelector(".scrollTop")

goTopBtn.addEventListener("click", goTop);


function goTop() {
    if (window.pageXOffset > 0) {
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
    }
};

const scrollBtn = document.querySelector(".isShowBtn");

window.onscroll = () => {
    if (window.scrollBy > 700) {
        scrollBtn.classList.remove('isShowBtn_hide');
    } else if (window.scrollBy < 700) {
        scrollBtn.classList.add('isShowBtn_hide');
    }
};