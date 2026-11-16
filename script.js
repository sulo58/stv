
function openApp(url) {
    window.location.href = url;
}

// TV kumandası ile kartlar arasında gezinme
document.querySelectorAll(".app").forEach(app => {
    app.tabIndex = 0;
});
