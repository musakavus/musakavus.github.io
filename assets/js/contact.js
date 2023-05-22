const showLoginSuccess = document.querySelector(".tab-label");
const userName = document.querySelector(".userName");
const userMail = document.querySelector(".userMail");
const userCompany = document.querySelector(".userCompany");
const userMessage = document.querySelector(".userMessage");
const sendbtn = document.querySelector(".sendbtn");
sendbtn.addEventListener("click",function (e){
    e.preventDefault();
    Email.send({
        Host : "smtp.gmail.com",
        Username : "yenimusakavus@gmail.com",
        Password : "zjyhmcllwihtvczv",
        To : 'yenimusakavus@gmail.com',
        From : "yenimusakavus@gmail.com",
        Subject : "Teraphy Light'den mesaj var...",
        Body : "\n Name: " + `${userName.value}`  + "\n E-Mail: " + `${userMail.value}` +
            "\n Company: " + `${userCompany.value}` + "\n Message: " + `${userMessage.value}`

    })
        .then(

        message => alert(message)

    );
    showLoginSuccess.style.display = "block"
    setTimeout(function (){
        showLoginSuccess.style.display = "none";

    },2500)
})


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

