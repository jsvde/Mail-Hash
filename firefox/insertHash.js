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

function hashCatchAll(domain) {
  const hash = generateHash(20);
  return hash + "@" + domain;
}

browser.storage.local.get(["mail", "type"]).then(
  ({ type, mail }) => {
    if (type && mail && type == "plus") {
      document.activeElement.value = hashMail(mail);
    } else if (type && mail && type == "catchall") {
      document.activeElement.value = hashCatchAll(mail);
    } else {
      browser.runtime.sendMessage({ action: "openOptionsPage" });
    }
  },
  error => console.log(error)
);
