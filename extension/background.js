chrome.contextMenus.create({
  title: "Insert mail hash",
  id: "mail-hash",
  contexts: ["editable"],
  onclick: mailHashClickCallback
});

function mailHashClickCallback(info, tab) {
  chrome.storage.sync.get("mail", function(data) {
    if (data.mail) {
      chrome.tabs.sendMessage(tab.id, {
        msg: "generateMailHash",
        mail: data.mail
      });
    } else {
      chrome.runtime.openOptionsPage();
    }
  });
}
