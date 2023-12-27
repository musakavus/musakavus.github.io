document.addEventListener('DOMContentLoaded', function () {
    const cryptoContainer = document.getElementById('cryptoContainer');
    const rowHeight = 32; // Her bir satırın yüksekliği
    const rowCount = 5; // Toplam satır sayısı
    const totalHeight = rowHeight * rowCount;
    let translateYValue = 0;

    function scrollCryptoItems() {
        translateYValue += rowHeight / 2; // Yumuşak bir düşme efekti için bölümü artırabilirsin

        cryptoContainer.style.transition = 'transform 0.1s ease-in-out'; // Hızını buradan ayarlayabilirsin
        cryptoContainer.style.transform = `translateY(-${translateYValue}px)`;

        if (translateYValue >= totalHeight) {
            setTimeout(() => {
                cryptoContainer.style.transition = 'none';
                cryptoContainer.style.transform = 'translateY(0)';
                clearCryptoItems();
                loadCryptoItems();
                setTimeout(() => {
                    cryptoContainer.style.transition = 'transform 0.1s ease-in-out'; // Hızını buradan ayarlayabilirsin
                }, 0);
            }, 10000); // Düşme efektini buradan ayarlayabilirsin
        }
    }

    function clearCryptoItems() {
        cryptoContainer.innerHTML = '';
    }

    function loadCryptoItems() {
        // Yeni verileri yükle

        // Yüklediğiniz kadar devam edebilirsiniz
    }

    function createCryptoItem(src) {
        const cryptoItem = document.createElement('object');
        cryptoItem.data = src;
        cryptoItem.type = 'image/svg+xml';
        cryptoItem.width = '32';
        cryptoItem.height = '32';
        cryptoContainer.appendChild(cryptoItem);
    }

    // İlk yükleme
    loadCryptoItems();

    setInterval(scrollCryptoItems, 5000); // Her 2 saniyede bir kaydır
});
