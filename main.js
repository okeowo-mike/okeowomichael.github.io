// knowledge timeline
const items = document.querySelectorAll("#timeline li");

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("show");
    }
  });

// events
window.addEventListener("load", run);
window.addEventListener("resize", run);
window.addEventListener("scroll", run);

// smooth scrolling
$("#main-nav a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// sticky menu transparency
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.querySelector("#main-nav").style.opacity = 0.75;
  } else {
    document.querySelector("#main-nav").style.opacity = 1;
  }
});
