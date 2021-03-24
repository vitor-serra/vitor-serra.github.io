//
//   Variables


window.onload = (event) => {


document.body.addEventListener('touchmove', function(event) {
    event.preventDefault();
});

// Play with this value to change the speed
let tickerSpeed = 2;

let flickity = null;
let isPaused = false;
const slideshowEl = document.querySelector('.js-slideshow');


//
//   Functions
//
//////////////////////////////////////////////////////////////////////

const update = () => {
    if (isPaused) return;
    if (flickity.slides) {
        flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
        flickity.selectedIndex = flickity.dragEndRestingSelect();
        flickity.updateSelectedSlide();
        flickity.settle(flickity.x);
    }


    // TRIGGER TITLE AND IMAGE CHANGES 
    var legenda = document.getElementById('legenda');
    var thumbnail = document.getElementById('thumbnail');

    let slidesInfo = [
        ['2002<br><i>Wind (Vento)</i><br> Nuno Sousa Vieira + Rita Gaspar Vieira<br><br>', './img/thumbnails/01.jpg'],
        ['2003<br><i>I joined the navy too see the world<br>& got to see the sea</i><br>Julião Sarmento + Lawrence Weiner<br>', './img/thumbnails/02.jpg'],
        ['2004<br><i>Water on Mars</i><br>Ana Fonseca + Susana Anágua<br><br>', './img/thumbnails/03.jpg'],
        ['2005<br><i>"Mountains meets forest"</i><br>Jorge Santos + Theodore Ereira-Guyer<br><br>', './img/thumbnails/04.jpg'],
        ['2006<br><i>"(RE)VOLVER"</i><br>Ângela Ferreira + Fernanda Fragateiro<br><br>', './img/thumbnails/05.jpg'],
        ['2007<br><i>Too Much History Will Kill You</i><br>Mariana Gomes + Pedro Valdez Cardoso<br><br>', './img/thumbnails/06.jpg'],
        ['2008<br><i>AVVA</i><br>Ana Vidigal + Vasco Araújo<br><br>', './img/thumbnails/07.jpg'],
        ['2009<br><i>Kiekelela</i><br>Francisco Vidal + Mestre Kapela<br><br>', './img/thumbnails/08.jpg'],
        ['2010<br><i>If you like it then you should put a ring on it</i><br>João Pedro Vale & Nuno Alexandre Ferreira + Tiago Alexandre', './img/thumbnails/09.jpg'],
        ['2011<br><i>Ombra mai fu</i><br>Jorge Molder + Pedro Calapez<br><br>', './img/thumbnails/10.jpg'],
        ['2012<br><i>Facial Mask, camouflage</i><br>Pedro Guimarães + Sara Bichão<br><br>', './img/thumbnails/11.jpg'],
        ['2013<br><i>Rasgo.22</i><br>André Cepeda + João Louro<br><br>', './img/thumbnails/12.jpg'],
        ['2014<br><i>Duas Tesouras</i><br>João Jacinto + Paulo Brighenti<br><br>', './img/thumbnails/13.jpg'],
        ['2015<br><i>INTERVAL</i><br>Cristina Ataíde + Tomaz Hipólito<br><br>', './img/thumbnails/14.jpg'],
        ['2016<br><i>Batalha cega</i><br>Fernão Cruz + Horácio Frutuoso<br><br>', './img/thumbnails/15.jpg'],
        ['2017<br><i>2017</i><br>Mané Pacheco + Susana Mendes Silva<br><br>', './img/thumbnails/16.jpg'],
        ['2018<br><i>O Existencialista (The Existencialist)</i><br>Sara & André + Sara Mealha<br><br>', './img/thumbnails/17.jpg'],
        ['2019<br><i>#</i><br>Maria Trabulo + Paulo Mendes<br><br>', './img/thumbnails/18.jpg'],
    ];

    let slides = document.getElementsByClassName("slide");
    let artistInfo = document.getElementById("artist_info").getBoundingClientRect();


    for (let i = 0; i < slides.length - 1; i++) {
        if (slides[i].getBoundingClientRect().right > artistInfo.left &&
            slides[i].getBoundingClientRect().left < artistInfo.right) {
            legenda.innerHTML = slidesInfo[i][0];
            thumbnail.src = slidesInfo[i][1];
     
        }
        if (thumbnail.width > thumbnail.height) {
            thumbnail.setAttribute('class', 'horizontal')
        }
        else {
            thumbnail.setAttribute('class', 'vertical')
        }
        
    }

    //title.setAttribute('id', 'titulo');




    window.requestAnimationFrame(update);
};

const pause = () => {
    isPaused = true;
};

const play = () => {
    if (isPaused) {
        isPaused = false;
        window.requestAnimationFrame(update);
    }
};


//
//   Create Flickity
//
//////////////////////////////////////////////////////////////////////

flickity = new Flickity(slideshowEl, {
    autoPlay: true,
    prevNextButtons: false,
    pageDots: false,
    draggable: true,
    wrapAround: true,
    freeScroll: true,
    selectedAttraction: 0.015,
    friction: 0.25
});
flickity.x = 0;


//
//   Add Event Listeners
//
//////////////////////////////////////////////////////////////////////

// slideshowEl.addEventListener('mouseenter', pause, false);
// slideshowEl.addEventListener('focusin', pause, false);
// slideshowEl.addEventListener('mouseleave', play, false);
// slideshowEl.addEventListener('focusout', play, false);

flickity.on('dragStart', () => {
    // isPaused = true;
});
flickity.on('dragEnd', () => {
    // console.log("drag is ended")
    isPaused = false;
    play();
});

//
//   Start Ticker
//
//////////////////////////////////////////////////////////////////////


update();

};


