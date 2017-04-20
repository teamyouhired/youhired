console.log('Hello from Chrome Extention');

// document.addEventListener('DOMContentLoaded', function() {
//   var savePageButton = document.getElementById('savePage');
//   savePageButton.addEventListener('click', function() {
//     console.log('Clicked');
//     chrome.tabs.getSelected(null, function(tab) {
//       alert('Url saved!', tab.url);
//       console.log('Test', tab.url);
//
//       // d = document;
//
//       // var f = d.createElement('form');
//       // f.action = 'http://gtmetrix.com/analyze.html?bm';
//       // f.method = 'post';
//       // var i = d.createElement('input');
//       // i.type = 'hidden';
//       // i.name = 'url';
//       // i.value = tab.url;
//       // f.appendChild(i);
//       // d.body.appendChild(f);
//       // f.submit();
//     });
//   }, false);
// }, false);


// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' red!');
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// });
