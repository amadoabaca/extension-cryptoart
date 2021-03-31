document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById('link')
    btn.addEventListener('click', function() {
        chrome.tabs.create({url:'https://opensea.io/'})
    });
});