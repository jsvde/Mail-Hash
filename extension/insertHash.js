function generateHash(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function hashMail(email) {
  const parts = email.split("@");
  if (parts.length === 2) {
    const [localPart, domain] = parts;
    const hash = generateHash();
    return `${localPart}+${hash}@${domain}`;
  }
}

chrome.storage.sync.get("mail", data => {
  if (data.mail) {
    document.activeElement.value = hashMail(data.mail);
  } else {
    chrome.runtime.sendMessage({ action: "openOptionsPage" });
  }
});
