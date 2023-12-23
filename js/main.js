function myFunction() {
    var sidebar_overlay = document.getElementById("sidebar-overlay");
    var body_overlay = document.getElementById("body_overlay");

    if (sidebar_overlay.style.right === "0") {
        // sidebar'ı aç
        sidebar_overlay.style.right = "-340px";
        body_overlay.style.opacity = "1";
    } else {
        // sidebar'ı kapat
        sidebar_overlay.style.right = "0";

        body_overlay.style.opacity = "0.5";
    }
}

function close_sidebar() {
    var sidebar_overlay = document.getElementById("sidebar-overlay");
    var body_overlay = document.getElementById("body_overlay");
    if (sidebar_overlay.style.right === "0") {
        sidebar_overlay.style.right = "0";

    } else {
        sidebar_overlay.style.right = "-340px";
        body_overlay.style.opacity = "1";
    }
}

function sub_menu() {
    var sub_menuu = document.getElementById("sub-menu");
    var icon_opened = document.getElementById("open-sub-menu")
    var icon_closed = document.getElementById("close-sub-menu")
    if (sub_menuu.style.display === "block") {
        sub_menuu.style.display = "none";
        icon_opened.style.display = "inline"
        icon_closed.style.display = "none"
    } else {
        sub_menuu.style.display = "block";
        icon_opened.style.display = "none";
        icon_closed.style.display = "inline"
    }
}


// function large_sub_menu() {
//     var sub_men = document.getElementById("sub_men");
//     var opened = document.getElementById("opened_menu")
//     var closed = document.getElementById("closed_menu")
//     if (sub_men.style.display === "block") {
//         sub_men.style.display = "none";
//         opened.style.display = "inline"
//         closed.style.display = "none"
//     } else {
//         sub_men.style.display = "block";
//         opened.style.display = "none";
//         closed.style.display = "inline"
//     }
// }

function showSubMenu() {
    var subMenu = document.getElementById("sub_men");
    var opened = document.getElementById("opened_menu");
    var closed = document.getElementById("closed_menu");

    subMenu.style.display = "block";
    opened.style.display = "none";
    closed.style.display = "inline";
}

function hideSubMenu() {
    var subMenu = document.getElementById("sub_men");
    var opened = document.getElementById("opened_menu");
    var closed = document.getElementById("closed_menu");

    subMenu.style.display = "none";
    opened.style.display = "inline";
    closed.style.display = "none";
}