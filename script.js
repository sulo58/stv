const appLauncher = window.Capacitor && typeof window.Capacitor.registerPlugin === "function"
    ? window.Capacitor.registerPlugin("AppLauncher")
    : null;

async function openApp(url) {
    if (/youtube\.com/i.test(url) && appLauncher) {
        const youtubePackages = [
            "com.google.android.youtube.tv",
            "com.google.android.youtube"
        ];

        for (const packageName of youtubePackages) {
            try {
                const { value } = await appLauncher.canOpenUrl({ url: packageName });
                if (value) {
                    await appLauncher.openUrl({ url: packageName });
                    return;
                }
            } catch (_) {
                // If the native YouTube app is unavailable, use the in-app web version.
            }
        }
    }

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
