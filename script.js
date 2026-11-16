function openApp(url) {
    window.location.href = url;
}

// Kumanda ile kartlara odaklanabilmek için.
document.querySelectorAll(".app").forEach(app => {
    app.tabIndex = 0;
});

function updateClock() {
    const clock = document.getElementById("clock");
    if (!clock) return;

    clock.textContent = new Intl.DateTimeFormat("tr-TR", {
        hour: "2-digit",
        minute: "2-digit"
    }).format(new Date());
}

updateClock();
window.setInterval(updateClock, 60000);
