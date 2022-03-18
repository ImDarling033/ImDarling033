var intervalID = window.setInterval(updateScreen, 200);
var console = document.getElementById("console");

var txt = [
  "[ OK ] Started Autorization Manager.",
  "[ OK ] Started Accounts Service.",
  "[ OK ] Started Modem Manager.",
  "[ OK ] Started Hostname Service.",
  "[ OK ] Started Network Manager.",
  "[ OK ] Reached Target Network.",
  "       Starting Permit User Sessions...",
  "       Starting Network Manager Script Dispatcher Service.",
  "[ OK ] Started Permit User Sessions.",
  "       Starting GNOME Display Manager...",
  "[ 100% ][###########################]",
  "lien ",
  "  ██░ ██  ▄▄▄       ▄████▄  ██ ▄█▀ ▓█████▓█████▄ ",
  "▒▓██░ ██ ▒████▄    ▒██▀ ▀█  ██▄█▒  ▓█   ▀▒██▀ ██▌",
  "░▒██▀▀██ ▒██  ▀█▄  ▒▓█    ▄▓███▄░  ▒███  ░██   █▌",
  " ░▓█ ░██ ░██▄▄▄▄██▒▒▓▓▄ ▄██▓██ █▄  ▒▓█  ▄░▓█▄   ▌",
  " ░▓█▒░██▓▒▓█   ▓██░▒ ▓███▀ ▒██▒ █▄▒░▒████░▒████▓ ",
  "  ▒ ░░▒░▒░▒▒   ▓▒█░░ ░▒ ▒  ▒ ▒▒ ▓▒░░░ ▒░  ▒▒▓  ▒ ",
  "  ▒ ░▒░ ░░ ░   ▒▒    ░  ▒  ░ ░▒ ▒░░ ░ ░   ░ ▒  ▒ ",
  "  ░  ░░ ░  ░   ▒   ░       ░ ░░ ░     ░   ░ ░  ░ ",
  "  ░  ░  ░      ░   ░ ░     ░  ░   ░   ░     ░    ",


]

var docfrag = document.createDocumentFragment();

function updateScreen() {
  //Shuffle the "txt" array
  txt.push(txt.shift());
  //Rebuild document fragment
  txt.forEach(function(e) {
    var p = document.createElement("p");
    p.textContent = e;
    docfrag.appendChild(p);
  });
  //Clear DOM body
  while (console.firstChild) {
    console.removeChild(console.firstChild);
  }
  console.appendChild(docfrag);
}