var producturl = "https://www.hermes.com/uk/en/product/2424-21-bag-H082153CKAI/";
var searchCount = 0;
var maxSearches = 10;

var doSearch = function(){
  if (searchCount >= maxSearches) {
    console.log('搜索已完成，共执行了 ' + searchCount + ' 次');
    return;
  }
  
  searchCount++;
  console.log('第 ' + searchCount + ' 次搜索开始');
  
  setTimeout(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200 && this.responseText){
        if (this.responseText.includes('Unfortunately this product is no longer')) {
          console.log(['Not Available', new Date()]);
        }
        else {
          console.log(['Available Now', new Date()]);
        }
      }
    };
    xhttp.open('GET', producturl, true);
    xhttp.send();
    
    // 递归调用下一次搜索
    doSearch();
  }, 2000 + Math.floor(Math.random() * 1000)); // 2秒 + 0-1秒的随机时间
}

// 初始调用
doSearch();
console.log('Script started!');
