chrome.action.onClicked.addListener((tab) => {
  if (tab.url.includes("youtube.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: blockYoutubeFeed
    });
  }
});

function blockYoutubeFeed() {
  const feed = document.getElementById('primary');
  if (feed) {
      let blockerDiv = document.getElementById('blockerDiv');
      if (!blockerDiv) {
          blockerDiv = document.createElement('div');
          blockerDiv.id = 'blockerDiv';
          blockerDiv.style.position = 'absolute';
          blockerDiv.style.top = '0';
          blockerDiv.style.left = '0';
          blockerDiv.style.width = '100%';
          blockerDiv.style.height = '100%';
          blockerDiv.style.backgroundColor = 'black';
          blockerDiv.style.zIndex = '1000';
          feed.appendChild(blockerDiv);
      }
  }
}
