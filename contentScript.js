window.addEventListener("load", pageLoad, false);

function pageLoad(evt) {
    setTimeout(tryRun, 500);
}

function findElementWithText(selector, text) {
    const elements = document.querySelectorAll(selector);
    for (const element of elements) {
        if (element.innerHTML === text) {
            return element;
        }
    }
    return null;
}

function setupEvents() {
    document.addEventListener('click', function (e) {
        if (e.target.innerText.indexOf('place bid') >= 0) {
            const bidPrice = findElementWithText('div', "bid price");
            const bidPriceContainer = bidPrice.parentNode;
            const bidPriceInput = bidPriceContainer.querySelector('input');
            const bidPriceValue = bidPriceInput.value;
            const floorPrice = findElementWithText('div', "floor price");
            const floorPriceContainer = floorPrice.parentNode;
            const floorPriceValue = floorPriceContainer.childNodes[1].childNodes[0].childNodes[0].innerText;
            if (parseFloat(bidPriceValue) > parseFloat(floorPriceValue) * 1.2) {
                alert('Bid price is more than 20% of the floor price!');
            }
        };
    }
    );
}

function tryRun() {
    if (window.location.href.indexOf('/collection/') >= 0) {
        setupEvents();
    }
}
