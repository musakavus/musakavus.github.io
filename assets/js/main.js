const closecookies = document.querySelector("#closecookies");
const cookies = document.querySelector(".cookies");
closecookies.addEventListener("click",function (e){
    cookies.style.display = "none";
    cookies.remove(); //bir daha gözükmesin ????
});

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
/*const mainMenu = document.querySelector(".main-menu");
const checkMenu = document.querySelector("#check-menu");
checkMenu.addEventListener("click",function (e){
    e.preventDefault();
    mainMenu.style.display = "none";
})*/










