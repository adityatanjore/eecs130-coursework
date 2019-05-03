activeImageElement = document.querySelector('.image');
const firstImageElement = document.querySelectorAll('.image')[0];
const showPhoto = (e) => {
    // figure out which element the user clicked from the event object:
    const clickedElement = e.target;
    // figure out what its background image is:
    const imgURL = clickedElement.style.backgroundImage;
    console.log(imgURL);
    activeImageElement = e.target;



    // PART 1:
    // 1. set the featured_image element's backgroundImage property
    //    to the imgURL associated with the image the user just clicked
    //    the photo the user just clicked on.
    document.querySelector('.featured_image').style.backgroundImage = imgURL;
    // 2. add the active class to the preview_box element so that the card
    //    becomes visible to the user.
    document.querySelector('.preview_box').className = "preview_box active";
};

// PART 2: Replace this code with what's commented below.
//         Instead of just applying the event handler to
//         the first .card element, you want to apply it to
//         all of the card elements
const cards = document.querySelectorAll('.card');
for (card of cards) {
    card.onclick = showPhoto;
}


// PART 3: Close functionality
// a. Create a “close” function that removes the “active” class
//    from the “.preview_box” element.

const closePhoto = () => {
  document.querySelector('.preview_box.active').className = "preview_box";
};

// b. Attach your newly created “close” function to the onclick
//    event handler of the close button (in the upper right-hand corner).
document.querySelector('.close').onclick = closePhoto;



// PART 4: Next functionality:
// a. Create a “next” function that switches out the “.featured_image”
//    background image to the next image in the list.

const nextImage = () => {
  console.log(activeImageElement.parentElement.nextElementSibling);
  if (! activeImageElement.parentElement.nextElementSibling) {
    activeImageElement = firstImageElement;
  } else {
    activeImageElement = activeImageElement.parentElement.nextElementSibling.firstElementChild
  }
  document.querySelector('.featured_image').style.backgroundImage = activeImageElement.style.backgroundImage;
};

// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).

document.querySelector('.next').onclick = nextImage;

// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.

document.querySelector('.featured_image').onclick = nextImage;

// PART 5: Previous functionality:
// a. Create a “previous” function that switches out the
//    “.featured_image” background image to the previous image
//    in the list.

const previousImage = () => {
  activeImageElement = activeImageElement.parentElement.previousElementSibling.firstElementChild;
  document.querySelector('.featured_image').style.backgroundImage = activeImageElement.style.backgroundImage;
};

// b. Attach your newly created “previous” function to the onclick
//    event handler of the “.prev” button (in the upper right-hand corner).

document.querySelector('.prev').onclick = previousImage;


////////////////////////////////// LOOP /////////////////////////////////////////////////////////
