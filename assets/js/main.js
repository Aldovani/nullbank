  AOS.init({
  easing: "ease-out-quart",
  duration: 400,
});

const questions = document.querySelectorAll(".question");

questions.forEach((item) => {
  item.addEventListener(
    "click",
    () => {
      if (item.classList.contains("open")) {
        item.classList.remove("open");
        return;
      }

      questions.forEach((e) => e.classList.remove("open"));

      item.classList.toggle("open");
    },
    true
  );
});

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev",
  },
});

const menu = document.querySelector(".menu");
const navigationMobile = document.querySelector(".navigation-mobile");
const links = document.querySelectorAll(".navigation-mobile a");

menu.addEventListener("click", () => {
  if (menu.classList.contains("close")) {
    navigationMobile.classList.remove("open");
    menu.classList.remove("close");
    return;
  }
  menu.classList.add("close");
  navigationMobile.classList.add("open");
});

links.forEach((item) =>
  item.addEventListener("click", () => {
    menu.classList.remove("close");

    navigationMobile.classList.remove("open");
  })
);
