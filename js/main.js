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

document.addEventListener("DOMContentLoaded", function () {
    var cryptoImages = document.querySelectorAll(".yellow_bg img");

    cryptoImages.forEach(function (cryptoImg) {
        setInterval(function () {
            toggleImage(cryptoImg);
        }, 2000);
    });

    function toggleImage(img) {
        if (img.style.opacity === "0") {
            img.style.opacity = "1";
        } else {
            img.style.opacity = "0";
        }
    }
});

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


if (window.location.pathname.includes("chart.html")) {
    function showDiv(divId) {
        const eth = document.getElementById('eth_filter');
        const btc = document.getElementById('btc_filter');
        const usd = document.getElementById('usd_filter');
        const busd = document.getElementById('busd_filter');
        const eth_btn = document.getElementById('eth_btn');
        const btc_btn = document.getElementById('btc_btn');
        const usd_btn = document.getElementById('usd_btn');
        const busd_btn = document.getElementById('busd_btn');
        const cryptoText = document.getElementById('crypto_text');

        // Butonların bulunduğu parent elementi seçin
        const buttonsContainer = document.querySelector('.nav-pills');
        const buttons = buttonsContainer.querySelectorAll('.nav-item');

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

        // Tüm butonların arka plan rengini sıfırla ve aktif olan butona sınıf ekle
        buttons.forEach(button => {
            button.style.backgroundColor = "";
        });

        switch (divId) {
            case 'eth_filter':
                eth.style.display = "block";
                eth.style.visibility = "visible";
                eth.style.opacity = "1";
                setTimeout(() => cryptoText.innerText = "ETH/AVAX", 500); // 0.5 saniye gecikme
                setTimeout(() => eth_btn.style.background = "#F7931A", 500); // 0.5 saniye gecikme

                break;
            case 'btc_filter':
                btc.style.display = "block";
                btc.style.visibility = "visible";
                btc.style.opacity = "1";
                setTimeout(() => cryptoText.innerText = "BTC/AVAX", 500); // 0.5 saniye gecikme
                setTimeout(() => btc_btn.style.background = "#F7931A", 500); // 0.5 saniye gecikme
                break;
            case 'usd_filter':
                usd.style.display = "block";
                usd.style.visibility = "visible";
                usd.style.opacity = "1";
                setTimeout(() => cryptoText.innerText = "USD/AVAX", 500); // 0.5 saniye gecikme
                setTimeout(() => usd_btn.style.background = "#F7931A", 500); // 0.5 saniye gecikme
                break;
            case 'busd_filter':
                busd.style.display = "block";
                busd.style.visibility = "visible";
                busd.style.opacity = "1";
                setTimeout(() => cryptoText.innerText = "BUSD/AVAX", 500); // 0.5 saniye gecikme
                setTimeout(() => busd_btn.style.background = "#F7931A", 500); // 0.5 saniye gecikme
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
}


if (window.location.pathname.includes("chart.html")) {
    window.onload = function () {
        const pillsContainer = document.querySelector('.nav-pills');

        // Kontrol ekle: .nav-pills elemanı bulunamazsa
        if (!pillsContainer) {
            console.error('.nav-pills elemanı bulunamadı.');
            return;
        }

        const buttons = pillsContainer.querySelectorAll('.nav-item');

        // Kontrol ekle: .nav-item elemanları bulunamazsa
        if (buttons.length === 0) {
            console.error('.nav-item elemanları bulunamadı.');
            return;
        }

        buttons.forEach(button => {
            button.style.backgroundColor = "";
        });

        // Ardından eth_btn'nin arka plan rengini belirle
        const eth_btn = document.getElementById('eth_btn');

        // Kontrol ekle: #eth_btn elemanı bulunamazsa
        if (!eth_btn) {
            console.error('#eth_btn elemanı bulunamadı.');
            return;
        }

        eth_btn.style.backgroundColor = "#F7931A";
    };
}


document.addEventListener("DOMContentLoaded", function () {
    var backToTopBtn = document.getElementById("backToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "inline-flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


function acceptCookies() {
    document.getElementById('cookieConsent').style.display = 'none';
}

function rejectCookies() {
    // Burada çerezleri reddetme işlemlerini gerçekleştirebilirsiniz.
    // Örneğin, çerezleri tamamen silme gibi.
    document.getElementById('cookieConsent').style.display = 'none';

}

// function showCookiePreferences() {
//
//     //tüm cihazlarda
//     document.getElementById('cookiePreferences').style.display = 'block';
//     document.getElementById('cookieConsent').style.display = 'none';
//
//
//     //sadece mobil cihazlarda çalışacak kısım
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }


// function showCookiePreferences() {
//     // Tüm cihazlarda
//     document.getElementById('cookiePreferences').style.display = 'block'; // aşağı scroll yapılırsa display none olsun
//
//
//     document.getElementById('cookieConsent').style.display = 'none';
//
//     // Sadece mobil cihazlarda çalışacak kısım
//     if (window.matchMedia("(max-width: 767px)").matches) {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     }
// }

// function showCookiePreferences() {
//     // Tüm cihazlarda
//     var cookiePreferencesElement = document.getElementById('cookiePreferences');
//     cookiePreferencesElement.style.display = 'block';
//
//     // Scroll işlemi kontrolü
//     var scrollThreshold = 500; // Belirli bir eşik değeri (örneğin 300 piksel)
//     var scrolled = false;
//
//     var scrollTimeout;
//
//     window.addEventListener('scroll', function () {
//         clearTimeout(scrollTimeout);
//
//         scrollTimeout = setTimeout(function () {
//             var scrollPosition = window.scrollY || window.pageYOffset;
//
//             if (!scrolled && scrollPosition >= scrollThreshold) {
//                 // Belirli bir eşik değerine ulaşıldığında
//                 cookiePreferencesElement.style.display = 'none';
//                 scrolled = true; // İlk scroll olayında display'ı değiştir ve daha fazla kontrol etme
//             }
//         }, 200); // İki olay arasındaki minimum gecikme süresi
//     });
//
//     // Tüm cihazlarda çalışacak kısım
//     document.getElementById('cookieConsent').style.display = 'none';
//
//     // Sadece mobil cihazlarda çalışacak kısım
//     if (window.matchMedia("(max-width: 767px)").matches) {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     }
// }


function showCookiePreferences() {
    // Tüm cihazlarda
    var cookiePreferencesElement = document.getElementById('cookiePreferences');
    cookiePreferencesElement.style.display = 'block';

    // Scroll işlemi kontrolü
    var scrollThreshold = 954; // Belirli bir eşik değeri (örneğin 300 piksel)
    var scrolled = false;

    var scrollTimeout;

    window.addEventListener('scroll', function () {
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(function () {
            var scrollPosition = window.scrollY || window.pageYOffset;

            if (!scrolled && scrollPosition >= scrollThreshold) {
                // Belirli bir eşik değerine ulaşıldığında sadece mobil cihazlarda
                if (window.matchMedia("(max-width: 767px)").matches) {
                    cookiePreferencesElement.style.display = 'none';
                    scrolled = true; // İlk scroll olayında display'ı değiştir ve daha fazla kontrol etme
                }
            }
        }, 200); // İki olay arasındaki minimum gecikme süresi
    });

    // Tüm cihazlarda çalışacak kısım
    document.getElementById('cookieConsent').style.display = 'none';

    // Sadece mobil cihazlarda çalışacak kısım
    if (window.matchMedia("(max-width: 767px)").matches) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


function saveCookiePreferences() {
    // Burada çerez tercihleri ile ilgili işlemleri gerçekleştirebilirsiniz.
    // Örneğin, kullanıcının tercihlerini bir çerezde saklama gibi.
    document.getElementById('cookiePreferences').style.display = 'none';

}


document.addEventListener('DOMContentLoaded', function () {
    var currentPage = window.location.pathname;

    // Menü bağlantılarını seç
    var menuLinks = document.querySelectorAll('ul.col-6.middle_menu.text-center.d-md-none.d-lg-flex li.middle_menu_item a');
    var submenuLinks = document.querySelectorAll('ul#sub_men.sub_menu a');
    // Her bir bağlantıyı kontrol et
    menuLinks.forEach(function (link) {
        // Bağlantının href özelliğini al
        var linkHref = link.getAttribute('href');

        // Eğer bağlantının href'i, bulunduğumuz sayfanın URL'si ile aynıysa rengini turuncu yap
        if (currentPage.endsWith(linkHref)) {
            link.style.color = '#FFB352';
        }
    });

    submenuLinks.forEach(function (link) {
        // Bağlantının href özelliğini al
        var linkHref = link.getAttribute('href');

        // Eğer bağlantının href'i, bulunduğumuz sayfanın URL'si ile aynıysa rengini turuncu yap
        if (currentPage.endsWith(linkHref)) {
            link.style.color = '#FFF';
        }
    });
});
