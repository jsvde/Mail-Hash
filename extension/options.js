const PLUS = "plus";
const CATCHALL = "catchall";

const isEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const containsPlusSign = email => {
  const [localPart, domain] = email.split("@");
  return localPart.includes("+");
};

const containsAtSign = domain => {
  return domain.includes("@");
};

const isValid = (type, data) => {
  if (type == PLUS) {
    return isEmail(data) && !containsPlusSign(data);
  } else if (type == CATCHALL) {
    return !containsAtSign(data);
  }
};

const $mail = document.querySelector("#email");
const $label = document.querySelector("#emailLabel");
const $type = document.querySelector("#type");

const $status = document.querySelector("#status");

const $plus = document.querySelector("#plus-desc");
const $catchall = document.querySelector("#catch-all-desc");

const PLUS_ERROR = "This is not a valid email address!";
const CATCHALL_ERROR = "This is not a valid domain!";

const show = el => {
  el.style.display = "block";
};

const hide = el => {
  el.style.display = "none";
};

const showDescription = type => {
  if (type == PLUS) {
    show($plus);
    hide($catchall);
  } else if (type == CATCHALL) {
    hide($plus);
    show($catchall);
  }
};

const showStatus = msg => {
  $status.textContent = msg;
  setTimeout(() => {
    $status.textContent = "";
  }, 750);
};

const save = e => {
  e.preventDefault();
  const type = $type.value;
  const mail = $mail.value;

  if (!isValid(type, mail)) {
    const msg = type == PLUS ? PLUS_ERROR : CATCHALL_ERROR;
    showStatus(msg);
    return;
  }

  chrome.storage.sync.set(
    {
      type,
      mail
    },
    () => showStatus("Options saved.")
  );
};

const restore = () => {
  chrome.storage.sync.get(
    {
      mail: "",
      type: "plus"
    },
    ({ mail, type }) => {
      $mail.value = mail;
      $type.value = type;
      showDescription(type);
    }
  );
};

let current_mail_buffer = "";

const setInput = (label, placeholder) => {
  $label.textContent = label;
  $mail.placeholder = placeholder;
  current_mail_buffer = $mail.value;
  $mail.value = "";
};

const change_type = () => {
  const type = $type.value;
  showDescription(type);
  if (type == CATCHALL) {
    setInput("Enter your custom domain", "yourdomain.com");
  } else if (type == PLUS) {
    setInput("Enter your email address", "your.name@gmail.com");
  }
};

document.addEventListener("DOMContentLoaded", restore);
document.getElementById("mail-form").addEventListener("submit", save);
$type.addEventListener("change", change_type);
