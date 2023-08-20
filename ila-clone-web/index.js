const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const handleSelectNode = function (node) {
    const nodeList = $$('.node-list li');
    const slideList = $$('.box-slider-event ol > li');
    const slideListArray = Object.values(slideList);
    
    const nodeListArray = Object.values(nodeList);
    nodeListArray.forEach((e) => {
        e.classList.remove('active');
    })

    const nodeIndex = nodeListArray.indexOf(node);
    slideListArray.forEach(e => {
        e.classList.remove('active');
    })
    slideListArray[nodeIndex].classList.add('active');
}

$('.node-list').addEventListener('click', (e) => {
    handleSelectNode(e.target);
    e.target.classList.add('active');
})

$('.section-1 button').addEventListener('click', (e) => {
    if($('.content-show-more').classList.toggle('show-more')) {
        e.target.innerHTML = 'Thu gọn'
    }else {
        e.target.innerHTML = 'Xem thêm';
    }
    
})