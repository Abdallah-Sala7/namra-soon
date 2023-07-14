let langs = document.querySelector(".langs"),
  link = document.querySelectorAll("a"),
  title = document.querySelector(".title"),
  descr = document.querySelector(".description");

link.forEach((el) => {
  el.addEventListener("click", () => {
    langs.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    let attr = el.getAttribute("language");

    title.textContent = data[attr].title;
    descr.textContent = data[attr].description;

    if (attr === "ar") {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  });
});

let data = {
  ar: {
    title: "قريبا",
    description: "ترقبونا نحن علي وشك إطلاق موقعنا قريبا",
  },
  en: {
    title: "Coming Soon",
    description: "Stay tuned, we are about to launch our website soon.",
  },
  fr: {
    title: "Bientôt",
    description:
      "Soyez à l'écoute, nous sommes sur le point de lancer notre site web bientôt.",
  },
};
