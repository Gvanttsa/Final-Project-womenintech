//burger
let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navbarlinks');
let firstLine = document.getElementById('burger1');
let secondline = document.getElementById('burger2');
let thirdline = document.getElementById('burger3')


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('activeNav');
    firstLine.classList.toggle('active');
    secondline.classList.toggle('active');
    thirdline.classList.toggle('active');

})

//slider
let data = [
    {
        id: 1,
        imgUrl: 'images/slider1.jpg',
        title: 'shape your body',
        text: 'be strong traning hard',
        url: 'https://on.ge/'
    },
    {   id: 2,
        imgUrl: 'images/slider2.jpg',
        title: 'shape your soul',
        text: 'nothing is over until you stop trying',
        url: 'https://on.ge/'
    },
    {
        id: 3,
        imgUrl: 'images/slider3.jpg',
        title: 'no pain no gain',
        text: 'just believe in yourself',
        url: 'https://on.ge/'
    },
];

let arrowLeft = document.getElementById('arrow-left');
let arroeRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');
let dotlist = document.getElementsByClassName('dot');

let sliderIndex = 0;

function createDIvTag(){
    let divTag = document.createElement('div');
    divTag.classList.add('slide');

    return divTag;
}
function createImgTag(item) {
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src', item.imgUrl);
    tagImage.setAttribute('alt', item.title);
    tagImage.classList.add('img-slider');

    return tagImage;
}
function createH2Tag(item) {
    let tagTitle = document.createElement('h2');
    tagTitle.classList.add('slider-title');
    tagTitle.append(item.title);

    return tagTitle;
}
function createPTag(item) {
    let pTag = document.createElement('p');
    pTag.classList.add('slider-text');
    pTag.append(item.text);

    return pTag;
}

function createDots(item) {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach( (element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);

        dot.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }
        dots.appendChild(dot);
    })
    return dots;
}

function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createDIvTag(data[sliderIndex]);
    let imgTag = createImgTag(data[sliderIndex]);
    let titleTag = createH2Tag(data[sliderIndex]);
    let tagP = createPTag(data[sliderIndex]);
    let dots = createDots();

    slideItem.appendChild(imgTag);
    slideItem.appendChild(titleTag);
    slideItem.appendChild(tagP);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    currentDotActive();
    console.log(slideItem);
}

function currentDotActive() {
    dotlist[sliderIndex].classList.add('active');
}

function arrowLeftClick() {
    if (sliderIndex <= 0) {
        return;
    }
    sliderIndex--;
    setSlide();
}

function arrowRightClick() {
    if (sliderIndex >= data.length-1) {
        return;
    }
    sliderIndex++;
    setSlide();
}
arrowLeft.addEventListener('click',arrowLeftClick);
arroeRight.addEventListener('click',arrowRightClick);


setSlide();


//accordion
let accordion = document.getElementsByClassName('accordion-container');

for (let i=0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('activecontainer');
    })
}