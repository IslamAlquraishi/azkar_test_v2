window.addEventListener("load", () => {
  get();
});

async function get() {
  if ("serviceWorker" in navigator) {
    await navigator.serviceWorker.register("install/install.js");
  }
}
