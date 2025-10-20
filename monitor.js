var producturl = 'https://www.hermes.com/de/de/product/mini-tasche-verrou-strap-H083248CKAA/";
var audio = new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3");
var doSearch = function(){
  setTimeout(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200 && this.responseText){
        if (this.responseText.includes('add-to-cart-button-in-stock')){
          console.log(['Available Now', new Date()]);
          audio.play();
        }
        else{
          console.log('Sold Out');
        }
      }

    };
    xhttp.open('GET',producturl, true);
    xhttp.send()
    doSearch();
  }, 90000 + Math.floor(Math.random()*60000));
}
// initial call
doSearch();
console.log('Script started!');
