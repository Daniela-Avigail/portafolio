var navEl = document.getElementById('siteNav');
window.addEventListener('scroll', function(){
  if(window.scrollY > 60){ navEl.classList.add('scrolled'); }
  else{ navEl.classList.remove('scrolled'); }
});

var toggle = document.getElementById('navToggle');
var links = document.getElementById('navLinks');
toggle.addEventListener('click', function(){
  var isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});
links.querySelectorAll('a').forEach(function(a){
  a.addEventListener('click', function(){
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

var revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(function(el){ io.observe(el); });
} else {
  revealEls.forEach(function(el){ el.classList.add('in'); });
}

var form = document.getElementById('contactForm');
var successMsg = document.getElementById('formSuccess');
form.addEventListener('submit', function(e){
  if (window.location.protocol === 'file:') {
    e.preventDefault();
    successMsg.classList.add('show');
    form.reset();
  }
});