chrome.contextMenus.create({
  title: "Insert Mail Hash",
  id: "mail-hash",
  contexts: ["editable"],
  onclick: () => {
    chrome.tabs.executeScript({
      file: "insertHash.js",
      runAt: "document_end"
    });
  }
});

chrome.runtime.onMessage.addListener(message => {
  switch (message.action) {
    case "openOptionsPage":
      chrome.runtime.openOptionsPage();
      break;
    default:
      break;
  }
});
