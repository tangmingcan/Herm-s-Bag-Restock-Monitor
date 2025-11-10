var producturls = [
  "https://www.hermes.com/uk/en/product/2424-21-bag-H082153CKAI/",
  "https://www.hermes.com/uk/en/product/roulis-mini-bag-H070510CP37/",
  "https://www.hermes.com/uk/en/product/hermes-della-cavalleria-elan-bag-H084658CC37/",
  "https://www.hermes.com/uk/en/product/neo-garden-23-bag-H086729CKO5/"
  // 添加更多URL...
];

var searchCount = 0;
var maxSearches = 10;
var currentUrlIndex = 0;

var doSearch = function(){
  if (searchCount >= maxSearches) {
    console.log('搜索已完成，共执行了 ' + searchCount + ' 次');
    return;
  }
  
  searchCount++;
  var currentUrl = producturls[currentUrlIndex];
  console.log('第 ' + searchCount + ' 次搜索开始 - URL: ' + currentUrl);
  
  setTimeout(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200 && this.responseText){
        if (this.responseText.includes('Unfortunately this product is no longer')) {
          console.log(['Not Available', currentUrl, new Date()]);
        }
        else {
          console.log(['Available Now', currentUrl, new Date()]);
        }
      }
    };
    xhttp.open('GET', currentUrl, true);
    xhttp.send();
    
    // 移动到下一个URL
    currentUrlIndex = (currentUrlIndex + 1) % producturls.length;
    
    // 递归调用下一次搜索
    doSearch();
  }, 1000 + Math.floor(Math.random() * 1000)); // 1秒 + 0-1秒的随机时间
}

// 初始调用
doSearch();
console.log('Script started!');
