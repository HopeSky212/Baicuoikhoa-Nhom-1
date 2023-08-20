let clickopen = document.getElementById("open");
let clickclose = document.getElementById("close");
let menuBars = document.getElementById("menu-bars");
let dropbtn = document.getElementById("dropdown");
let dropcontent = document.getElementById("drop-content");
let dropaddress = document.getElementById("down-address");
let localaddress = document.getElementById("local");
let video = document.getElementById("firstvideo");
let videoContent = document.getElementById("video-content");
let findLessonAge = document.getElementById("timkhoahoc-age-left");
let x = document.getElementById("timkhoahoc-age");
let findLesson = document.getElementById("timkhoahoc-icon");
let arrowHidden = document.getElementById("timkhoahoc-icon-hidden");
let dropLessonAge = document.getElementById("timkhoahoc-age-left-content");
let findPrg = document.getElementById("timchuongtrinhhoc");
let lessonPrg = document.getElementById("timchuongtrinhhoc-icon");
let lessPrgContent = document.getElementById("timchuongtrinhhoc-left-content");
let jumpstart = document.getElementById("jumpstart");
let duhoc = document.getElementById("duhoc");
let linkIlaverse = document.getElementById("ilaverse");
let about = document.getElementById("gioithieuila");
let career = document.getElementById("cohoinghenghiep-text");
let signin = document.getElementById("dangkyngay");
let trungtam = document.getElementById("trungtamdaotao-item");
let checkdrop = true;

clickopen.addEventListener("click", () => {
  menuBars.style.display = "block";
  video.style.display = "none";
  jumpstart.style.display = "none";
  duhoc.style.display = "none";
  findLessonAge.style.display = "none";
  findPrg.style.display = "none";
  x.style.display = "none";
});

clickclose.addEventListener("click", () => {
  menuBars.style.display = "none";
  video.style.display = "block";
  jumpstart.style.display = "block";
  duhoc.style.display = "block";
  findLessonAge.style.display = "block";
  findPrg.style.display = "block";
  findPrg.style.display = "flex";
  x.style.display = "block";
  x.style.display = "flex";
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

findLesson.addEventListener("click", () => {
  if (checkdrop) {
    dropLessonAge.style.display = "block";
  } else {
    dropLessonAge.style.display = "none";
  }
  checkdrop = !checkdrop;
});

lessonPrg.addEventListener("click", () => {
  if (checkdrop) {
    lessPrgContent.style.display = "block";
  } else {
    lessPrgContent.style.display = "none";
  }
  checkdrop = !checkdrop;
});

// SLIDE SHOW
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

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

signin.addEventListener("click", () => {
  window.open("/signin/index.html", "_blank");
});

trungtam.addEventListener("click", () => {
  window.open("/trainingcenter/index.html");
});
