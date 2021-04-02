document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

window.onscroll = function() {

  var currentScrollPos = window.pageYOffset;
  var rectObject = document.querySelector('#header').getBoundingClientRect();

    if (currentScrollPos > ( rectObject.height - 50)) {
      document.querySelector("header").style.top = "0";
    } else {
      document.querySelector("header").style.top = "-100px";
  }



  function parallaxEffect(side, className) {
    Array.from(document.querySelectorAll(className)).map(
      item => item.style[side] = (item.getBoundingClientRect().top / 2) - 100 + 'px'  
    )
  }
  
    parallaxEffect('right','.animation__right');
    parallaxEffect('left','.animation__left');
}