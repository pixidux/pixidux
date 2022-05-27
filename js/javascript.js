const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const scrolleftBtn = document.querySelector(".pre-btn");
const scrollrightBtn = document.querySelector(".nxt-btn");


menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledscroll");
    scrollrightBtn.classList.add("btnmob")
    scrolleftBtn.classList.add("btnmob")
  
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledscroll");
    scrollrightBtn.classList.remove("btnmob")
    scrolleftBtn.classList.remove("btnmob")
   


}
window.onscroll =()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}





