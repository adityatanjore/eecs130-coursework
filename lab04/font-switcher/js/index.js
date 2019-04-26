const makeBigger = () => {
  document.querySelector(".content").style.fontSize = "x-large";
   alert('make bigger!');
};

const makeSmaller = () => {
  document.querySelector(".content").style.fontSize = "small";
   alert('make smaller!');
};


document.querySelector(".a1").onclick = makeBigger;
document.querySelector(".a2").onclick = makeSmaller;
