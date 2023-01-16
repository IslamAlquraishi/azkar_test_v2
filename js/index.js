let brief_btn = document.getElementById("brief_btn");
let brief_count = document.getElementById("brief_count");
let refresh = document.getElementById("refresh");
let count = 1;
let minus_count = 1;

brief_btn.addEventListener("click", () => {
  brief_btn.style.transform = "scale(.95)";
  setInterval(() => {
    brief_btn.style.transform = "scale(1)";
  }, 150);

  brief_btn.innerHTML = count;
  count++;

  if (brief_count.innerHTML > 0) {
    brief_count.innerHTML -= minus_count;
  } else brief_count.innerHTML = 0;
});

let vibrates = document.querySelectorAll(".vibrate");

vibrates.forEach((vibrate) => {
  vibrate.addEventListener("click", () => {
    navigator.vibrate([50, 50]);
  });
});

refresh.addEventListener("click", () => {
  brief_btn.innerHTML = 0;
  count = 1;
  brief_count.innerHTML = 3;
  minus_count = 1;
});

function get() {
  let window_Width = window.innerWidth;
  let not_vilad = document.getElementById("not_vilad");
  if (window_Width > 425) {
    not_vilad.style.display = "block";
  } else if (window_Width <= 425) {
    not_vilad.style.display = "none";
  }
}
window.addEventListener("resize", get);
