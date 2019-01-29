// Saves options to chrome.storage

function isEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function containsPlusSign(email) {
  const [localPart, domain] = email.split("@");
  return localPart.includes("+");
}

function save_options(e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var status = document.getElementById("status");
  if (!isEmail(email) || containsPlusSign(email)) {
    status.textContent = "This is not a valid email address!";
    setTimeout(function() {
      status.textContent = "";
    }, 750);
    return;
  }
  chrome.storage.sync.set(
    {
      mail: email
    },
    function() {
      // Update status to let user know options were saved.

      status.textContent = "Options saved.";
      setTimeout(function() {
        status.textContent = "";
      }, 750);
    }
  );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(
    {
      mail: ""
    },
    function(items) {
      document.getElementById("email").value = items.mail;
    }
  );
}

document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("mail-form").addEventListener("submit", save_options);
