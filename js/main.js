function myFunction() {
    var sidebar_overlay = document.getElementById("sidebar-overlay");
    var body_overlay = document.getElementById("body_overlay");
    var bodyelement = document.body;
    if (sidebar_overlay.style.right === "0") {
        // sidebar'ı aç
        sidebar_overlay.style.right = "-340px";
        body_overlay.style.opacity = "1";
        bodyelement.style.overflowY = "visible";

    } else {
        // sidebar'ı kapat
        sidebar_overlay.style.right = "0";

        body_overlay.style.opacity = "0.5";
        bodyelement.style.overflowY = "hidden";
    }
}

function close_sidebar() {
    var bodyelement = document.body;
    var sidebar_overlay = document.getElementById("sidebar-overlay");
    var body_overlay = document.getElementById("body_overlay");
    if (sidebar_overlay.style.right === "0") {
        sidebar_overlay.style.right = "0";
        bodyelement.style.overflowY = "hidden";

    } else {
        sidebar_overlay.style.right = "-340px";
        body_overlay.style.opacity = "1";
        bodyelement.style.overflowY = "visible";
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


function showDiv(divId) {
    const eth = document.getElementById('eth_filter');
    const btc = document.getElementById('btc_filter');
    const usd = document.getElementById('usd_filter');
    const busd = document.getElementById('busd_filter');

    function hideAll() {
        eth.style.opacity = "0";
        eth.style.visibility = "hidden";
        eth.style.display = "none";

        btc.style.opacity = "0";
        btc.style.visibility = "hidden";
        btc.style.display = "none";

        usd.style.opacity = "0";
        usd.style.visibility = "hidden";
        usd.style.display = "none";

        busd.style.opacity = "0";
        busd.style.visibility = "hidden";
        busd.style.display = "none";
    }

    hideAll();

    switch (divId) {
        case 'eth_filter':
            eth.style.display = "block";
            eth.style.visibility = "visible";
            eth.style.opacity = "1";
            break;
        case 'btc_filter':
            btc.style.display = "block";
            btc.style.visibility = "visible";
            btc.style.opacity = "1";
            break;
        case 'usd_filter':
            usd.style.display = "block";
            usd.style.visibility = "visible";
            usd.style.opacity = "1";
            break;
        case 'busd_filter':
            busd.style.display = "block";
            busd.style.visibility = "visible";
            busd.style.opacity = "1";
            break;
        default:
            break;
    }

    // SetTimeout kullanarak geçiş efekti eklemek
    setTimeout(function () {
        eth.style.transition = "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out";
        btc.style.transition = "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out";
        usd.style.transition = "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out";
        busd.style.transition = "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out";
    }, 0);
}







