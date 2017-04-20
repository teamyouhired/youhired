  var savePageButton = document.getElementById('savePage');
savePageButton.addEventListener('click', function() {
    console.log('Clicked');
    // chrome.tabs.getSelected(null, function(tab) {
    //   alert('Url saved!', tab.url);
    //   console.log('Test', tab.url);
    // });
  }, false);
