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

let info_team_inner = `
      <div id="info_team" class="info_team">
      <div>
        Developer:
        <a href="https://www.facebook.com/Isl7mAlQuraishi"
          >alquraishi <i class="fa-brands fa-facebook"></i
        ></a>
        <img src="images/photo1.jpg" alt="Islam_AlQuraishi.img" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      </div>

      <div>
        Desginer:
        <a href="">sara khaled <i class="fa-brands fa-facebook"></i></a>
        <img src />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  `;

let close_info = `
  <span id="xmark" class="xmark"><i class="fa-solid fa-xmark"></i> Close</span>
  `;

let toggle_info = document.getElementById("toggle_info");
let info_team = document.getElementById("info_team");

toggle_info.addEventListener("click", () => {
  inner(info_team_inner, close_info);
  setInterval(() => {
    document.querySelector("#info_team").classList.add("active1");
  }, 250);
});

function inner(info_team_inner, close_info) {
  let ele_inner = document.createElement("div");
  ele_inner.setAttribute("id", "inner");
  ele_inner.innerHTML = info_team_inner;

  setInterval(() => {
    ele_inner.innerHTML += close_info;
  }, 2500);

  document.querySelector("footer").before(ele_inner);
}

document.addEventListener("click", (e) => {
  if (e.target == xmark) {
    setInterval(() => {
      document.querySelector("#info_team").classList.add("active2");
    }, 250);
    setInterval(() => {
      document.querySelector("#inner").remove();
    }, 1500);
  }
});
