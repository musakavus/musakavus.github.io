function myFunction() {
    var sidebar_overlay = document.getElementById("sidebar-overlay");
    if (sidebar_overlay.style.right === "-500px") {
        sidebar_overlay.style.right = "0";
    } else {
        sidebar_overlay.style.right = "-500px";
    }
}

function close_sidebar() {
    var sidebar_overlay = document.getElementById("sidebar-overlay");
    if (sidebar_overlay.style.right === "-500px") {
        sidebar_overlay.style.right = "0";
    } else {
        sidebar_overlay.style.right = "-500px";
    }
}
