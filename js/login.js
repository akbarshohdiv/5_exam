let btn = document.querySelector("#btn");
let text = document.querySelector("#text");
let pass = document.querySelector("#password");
text.addEventListener("focusout", myTaxt);
pass.addEventListener("focusout", myPass);
btn.addEventListener("click", function () {
  myTaxt();
  myPass();

});

function myTaxt() {
  let message, text;
  let errElement = document.querySelector("#text");
  message = document.getElementById("err");
  text = document.getElementById("text").value;

  try {
    if (text == "") {
      errElement.classList.remove("valid");
      errElement.classList.add("err");

      throw "to'ldiring";
    }
    if (text == "Akbar") {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      message.innerHTML = " ";

    }
  } catch (e) {
    message.innerHTML = " Iltimos " + e;
  }
}

function myPass() {
  let message, pass;
  let errElement = document.querySelector("#password");
  message = document.getElementById("err2");
  pass = document.getElementById("password").value;

  try {
    if (pass == "") {
      errElement.classList.add("err");
      errElement.classList.remove("valid");


      throw "to'ldiring";
    }
    if (pass === "1604") {
      errElement.classList.remove("err");
      errElement.classList.add("valid");
      window.location.href = "../home.html";
      message.innerHTML = " ";

    }
  } catch (e) {
    message.innerHTML = " Iltimos " + e;
  }
}

