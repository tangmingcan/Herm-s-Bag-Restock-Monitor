var producturl = "https://www.hermes.com/uk/en/product/2424-21-bag-H082153CKAI/";
var audio = new Audio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3");
var doSearch = function(){
  //alert('1');
  //setTimeout(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      //console.log(this.responseText);
      if (this.readyState == 4 && this.status == 200 && this.responseText){
        if (this.responseText.includes('Unfortunately this product is no longer')) {
            console.log(['Not Available', new Date()]);
        }
        else{
          console.log('Yes');
        }
      }

    };
    xhttp.open('GET',producturl, true);
    xhttp.send()
  //  doSearch();
  //}, 90000 + Math.floor(Math.random()*60000));
}
// initial call
doSearch();
console.log('Script started!');
