const butInstall = document.getElementById("buttonInstall");
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  // PREVENTING THE PROMPT FROM APPEARING ON MOBILES
  //  event.preventDefault();
  // STORING THE EVENT FOR USE LATER
  window.deferredPrompt = event;
  // SHOWING THE INSTALL BUTTON
  butInstall.style.display = "block";
  console.log("beforeinstallprompt event triggered");
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // if (!deferredPrompt) {
  //    return;
  //  }
  // SHOWING THE PROMPT
  console.log("window.deferred prompt", window.deferredPrompt);
  window.deferredPrompt.prompt();
  // WAITING FOR THE USER TO REPLY TO THE PROMPT
  // const { outcome } = await deferredPrompt.userChoice;
  //console.log(`User response: ${outcome}`);
  // CLEARING THE PROMPT VALUE, SINCE IT CAN ONLY BE USED ONCE
  window.deferredPrompt = null;
  // HIDE THE INSTALL BUTTON
  butInstall.style.display = "none";
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("App successfully installed", event);
  // HIDING THE INSTALL BUTTON, SINCE THE APP HAS BEEN INSTALLED
  window.deferredPrompt = null;
  butInstall.style.display = "none";
});
