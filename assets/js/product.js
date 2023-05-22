const showProductMenu = document.querySelector(".showmenu");
const tablist = document.querySelector(".producttablist");
const myBody = document.querySelector("body");
tablist.addEventListener("mouseover",function (e){
    showProductMenu.style.display = "block";
    e.preventDefault();
});
myBody.addEventListener("mouseout",function (e){
    showProductMenu.style.display = "none";
    showProductMenu.style.transition = "1000ms All ease-in-out";
});