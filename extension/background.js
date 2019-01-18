copyPathMenuEntryId = chrome.contextMenus.create({
  title: "Insert Gmail with hash",
  id: "gmail-hash",
  contexts: ["editable"],
  onclick: gmailHashClickCallback
});

function gmailHashClickCallback(info, tab) {
  chrome.storage.sync.get("gmail", function(data) {
    if (data.gmail) {
      chrome.tabs.sendMessage(tab.id, {
        msg: "generateGmailHash",
        gmail: data.gmail
      });
    } else {
      chrome.runtime.openOptionsPage();
    }
  });
}
