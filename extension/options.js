// Saves options to chrome.storage

function isEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function containsPlusSign(email) {
  const [localPart, domain] = email.split("@");
  return localPart.includes("+");
}

function containsAtSign(domain) {
  return localPart.includes("@");
}

function save_options(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const type = document.getElementById("type").value;
  var status = document.getElementById("status");

  if (type == "plus") {
    if (!isEmail(email) || containsPlusSign(email)) {
      status.textContent = "This is not a valid email address!";
      setTimeout(function() {
        status.textContent = "";
      }, 750);
      return;
    }
  } else if (type == "catchall") {
    if (containsAtSign(email)) {
      status.textContent = "This is not a valid domain!";
      setTimeout(function() {
        status.textContent = "";
      }, 750);
      return;
    }
  }

  chrome.storage.sync.set(
    {
      type: type,
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
      mail: "",
      type: "plus"
    },
    function(items) {
      document.getElementById("email").value = items.mail;
      document.getElementById("type").value = items.type;
    }
  );
}

function change_settings(e) {
  const emailLabel = document.querySelector("#emailLabel");
  const type = document.getElementById("type").value;
  const email = document.getElementById("email");
  console.log(type);
  if (type == "catchall") {
    emailLabel.textContent = "Enter your custom domain";
    email.placeholder = "yourdomain.com";
    email.value = "";
  } else if (type == "plus") {
    emailLabel.textContent = "Enter your email address";
    email.placeholder = "yor.name@gmail.com";
    email.value = "";
  }
  console.log(e);
}

document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("mail-form").addEventListener("submit", save_options);
document.getElementById("type").addEventListener("change", change_settings);
