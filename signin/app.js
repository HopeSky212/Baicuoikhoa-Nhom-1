let clickopen = document.getElementById("open");
let clickclose = document.getElementById("close");
let menuBars = document.getElementById("menu-bars");
let dropbtn = document.getElementById("dropdown");
let dropcontent = document.getElementById("drop-content");
let dropaddress = document.getElementById("down-address");
let localaddress = document.getElementById("local");
let linkIlaverse = document.getElementById("ilaverse");
let about = document.getElementById("gioithieuila");
let career = document.getElementById("cohoinghenghiep-text");
let signinImg = document.getElementById("main");
let checkdrop = true;

clickopen.addEventListener("click", () => {
  menuBars.style.display = "block";
  signinImg.style.display = "none";
  signinContent.style.display = "none";
});

clickclose.addEventListener("click", () => {
  menuBars.style.display = "none";
  signinImg.style.display = "block";
  signinContent.style.display = "block";
});

dropbtn.addEventListener("click", () => {
  if (checkdrop) {
    dropcontent.style.display = "block";
  } else {
    dropcontent.style.display = "none";
  }
  checkdrop = !checkdrop;
});

dropaddress.addEventListener("click", () => {
  if (checkdrop) {
    localaddress.style.display = "block";
  } else {
    localaddress.style.display = "none";
  }
  checkdrop = !checkdrop;
});

linkIlaverse.addEventListener("click", () => {
  // window.location.href = "/ILAVERSE/code/index.html";
  window.open("/ILAVERSE/code/index.html", "_blank");
});

about.addEventListener("click", () => {
  // window.location.href = "/ila-clone-web/index.html";
  window.open("/ila-clone-web/index.html", "_blank");
});

career.addEventListener("click", () => {
  window.open("/ila-clone-web/career.html", "_blank");
});

window.onload = () => {
  let newPerson = localStorage.getItem("newPerson")
    ? JSON.parse(localStorage.getItem("newPerson"))
    : [];
  if (newPerson != 0) {
    newPerson.forEach((person) => {
      let div = document.createElement("div");
      div.innerHTML = `
          <div class = "item">Họ và tên: ${person.ten}</div>
          <div class = "item">Số điện thoại: ${person.phone}</div>
          <div class = "item">Email: ${person.email}</div>
          <div class = "item">Khóa học: ${person.lesson}</div>
          <div class = "item">Thành phố: ${person.city}</div>
        `;
      div.classList.add("list-item");
      list.appendChild(div);
    });
  }
};

let ten = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let lesson = document.getElementById("khoahoc");
let city = document.getElementById("city");
let button = document.getElementById("button");
let list = document.getElementById("list");

button.addEventListener("click", () => {
  if (
    !ten.value ||
    !phone.value ||
    !email.value ||
    !lesson.value ||
    !city.value
  )
    return alert("Nhập lại");

  let person = {
    name: ten.value,
    phone: phone.value,
    email: email.value,
    lesson: lesson.value,
    city: city.value,
  };

  let newPerson = localStorage.getItem("newPerson")
    ? JSON.parse(localStorage.getItem("newPerson"))
    : [];
  newPerson.push(person);
  localStorage.setItem("newPerson", JSON.stringify(newPerson));
  let div = document.createElement("div");
  div.innerHTML = `
    <div class = "item">Họ và tên: ${ten.value}</div>
    <div class = "item">Số điện thoại: ${phone.value}</div>
    <div class = "item">Email: ${email.value}</div>
    <div class = "item">Khóa học: ${lesson.value}</div>
    <div class = "item">Thành phố: ${city.value}</div>
  `;
  div.classList.add("list-item");
  list.appendChild(div);
  ten.value = "";
  phone.value = "";
  email.value = "";
  lesson.value = "";
  city.value = "";
});
