copyPathMenuEntryId = chrome.contextMenus.create({
  title: "gmail-hash",
  id: "gmail-hash",
  contexts: ["editable"],
  onclick: gmailHashClickCallback
});

function gmailHashClickCallback(info, tab) {
  chrome.tabs.sendMessage(tab.id, "generateGmailHash");
}
