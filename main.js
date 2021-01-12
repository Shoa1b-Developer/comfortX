const $ = (clss) => { return document.querySelector(clss) };

$(".menu").addEventListener('click', function() {
  $(".navlinks").style.left = '0';
});

$(".cross").addEventListener('click', function() {
  $(".navlinks").style.left = '-320px';
});

$(".fa-search").addEventListener('click',function(){
  $(".search").classList.toggle('show');
  
});