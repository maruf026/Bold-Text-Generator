const boldSans = { upper: 0x1d5d4, lower: 0x1d5ee };

function convertText() {
  const input = document.getElementById("inputText").value;
  document.getElementById("boldSansText").value = convert(input, boldSans);
}

function convert(text, range) {
  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCodePoint(range.upper + (code - 65));
      } else if (code >= 97 && code <= 122) {
        return String.fromCodePoint(range.lower + (code - 97));
      } else {
        return char; // leave others unchanged
      }
    })
    .join("");
}

function copyText(id) {
  const textField = document.getElementById(id);
  textField.select();
  textField.setSelectionRange(0, 99999); // for mobile
  document.execCommand("copy");

  const msg = document.getElementById("copyMsg");
  msg.style.display = "block";
  msg.style.opacity = "1";

  setTimeout(() => {
    msg.style.opacity = "0";
    setTimeout(() => {
      msg.style.display = "none";
    }, 300); // wait for fade-out transition
  }, 2000);
}
