const questions = document.querySelectorAll(".question");

questions.forEach((item) => {
  item.addEventListener(
    "click",
    () => {
      questions.forEach((e) => e.classList.remove("open"));
      item.classList.toggle("open");
    },
    true
  );
});


const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,


  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },

  
});