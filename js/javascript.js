  // ================================= HEALTH BAR ================== //
  var width = 50;
  function move() {
        var elem = document.getElementById("myBar");
          if (width < 100) {
            width+=2;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
          }
  }

  var widtha = 55;
  function move1() {
        var elema = document.getElementById("myBar");
          if (widtha < 100) {
            widtha-=5;
            elema.style.width = widtha + '%';
            elema.innerHTML = widtha * 1 + '%';
          }
  }

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// ========================================= SEARCH BOX================================

document.addEventListener('DOMContentLoaded',function(){
 var searchpara=document.getElementById("paragraph").innerHTML;
 searchpara=searchpara.toString();
 document.getElementById("search").onclick =function ()
 {highlight_word(searchpara)};
},false);

function highlight_word(searchpara) {
  var text=document.getElementById("search_text").value;

   if (text) {
      var pattern=new RegExp("("+text+")", "gi");
      var new_text=searchpara.replace(pattern, "<span class='highlight'>"+text+"</span>");
      document.getElementById("paragraph").innerHTML=new_text;
   }
}

// =============================== Service Worker =======================//
// Just to make sure sw are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw_cached_pages.js')
      .then(reg => console.log('Service Worker: Registered (Pages)'))
      .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}
