const root_menu_item = browser.contextMenus.create({
  title: "Insert Mail Hash",
  id: "mail-hash",
  contexts: ["editable"],
  onclick: () => {
    browser.tabs.executeScript({
      file: "insertHash.js",
      runAt: "document_end"
    });
  }
});

browser.runtime.onMessage.addListener(message => {
  switch (message.action) {
    case "openOptionsPage":
      browser.runtime.openOptionsPage();
      break;
    default:
      break;
  }
});
