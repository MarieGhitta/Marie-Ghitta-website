let menu = document.querySelector(".menuToggle")
let openBtn = document.getElementById("openBtn")
let closeBtn = document.getElementById("close")

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav(){
    menu.classList.add('active');
}

function closeNav(){
    menu.classList.remove('active');
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 975) {
      menu.classList.remove("active");
    }
  });

