window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "0px 0px";
    document.getElementById("logo").style.fontSize = "25px";
  }
} 
document.addEventListener('DOMContentLoaded', function() {
  const orderbtn = document.getElementById('order-btn');
  orderbtn.addEventListener('click', function() {
    const ordersection = document.getElementById('order');
    ordersection.scrollIntoView({behavior: "smooth"});
  });
});

document.addEventListener('DOMContentLoaded', function() {
const worksbtn = document.getElementById('works');
worksbtn.addEventListener('click',function(){
  const worksection = document.getElementById('quote');
  worksection.scrollIntoView({behavior: "smooth"});
})
}); 
