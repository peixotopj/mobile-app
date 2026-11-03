const APP_VERSION = "1.0.0";


function verificarApp() {
    document.getElementById("status").textContent =
        `Aplicativo versão ${APP_VERSION} validado!`;
}


if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .catch(console.error);
    });
}
