
const ASIDE = document.querySelectorAll('.gnb li');
const SECTION = document.querySelectorAll('.section');

new fullpage('#main', {
    anchors: ['HOME', 'PROJECT', 'TRAINING', 'PROFILE'],
    css3: false,
    scrollOverflow: false,

    controlArrows: false,
    loopHorizontal: false,

    afterLoad: function (origin, destination, direction, trigger) {
        console.log(destination.index, ASIDE[destination.index]);
        ASIDE.forEach(it => it.classList.remove('on'));
        ASIDE[destination.index].classList.add('on');
        SECTION.forEach(it => it.classList.remove('on'));
        SECTION[destination.index].classList.add('on');
    },
});
const SLIDE = document.querySelector('#slide_move');

SLIDE.addEventListener('wheel', (e) => {

    console.log(e, e.deltaY); // e.deltaY 100, -100

    if (e.deltaY > 0) {
        fullpage_api.moveSlideRight();
    } else {
        fullpage_api.moveSlideLeft();
    }

});