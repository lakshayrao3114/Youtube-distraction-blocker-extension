

document.getElementById('blurButton').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: blockYoutubeFeed
    });
  });

  // Change the button text
  const button = document.getElementById('blurButton');
  if (button.textContent === "Blur YouTube Feed") {
      button.textContent = "End Focus Session";
  } else {
      button.textContent = "Blur YouTube Feed";
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
          blockerDiv.style.height = '100%'; // use this to increase height
          blockerDiv.style.backgroundColor = 'black';
          blockerDiv.style.zIndex = '1000';
          feed.appendChild(blockerDiv);
      } else {
          blockerDiv.remove();
      }
  }
}



