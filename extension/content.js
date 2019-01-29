var clickedEl = null;

document.addEventListener(
  "mousedown",
  function(event) {
    //right click

    if (event.button == 2) {
      clickedEl = event.target;
    }
  },
  true
);

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

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request && request.msg == "generateMailHash") {
    clickedEl.value = hashMail(request.mail);
  }
});
