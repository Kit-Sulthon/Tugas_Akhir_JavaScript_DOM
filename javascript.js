function buat_login() {
  var EL = document.getElementById("X");
  EL.parentElement.removeChild(EL);

  var TulisanParagraf = document.createElement("p");
  TulisanParagraf.className = "tulisan_login";
  TulisanParagraf.innerHTML = "Silakan Mendaftar";

  var element = document.getElementsByTagName("div")[0];
  element.appendChild(TulisanParagraf);
  var form = document.createElement("FORM");
  element.appendChild(form);

  //Nama User

  var label = document.createElement("label");
  label.innerHTML = "Name User";
  form.appendChild(label);
  var user_name = document.createElement("input");
  user_name.type = "text";
  user_name.name = "Nama User";
  user_name.className = "form_login";
  user_name.placeholder = "Nama User..";
  form.appendChild(user_name);

  //Nomor HP

  var label2 = document.createElement("label2");
  form.appendChild(label2);
  label2.innerHTML = "Nomor HandPhone";
  var no_handphone = document.createElement("input");
  no_handphone.type = "number";
  no_handphone.name = "noHP";
  no_handphone.className = "form_login";
  no_handphone.placeholder = "Nomor HandPhone.";
  form.appendChild(no_handphone);

  // User Name & email

  var label3 = document.createElement("label3");
  form.appendChild(label3);
  label3.innerHTML = "Username atau email";
  var userMail = document.createElement("input");
  userMail.type = "email";
  userMail.name = "email";
  userMail.className = "form_login";
  userMail.placeholder = "Username atau email ..";
  form.appendChild(userMail);

  // Password

  var label4 = document.createElement("label4");
  form.appendChild(label4);
  label4.innerHTML = "Password";
  var userPW = document.createElement("input");
  userPW.type = "password";
  userPW.name = "password";
  userPW.className = "form_login";
  userPW.placeholder = "Password";
  form.appendChild(userPW);

  // Button

  var tombol = document.createElement("button");
  tombol.type = "submit";
  tombol.innerText = "DAFTAR SEKARANG"
  tombol.className = "tombol_login";
  form.appendChild(tombol);
}
