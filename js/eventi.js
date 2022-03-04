/* slideIndex traces the position of the card's content (slide) used in the mobile section*/
var slideIndex = 1;

$(document).ready(function (){

    $('.mycard').hide();
    $('.card-desktop').hide();

    if($(window).width() < 1200){
        $('#card1').show();
        showSlides(slideIndex);
    }
    else {
        $('#card-desktop-1').show();
    }

    $(window).resize(function() {
        if ($(this).width() < 1200) {
            $(".mycard.card-active").show();
            showSlides(slideIndex);
            $('.card-desktop').hide();
        } else {
            $('.mycard').hide();
            $(".card-desktop.card-active").show();
        }
    });
});

$('.btn-nextEvent').click(function () {
    var idcard_mobile = Number($(this).attr('data-carousel'));

    $('.mycard').hide();
    $('.card-desktop').hide();

    $('.btn-nextEvent').removeClass('btn-nextEvent-active');
    $(this).addClass("btn-nextEvent-active");

    $('.mycard').removeClass('card-active');
    $('.card-desktop').removeClass('card-active');

    $('#card' + $(this).attr('data-target')).addClass('card-active');
    $('#card-desktop-' + $(this).attr('data-target')).addClass('card-active');

    if($(window).width() < 1200){
        $('#card' + $(this).attr('data-target')).show();
        slideIndex = idcard_mobile;
        showSlides(slideIndex);
    }
    else{
        $('#card-desktop-' + $(this).attr('data-target')).show();
        slideIndex = idcard_mobile;
    }
});


/* ------------------- Function for card mobile --------------------*/

function plusSlides(n) {
    var sup = slideIndex;

    if (sup === 1){
        showSlides(slideIndex += n);
    }
    if(sup === 2) {
        if (n === -1) {
            showSlides(slideIndex += n);
        }
    }
    if (sup === 3) {
        if (n === 1) {
            showSlides(slideIndex += n);
        }
    }
    if (sup === 4) {
        if (n === -1) {
            showSlides(slideIndex += n);
        }
    }
    if (sup === 5) {
        if (n === 1) {
            showSlides(slideIndex += n);
        }
    }
    if (sup === 6) {
        if (n === -1) {
            showSlides(slideIndex += n);
        }
    }
    if (sup === 7) {
        if (n === 1) {
            showSlides(slideIndex += n);
        }
    }
    if (sup === 8) {
        if (n === -1) {
            showSlides(slideIndex += n);
        }
    }
    if (sup === 9) {
        if (n === 1) {
            showSlides(slideIndex += n);
        }
    }
    if (sup === 10) {
        if (n === -1) {
            showSlides(slideIndex += n);
        }
    }
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");


    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = slides.length;
    }
    if (n < 1) {
        slideIndex = 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

/* ------------------ Script for unmissable events section -----------*/

$(".option").hover(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
});


const cards = document.querySelectorAll('.card-unmissable-event');

const toggleExpansion = (element, to, duration = 350) => {
    return new Promise((res) => {
        element.animate([
            {
                top: to.top,
                left: to.left,
                width: to.width,
                height: to.height
            }
        ], {duration, fill: 'forwards', ease: 'ease-in'})
        setTimeout(res, duration);
    })
}

const fadeContent = (element, opacity, duration = 300) => {
    return new Promise(res => {
        [...element.children].forEach((child) => {
            requestAnimationFrame(() => {
                child.style.transition = `opacity ${duration}ms linear`;
                child.style.opacity = opacity;
            });
        })
        setTimeout(res, duration);
    })
}

const getCardContent = (title, subtitle, type, p1, p2, p3, date, price, place) => {
    return `
				<div class="card-content">

                    <div class="card-open" style="background-image: url('./img/${type}'); cursor: default;">
					    <div class="shadow-card-open"></div>
                    </div>

					<div class="container text-card-open" style="cursor: default;">
					    <hgroup class="mt-n5">
					        <h2>${title}</h2>
						    <h4>${subtitle}</h4>
                        </hgroup>
                        <br><br><br>
                        <h3>Descrizione:</h3>
                        <br>
                        <p>${p1}</p>
                        <p>${p2}</p>
                        <p>${p3}</p>
                        <br>
                        <br>

                        <div class="info-card-open" style="cursor: default;">
                            <div class="date p-1">
                                <h4 class="subtitle" style="color: #0092ff">Data:</h4>
                                <p>${date}</p>
                            </div>
                            <div class="price p-1">
                                <h4 class="subtitle" style="color: #0092ff">Prezzo:</h4>
                                <p>${price}</p>
                            </div>
                            <div class="place p-1">
                                <h4 class="subtitle" style="color: #0092ff">Luogo:</h4>
                                <p>${place}</p>
                            </div>
                        </div>
                        <div class="container-fluid mb-5 mt-5" style="cursor: default;">
                            <div class="row">
                                <div class="col-12 pr-0 pl-0">
                                    <div class="mapouter">
                                        <div class="gmap_canvas">
                                            <iframe height="500" width="100%" style=" border-radius: 15px; width=100%; height=500px;" id="gmap_canvas" src="https://maps.google.com/maps?q=Venezia&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                            <a href="https://fmovies-online.net"></a>
                                            <br>
                                            <style>
                                                .mapouter {
                                                    position:relative;
                                                    text-align:right;
                                                    height:500px;
                                                    width:100%;
                                                 }
                                            </style>
                                            <a href="https://www.embedgooglemap.net">how to embed a google map in wordpress</a>
                                            <style>
                                                .gmap_canvas {
                                                    overflow: hidden;
                                                    background: none!important;
                                                    height: 500px;
                                                    width: 100%;
                                                    }
                                            </style>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			`;
}

const onCardClick = async (e) => {
    const card = e.currentTarget;
    // clone the card
    const cardClone = card.cloneNode(true);
    // get the location of the card in the view
    const {top, left, width, height} = card.getBoundingClientRect();
    // position the clone on top of the original
    cardClone.style.position = 'fixed';
    cardClone.style.top = top + 'px';
    cardClone.style.left = left + 'px';
    cardClone.style.width = width + 'px';
    cardClone.style.height = height + 'px';
    // hide the original card with opacity
    card.style.opacity = '0';
    // add card to the same container
    card.parentNode.appendChild(cardClone);
    // create a close button to handle the undo
    const closeButton = document.createElement('button');
    closeButton.innerHTML= "X";
    // position the close button top corner
    closeButton.style = `
                color: #f5f5f5;
				position: fixed;
				z-index: 10000;
				top: 35px;
				right: 35px;
				width: 35px;
				height: 35px;
				border-radius: 50%;
				background-color: rgba(0,0,0,0.1);
				border: 2px solid #f5f5f5;
			`;
    // attach click event to the close button
    closeButton.addEventListener('click', async () => {
        // remove the button on close
        closeButton.remove();
        // remove the display style so the original content is displayed right
        cardClone.style.removeProperty('display');
        cardClone.style.removeProperty('padding');
        // show original card content
        [...cardClone.children].forEach(child => child.style.removeProperty('display'));
        fadeContent(cardClone, '0');
        // shrink the card back to the original position and size
        await toggleExpansion(cardClone, {top: `${top}px`, left: `${left}px`, width: `${width}px`, height: `${height}px`}, 300)
        // show the original card again
        card.style.removeProperty('opacity');
        // remove the clone card
        cardClone.remove();
    });
    // fade the content away
    fadeContent(cardClone, '0')
        .then(() => {
            [...cardClone.children].forEach(child => child.style.display = 'none');
        });
    // expand the clone card
    await toggleExpansion(cardClone, {top: 0, left: 0, width: '100vw', height: '100vh'});
    const content = getCardContent(card.dataset.title, card.dataset.subtitle, card.dataset.img, card.dataset.p1, card.dataset.p2, card.dataset.p3, card.dataset.date, card.dataset.price, card.dataset.place);
    // set the display block so the content will follow the normal flow in case the original card is not display block
    cardClone.style.display = 'block';
    cardClone.style.padding = '0';
    cardClone.style.margin = '0';
    cardClone.style.borderRadius = '0';
    cardClone.style.backgroundColor = '#0c0c0c';
    cardClone.style.backgroundImage = 'none';
    cardClone.style.zIndex = '10';
    cardClone.style.overflow = 'auto';

    // append the close button after the expansion is done
    cardClone.appendChild(closeButton);
    cardClone.insertAdjacentHTML('afterbegin', content);
};

cards.forEach(card => card.addEventListener('click', onCardClick));
