var index = 0;
var prevSlide = "";
var nextSlide = "";

document.onkeyup = function(e) {

  console.log(e.keyCode);
  prevSlide = "slide"+(index-1);
  nextSlide = "slide"+(index+1);
  var prev = document.getElementById(prevSlide);
  var next = document.getElementById(nextSlide);
  console.log(index);
  console.log(prev);
  console.log(next);

  switch (e.keyCode) {
    case 32:
    case 40:
      if (next !== null) {
        index++;
        console.log(index);
        prevSlide = "slide"+(index-1);
        nextSlide = "slide"+(index+1);
        var prev = document.getElementById(prevSlide);
        var next = document.getElementById(nextSlide);
        next.scrollIntoView(true); // Top
      } else {
        document.getElementById('intro').scrollIntoView(true); // Top;
      }
      break;
    case 38:
      if (prev !== null) {
        index--;
        console.log(index);
        prevSlide = "slide"+(index-1);
        nextSlide = "slide"+(index+1);
        var prev = document.getElementById(prevSlide);
        var next = document.getElementById(nextSlide);
        prev.scrollIntoView(true); // Tops
      } else {
        document.getElementById('intro').scrollIntoView(true); // Top;
      }
      break;
  }
}
